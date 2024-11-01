"use strict";exports.id=477,exports.ids=[477],exports.modules={4597:(e,t,i)=>{i.d(t,{default:()=>s.a});var n=i(1561),s=i.n(n)},5889:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=i(352),s=i(6870),r=i(7247),o=s._(i(8964)),a=n._(i(6817)),l=n._(i(9901)),d=i(1807),u=i(1098),h=i(8127);i(8963);let c=i(1579),g=n._(i(9857)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,i,n,s,r,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,s=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function f(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,o.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:s,height:a,width:l,decoding:d,className:u,style:h,fetchPriority:c,placeholder:g,loading:p,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:S,sizesInput:E,onLoad:M,onError:z,...C}=e;return(0,r.jsx)("img",{...C,...f(c),loading:p,width:l,height:a,decoding:d,"data-nimg":y?"fill":"1",className:u,style:h,sizes:s,srcSet:n,src:i,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&m(e,g,b,w,x,v,E))},[i,g,b,w,x,z,v,E,t]),onLoad:e=>{m(e.currentTarget,g,b,w,x,v,E)},onError:e=>{S(!0),"empty"!==g&&x(!0),z&&z(e)}})});function y(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...f(i.fetchPriority)};return t&&a.default.preload?(a.default.preload(i.src,n),null):(0,r.jsx)(l.default,{children:(0,r.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...n},"__nimg-"+i.src+i.srcSet+i.sizes)})}let b=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(c.RouterContext),n=(0,o.useContext)(h.ImageConfigContext),s=(0,o.useMemo)(()=>{let e=p||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let f=(0,o.useRef)(l);(0,o.useEffect)(()=>{f.current=l},[l]);let[b,w]=(0,o.useState)(!1),[x,S]=(0,o.useState)(!1),{props:E,meta:M}=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:s,blurComplete:b,showAltText:x});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{...E,unoptimized:M.unoptimized,placeholder:M.placeholder,fill:M.fill,onLoadRef:m,onLoadingCompleteRef:f,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),M.priority?(0,r.jsx)(y,{isAppRouter:!i,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8679:(e,t,i)=>{e.exports=i(4573).vendored.contexts.AmpContext},5142:(e,t,i)=>{e.exports=i(4573).vendored.contexts.HeadManagerContext},8127:(e,t,i)=>{e.exports=i(4573).vendored.contexts.ImageConfigContext},7892:(e,t)=>{function i(e){let{ampFirst:t=!1,hybrid:i=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||i&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return i}})},1807:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(8963);let n=i(8226),s=i(1098);function r(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:u,sizes:h,unoptimized:c=!1,priority:g=!1,loading:p,className:m,quality:f,width:v,height:y,fill:b=!1,style:w,overrideSrc:x,onLoad:S,onLoadingComplete:E,placeholder:M="empty",blurDataURL:z,fetchPriority:C,decoding:_="async",layout:P,objectFit:j,objectPosition:L,lazyBoundary:O,lazyRoot:A,...T}=e,{imgConf:B,showAltText:I,blurComplete:R,defaultLoader:W}=t,Y=B||s.imageConfigDefault;if("allSizes"in Y)a=Y;else{let e=[...Y.deviceSizes,...Y.imageSizes].sort((e,t)=>e-t),t=Y.deviceSizes.sort((e,t)=>e-t);a={...Y,allSizes:e,deviceSizes:t}}if(void 0===W)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let k=T.loader||W;delete T.loader,delete T.srcSet;let X="__next_img_default"in k;if(X){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=k;k=t=>{let{config:i,...n}=t;return e(n)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!h&&(h=t)}let D="",F=o(v),G=o(y);if("object"==typeof(i=u)&&(r(i)||void 0!==i.src)){let e=r(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,z=z||e.blurDataURL,D=e.src,!b){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let H=!g&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:D)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,H=!1),a.unoptimized&&(c=!0),X&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(c=!0),g&&(C="high");let N=o(f),U=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:L}:{},I?{}:{color:"transparent"},w),q=R||"empty"===M?null:"blur"===M?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:G,blurWidth:l,blurHeight:d,blurDataURL:z||"",objectFit:U.objectFit})+'")':'url("'+M+'")',V=q?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(e){let{config:t,src:i,unoptimized:n,width:s,quality:r,sizes:o,loader:a}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:n,allSizes:s}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),u=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,n)=>a({config:t,src:i,quality:r,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:a({config:t,src:i,quality:r,width:l[u]})}}({config:a,src:u,unoptimized:c,width:F,quality:N,sizes:h,loader:k});return{props:{...T,loading:H?"lazy":p,fetchPriority:C,width:F,height:G,decoding:_,className:m,style:{...U,...V},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:c,priority:g,placeholder:M,fill:b}}}},9901:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return m},defaultHead:function(){return h}});let n=i(352),s=i(6870),r=i(7247),o=s._(i(8964)),a=n._(i(8070)),l=i(8679),d=i(5142),u=i(7892);function h(e){void 0===e&&(e=!1);let t=[(0,r.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,r.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}i(8963);let g=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:i}=t;return e.reduce(c,[]).reverse().concat(h(i).reverse()).filter(function(){let e=new Set,t=new Set,i=new Set,n={};return s=>{let r=!0,o=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){o=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?r=!1:t.add(s.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)i.has(t)?r=!1:i.add(t);else{let e=s.props[t],i=n[t]||new Set;("name"!==t||!o)&&i.has(e)?r=!1:(i.add(e),n[t]=i)}}}}return r}}()).reverse().map((e,t)=>{let n=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,i=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(d.HeadManagerContext);return(0,r.jsx)(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(i),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8226:(e,t)=>{function i(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:s,blurDataURL:r,objectFit:o}=e,a=n?40*n:t,l=s?40*s:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},1098:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return n}});let i=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},1561:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let n=i(352),s=i(1807),r=i(5889),o=n._(i(9857));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=r.Image},9857:(e,t)=>{function i(e){let{config:t,src:i,width:n,quality:s}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),i.__next_img_default=!0;let n=i},8070:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=i(8964),s=()=>{},r=()=>{};function o(e){var t;let{headManager:i,reduceComponentsToState:o}=e;function a(){if(i&&i.mountedInstances){let t=n.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(o(t,e))}}return null==i||null==(t=i.mountedInstances)||t.add(e.children),a(),s(()=>{var t;return null==i||null==(t=i.mountedInstances)||t.add(e.children),()=>{var t;null==i||null==(t=i.mountedInstances)||t.delete(e.children)}}),s(()=>(i&&(i._pendingUpdate=a),()=>{i&&(i._pendingUpdate=a)})),r(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}},2549:e=>{var t=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},i=function(){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!(i instanceof Node))throw"Can't initialize VanillaTilt because "+i+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=i,this.settings=this.extendSettings(n),this.reverse=this.settings.reverse?-1:1,this.resetToStart=e.isSettingTrue(this.settings["reset-to-start"]),this.glare=e.isSettingTrue(this.settings.glare),this.glarePrerender=e.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=e.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=e.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),!1===this.resetToStart&&(this.settings.startX=0,this.settings.startY=0)}return e.isSettingTrue=function(e){return""===e||!0===e||1===e},e.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},e.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},e.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},e.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},e.prototype.onDeviceOrientation=function(e){if(null!==e.gamma&&null!==e.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=t/this.width,s=i/this.height,r=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),o=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero);null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:r/n+this.left,clientY:o/s+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},e.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},e.prototype.onMouseMove=function(e){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)},e.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},e.prototype.reset=function(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()},e.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},e.prototype.getValues=function(){var e=void 0,t=void 0;return this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1),{tiltX:(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*e,percentageY:100*t,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},e.prototype.updateElementPosition=function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top},e.prototype.update=function(){var e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:e.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+e.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+e.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null},e.prototype.prepareGlare=function(){if(!this.glarePrerender){var e=document.createElement("div");e.classList.add("js-tilt-glare");var t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())},e.prototype.updateGlareSize=function(){if(this.glare){var e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:e+"px",height:e+"px"})}},e.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},e.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},e.prototype.setTransition=function(){var e=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout(function(){e.element.style.transition="",e.glare&&(e.glareElement.style.transition="")},this.settings.speed)},e.prototype.extendSettings=function(e){var t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var n in t)if(n in e)i[n]=e[n];else if(this.element.hasAttribute("data-tilt-"+n)){var s=this.element.getAttribute("data-tilt-"+n);try{i[n]=JSON.parse(s)}catch(e){i[n]=s}}else i[n]=t[n];return i},e.init=function(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(function(t){"vanillaTilt"in t||(t.vanillaTilt=new e(t,i))})},e}();"undefined"!=typeof document&&(window.VanillaTilt=i,i.init(document.querySelectorAll("[data-tilt]"))),e.exports=i}};