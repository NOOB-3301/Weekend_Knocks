(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{5258:function(e,t,r){Promise.resolve().then(r.bind(r,5756))},5756:function(e,t,r){"use strict";r.r(t);var s=r(7437),a=r(2611),A=r(8185);r(2265);var n=r(9376),l=r(2336);let i=[{name:"Sponsor 1",logoUrl:"https://via.placeholder.com/150"},{name:"Sponsor 2",logoUrl:"https://via.placeholder.com/150"}];t.default=function(){let{eventId:e}=(0,n.useParams)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.default,{}),(0,s.jsx)("div",{style:{backgroundImage:"url(".concat(l.Z.src,")"),backgroundSize:"cover",backgroundPosition:"center",position:"fixed",top:0,left:0,right:0,bottom:0,filter:"blur(8px)",zIndex:-1}}),(0,s.jsxs)("div",{className:"z-10 max-w-2xl mx-auto my-40 p-8 bg-[rgba(0,0,0,0.7)] rounded-lg shadow-lg text-white",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold text-center text-[var(--color-primary)] mb-5",children:"Sample Event"}),(0,s.jsx)("p",{className:"text-xl text-center mb-5 text-[var(--color-text-light)]",children:"This is a sample event description."}),(0,s.jsxs)("p",{className:"text-center mb-5 text-gray-300",children:["Date: ","2023-10-01"]}),(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold text-center mb-4 text-[var(--color-primary)]",children:"Sponsors"}),(0,s.jsx)("ul",{className:"list-none p-0 flex flex-wrap justify-center",children:i.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center m-2 bg-gray-800 p-3 rounded shadow",children:[(0,s.jsx)("img",{src:e.logoUrl,alt:e.name,className:"w-12 h-12 mr-3 rounded-full"}),(0,s.jsx)("span",{className:"text-white",children:e.name})]},t))})]}),(0,s.jsxs)("div",{className:"text-center mt-8",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-[var(--color-primary)]",children:"Past Stream"}),(0,s.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-5 px-5 py-2 bg-[var(--color-primary)] text-white rounded transition-colors duration-300 hover:bg-orange-600",children:"Watch on YouTube"})]})]}),(0,s.jsx)(A.default,{})]})}},8185:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var s=r(7437),a=r(2222),A=r.n(a),n=r(4295),l=r(7996),i=r(9089),o=r(1841),c=r.n(o),d=r(2265);let x=["Thank you","gracias","धन्यवाद","merci","danke","ありがとう","谢谢","Спасибо","شكراً","감사합니다"];function m(){let[e,t]=(0,d.useState)(x[0]);return(0,d.useEffect)(()=>{let r=setInterval(()=>{let r=(x.indexOf(e)+1)%x.length;t(x[r])},1500);return()=>{clearInterval(r)}},[e]),(0,s.jsx)("div",{className:"".concat(c().className," md:pl-36 flex flex-col items-center justify-center text-6xl font-semibold"),children:(0,s.jsxs)("p",{children:["شكراً"===e&&"!"," ",e," ","شكراً"!==e&&"!"]})})}var h=r(5129),u=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("footer",{className:"bg-black ".concat(A().className),children:[(0,s.jsxs)("div",{className:"flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center md:items-start justify-start pt-16 md:pl-24 md:pt-0",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:h.default.src,style:{height:"120px",width:"auto"},alt:"Logo"})}),(0,s.jsx)("p",{className:"text-gray-400 text-center",children:"A way to share stories anonymously."}),(0,s.jsxs)("div",{className:"flex mt-4 space-x-4 items-baseline justify-center md:items-start md:justify-start",children:[(0,s.jsx)("a",{href:"https://www.instagram.com/raw_shots29/",target:"_blank",children:(0,s.jsx)(l.JID,{className:"dark:text-white text-2xl "})}),(0,s.jsx)("a",{href:"",target:"_blank",children:(0,s.jsx)(i.V2E,{className:"dark:text-white text-2xl"})}),(0,s.jsx)("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com",target:"_blank",children:(0,s.jsx)(n.JwT,{className:"dark:text-white text-2xl "})})]}),(0,s.jsx)("a",{href:"/docs/privacy-policy",className:"text-md text-neutral-500 uppercase mt-2 hover:underline hover:underline-offset-4",children:"Privacy Policy"}),(0,s.jsx)("a",{href:"/docs/terms",className:"text-md text-neutral-500 uppercase hover:underline hover:underline-offset-4",children:"TERMS AND CONDITIONS"})]}),(0,s.jsx)(m,{})]}),(0,s.jsx)("div",{className:"pb-8",children:(0,s.jsxs)("p",{className:"text-sm dark:text-neutral-400 text-center",children:["\xa9 ",new Date().getFullYear()," Weekend Knocks | All rights reserved."]})})]})})},2611:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var s=r(7437),a=r(7648),A=r(2265),n=r(1269),l=r(5129);function i(){let[e,t]=(0,A.useState)(!1),[r,i]=(0,A.useState)(!1),[o,c]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{let e=()=>{window.scrollY>50?c(!0):c(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)("nav",{className:"w-full fixed top-0 z-10 transition-all duration-300 ".concat(o?"bg-[#1c1c1c] bg-opacity-30 backdrop-blur-lg border border-white border-opacity-10":"bg-background bg-opacity-90"),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:(0,s.jsxs)("div",{className:"container mx-auto flex items-center justify-between px-8 py-6",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("img",{src:l.default.src,alt:"",className:"h-20 w-auto pr-4 "}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-lg font-bold tracking-wide text-primary-foreground",children:"Weekend Knocks"}),(0,s.jsx)("p",{className:"text-xs font-medium tracking-wider text-muted-foreground",children:"GAMING & ENTERTAINMENT"})]})]}),(0,s.jsx)("ul",{className:"flex space-x-6 text-sm font-semibold text-primary-foreground transition-all duration-1000 ".concat(e&&o?"gap-8":""," ").concat(o&&!e?"gap-6":""," ").concat(!o&&e?"gap-10":""," ").concat(o||e?"":"gap-12"),children:[{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Services",link:"/services"},{name:"Our Work",link:"/ourwork"},{name:"Contact",link:"/contact"},{name:"Events",link:"/events"},{name:"Search",link:"#"}].map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:e.link,children:(0,s.jsx)(n.E.span,{initial:{y:-10},whileHover:{y:5},transition:{type:"spring",stiffness:300},className:"hover:text-primary transition-all duration-300 cursor-pointer",children:e.name})})},t))}),(0,s.jsx)("div",{className:"flex space-x-4",children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.default,{href:"/account",children:(0,s.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"My Account"})}),(0,s.jsx)(a.default,{href:"/logout",children:(0,s.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Logout"})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.default,{href:"/login",children:(0,s.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Login"})}),(0,s.jsx)(a.default,{href:"/signup",children:(0,s.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Signup"})})]})})]})})}},9376:function(e,t,r){"use strict";var s=r(5475);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},2336:function(e,t){"use strict";t.Z={src:"/_next/static/media/login_bg.2ab39d90.jpg",height:640,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABqB2f/8QAFhABAQEAAAAAAAAAAAAAAAAAAQMT/9oACAEBAAEFAsGT/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AcEFv//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABoQAAICAwAAAAAAAAAAAAAAAAEDABESITH/2gAIAQEABj8CGDmi+7n/xAAXEAADAQAAAAAAAAAAAAAAAAAAQWGh/9oACAEBAAE/IUFOsP/aAAwDAQACAAMAAAAQ+//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxAJFZv/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8Q1Fv/xAAYEAADAQEAAAAAAAAAAAAAAAABESEAYf/aAAgBAQABPxACFeiWXV43/9k=",blurWidth:8,blurHeight:4}},5129:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/logo.5103b2b0.png",height:918,width:1136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEWjwcFAQkSNiYogIip/gIIWICyMjI6ZmZumpqigoaKOj5E8PEFkaWxqbnF2eHsABg1FRUW7u7umpqeOjpCvr7GwsLBUVFahlZKtra5wcXJQgu8tAAAAGXRSTlMBNc02+xeC/f39/XpjlLwmC7bT7JBEiNviFAF5PQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwVxUkSgCAMAMEBIklARcH1/x+17EsDTIntLyzr3ODM4qrxYFe14vbQi5vIO6j1indO4QMl2wGrM832CgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[351,699,452,956,694,971,117,744],function(){return e(e.s=5258)}),_N_E=e.O()}]);