(()=>{var e={};e.id=966,e.ids=[966],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},5240:e=>{"use strict";e.exports=require("https")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},7529:()=>{},1295:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(2820),t(4403),t(996);var a=t(170),s=t(5002),n=t(3876),l=t.n(n),i=t(6299),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(r,o);let d=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2820)),"P:\\Praneeth\\Nish ASSIGNMENTS\\Weekend_knocks\\Weekend_Knocks\\app\\signup\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,4403)),"P:\\Praneeth\\Nish ASSIGNMENTS\\Weekend_knocks\\Weekend_Knocks\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["P:\\Praneeth\\Nish ASSIGNMENTS\\Weekend_knocks\\Weekend_Knocks\\app\\signup\\page.tsx"],u="/signup/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9075:(e,r,t)=>{Promise.resolve().then(t.bind(t,6796))},8367:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3642,23)),Promise.resolve().then(t.t.bind(t,7586,23)),Promise.resolve().then(t.t.bind(t,7838,23)),Promise.resolve().then(t.t.bind(t,8057,23)),Promise.resolve().then(t.t.bind(t,7741,23)),Promise.resolve().then(t.t.bind(t,3118,23))},3034:()=>{},6796:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var a=t(7247),s=t(9339);let n={src:"/_next/static/media/banner2.f3361a61.jpg"};var l=t(5379),i=t(863),o=t(8964),d=t(4178);function c(){let[e,r]=(0,o.useState)({firstName:"",lastName:"",phoneNumber:"",email:"",password:"",confirmPassword:""}),[t,c]=(0,o.useState)(""),u=(0,d.useRouter)(),x=t=>{r({...e,[t.target.name]:t.target.value})},m=async r=>{r.preventDefault(),c("");let t={firstname:e.firstName,lastname:e.lastName,phone:e.phoneNumber,email:e.email,password:e.password};try{console.log(e),await i.Z.post("http://localhost:8000/users/",t,{headers:{"Content-Type":"application/json"}}),alert("Signup successful!"),u.push("/login")}catch(e){i.Z.isAxiosError(e)?c(e.response?.data?.detail||"Signup failed."):c("Signup failed.")}};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.default,{}),a.jsx("section",{className:"bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center pt-[10rem] pb-[5rem]",children:(0,a.jsxs)("div",{className:"container mx-auto flex flex-col lg:flex-row items-stretch justify-center shadow-2xl rounded-lg overflow-hidden max-w-5xl bg-white dark:bg-gray-800 h-[600px]",children:[(0,a.jsxs)("div",{className:"w-full lg:w-1/2 h-full bg-cover bg-center relative group flex-shrink-0",style:{backgroundImage:`url(${n.src})`},children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"}),a.jsx("div",{className:"flex items-center justify-center w-full h-full",children:a.jsx("h2",{className:"text-white text-4xl font-semibold hidden lg:block tracking-wide group-hover:scale-105 transition-all duration-300",children:"Join Weekend Knocks!"})})]}),(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-8 lg:p-12 bg-white dark:bg-gray-800 flex flex-col items-center",children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-800 dark:text-white tracking-wide text-center",children:"Create Your Free Account"}),a.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400 text-center",children:"Sign up to access exclusive content and stay updated."}),(0,a.jsxs)("form",{onSubmit:m,className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",children:"First Name"}),a.jsx("input",{type:"text",name:"firstName",value:e.firstName,onChange:x,placeholder:"John",className:"w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",children:"Last Name"}),a.jsx("input",{type:"text",name:"lastName",value:e.lastName,onChange:x,placeholder:"Doe",className:"w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",children:"Phone Number"}),a.jsx("input",{type:"text",name:"phoneNumber",value:e.phoneNumber,onChange:x,placeholder:"XXX-XXX-XXXX",className:"w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",children:"Email"}),a.jsx("input",{type:"email",name:"email",value:e.email,onChange:x,placeholder:"johndoe@example.com",className:"w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",children:"Password"}),a.jsx("input",{type:"password",name:"password",value:e.password,onChange:x,placeholder:"••••••••",className:"w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",children:"Confirm Password"}),a.jsx("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:x,placeholder:"••••••••",className:"w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"})]}),a.jsx("button",{type:"submit",className:"w-full col-span-1 sm:col-span-2 mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none shadow-lg transition duration-300",children:"Sign Up"}),t&&a.jsx("div",{className:"w-full text-center text-red-600 mt-4",children:t})]})]})]})}),a.jsx(l.default,{})]})}},5379:(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var a=t(7247),s=t(5803),n=t.n(s),l=t(8043),i=t(1003),o=t(3803),d=t(5430),c=t.n(d),u=t(8964);function x(){let[e,r]=(0,u.useState)("Thank you");return a.jsx("div",{className:`${c().className} md:pl-36 flex flex-col items-center justify-center text-6xl font-semibold`,children:(0,a.jsxs)("p",{children:["شكراً"===e&&"!"," ",e," ","شكراً"!==e&&"!"]})})}var m=t(9356);let p=()=>a.jsx(a.Fragment,{children:(0,a.jsxs)("footer",{className:`bg-black ${n().className}`,children:[(0,a.jsxs)("div",{className:"flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center md:items-start justify-start pt-16 md:pl-24 md:pt-0",children:[a.jsx("div",{children:a.jsx("img",{src:m.default.src,style:{height:"120px",width:"auto"},alt:"Logo"})}),a.jsx("p",{className:"text-gray-400 text-center",children:"A way to share stories anonymously."}),(0,a.jsxs)("div",{className:"flex mt-4 space-x-4 items-baseline justify-center md:items-start md:justify-start",children:[a.jsx("a",{href:"https://www.instagram.com/raw_shots29/",target:"_blank",children:a.jsx(i.JID,{className:"dark:text-white text-2xl "})}),a.jsx("a",{href:"",target:"_blank",children:a.jsx(o.V2E,{className:"dark:text-white text-2xl"})}),a.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com",target:"_blank",children:a.jsx(l.JwT,{className:"dark:text-white text-2xl "})})]}),a.jsx("a",{href:"/docs/privacy-policy",className:"text-md text-neutral-500 uppercase mt-2 hover:underline hover:underline-offset-4",children:"Privacy Policy"}),a.jsx("a",{href:"/docs/terms",className:"text-md text-neutral-500 uppercase hover:underline hover:underline-offset-4",children:"TERMS AND CONDITIONS"})]}),a.jsx(x,{})]}),a.jsx("div",{className:"pb-8",children:(0,a.jsxs)("p",{className:"text-sm dark:text-neutral-400 text-center",children:["\xa9 ",new Date().getFullYear()," Weekend Knocks | All rights reserved."]})})]})})},9339:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var a=t(7247),s=t(9906),n=t(8964),l=t(1571),i=t(9356);function o(){let[e,r]=(0,n.useState)(!1),[t,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1);return a.jsx("nav",{className:`w-full fixed top-0 z-10 transition-all duration-300 ${d?"bg-[#1c1c1c] bg-opacity-30 backdrop-blur-lg border border-white border-opacity-10":"bg-background bg-opacity-90"}`,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:(0,a.jsxs)("div",{className:"container mx-auto flex items-center justify-between px-8 py-6",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[a.jsx("img",{src:i.default.src,alt:"",className:"h-20 w-auto pr-4 "}),(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"text-lg font-bold tracking-wide text-primary-foreground",children:"Weekend Knocks"}),a.jsx("p",{className:"text-xs font-medium tracking-wider text-muted-foreground",children:"GAMING & ENTERTAINMENT"})]})]}),a.jsx("ul",{className:`flex space-x-6 text-sm font-semibold text-primary-foreground transition-all duration-1000 ${e&&d?"gap-8":""} ${d&&!e?"gap-6":""} ${!d&&e?"gap-10":""} ${d||e?"":"gap-12"}`,children:[{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Services",link:"/services"},{name:"Our Work",link:"/ourwork"},{name:"Contact",link:"/contact"},{name:"Events",link:"/events"},{name:"Search",link:"#"}].map((e,r)=>a.jsx("li",{children:a.jsx(s.default,{href:e.link,children:a.jsx(l.E.span,{initial:{y:-10},whileHover:{y:5},transition:{type:"spring",stiffness:300},className:"hover:text-primary transition-all duration-300 cursor-pointer",children:e.name})})},r))}),a.jsx("div",{className:"flex space-x-4",children:t?(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.default,{href:"/account",children:a.jsx("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"My Account"})}),a.jsx(s.default,{href:"/logout",children:a.jsx("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Logout"})})]}):(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.default,{href:"/login",children:a.jsx("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Login"})}),a.jsx(s.default,{href:"/signup",children:a.jsx("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Signup"})})]})})]})})}},4403:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>o});var a=t(2051),s=t(6694),n=t.n(s),l=t(1512),i=t.n(l);t(7272);let o={title:"Weekend Knocks",description:"Weekend Knocks Web App"};function d({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${n().className} ${i().className} min-h-screen antialiased dark`,children:e})})}},2820:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a=(0,t(5347).createProxy)(String.raw`P:\Praneeth\Nish ASSIGNMENTS\Weekend_knocks\Weekend_Knocks\app\signup\page.tsx#default`)},9356:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a={src:"/_next/static/media/logo.5103b2b0.png",height:918,width:1136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEWjwcFAQkSNiYogIip/gIIWICyMjI6ZmZumpqigoaKOj5E8PEFkaWxqbnF2eHsABg1FRUW7u7umpqeOjpCvr7GwsLBUVFahlZKtra5wcXJQgu8tAAAAGXRSTlMBNc02+xeC/f39/XpjlLwmC7bT7JBEiNviFAF5PQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwVxUkSgCAMAMEBIklARcH1/x+17EsDTIntLyzr3ODM4qrxYFe14vbQi5vIO6j1indO4QMl2wGrM832CgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},7481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(4564);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[379,700,522,27],()=>t(1295));module.exports=a})();