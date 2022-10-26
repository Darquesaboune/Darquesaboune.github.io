(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,i=r(7273).Z,o=n(r(7294)),a=r(1003),s=r(4465),u=r(2692),l=r(8245),c=r(9246),f=r(227),d=r(3468);let v={};function h(e,t,r,n){if(!e||!a.isLocalURL(t))return;Promise.resolve(e.prefetch(t,r,n)).catch(e=>{});let i=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+r+(i?"%"+i:"")]=!0}let p=o.default.forwardRef(function(e,t){let r,n;let{href:p,as:m,children:g,prefetch:y,passHref:b,replace:x,shallow:w,scroll:_,locale:C,onClick:D,onMouseEnter:O,onTouchStart:R,legacyBehavior:T=!0!==Boolean(!0)}=e,E=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,T&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let P=!1!==y,L=o.default.useContext(u.RouterContext),F=o.default.useContext(l.AppRouterContext);F&&(L=F);let{href:S,as:j}=o.default.useMemo(()=>{let[e,t]=a.resolveHref(L,p,!0);return{href:e,as:m?a.resolveHref(L,m):t||e}},[L,p,m]),M=o.default.useRef(S),V=o.default.useRef(j);T&&(n=o.default.Children.only(r));let k=T?n&&"object"==typeof n&&n.ref:t,[B,I,z]=c.useIntersection({rootMargin:"200px"}),A=o.default.useCallback(e=>{(V.current!==j||M.current!==S)&&(z(),V.current=j,M.current=S),B(e),k&&("function"==typeof k?k(e):"object"==typeof k&&(k.current=e))},[j,k,S,z,B]);o.default.useEffect(()=>{let e=I&&P&&a.isLocalURL(S),t=void 0!==C?C:L&&L.locale,r=v[S+"%"+j+(t?"%"+t:"")];e&&!r&&h(L,S,j,{locale:t})},[j,S,I,C,P,L]);let X={ref:A,onClick(e){T||"function"!=typeof D||D(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,s,u,l,c,f){let{nodeName:d}=e.currentTarget,v="A"===d.toUpperCase();if(v&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:s,locale:l,scroll:u}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,L,S,j,x,w,_,C,Boolean(F),P)},onMouseEnter(e){T||"function"!=typeof O||O(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),!(!P&&F)&&a.isLocalURL(S)&&h(L,S,j,{priority:!0})},onTouchStart(e){T||"function"!=typeof R||R(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),!(!P&&F)&&a.isLocalURL(S)&&h(L,S,j,{priority:!0})}};if(!T||b||"a"===n.type&&!("href"in n.props)){let G=void 0!==C?C:L&&L.locale,U=L&&L.isLocaleDomain&&f.getDomainLocale(j,G,L.locales,L.domainLocales);X.href=U||d.addBasePath(s.addLocale(j,G,L&&L.defaultLocale))}return T?o.default.cloneElement(n,X):o.default.createElement("a",Object.assign({},E,X),r)});t.default=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,l=u||!o,[c,f]=n.useState(!1),[d,v]=n.useState(null);n.useEffect(()=>{if(o){if(!l&&!c&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:i},s.push(r),a.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let t=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let n=i.requestIdleCallback(()=>f(!0));return()=>i.cancelIdleCallback(n)}},[d,l,r,t,c]);let h=n.useCallback(()=>{f(!1)},[]);return[v,c,h]};var n=r(7294),i=r(4686);let o="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294));let i=n.default.createContext(null);t.AppRouterContext=i;let o=n.default.createContext(null);t.LayoutRouterContext=o;let a=n.default.createContext(null);t.GlobalLayoutRouterContext=a;let s=n.default.createContext(null);t.TemplateContext=s},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},2732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shaders=t.DEFAULT_VERTEX_SHADER=void 0,t.DEFAULT_VERTEX_SHADER=`
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
    `}},3380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFXContext=void 0;let n=r(7294);t.VFXContext=n.createContext(null)},2452:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=e=>{let t=document.implementation.createHTMLDocument("test"),r=t.createRange();r.selectNodeContents(t.documentElement),r.deleteContents();let n=document.createElement("head");t.documentElement.appendChild(n),t.documentElement.appendChild(r.createContextualFragment(e)),t.documentElement.setAttribute("xmlns",t.documentElement.namespaceURI);let i=new XMLSerializer().serializeToString(t);return i.replace(/<!DOCTYPE html>/,"")};t.default=function(e,t){let n=e.getBoundingClientRect(),i=null!=t?t:document.createElement("canvas");i.width=Math.max(1.01*n.width,n.width+1),i.height=Math.max(1.01*n.height,n.height+1);let o=e.cloneNode(),a=window.getComputedStyle(e);Array.from(a).forEach(e=>{o.style.setProperty(e,a.getPropertyValue(e),a.getPropertyPriority(e))}),o.innerHTML=e.innerHTML;let s=document.createElement("div");s.style.setProperty("text-align",a.textAlign),s.style.setProperty("vertical-align",a.verticalAlign),s.appendChild(o);let u=s.outerHTML,l=r(u),c=`<svg xmlns="http://www.w3.org/2000/svg" width="${i.width}" height="${i.height}"><foreignObject width="100%" height="100%">${l}</foreignObject></svg>`;return new Promise((e,t)=>{let r=new Image;r.onload=()=>{let n=i.getContext("2d");if(null===n)return t();n.drawImage(r,0,0),e(i)},r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`})}},6173:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});let a=o(r(7294)),s=r(7294),u=r(3380);t.default=function(e){let t=t=>{let r=s.useContext(u.VFXContext),n=s.useRef(null),{shader:i,release:o,uniforms:l,overflow:c}=t;return s.useEffect(()=>{let e=n.current;if(null!==e)return null==r||r.addElement(e,{shader:i,release:o,uniforms:l,overflow:c}),()=>{null==r||r.removeElement(e)}},[n,r,i,o,l,c]),s.useEffect(()=>{null!==n.current&&(null==r||r.updateTextElement(n.current))},[r,t.children]),a.createElement(e,Object.assign(Object.assign({},t),{ref:n}))};return t}},7167:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=i(r(794));class a{constructor(e,t,r,n){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=n,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}static create(e,t){return n(this,void 0,void 0,function*(){let r=yield fetch(e).then(e=>e.arrayBuffer()).then(e=>new o.default(e)),n=r.decompressFrames(!0,void 0,void 0),i=r.raw.lsd.width,s=r.raw.lsd.height;return new a(n,i,s,t)})}getCanvas(){return this.canvas}update(){let e=Date.now(),t=e-this.startTime;for(;this.playTime<t;){let r=this.frames[this.index%this.frames.length];this.playTime+=r.delay,this.index++}let n=this.frames[this.index%this.frames.length],i=new ImageData(n.patch,n.dims.width,n.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(i,n.dims.left,n.dims.top)}}t.default=a},7725:function(e){"use strict";function t(e){this.data=e,this.pos=0}t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.peekByte=function(){return this.data[this.pos]},t.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},t.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},t.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},t.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},t.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},e.exports=t},6736:function(e,t,r){"use strict";var n=r(7725);function i(e){this.stream=new n(e),this.output={}}i.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},i.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var n=t[r];this.parsePart(e,n)}},i.prototype.parsePart=function(e,t){var r,n=t.label;if(!t.requires||t.requires(this.stream,this.output,e)){if(t.loop){for(var i=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),i.push(o)}e[n]=i}else t.parts?(r={},this.parseParts(r,t.parts),e[n]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[n]=r)):t.bits&&(e[n]=this.parseBits(t.bits))}},i.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var n in e){var i=e[n];i.length?t[n]=r.slice(i.index,i.index+i.length).reduce(function(e,t){return 2*e+t},0):t[n]=r[i.index]}return t},e.exports=i},738:function(e,t,r){"use strict";let n=r(6736),i=r(9776);function o(e){var t=new Uint8Array(e),r=new n(t);this.raw=r.parse(i),this.raw.hasImages=!1;for(var o=0;o<this.raw.frames.length;o++)if(this.raw.frames[o].image){this.raw.hasImages=!0;break}}o.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var n=r.image.descriptor.width*r.image.descriptor.height,i=function(e,t,r){var n,i,o,a,s,u,l,c,f,d,v,h,p,m,g,y=Array(r),b=Array(4096),x=Array(4096),w=Array(4097);for(f=0,s=(i=1<<e)+1,n=i+2,l=-1,o=(1<<(a=e+1))-1;f<i;f++)b[f]=0,x[f]=f;for(d=0,v=c=h=p=g=m=0;d<r;){if(0===p){if(c<a){v+=t[m]<<c,c+=8,m++;continue}if(f=v&o,v>>=a,c-=a,f>n||f==s)break;if(f==i){o=(1<<(a=e+1))-1,n=i+2,l=-1;continue}if(-1==l){w[p++]=x[f],l=f,h=f;continue}for(u=f,f==n&&(w[p++]=h,f=l);f>i;)w[p++]=x[f],f=b[f];h=255&x[f],w[p++]=h,n<4096&&(b[n]=l,x[n]=h,(++n&o)==0&&n<4096&&(a++,o+=n)),l=u}p--,y[g++]=w[p],d++}for(d=g;d<r;d++)y[d]=0;return y}(r.image.data.minCodeSize,r.image.data.blocks,n);r.image.descriptor.lct.interlaced&&(i=function(e,t){for(var r=Array(e.length),n=e.length/t,i=[0,4,2,1],o=[8,8,4,2],a=0,s=0;s<4;s++)for(var u=i[s];u<n;u+=o[s])(function(n,i){var o=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(o))})(u,a),a++;return r}(i,r.image.descriptor.width));var o={pixels:i,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,o=e.pixels[n],a=e.colorTable[o];r[i]=a[0],r[i+1]=a[1],r[i+2]=a[2],r[i+3]=o!==e.transparentIndex?255:0}return r}(o)),o}return null},o.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var n=[],i=t;i<r;i++)this.raw.frames[i].image&&n.push(this.decompressFrame(i,e));return n},e.exports=o},794:function(e,t,r){"use strict";let n=r(738);e.exports=n},3945:function(e){"use strict";e.exports={readByte:function(){return function(e){return e.readByte()}},readBytes:function(e){return function(t){return t.readBytes(e)}},readString:function(e){return function(t){return t.readString(e)}},readUnsigned:function(e){return function(t){return t.readUnsigned(e)}},readArray:function(e,t){return function(r,n,i){for(var o=t(r,n,i),a=Array(o),s=0;s<o;s++)a[s]=r.readBytes(e);return a}}}},9776:function(e,t,r){"use strict";var n=r(3945),i={label:"blocks",parser:function(e){for(var t=[],r=0,n=e.readByte();0!==n;n=e.readByte())t.push(e.readBytes(n)),r+=n;var i=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)i.set(t[o],r),r+=t[o].length;return i}},o={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:n.readBytes(2),skip:!0},{label:"byteSize",parser:n.readByte()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:n.readUnsigned(!0)},{label:"transparentColorIndex",parser:n.readByte()},{label:"terminator",parser:n.readByte(),skip:!0}]},a={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:n.readByte(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:n.readUnsigned(!0)},{label:"top",parser:n.readUnsigned(!0)},{label:"width",parser:n.readUnsigned(!0)},{label:"height",parser:n.readUnsigned(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:n.readArray(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:n.readByte()},i]}]},s={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:n.readBytes(2),skip:!0},{label:"blockSize",parser:n.readByte()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},i]},u={label:"application",requires:function(e,t,r){var n=e.peekBytes(2);return 33===n[0]&&255===n[1]},parts:[{label:"codes",parser:n.readBytes(2),skip:!0},{label:"blockSize",parser:n.readByte()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},i]},l={label:"comment",requires:function(e,t,r){var n=e.peekBytes(2);return 33===n[0]&&254===n[1]},parts:[{label:"codes",parser:n.readBytes(2),skip:!0},i]},c=[{label:"header",parts:[{label:"signature",parser:n.readString(3)},{label:"version",parser:n.readString(3)}]},{label:"lsd",parts:[{label:"width",parser:n.readUnsigned(!0)},{label:"height",parser:n.readUnsigned(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:n.readByte()},{label:"pixelAspectRatio",parser:n.readByte()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:n.readArray(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[o,u,l,a,s],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];e.exports=c},4342:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXImg=void 0;let a=o(r(7294)),s=r(7294),u=r(3380),l=e=>{let t=s.useContext(u.VFXContext),r=s.useRef(null),{shader:n,release:i,uniforms:o,overflow:l}=e,c=s.useCallback(()=>{if(null!==r.current)return null==t||t.addElement(r.current,{shader:n,release:i,uniforms:o,overflow:l}),()=>{null!==r.current&&(null==t||t.removeElement(r.current))}},[t,n,i,o,l]);return a.createElement("img",Object.assign({ref:r},e,{onLoad:c}))};t.VFXImg=l},4070:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXP=t.VFXDiv=t.VFXSpan=t.VFXVideo=t.VFXImg=t.VFXProvider=void 0;var i=r(5487);Object.defineProperty(t,"VFXProvider",{enumerable:!0,get:function(){return i.VFXProvider}});var o=r(4342);Object.defineProperty(t,"VFXImg",{enumerable:!0,get:function(){return o.VFXImg}});var a=r(3709);Object.defineProperty(t,"VFXVideo",{enumerable:!0,get:function(){return a.VFXVideo}});let s=n(r(6173));t.VFXSpan=s.default("span"),t.VFXDiv=s.default("div"),t.VFXP=s.default("p")},5487:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXProvider=void 0;let s=o(r(7294)),u=r(7294),l=r(3380),c=a(r(5154)),f={position:"fixed",top:0,left:0,width:"100vw",height:"100vh","z-index":9999,"pointer-events":"none"},d=e=>{let[t,r]=u.useState(null);return u.useEffect(()=>{let t=document.createElement("canvas");for(let[n,i]of Object.entries(f))t.style.setProperty(n,i.toString());void 0!==e.zIndex&&t.style.setProperty("z-index",e.zIndex.toString()),document.body.appendChild(t);let o=new c.default(t,e.pixelRatio);return r(o),o.play(),()=>{o.stop(),o.destroy(),t.remove()}},[e.pixelRatio,e.zIndex]),s.createElement(s.Fragment,null,s.createElement(l.VFXContext.Provider,{value:t},e.children))};t.VFXProvider=d},5154:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let u=o(r(2212)),l=s(r(2452)),c=r(2732),f=s(r(7167)),d=new Map;t.default=class{constructor(e,t){this.canvas=e,this.isPlaying=!1,this.pixelRatio=2,this.elements=[],this.textureLoader=new u.TextureLoader,this.w=0,this.h=0,this.scrollX=0,this.scrollY=0,this.mouseX=0,this.mouseY=0,this.resize=()=>a(this,void 0,void 0,function*(){if("undefined"!=typeof window){for(let e of this.elements)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect();(t.width!==e.width||t.height!==e.height)&&(yield this.rerenderTextElement(e),e.width=t.width,e.height=t.height)}for(let r of this.elements)if("text"===r.type&&!r.isInViewport){let n=r.element.getBoundingClientRect();(n.width!==r.width||n.height!==r.height)&&(yield this.rerenderTextElement(r),r.width=n.width,r.height=n.height)}}}),this.scroll=()=>{"undefined"!=typeof window&&(this.scrollX=window.scrollX,this.scrollY=window.scrollY)},this.mousemove=e=>{"undefined"!=typeof window&&(this.mouseX=e.clientX,this.mouseY=window.innerHeight-e.clientY)},this.playLoop=()=>{let e=Date.now()/1e3;for(let t of(this.renderer.clear(),this.updateCanvasSize(),this.elements)){let r=t.element.getBoundingClientRect(),n=this.isRectInViewport(r);if(n&&!t.isInViewport&&(t.enterTime=e,t.leaveTime=1/0),!n&&t.isInViewport&&(t.leaveTime=e),t.isInViewport=n,n&&e-t.leaveTime>t.release)return;for(let[i,o]of(t.uniforms.time.value=e-t.startTime,t.uniforms.enterTime.value=-1===t.enterTime?0:e-t.enterTime,t.uniforms.leaveTime.value=-1===t.leaveTime?0:e-t.leaveTime,t.uniforms.resolution.value.x=r.width*this.pixelRatio,t.uniforms.resolution.value.y=r.height*this.pixelRatio,t.uniforms.offset.value.x=r.left*this.pixelRatio,t.uniforms.offset.value.y=(window.innerHeight-r.top-r.height)*this.pixelRatio,t.uniforms.mouse.value.x=this.mouseX*this.pixelRatio,t.uniforms.mouse.value.y=this.mouseY*this.pixelRatio,Object.entries(t.uniformGenerators)))t.uniforms[i].value=o();let a=d.get(t.element);void 0!==a&&a.update(),("video"===t.type||t.isGif)&&(t.uniforms.src.value.needsUpdate=!0),t.overflow?this.renderer.setViewport(0,0,window.innerWidth,window.innerHeight):this.renderer.setViewport(r.left,window.innerHeight-(r.top+r.height),r.width,r.height),this.camera.lookAt(t.scene.position);try{this.renderer.render(t.scene,this.camera)}catch(s){console.error(s)}}this.isPlaying&&requestAnimationFrame(this.playLoop)},this.renderer=new u.WebGLRenderer({canvas:e,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearAlpha(0),"undefined"!=typeof window&&(this.pixelRatio=t||window.devicePixelRatio,window.addEventListener("resize",this.resize),window.addEventListener("scroll",this.scroll,{passive:!0}),window.addEventListener("mousemove",this.mousemove)),this.resize(),this.scroll(),this.camera=new u.OrthographicCamera(-1,1,1,-1,.1,10),this.camera.position.set(0,0,1)}destroy(){"undefined"!=typeof window&&(window.removeEventListener("resize",this.resize),window.removeEventListener("scroll",this.scroll),window.removeEventListener("mousemove",this.mousemove))}updateCanvasSize(){if("undefined"!=typeof window){let e=window.innerWidth,t=window.innerHeight;(e!==this.w||t!==this.h)&&(this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.pixelRatio),this.w=e,this.h=t)}}rerenderTextElement(e){return a(this,void 0,void 0,function*(){try{e.element.style.setProperty("opacity","1");let t=e.uniforms.src.value,r=t.image;if(yield l.default(e.element,r),0===r.width||0===r.width)throw"omg";e.element.style.setProperty("opacity","0"),t.needsUpdate=!0}catch(n){console.error(n)}})}addElement(e,t={}){var r,n;return a(this,void 0,void 0,function*(){let i,o;let a=t.shader||"uvGradient",s=c.shaders[a]||a,v=e.getBoundingClientRect(),h=this.isRectInViewport(v),p=!1;if(e instanceof HTMLImageElement){if(o="img",p=!!e.src.match(/\.gif/i)){let m=yield f.default.create(e.src,this.pixelRatio);d.set(e,m),i=new u.Texture(m.getCanvas())}else i=this.textureLoader.load(e.src)}else if(e instanceof HTMLVideoElement)i=new u.VideoTexture(e),o="video";else{let g=yield l.default(e);i=new u.CanvasTexture(g),o="text"}i.minFilter=u.LinearFilter,i.magFilter=u.LinearFilter,i.format=u.RGBAFormat,i.needsUpdate=!0;let y="video"===o?"0.0001":"0";e.style.setProperty("opacity",y);let b={src:{value:i},resolution:{value:new u.Vector2},offset:{value:new u.Vector2},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},mouse:{value:new u.Vector2}},x={};if(void 0!==t.uniforms){let w=Object.keys(t.uniforms);for(let _ of w){let C=t.uniforms[_];"function"==typeof C?(b[_]={value:C()},x[_]=C):b[_]={value:C}}}let D=new u.Scene,O=new u.PlaneGeometry(2,2),R=new u.ShaderMaterial({vertexShader:c.DEFAULT_VERTEX_SHADER,fragmentShader:s,transparent:!0,uniforms:b});R.extensions={derivatives:!0,drawBuffers:!0,fragDepth:!0,shaderTextureLOD:!0},D.add(new u.Mesh(O,R));let T=Date.now()/1e3,E={type:o,element:e,isInViewport:h,width:v.width,height:v.height,scene:D,uniforms:b,uniformGenerators:x,startTime:T,enterTime:h?T:-1,leaveTime:1/0,release:null!==(r=t.release)&&void 0!==r?r:0,isGif:p,overflow:null!==(n=t.overflow)&&void 0!==n&&n};this.elements.push(E)})}removeElement(e){let t=this.elements.findIndex(t=>t.element===e);-1!==t&&this.elements.splice(t,1)}updateTextElement(e){let t=this.elements.findIndex(t=>t.element===e);return -1!==t?this.rerenderTextElement(this.elements[t]):Promise.resolve()}play(){this.isPlaying=!0,this.playLoop()}stop(){this.isPlaying=!1}isRectInViewport(e){return e.left<=this.w&&e.right>=0&&e.top<=this.h&&e.bottom>=0}}},3709:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VFXVideo=void 0;let a=o(r(7294)),s=r(7294),u=r(3380),l=e=>{let t=s.useContext(u.VFXContext),r=s.useRef(null),{shader:n,release:i,uniforms:o,overflow:l}=e,c=s.useCallback(()=>{if(null!==r.current)return null==t||t.addElement(r.current,{shader:n,release:i,uniforms:o,overflow:l}),()=>{null!==r.current&&(null==t||t.removeElement(r.current))}},[t,n,i,o,l]);return a.createElement("video",Object.assign({ref:r},e,{onLoadedData:c}))};t.VFXVideo=l},8100:function(e,t,r){"use strict";r.d(t,{ZP:function(){return $}});var n=r(7294);/*! *****************************************************************************
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
***************************************************************************** */ function i(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})}function o(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var a=function(){},s=a(),u=Object,l=function(e){return e===s},c=function(e){return"function"==typeof e},f=function(e,t){return u.assign({},e,t)},d="undefined",v=function(){return typeof window!=d},h=new WeakMap,p=0,m=function(e){var t,r,n=typeof e,i=e&&e.constructor,o=i==Date;if(u(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=h.get(e))return t;if(t=++p+"~",h.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=m(e[r])+",";h.set(e,t)}if(i==u){t="#";for(var a=u.keys(e).sort();!l(r=a.pop());)l(e[r])||(t+=r+":"+m(e[r])+",");h.set(e,t)}}return t},g=!0,y=function(){return g},b=v(),x=typeof document!=d,w=b&&window.addEventListener?window.addEventListener.bind(window):a,_=x?document.addEventListener.bind(document):a,C=b&&window.removeEventListener?window.removeEventListener.bind(window):a,D=x?document.removeEventListener.bind(document):a,O=function(){var e=x&&document.visibilityState;return l(e)||"hidden"!==e},R={initFocus:function(e){return _("visibilitychange",e),w("focus",e),function(){D("visibilitychange",e),C("focus",e)}},initReconnect:function(e){var t=function(){g=!0,e()},r=function(){g=!1};return w("online",t),w("offline",r),function(){C("online",t),C("offline",r)}}},T=!v()||"Deno"in window,E=T?n.useEffect:n.useLayoutEffect,P="undefined"!=typeof navigator&&navigator.connection,L=!T&&P&&(["slow-2g","2g"].includes(P.effectiveType)||P.saveData),F=function(e){if(c(e))try{e=e()}catch(t){e=""}var r=[].concat(e),n=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"")?"$swr$"+e:"";return[e,r,n]},S=new WeakMap,j=function(e,t,r,n,i,o,a){void 0===a&&(a=!0);var s=S.get(e),u=s[0],l=s[1],c=s[3],f=u[t],d=l[t];if(a&&d)for(var v=0;v<d.length;++v)d[v](r,n,i);return o&&(delete c[t],f&&f[0])?f[0](2).then(function(){return e.get(t)}):e.get(t)},M=0,V=function(){return++M},k=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(void 0,void 0,void 0,function(){var t,r,n,i,a,u,d,v,h,p,m,g,y,b,x,w,_,C,D,O;return o(this,function(o){switch(o.label){case 0:if(t=e[0],r=e[1],n=e[2],u=!!l((a="boolean"==typeof(i=e[3])?{revalidate:i}:i||{}).populateCache)||a.populateCache,d=!1!==a.revalidate,v=!1!==a.rollbackOnError,h=a.optimisticData,m=(p=F(r))[0],g=p[2],!m)return[2];if(y=S.get(t)[2],e.length<3)return[2,j(t,m,t.get(m),s,s,d,!0)];if(b=n,w=V(),y[m]=[w,0],_=!l(h),C=t.get(m),_&&(D=c(h)?h(C):h,t.set(m,D),j(t,m,D)),c(b))try{b=b(t.get(m))}catch(R){x=R}if(!(b&&c(b.then)))return[3,2];return[4,b.catch(function(e){x=e})];case 1:if(b=o.sent(),w!==y[m][0]){if(x)throw x;return[2,b]}x&&_&&v&&(u=!0,b=C,t.set(m,C)),o.label=2;case 2:return u&&(x||(c(u)&&(b=u(b,C)),t.set(m,b)),t.set(g,f(t.get(g),{error:x}))),y[m][1]=V(),[4,j(t,m,b,x,s,d,!!u)];case 3:if(O=o.sent(),x)throw x;return[2,u?O:b]}})})},B=function(e,t){for(var r in e)e[r][0]&&e[r][0](t)},I=function(e,t){if(!S.has(e)){var r=f(R,t),n={},i=k.bind(s,e),o=a;if(S.set(e,[n,{},{},{},i]),!T){var u=r.initFocus(setTimeout.bind(s,B.bind(s,n,0))),l=r.initReconnect(setTimeout.bind(s,B.bind(s,n,1)));o=function(){u&&u(),l&&l(),S.delete(e)}}return[e,i,o]}return[e,S.get(e)[4]]},z=function(e,t,r,n,i){var o=r.errorRetryCount,a=i.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;(l(o)||!(a>o))&&setTimeout(n,s,i)},A=I(new Map),X=A[0],G=f({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:z,onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:function(e,t){return m(e)==m(t)},isPaused:function(){return!1},cache:X,mutate:A[1],fallback:{}},{isOnline:y,isVisible:O}),U=function(e,t){var r=f(e,t);if(t){var n=e.use,i=e.fallback,o=t.use,a=t.fallback;n&&o&&(r.use=n.concat(o)),i&&a&&(r.fallback=f(i,a))}return r},q=(0,n.createContext)({}),H=function(e){var t=e.value,r=U((0,n.useContext)(q),t),i=t&&t.provider,o=(0,n.useState)(function(){return i?I(i(r.cache||X),t):s})[0];return o&&(r.cache=o[0],r.mutate=o[1]),E(function(){return o?o[2]:s},[]),(0,n.createElement)(q.Provider,f(e,{value:r}))},K=function(e,t){var r=(0,n.useState)({})[1],i=(0,n.useRef)(e),o=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,n.useCallback)(function(e){var n=!1,a=i.current;for(var s in e){var u=s;a[u]!==e[u]&&(a[u]=e[u],o.current[u]&&(n=!0))}n&&!t.current&&r({})},[]);return E(function(){i.current=e}),[i,o.current,a]},N=function(e,t,r){var n=t[e]||(t[e]=[]);return n.push(r),function(){var e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},Y={dedupe:!0},W=function(e,t,r){var a=r.cache,u=r.compare,h=r.fallbackData,p=r.suspense,m=r.revalidateOnMount,g=r.refreshInterval,y=r.refreshWhenHidden,b=r.refreshWhenOffline,x=S.get(a),w=x[0],_=x[1],C=x[2],D=x[3],O=F(e),R=O[0],P=O[1],L=O[2],M=(0,n.useRef)(!1),B=(0,n.useRef)(!1),I=(0,n.useRef)(R),z=(0,n.useRef)(t),A=(0,n.useRef)(r),X=function(){return A.current},G=function(){return X().isVisible()&&X().isOnline()},U=function(e){return a.set(L,f(a.get(L),e))},q=a.get(R),H=l(h)?r.fallback[R]:h,W=l(q)?H:q,$=a.get(L)||{},Z=$.error,J=!M.current,Q=function(){return J&&!l(m)?m:!X().isPaused()&&(p?!l(W)&&r.revalidateIfStale:l(W)||r.revalidateIfStale)},ee=!!R&&!!t&&(!!$.isValidating||J&&Q()),et=K({data:W,error:Z,isValidating:ee},B),er=et[0],en=et[1],ei=et[2],eo=(0,n.useCallback)(function(e){return i(void 0,void 0,void 0,function(){var t,n,i,f,d,v,h,p,m,g,y,b,x;return o(this,function(o){switch(o.label){case 0:if(t=z.current,!R||!t||B.current||X().isPaused())return[2,!1];f=!0,d=e||{},v=!D[R]||!d.dedupe,h=function(){return!B.current&&R===I.current&&M.current},p=function(){var e=D[R];e&&e[1]===i&&delete D[R]},m={isValidating:!1},g=function(){U({isValidating:!1}),h()&&ei(m)},U({isValidating:!0}),ei({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(j(a,R,er.current.data,er.current.error,!0),r.loadingTimeout&&!a.get(R)&&setTimeout(function(){f&&h()&&X().onLoadingSlow(R,r)},r.loadingTimeout),D[R]=[t.apply(void 0,P),V()]),n=(x=D[R])[0],i=x[1],[4,n];case 2:if(n=o.sent(),v&&setTimeout(p,r.dedupingInterval),!D[R]||D[R][1]!==i)return v&&h()&&X().onDiscarded(R),[2,!1];if(U({error:s}),m.error=s,!l(y=C[R])&&(i<=y[0]||i<=y[1]||0===y[1]))return g(),v&&h()&&X().onDiscarded(R),[2,!1];return u(er.current.data,n)?m.data=er.current.data:m.data=n,u(a.get(R),n)||a.set(R,n),v&&h()&&X().onSuccess(n,R,r),[3,4];case 3:return b=o.sent(),p(),!X().isPaused()&&(U({error:b}),m.error=b,v&&h()&&(X().onError(b,R,r),("boolean"==typeof r.shouldRetryOnError&&r.shouldRetryOnError||c(r.shouldRetryOnError)&&r.shouldRetryOnError(b))&&G()&&X().onErrorRetry(b,R,r,eo,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,g(),h()&&v&&j(a,R,m.data,m.error,!1),[2,!0]}})})},[R]),ea=(0,n.useCallback)(k.bind(s,a,function(){return I.current}),[]);if(E(function(){z.current=t,A.current=r}),E(function(){if(R){var e=R!==I.current,t=eo.bind(s,Y),r=0,n=function(e){if(0==e){var n=Date.now();X().revalidateOnFocus&&n>r&&G()&&(r=n+X().focusThrottleInterval,t())}else if(1==e)X().revalidateOnReconnect&&G()&&t();else if(2==e)return eo()},i=N(R,_,function(e,t,r){ei(f({error:t,isValidating:r},u(er.current.data,e)?s:{data:e}))}),o=N(R,w,n);return B.current=!1,I.current=R,M.current=!0,e&&ei({data:W,error:Z,isValidating:ee}),Q()&&(l(W)||T?t():v()&&typeof window.requestAnimationFrame!=d?window.requestAnimationFrame(t):setTimeout(t,1)),function(){B.current=!0,i(),o()}}},[R,eo]),E(function(){var e;function t(){var t=c(g)?g(W):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!er.current.error&&(y||X().isVisible())&&(b||X().isOnline())?eo(Y).then(t):t()}return t(),function(){e&&(clearTimeout(e),e=-1)}},[g,y,b,eo]),(0,n.useDebugValue)(W),p&&l(W)&&R)throw z.current=t,A.current=r,B.current=!1,l(Z)?eo(Y):Z;return{mutate:ea,get data(){return en.data=!0,W},get error(){return en.error=!0,Z},get isValidating(){return en.isValidating=!0,ee}}};u.defineProperty(H,"default",{value:G});var $=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=f(G,(0,n.useContext)(q)),i=c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],o=i[0],a=i[1],s=U(r,i[2]),u=W,l=s.use;if(l)for(var d=l.length;d-- >0;)u=l[d](u);return u(o,a||s.fetcher,s)}}}]);