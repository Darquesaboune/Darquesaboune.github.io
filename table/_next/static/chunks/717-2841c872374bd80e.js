(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{9008:function(e,t,r){e.exports=r(3121)},2732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shaders=t.DEFAULT_VERTEX_SHADER=void 0,t.DEFAULT_VERTEX_SHADER=`
precision mediump float;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,t.shaders={uvGradient:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        gl_FragColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = texture2D(src, uv);
        gl_FragColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hueShift(vec3 rgb, float t) {
        vec3 hsv = rgb2hsv(rgb);
        hsv.x = fract(hsv.x + t);
        return hsv2rgb(hsv);
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uv2 = uv;
        uv2.x *= resolution.x / resolution.y;

        float x = (uv2.x - uv2.y) - fract(time);

        vec4 img = texture2D(src, uv);
        float gray = length(img.rgb);

        img.rgb = vec3(hueShift(vec3(1,0,0), x) * gray);

        gl_FragColor = img;
    }
    `,glitch:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );

        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;

        return n;
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = texture2D(src, uv);

        float t = mod(time, 3.14 * 10.);

        // Seed value
        float v = fract(sin(t * 2.) * 700.);

        if (abs(nn(uv.y, t)) < 1.2) {
            v *= 0.01;
        }

        // Prepare for chromatic Abbreveation
        vec2 focus = vec2(0.5);
        float d = v * 0.6;
        vec2 ruv = focus + (uv - focus) * (1. - d);
        vec2 guv = focus + (uv - focus) * (1. - 2. * d);
        vec2 buv = focus + (uv - focus) * (1. - 3. * d);

        // Random Glitch
        if (v > 0.1) {
            // Randomize y
            float y = floor(uv.y * 13. * sin(35. * t)) + 1.;
            if (sin(36. * y * v) > 0.9) {
                ruv.x = uv.x + sin(76. * y) * 0.1;
                guv.x = uv.x + sin(34. * y) * 0.1;
                buv.x = uv.x + sin(59. * y) * 0.1;
            }

            // RGB Shift
            v = pow(v * 1.5, 2.) * 0.15;
            color.rgb *= 0.3;
            color.r += texture2D(src, vec2(uv.x + sin(t * 123.45) * v, uv.y)).r;
            color.g += texture2D(src, vec2(uv.x + sin(t * 157.67) * v, uv.y)).g;
            color.b += texture2D(src, vec2(uv.x + sin(t * 143.67) * v, uv.y)).b;
        }

        // Compose Chromatic Abbreveation
        if (abs(nn(uv.y, t)) > 1.1) {
            color.r = color.r * 0.5 + color.r * texture2D(src, ruv).r;
            color.g = color.g * 0.5 + color.g * texture2D(src, guv).g;
            color.b = color.b * 0.5 + color.b * texture2D(src, buv).b;
            color *= 2.;
        }

        gl_FragColor = color;
        gl_FragColor.a = step(.1, length(color.rgb));
    }
    `,pixelate:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        gl_FragColor = texture2D(src, uv);
    }
    `,rgbGlitch:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    float random(vec2 st) {
        return fract(sin(dot(st, vec2(948.,824.))) * 30284.);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float tt = mod(time, 17.);

        if (fract(tt * 0.73) > .8 || fract(tt * 0.91) > .8) {
            float t = floor(tt * 11.);

            float n = random(vec2(t, floor(uv.y * 17.7)));
            if (n > .7) {
                uvr.x += random(vec2(t, 1.)) * .1 - 0.05;
                uvg.x += random(vec2(t, 2.)) * .1 - 0.05;
                uvb.x += random(vec2(t, 3.)) * .1 - 0.05;
            }

            float ny = random(vec2(t * 17. + floor(uv * 19.7)));
            if (ny > .7) {
                uvr.x += random(vec2(t, 4.)) * .1 - 0.05;
                uvg.x += random(vec2(t, 5.)) * .1 - 0.05;
                uvb.x += random(vec2(t, 6.)) * .1 - 0.05;
            }
        }

        vec4 cr = texture2D(src, uvr);
        vec4 cg = texture2D(src, uvg);
        vec4 cb = texture2D(src, uvb);

        gl_FragColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            step(.1, cr.a + cg.a + cb.a)
        );
    }
    `,rgbShift:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );

        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;

        return n;
    }

    float step2(float t, vec2 uv) {
        return step(t, uv.x) * step(t, uv.y);
    }

    float inside(vec2 uv) {
        return step2(0., uv) * step2(0., 1. - uv);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float t = mod(time, 30.);

        float amp = 10. / resolution.x;

        if (abs(nn(uv.y, t)) > 1.) {
            uvr.x += nn(uv.y, t) * amp;
            uvg.x += nn(uv.y, t + 10.) * amp;
            uvb.x += nn(uv.y, t + 20.) * amp;
        }

        vec4 cr = texture2D(src, uvr) * inside(uvr);
        vec4 cg = texture2D(src, uvg) * inside(uvg);
        vec4 cb = texture2D(src, uvb) * inside(uvb);

        gl_FragColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            step(.1, cr.a + cg.a + cb.a)
        );
    }
    `,halftone:`
    // Halftone Effect by zoidberg
    // https://www.interactiveshaderformat.com/sketches/234

    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    // TODO: uniform
    #define gridSize 10.0
    #define dotSize 0.7
    #define smoothing 0.15
    #define speed 1.0

    #define IMG_PIXEL(x, y) texture2D(x, (y - offset) / resolution);

    vec4 gridRot = vec4(15.0, 45.0, 75.0, 0.0);

    // during calculation we find the closest dot to a frag, determine its size, and then determine the size of the four dots above/below/right/left of it. this array of offsets move "one left", "one up", "one right", and "one down"...
    vec2 originOffsets[4];

    void main() {
        vec2 fragCoord = gl_FragCoord.xy - offset;

        // a halftone is an overlapping series of grids of dots
        // each grid of dots is rotated by a different amount
        // the size of the dots determines the colors. the shape of the dot should never change (always be a dot with regular edges)
        originOffsets[0] = vec2(-1.0, 0.0);
        originOffsets[1] = vec2(0.0, 1.0);
        originOffsets[2] = vec2(1.0, 0.0);
        originOffsets[3] = vec2(0.0, -1.0);

        vec3 rgbAmounts = vec3(0.0);

        // for each of the channels (i) of RGB...
        for (float i=0.0; i<3.0; ++i) {
            // figure out the rotation of the grid in radians
            float rotRad = radians(gridRot[int(i)]);

            // the grids are rotated counter-clockwise- to find the nearest dot, take the fragment pixel loc,
            // rotate it clockwise, and split by the grid to find the center of the dot. then rotate this
            // coord counter-clockwise to yield the location of the center of the dot in pixel coords local to the render space
            mat2 ccTrans = mat2(vec2(cos(rotRad), sin(rotRad)), vec2(-1.0*sin(rotRad), cos(rotRad)));
            mat2 cTrans = mat2(vec2(cos(rotRad), -1.0*sin(rotRad)), vec2(sin(rotRad), cos(rotRad)));

            // find the location of the frag in the grid (prior to rotating it)
            vec2 gridFragLoc = cTrans * fragCoord.xy;

            // find the center of the dot closest to the frag- there's no "round" in GLSL 1.2, so do a "floor" to find the dot to the bottom-left of the frag, then figure out if the frag would be in the top and right halves of that square to find the closest dot to the frag
            vec2 gridOriginLoc = vec2(floor(gridFragLoc.x/gridSize), floor(gridFragLoc.y/gridSize));

            vec2 tmpGridCoords = gridFragLoc/vec2(gridSize);
            bool fragAtTopOfGrid = ((tmpGridCoords.y-floor(tmpGridCoords.y)) > (gridSize/2.0)) ? true : false;
            bool fragAtRightOfGrid = ((tmpGridCoords.x-floor(tmpGridCoords.x)) > (gridSize/2.0)) ? true : false;
            if (fragAtTopOfGrid)
                gridOriginLoc.y = gridOriginLoc.y + 1.0;
            if (fragAtRightOfGrid)
                gridOriginLoc.x = gridOriginLoc.x + 1.0;

            // ...at this point, "gridOriginLoc" contains the grid coords of the nearest dot to the fragment being rendered
            // convert the location of the center of the dot from grid coords to pixel coords
            vec2 gridDotLoc = vec2(gridOriginLoc.x*gridSize, gridOriginLoc.y*gridSize) + vec2(gridSize/2.0);

            // rotate the pixel coords of the center of the dot so they become relative to the rendering space
            vec2 renderDotLoc = ccTrans * gridDotLoc;

            // get the color of the pixel of the input image under this dot (the color will ultimately determine the size of the dot)
            vec4 renderDotImageColorRGB = IMG_PIXEL(src, renderDotLoc + offset);

            // the amount of this channel is taken from the same channel of the color of the pixel of the input image under this halftone dot
            float imageChannelAmount = renderDotImageColorRGB[int(i)];

            // the size of the dot is determined by the value of the channel
            float dotRadius = imageChannelAmount * (gridSize * dotSize);
            float fragDistanceToDotCenter = distance(fragCoord.xy, renderDotLoc);
            if (fragDistanceToDotCenter < dotRadius) {
                rgbAmounts[int(i)] += smoothstep(dotRadius, dotRadius-(dotRadius*smoothing), fragDistanceToDotCenter);
            }

            // calcluate the size of the dots abov/below/to the left/right to see if they're overlapping
            for (float j=0.0; j<4.0; ++j) {
                gridDotLoc = vec2((gridOriginLoc.x+originOffsets[int(j)].x)*gridSize, (gridOriginLoc.y+originOffsets[int(j)].y)*gridSize) + vec2(gridSize/2.0);

                renderDotLoc = ccTrans * gridDotLoc;
                renderDotImageColorRGB = IMG_PIXEL(src, renderDotLoc + offset);

                imageChannelAmount = renderDotImageColorRGB[int(i)];
                dotRadius = imageChannelAmount * (gridSize*1.50/2.0);
                fragDistanceToDotCenter = distance(fragCoord.xy, renderDotLoc);
                if (fragDistanceToDotCenter < dotRadius) {
                    rgbAmounts[int(i)] += smoothstep(dotRadius, dotRadius-(dotRadius*smoothing), fragDistanceToDotCenter);
                }
            }
        }

        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 original = texture2D(src, uv);
        float alpha = step(.1, rgbAmounts[0] + rgbAmounts[1] + rgbAmounts[2] + original.a);

        gl_FragColor = vec4(rgbAmounts[0], rgbAmounts[1], rgbAmounts[2], alpha);
    }
    `,sinewave:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    float inside(in vec2 uv) {
        return step(0., uv.x) * step(uv.x, 1.) * step(0., uv.y) * step(uv.y, 1.);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        vec2 uvr = uv, uvg = uv, uvb = uv;

        float amp = 20. / resolution.x;

        uvr.x += sin(uv.y * 7. + time * 3.) * amp;
        uvg.x += sin(uv.y * 7. + time * 3. + .4) * amp;
        uvb.x += sin(uv.y * 7. + time * 3. + .8) * amp;

        vec4 cr = texture2D(src, uvr) * inside(uvr);
        vec4 cg = texture2D(src, uvg) * inside(uvg);
        vec4 cb = texture2D(src, uvb) * inside(uvb);

        gl_FragColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            cr.a + cg.a + cb.a
        );
    }
    `,shine:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        vec2 p = uv * 2. - 1.;
        float a = atan(p.y, p.x);

        vec4 col = texture2D(src, uv);
        float gray = length(col.rgb);

        float level = 1. + sin(a * 10. + time * 3.) * 0.2;

        gl_FragColor = vec4(1, 1, .5, col.a) * level;
    }
    `,blink:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        gl_FragColor = texture2D(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;

        if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) { discard; }

        gl_FragColor = texture2D(src, uv);
    }
    `,warpTransition:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float enterTime;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        if (enterTime < 1.5) {
            float t = enterTime / 1.5;
            uv.x += sin(floor(uv.y * 300.)) * 3. * exp(t * -10.);
        }

        gl_FragColor = texture2D(src, uv);
    }
    `,slitScanTransition:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float enterTime;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        if (enterTime < 1.5) {
            float t = 1. - enterTime / 1.5;
            uv.y = uv.y > t ? uv.y : t;
        }

        gl_FragColor = texture2D(src, uv);
    }
    `,pixelateTransition:`
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float enterTime;
    uniform sampler2D src;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        if (enterTime < 1.5) {
            float t = enterTime / 1.5;

            float b = floor(t * 64.);
            uv = (floor(uv * b) + .5) / b;
        }

        gl_FragColor = texture2D(src, uv);
    }
    `}},3380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFXContext=void 0;let i=r(7294);t.VFXContext=i.createContext(null)},2452:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=e=>{let t=document.implementation.createHTMLDocument("test"),r=t.createRange();r.selectNodeContents(t.documentElement),r.deleteContents();let i=document.createElement("head");t.documentElement.appendChild(i),t.documentElement.appendChild(r.createContextualFragment(e)),t.documentElement.setAttribute("xmlns",t.documentElement.namespaceURI);let n=new XMLSerializer().serializeToString(t);return n.replace(/<!DOCTYPE html>/,"")};t.default=function(e,t){let i=e.getBoundingClientRect(),n=null!=t?t:document.createElement("canvas");n.width=Math.max(1.01*i.width,i.width+1),n.height=Math.max(1.01*i.height,i.height+1);let o=e.cloneNode(),a=window.getComputedStyle(e);Array.from(a).forEach(e=>{o.style.setProperty(e,a.getPropertyValue(e),a.getPropertyPriority(e))}),o.innerHTML=e.innerHTML;let s=document.createElement("div");s.style.setProperty("text-align",a.textAlign),s.style.setProperty("vertical-align",a.verticalAlign),s.appendChild(o);let u=s.outerHTML,l=r(u),c=`<svg xmlns="http://www.w3.org/2000/svg" width="${n.width}" height="${n.height}"><foreignObject width="100%" height="100%">${l}</foreignObject></svg>`;return new Promise((e,t)=>{let r=new Image;r.onload=()=>{let i=n.getContext("2d");if(null===i)return t();i.drawImage(r,0,0),e(n)},r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`})}},6173:function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});let a=o(r(7294)),s=r(7294),u=r(3380);t.default=function(e){let t=t=>{let r=s.useContext(u.VFXContext),i=s.useRef(null),{shader:n,release:o,uniforms:l,overflow:c}=t;return s.useEffect(()=>{let e=i.current;if(null!==e)return null==r||r.addElement(e,{shader:n,release:o,uniforms:l,overflow:c}),()=>{null==r||r.removeElement(e)}},[i,r,n,o,l,c]),s.useEffect(()=>{null!==i.current&&(null==r||r.updateTextElement(i.current))},[r,t.children]),a.createElement(e,Object.assign(Object.assign({},t),{ref:i}))};return t}},7167:function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{u(i.next(e))}catch(t){o(t)}}function s(e){try{u(i.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((i=i.apply(e,t||[])).next())})},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=n(r(794));class a{constructor(e,t,r,i){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}static create(e,t){return i(this,void 0,void 0,function*(){let r=yield fetch(e).then(e=>e.arrayBuffer()).then(e=>new o.default(e)),i=r.decompressFrames(!0,void 0,void 0),n=r.raw.lsd.width,s=r.raw.lsd.height;return new a(i,n,s,t)})}getCanvas(){return this.canvas}update(){let e=Date.now(),t=e-this.startTime;for(;this.playTime<t;){let r=this.frames[this.index%this.frames.length];this.playTime+=r.delay,this.index++}let i=this.frames[this.index%this.frames.length],n=new ImageData(i.patch,i.dims.width,i.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(n,i.dims.left,i.dims.top)}}t.default=a},7725:function(e){"use strict";function t(e){this.data=e,this.pos=0}t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.peekByte=function(){return this.data[this.pos]},t.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},t.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},t.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},t.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},t.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},e.exports=t},6736:function(e,t,r){"use strict";var i=r(7725);function n(e){this.stream=new i(e),this.output={}}n.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},n.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},n.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e)){if(t.loop){for(var n=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),n.push(o)}e[i]=n}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))}},n.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var n=e[i];n.length?t[i]=r.slice(n.index,n.index+n.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[n.index]}return t},e.exports=n},738:function(e,t,r){"use strict";let i=r(6736),n=r(9776);function o(e){var t=new Uint8Array(e),r=new i(t);this.raw=r.parse(n),this.raw.hasImages=!1;for(var o=0;o<this.raw.frames.length;o++)if(this.raw.frames[o].image){this.raw.hasImages=!0;break}}o.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,n=function(e,t,r){var i,n,o,a,s,u,l,c,f,d,v,h,m,p,g,y=Array(r),b=Array(4096),x=Array(4096),w=Array(4097);for(f=0,s=(n=1<<e)+1,i=n+2,l=-1,o=(1<<(a=e+1))-1;f<n;f++)b[f]=0,x[f]=f;for(d=0,v=c=h=m=g=p=0;d<r;){if(0===m){if(c<a){v+=t[p]<<c,c+=8,p++;continue}if(f=v&o,v>>=a,c-=a,f>i||f==s)break;if(f==n){o=(1<<(a=e+1))-1,i=n+2,l=-1;continue}if(-1==l){w[m++]=x[f],l=f,h=f;continue}for(u=f,f==i&&(w[m++]=h,f=l);f>n;)w[m++]=x[f],f=b[f];h=255&x[f],w[m++]=h,i<4096&&(b[i]=l,x[i]=h,(++i&o)==0&&i<4096&&(a++,o+=i)),l=u}m--,y[g++]=w[m],d++}for(d=g;d<r;d++)y[d]=0;return y}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(n=function(e,t){for(var r=Array(e.length),i=e.length/t,n=[0,4,2,1],o=[8,8,4,2],a=0,s=0;s<4;s++)for(var u=n[s];u<i;u+=o[s])(function(i,n){var o=e.slice(n*t,(n+1)*t);r.splice.apply(r,[i*t,t].concat(o))})(u,a),a++;return r}(n,r.image.descriptor.width));var o={pixels:n,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var n=4*i,o=e.pixels[i],a=e.colorTable[o];r[n]=a[0],r[n+1]=a[1],r[n+2]=a[2],r[n+3]=o!==e.transparentIndex?255:0}return r}(o)),o}return null},o.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],n=t;n<r;n++)this.raw.frames[n].image&&i.push(this.decompressFrame(n,e));return i},e.exports=o},794:function(e,t,r){"use strict";let i=r(738);e.exports=i},3945:function(e){"use strict";e.exports={readByte:function(){return function(e){return e.readByte()}},readBytes:function(e){return function(t){return t.readBytes(e)}},readString:function(e){return function(t){return t.readString(e)}},readUnsigned:function(e){return function(t){return t.readUnsigned(e)}},readArray:function(e,t){return function(r,i,n){for(var o=t(r,i,n),a=Array(o),s=0;s<o;s++)a[s]=r.readBytes(e);return a}}}},9776:function(e,t,r){"use strict";var i=r(3945),n={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var n=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)n.set(t[o],r),r+=t[o].length;return n}},o={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:i.readBytes(2),skip:!0},{label:"byteSize",parser:i.readByte()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:i.readUnsigned(!0)},{label:"transparentColorIndex",parser:i.readByte()},{label:"terminator",parser:i.readByte(),skip:!0}]},a={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:i.readByte(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:i.readUnsigned(!0)},{label:"top",parser:i.readUnsigned(!0)},{label:"width",parser:i.readUnsigned(!0)},{label:"height",parser:i.readUnsigned(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:i.readArray(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:i.readByte()},n]}]},s={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:i.readBytes(2),skip:!0},{label:"blockSize",parser:i.readByte()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},n]},u={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:i.readBytes(2),skip:!0},{label:"blockSize",parser:i.readByte()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},n]},l={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:i.readBytes(2),skip:!0},n]},c=[{label:"header",parts:[{label:"signature",parser:i.readString(3)},{label:"version",parser:i.readString(3)}]},{label:"lsd",parts:[{label:"width",parser:i.readUnsigned(!0)},{label:"height",parser:i.readUnsigned(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:i.readByte()},{label:"pixelAspectRatio",parser:i.readByte()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:i.readArray(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[o,u,l,a,s],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];e.exports=c},4342:function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXImg=void 0;let a=o(r(7294)),s=r(7294),u=r(3380),l=e=>{let t=s.useContext(u.VFXContext),r=s.useRef(null),{shader:i,release:n,uniforms:o,overflow:l}=e,c=s.useCallback(()=>{if(null!==r.current)return null==t||t.addElement(r.current,{shader:i,release:n,uniforms:o,overflow:l}),()=>{null!==r.current&&(null==t||t.removeElement(r.current))}},[t,i,n,o,l]);return a.createElement("img",Object.assign({ref:r},e,{onLoad:c}))};t.VFXImg=l},4070:function(e,t,r){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXP=t.VFXDiv=t.VFXSpan=t.VFXVideo=t.VFXImg=t.VFXProvider=void 0;var n=r(5487);Object.defineProperty(t,"VFXProvider",{enumerable:!0,get:function(){return n.VFXProvider}});var o=r(4342);Object.defineProperty(t,"VFXImg",{enumerable:!0,get:function(){return o.VFXImg}});var a=r(3709);Object.defineProperty(t,"VFXVideo",{enumerable:!0,get:function(){return a.VFXVideo}});let s=i(r(6173));t.VFXSpan=s.default("span"),t.VFXDiv=s.default("div"),t.VFXP=s.default("p")},5487:function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXProvider=void 0;let s=o(r(7294)),u=r(7294),l=r(3380),c=a(r(5154)),f={position:"fixed",top:0,left:0,width:"100vw",height:"100vh","z-index":9999,"pointer-events":"none"},d=e=>{let[t,r]=u.useState(null);return u.useEffect(()=>{let t=document.createElement("canvas");for(let[i,n]of Object.entries(f))t.style.setProperty(i,n.toString());void 0!==e.zIndex&&t.style.setProperty("z-index",e.zIndex.toString()),document.body.appendChild(t);let o=new c.default(t,e.pixelRatio);return r(o),o.play(),()=>{o.stop(),o.destroy(),t.remove()}},[e.pixelRatio,e.zIndex]),s.createElement(s.Fragment,null,s.createElement(l.VFXContext.Provider,{value:t},e.children))};t.VFXProvider=d},5154:function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},a=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{u(i.next(e))}catch(t){o(t)}}function s(e){try{u(i.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((i=i.apply(e,t||[])).next())})},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let u=o(r(2212)),l=s(r(2452)),c=r(2732),f=s(r(7167)),d=new Map;t.default=class{constructor(e,t){this.canvas=e,this.isPlaying=!1,this.pixelRatio=2,this.elements=[],this.textureLoader=new u.TextureLoader,this.w=0,this.h=0,this.scrollX=0,this.scrollY=0,this.mouseX=0,this.mouseY=0,this.resize=()=>a(this,void 0,void 0,function*(){if("undefined"!=typeof window){for(let e of this.elements)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect();(t.width!==e.width||t.height!==e.height)&&(yield this.rerenderTextElement(e),e.width=t.width,e.height=t.height)}for(let r of this.elements)if("text"===r.type&&!r.isInViewport){let i=r.element.getBoundingClientRect();(i.width!==r.width||i.height!==r.height)&&(yield this.rerenderTextElement(r),r.width=i.width,r.height=i.height)}}}),this.scroll=()=>{"undefined"!=typeof window&&(this.scrollX=window.scrollX,this.scrollY=window.scrollY)},this.mousemove=e=>{"undefined"!=typeof window&&(this.mouseX=e.clientX,this.mouseY=window.innerHeight-e.clientY)},this.playLoop=()=>{let e=Date.now()/1e3;for(let t of(this.renderer.clear(),this.updateCanvasSize(),this.elements)){let r=t.element.getBoundingClientRect(),i=this.isRectInViewport(r);if(i&&!t.isInViewport&&(t.enterTime=e,t.leaveTime=1/0),!i&&t.isInViewport&&(t.leaveTime=e),t.isInViewport=i,i&&e-t.leaveTime>t.release)return;for(let[n,o]of(t.uniforms.time.value=e-t.startTime,t.uniforms.enterTime.value=-1===t.enterTime?0:e-t.enterTime,t.uniforms.leaveTime.value=-1===t.leaveTime?0:e-t.leaveTime,t.uniforms.resolution.value.x=r.width*this.pixelRatio,t.uniforms.resolution.value.y=r.height*this.pixelRatio,t.uniforms.offset.value.x=r.left*this.pixelRatio,t.uniforms.offset.value.y=(window.innerHeight-r.top-r.height)*this.pixelRatio,t.uniforms.mouse.value.x=this.mouseX*this.pixelRatio,t.uniforms.mouse.value.y=this.mouseY*this.pixelRatio,Object.entries(t.uniformGenerators)))t.uniforms[n].value=o();let a=d.get(t.element);void 0!==a&&a.update(),("video"===t.type||t.isGif)&&(t.uniforms.src.value.needsUpdate=!0),t.overflow?this.renderer.setViewport(0,0,window.innerWidth,window.innerHeight):this.renderer.setViewport(r.left,window.innerHeight-(r.top+r.height),r.width,r.height),this.camera.lookAt(t.scene.position);try{this.renderer.render(t.scene,this.camera)}catch(s){console.error(s)}}this.isPlaying&&requestAnimationFrame(this.playLoop)},this.renderer=new u.WebGLRenderer({canvas:e,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearAlpha(0),"undefined"!=typeof window&&(this.pixelRatio=t||window.devicePixelRatio,window.addEventListener("resize",this.resize),window.addEventListener("scroll",this.scroll,{passive:!0}),window.addEventListener("mousemove",this.mousemove)),this.resize(),this.scroll(),this.camera=new u.OrthographicCamera(-1,1,1,-1,.1,10),this.camera.position.set(0,0,1)}destroy(){"undefined"!=typeof window&&(window.removeEventListener("resize",this.resize),window.removeEventListener("scroll",this.scroll),window.removeEventListener("mousemove",this.mousemove))}updateCanvasSize(){if("undefined"!=typeof window){let e=window.innerWidth,t=window.innerHeight;(e!==this.w||t!==this.h)&&(this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.pixelRatio),this.w=e,this.h=t)}}rerenderTextElement(e){return a(this,void 0,void 0,function*(){try{e.element.style.setProperty("opacity","1");let t=e.uniforms.src.value,r=t.image;if(yield l.default(e.element,r),0===r.width||0===r.width)throw"omg";e.element.style.setProperty("opacity","0"),t.needsUpdate=!0}catch(i){console.error(i)}})}addElement(e,t={}){var r,i;return a(this,void 0,void 0,function*(){let n,o;let a=t.shader||"uvGradient",s=c.shaders[a]||a,v=e.getBoundingClientRect(),h=this.isRectInViewport(v),m=!1;if(e instanceof HTMLImageElement){if(o="img",m=!!e.src.match(/\.gif/i)){let p=yield f.default.create(e.src,this.pixelRatio);d.set(e,p),n=new u.Texture(p.getCanvas())}else n=this.textureLoader.load(e.src)}else if(e instanceof HTMLVideoElement)n=new u.VideoTexture(e),o="video";else{let g=yield l.default(e);n=new u.CanvasTexture(g),o="text"}n.minFilter=u.LinearFilter,n.magFilter=u.LinearFilter,n.format=u.RGBAFormat,n.needsUpdate=!0;let y="video"===o?"0.0001":"0";e.style.setProperty("opacity",y);let b={src:{value:n},resolution:{value:new u.Vector2},offset:{value:new u.Vector2},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},mouse:{value:new u.Vector2}},x={};if(void 0!==t.uniforms){let w=Object.keys(t.uniforms);for(let _ of w){let C=t.uniforms[_];"function"==typeof C?(b[_]={value:C()},x[_]=C):b[_]={value:C}}}let D=new u.Scene,O=new u.PlaneGeometry(2,2),R=new u.ShaderMaterial({vertexShader:c.DEFAULT_VERTEX_SHADER,fragmentShader:s,transparent:!0,uniforms:b});R.extensions={derivatives:!0,drawBuffers:!0,fragDepth:!0,shaderTextureLOD:!0},D.add(new u.Mesh(O,R));let T=Date.now()/1e3,F={type:o,element:e,isInViewport:h,width:v.width,height:v.height,scene:D,uniforms:b,uniformGenerators:x,startTime:T,enterTime:h?T:-1,leaveTime:1/0,release:null!==(r=t.release)&&void 0!==r?r:0,isGif:m,overflow:null!==(i=t.overflow)&&void 0!==i&&i};this.elements.push(F)})}removeElement(e){let t=this.elements.findIndex(t=>t.element===e);-1!==t&&this.elements.splice(t,1)}updateTextElement(e){let t=this.elements.findIndex(t=>t.element===e);return -1!==t?this.rerenderTextElement(this.elements[t]):Promise.resolve()}play(){this.isPlaying=!0,this.playLoop()}stop(){this.isPlaying=!1}isRectInViewport(e){return e.left<=this.w&&e.right>=0&&e.top<=this.h&&e.bottom>=0}}},3709:function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXVideo=void 0;let a=o(r(7294)),s=r(7294),u=r(3380),l=e=>{let t=s.useContext(u.VFXContext),r=s.useRef(null),{shader:i,release:n,uniforms:o,overflow:l}=e,c=s.useCallback(()=>{if(null!==r.current)return null==t||t.addElement(r.current,{shader:i,release:n,uniforms:o,overflow:l}),()=>{null!==r.current&&(null==t||t.removeElement(r.current))}},[t,i,n,o,l]);return a.createElement("video",Object.assign({ref:r},e,{onLoadedData:c}))};t.VFXVideo=l},8100:function(e,t,r){"use strict";r.d(t,{ZP:function(){return $}});var i=r(7294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function n(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{u(i.next(e))}catch(t){o(t)}}function s(e){try{u(i.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((i=i.apply(e,t||[])).next())})}function o(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var a=function(){},s=a(),u=Object,l=function(e){return e===s},c=function(e){return"function"==typeof e},f=function(e,t){return u.assign({},e,t)},d="undefined",v=function(){return typeof window!=d},h=new WeakMap,m=0,p=function(e){var t,r,i=typeof e,n=e&&e.constructor,o=n==Date;if(u(e)!==e||o||n==RegExp)t=o?e.toJSON():"symbol"==i?e.toString():"string"==i?JSON.stringify(e):""+e;else{if(t=h.get(e))return t;if(t=++m+"~",h.set(e,t),n==Array){for(r=0,t="@";r<e.length;r++)t+=p(e[r])+",";h.set(e,t)}if(n==u){t="#";for(var a=u.keys(e).sort();!l(r=a.pop());)l(e[r])||(t+=r+":"+p(e[r])+",");h.set(e,t)}}return t},g=!0,y=function(){return g},b=v(),x=typeof document!=d,w=b&&window.addEventListener?window.addEventListener.bind(window):a,_=x?document.addEventListener.bind(document):a,C=b&&window.removeEventListener?window.removeEventListener.bind(window):a,D=x?document.removeEventListener.bind(document):a,O=function(){var e=x&&document.visibilityState;return l(e)||"hidden"!==e},R={initFocus:function(e){return _("visibilitychange",e),w("focus",e),function(){D("visibilitychange",e),C("focus",e)}},initReconnect:function(e){var t=function(){g=!0,e()},r=function(){g=!1};return w("online",t),w("offline",r),function(){C("online",t),C("offline",r)}}},T=!v()||"Deno"in window,F=T?i.useEffect:i.useLayoutEffect,E="undefined"!=typeof navigator&&navigator.connection,P=!T&&E&&(["slow-2g","2g"].includes(E.effectiveType)||E.saveData),S=function(e){if(c(e))try{e=e()}catch(t){e=""}var r=[].concat(e),i=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"")?"$swr$"+e:"";return[e,r,i]},V=new WeakMap,L=function(e,t,r,i,n,o,a){void 0===a&&(a=!0);var s=V.get(e),u=s[0],l=s[1],c=s[3],f=u[t],d=l[t];if(a&&d)for(var v=0;v<d.length;++v)d[v](r,i,n);return o&&(delete c[t],f&&f[0])?f[0](2).then(function(){return e.get(t)}):e.get(t)},B=0,k=function(){return++B},z=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(void 0,void 0,void 0,function(){var t,r,i,n,a,u,d,v,h,m,p,g,y,b,x,w,_,C,D,O;return o(this,function(o){switch(o.label){case 0:if(t=e[0],r=e[1],i=e[2],u=!!l((a="boolean"==typeof(n=e[3])?{revalidate:n}:n||{}).populateCache)||a.populateCache,d=!1!==a.revalidate,v=!1!==a.rollbackOnError,h=a.optimisticData,p=(m=S(r))[0],g=m[2],!p)return[2];if(y=V.get(t)[2],e.length<3)return[2,L(t,p,t.get(p),s,s,d,!0)];if(b=i,w=k(),y[p]=[w,0],_=!l(h),C=t.get(p),_&&(D=c(h)?h(C):h,t.set(p,D),L(t,p,D)),c(b))try{b=b(t.get(p))}catch(R){x=R}if(!(b&&c(b.then)))return[3,2];return[4,b.catch(function(e){x=e})];case 1:if(b=o.sent(),w!==y[p][0]){if(x)throw x;return[2,b]}x&&_&&v&&(u=!0,b=C,t.set(p,C)),o.label=2;case 2:return u&&(x||(c(u)&&(b=u(b,C)),t.set(p,b)),t.set(g,f(t.get(g),{error:x}))),y[p][1]=k(),[4,L(t,p,b,x,s,d,!!u)];case 3:if(O=o.sent(),x)throw x;return[2,u?O:b]}})})},j=function(e,t){for(var r in e)e[r][0]&&e[r][0](t)},A=function(e,t){if(!V.has(e)){var r=f(R,t),i={},n=z.bind(s,e),o=a;if(V.set(e,[i,{},{},{},n]),!T){var u=r.initFocus(setTimeout.bind(s,j.bind(s,i,0))),l=r.initReconnect(setTimeout.bind(s,j.bind(s,i,1)));o=function(){u&&u(),l&&l(),V.delete(e)}}return[e,n,o]}return[e,V.get(e)[4]]},I=function(e,t,r,i,n){var o=r.errorRetryCount,a=n.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;(l(o)||!(a>o))&&setTimeout(i,s,n)},M=A(new Map),X=M[0],G=f({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:I,onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:P?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:P?5e3:3e3,compare:function(e,t){return p(e)==p(t)},isPaused:function(){return!1},cache:X,mutate:M[1],fallback:{}},{isOnline:y,isVisible:O}),q=function(e,t){var r=f(e,t);if(t){var i=e.use,n=e.fallback,o=t.use,a=t.fallback;i&&o&&(r.use=i.concat(o)),n&&a&&(r.fallback=f(n,a))}return r},U=(0,i.createContext)({}),H=function(e){var t=e.value,r=q((0,i.useContext)(U),t),n=t&&t.provider,o=(0,i.useState)(function(){return n?A(n(r.cache||X),t):s})[0];return o&&(r.cache=o[0],r.mutate=o[1]),F(function(){return o?o[2]:s},[]),(0,i.createElement)(U.Provider,f(e,{value:r}))},K=function(e,t){var r=(0,i.useState)({})[1],n=(0,i.useRef)(e),o=(0,i.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,i.useCallback)(function(e){var i=!1,a=n.current;for(var s in e){var u=s;a[u]!==e[u]&&(a[u]=e[u],o.current[u]&&(i=!0))}i&&!t.current&&r({})},[]);return F(function(){n.current=e}),[n,o.current,a]},Y=function(e,t,r){var i=t[e]||(t[e]=[]);return i.push(r),function(){var e=i.indexOf(r);e>=0&&(i[e]=i[i.length-1],i.pop())}},W={dedupe:!0},N=function(e,t,r){var a=r.cache,u=r.compare,h=r.fallbackData,m=r.suspense,p=r.revalidateOnMount,g=r.refreshInterval,y=r.refreshWhenHidden,b=r.refreshWhenOffline,x=V.get(a),w=x[0],_=x[1],C=x[2],D=x[3],O=S(e),R=O[0],E=O[1],P=O[2],B=(0,i.useRef)(!1),j=(0,i.useRef)(!1),A=(0,i.useRef)(R),I=(0,i.useRef)(t),M=(0,i.useRef)(r),X=function(){return M.current},G=function(){return X().isVisible()&&X().isOnline()},q=function(e){return a.set(P,f(a.get(P),e))},U=a.get(R),H=l(h)?r.fallback[R]:h,N=l(U)?H:U,$=a.get(P)||{},J=$.error,Z=!B.current,Q=function(){return Z&&!l(p)?p:!X().isPaused()&&(m?!l(N)&&r.revalidateIfStale:l(N)||r.revalidateIfStale)},ee=!!R&&!!t&&(!!$.isValidating||Z&&Q()),et=K({data:N,error:J,isValidating:ee},j),er=et[0],ei=et[1],en=et[2],eo=(0,i.useCallback)(function(e){return n(void 0,void 0,void 0,function(){var t,i,n,f,d,v,h,m,p,g,y,b,x;return o(this,function(o){switch(o.label){case 0:if(t=I.current,!R||!t||j.current||X().isPaused())return[2,!1];f=!0,d=e||{},v=!D[R]||!d.dedupe,h=function(){return!j.current&&R===A.current&&B.current},m=function(){var e=D[R];e&&e[1]===n&&delete D[R]},p={isValidating:!1},g=function(){q({isValidating:!1}),h()&&en(p)},q({isValidating:!0}),en({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(L(a,R,er.current.data,er.current.error,!0),r.loadingTimeout&&!a.get(R)&&setTimeout(function(){f&&h()&&X().onLoadingSlow(R,r)},r.loadingTimeout),D[R]=[t.apply(void 0,E),k()]),i=(x=D[R])[0],n=x[1],[4,i];case 2:if(i=o.sent(),v&&setTimeout(m,r.dedupingInterval),!D[R]||D[R][1]!==n)return v&&h()&&X().onDiscarded(R),[2,!1];if(q({error:s}),p.error=s,!l(y=C[R])&&(n<=y[0]||n<=y[1]||0===y[1]))return g(),v&&h()&&X().onDiscarded(R),[2,!1];return u(er.current.data,i)?p.data=er.current.data:p.data=i,u(a.get(R),i)||a.set(R,i),v&&h()&&X().onSuccess(i,R,r),[3,4];case 3:return b=o.sent(),m(),!X().isPaused()&&(q({error:b}),p.error=b,v&&h()&&(X().onError(b,R,r),("boolean"==typeof r.shouldRetryOnError&&r.shouldRetryOnError||c(r.shouldRetryOnError)&&r.shouldRetryOnError(b))&&G()&&X().onErrorRetry(b,R,r,eo,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,g(),h()&&v&&L(a,R,p.data,p.error,!1),[2,!0]}})})},[R]),ea=(0,i.useCallback)(z.bind(s,a,function(){return A.current}),[]);if(F(function(){I.current=t,M.current=r}),F(function(){if(R){var e=R!==A.current,t=eo.bind(s,W),r=0,i=function(e){if(0==e){var i=Date.now();X().revalidateOnFocus&&i>r&&G()&&(r=i+X().focusThrottleInterval,t())}else if(1==e)X().revalidateOnReconnect&&G()&&t();else if(2==e)return eo()},n=Y(R,_,function(e,t,r){en(f({error:t,isValidating:r},u(er.current.data,e)?s:{data:e}))}),o=Y(R,w,i);return j.current=!1,A.current=R,B.current=!0,e&&en({data:N,error:J,isValidating:ee}),Q()&&(l(N)||T?t():v()&&typeof window.requestAnimationFrame!=d?window.requestAnimationFrame(t):setTimeout(t,1)),function(){j.current=!0,n(),o()}}},[R,eo]),F(function(){var e;function t(){var t=c(g)?g(N):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!er.current.error&&(y||X().isVisible())&&(b||X().isOnline())?eo(W).then(t):t()}return t(),function(){e&&(clearTimeout(e),e=-1)}},[g,y,b,eo]),(0,i.useDebugValue)(N),m&&l(N)&&R)throw I.current=t,M.current=r,j.current=!1,l(J)?eo(W):J;return{mutate:ea,get data(){return ei.data=!0,N},get error(){return ei.error=!0,J},get isValidating(){return ei.isValidating=!0,ee}}};u.defineProperty(H,"default",{value:G});var $=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=f(G,(0,i.useContext)(U)),n=c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],o=n[0],a=n[1],s=q(r,n[2]),u=N,l=s.use;if(l)for(var d=l.length;d-- >0;)u=l[d](u);return u(o,a||s.fetcher,s)}}}]);