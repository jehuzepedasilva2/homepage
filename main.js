(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>S});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(744),t.b),l=new URL(t(358),t.b),p=new URL(t(725),t.b),f=new URL(t(397),t.b),m=new URL(t(886),t.b),u=new URL(t(908),t.b),g=new URL(t(533),t.b),h=a()(r()),b=s()(d),v=s()(l),w=s()(p),x=s()(f),y=s()(m),k=s()(u),L=s()(g);h.push([n.id,`@font-face {\n  font-family: 'header-font';\n  src: url(${b}) format('woff2'),\n       url(${v}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n\n}\n\n@font-face {\n  font-family: 'text-font';\n  src: url(${w}) format('woff2'),\n       url(${x}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n\n}\n\n@font-face {\n  font-family: 'terminal';\n  src: url(${y}) format('woff2'),\n       url(${k}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  font-family: 'text-font';\n}\n\n.header {\n  font-family: 'header-font';\n  font-weight: lighter;\n}\n\nhtml {\n  overflow-x: hidden;\n  /* stop the scrolling on x axis on safari browser */\n  overscroll-behavior-x: none;\n}\n\n/* stop the scrolling on x axis on mobile ios devices */\n@supports (-webkit-touch-callout: none) {\n  html, body {\n    overflow-x: hidden;\n  }\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  padding-top: 0.5rem;\n  gap: 3rem;\n  position: relative;\n  color: var(--text-color);\n  background-color: var(--body-bg-color);\n}\n\n.bg-triangle::after {\n  content: "";\n  border-top: 70vh solid var(--bg-triangle-clr);\n  border-right: 150vw solid transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\nheader {\n  flex: 1;\n  display: flex;\n}\n\n.pic-container {\n  flex: 1;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-image: url(${L});\n  background-size: cover;\n  background-position: 50% 20%;\n  box-shadow: 1px 1px 10px 2px var(--box-shadow-clr);\n  z-index: 0;\n}\n\n.my-name {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  position: absolute;\n  bottom: -0.8%;\n  left: 1%;\n \n}\n\n.arrow {\n  font-family: 'terminal';\n  font-size: x-large;\n  font-weight: bold;\n}\n\n.my-name > h1 {\n  font-family: 'terminal';\n  font-size: x-large;\n  font-weight: bold;\n  overflow: hidden;\n  border-right: 0.8rem solid white;\n  white-space: nowrap;\n  letter-spacing: .2rem;\n  animation: \n    type-effect 3s steps(60, end) 1.3s backwards, \n    flicker .75s step-end infinite;\n}\n\n.inner-border {\n  width: 91%;\n  height: 91%;\n  border: 1px solid var(--text-color);\n  position: relative;\n}\n\n.about-me {\n  flex: 2;\n  justify-self: flex-start;\n  align-self: center;\n  background-color: var(--sections-bg-clr);\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  box-shadow: 1px 1px 5px var(--box-shadow-clr);\n}\n\n.outer-border {\n  border: 1px solid var(--text-color);\n  border-left: none;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  background-color: var(--sections-bg-clr);\n}\n\n.outer-border > h2, \n.outer-border > p {\n  margin-bottom: 1rem;\n}\n\n.icons-header {\n  display: flex;\n  gap: 1rem;\n  align-self: flex-end;\n  position: relative;\n}\n\nmain {\n  flex: 1;\n}\n\nfooter {\n  flex: 1;\n  background-color: var(--bg-footer-clr);\n  margin-left: -3rem;\n  margin-right: -3rem;\n  margin-bottom: -3rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  padding-bottom: 3rem;\n  padding-top: 3rem;\n  display: flex;\n  gap: 7rem;\n}\n\n\n.contact-info p {\n  padding: 1rem;\n  padding-left: 0;\n}\n\n.icons svg {\n  height: 24px;\n  width: 24px;\n}\n\nbutton {\n  appearance: none;\n  background: none;\n  border: none;\n  transition: transform 0.3s ease-in-out;\n}\n\n.icons-footer {\n  display: flex;\n  gap: 1rem;\n  padding-top: 0.7rem;\n}\n\n.email, .phone {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.location {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.email svg, \n.phone svg, \n.mode svg, \n.location svg {\n  height: 24px;\n  width: 24px;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\nbutton:active {\n  opacity: 0.5;\n}\n\n.works-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  padding-top: 0.5rem;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 1px 1px 5px gray;\n  width: calc((100vw - 6rem - 2 * 1.5rem) / 3);\n  transition: transform 0.3s ease-in-out;\n  background-color: var(--sections-bg-clr);\n  padding: 0.2rem;\n}\n\n.card:hover {\n  transform: scale(1.03);\n}\n\n.card-bottom {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.bottom-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-icons svg {\n  height: 20px;\n  width: 20px;\n}\n\n.card-top {\n  height: 250px;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.icons-footer {\n  position: relative;\n}\n\n.drop-down {\n  display: none;\n  width: max-content;\n  position: absolute;\n  top: 90%;\n  background-color: var(--drop-down-bg-clr);\n  border-radius: 5px;\n  padding: 0.2rem;\n}\n\n.drop-down.vis {\n  display: flex;\n  flex-direction: column;\n  transform-origin: top;\n  animation: slide-down 1s;\n}\n\n.phone {\n  padding-bottom: 0.7rem;\n}\n\n.drop-down a {\n  text-decoration: none;\n  color: var(--drop-down-text-clr);\n  transition: transform 0.3s ease-in-out;\n}\n\n.phone a, \n.email a {\n  text-decoration: none;\n  color: var(--drop-down-text-clr)\n}\n\n.phone, \n.email {\n  transition: transform 0.3s ease-in-out;\n}\n\n.drop-down a:hover, \n.phone:hover, \n.email:hover {\n  transform: scale(1.01);\n}\n\n.right-footer{\n  padding-right: 4rem;\n}\n\n.left-footer {\n  display: flex;\n  flex-direction: column;\n  padding-left: 4rem;\n  justify-content: space-between;\n}\n\n.right-footer img {\n  height: 450px;\n  width: 350px;\n}\n\nsvg, g, .cls-1 {\n  fill: var(--icon-fill-clr);\n}\n\n.mode {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  top: -3vh;\n  right: 5vw;\n  transition: opacity 0.6s ease-in-out, top 0.6s ease-in-out;\n}\n\n.mode.vis2 {\n  opacity: 1;\n  visibility: visible;\n  top: 5vh;\n}\n\n.mode.hidden {\n  top: -3vh;\n}\n\nheader, \nfooter, \nmain,\n.bg-triangle {\n  transition: \n    background-color 1s, \n    color 1s,\n    fill 1s;\n}\n\n.designed-by {\n  width: 100vw;\n  font-size: smaller;\n  background-color: var(--bg-footer-clr);\n  padding: 0;\n  margin-left: -3rem;\n  margin-bottom: -3rem;\n}\n\n@keyframes type-effect {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes flicker {\n  0% {\n    border-color: transparent;\n  }\n  50% {\n    border-color: white;\n  }\n  100% {\n    border-color: transparent;\n  }\n}\n\n@keyframes slide-down {\n  0% {\n    transform: scaleY(0);\n  }\n  50% {\n    transform: scaleY(1.1);\n  }\n  100% {\n    transform: scaleY(1)\n  }\n}\n\n/* for tablet */\n@media (max-width: 1150px) {\n\n  body {\n    padding: 5rem;\n    padding-top: 0.5rem;\n  }\n\n  header {\n    position: relative;\n  }\n\n  .pic-container {\n    position: absolute;\n    height: 500px;\n    width: 433px;\n    top: 0;\n    left: -2.5rem;\n  }\n\n  .outer-border {\n    border-left: 1px solid var(--text-color);\n  }\n\n  .outer-border h2::before {\n    content: "";\n    width: 370px;\n    height: 1px;\n    float: left;\n  }\n\n  .outer-border p::before {\n    content: "";\n    width: 370px;\n    height: 320px;\n    float: left;\n  }\n\n  .about-me {\n    justify-self: center;\n    align-self: center;\n    margin-top: 6rem;\n    padding-left: 1rem;\n  }\n\n  .card {\n    width: calc((100vw - 9rem - 2 * 1.5rem) / 2);\n  }\n\n  footer {\n    margin-left: -5rem;\n    margin-right: -5rem;\n    margin-bottom: -5rem;\n  }\n\n  .designed-by {\n    margin-left: -5rem;\n    margin-bottom: -5rem;\n  }\n  \n}\n\n/* for mobile devices */\n@media (max-width: 850px) {\n\n  body {\n    padding: 2rem;\n  }\n\n  header {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .pic-container {\n    position: static;\n    padding: 1rem;\n    flex: none;\n  }\n\n  .about-me{\n    margin-top: 0;\n    background-color: transparent;\n    box-shadow: none;\n  }\n\n  .outer-border {\n    border: none;\n    background-color: transparent;\n  }\n\n  .outer-border h2::before, \n  .outer-border p::before {\n    content: none;\n  }\n\n  .inner-border {\n    border: none;\n  }\n\n  .card {\n    width: calc((100vw - 4rem - 2 * 1.5rem));\n  }\n\n  .works-container {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .right-footer {\n    padding-right: 0;\n  }\n\n  footer {\n    flex-direction: column;\n    align-items: center;\n    margin-left: -2rem;\n    margin-right: -2rem;\n    margin-bottom: -3rem;\n    gap: 2rem;\n  }\n\n  .designed-by {\n    margin-left: -2rem;\n    margin-bottom: -2rem;\n  }\n\n}`,""]);const S=h},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var f=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var u=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},358:(n,e,t)=>{n.exports=t.p+"59b9f9ea79c4635de7e0.woff"},744:(n,e,t)=>{n.exports=t.p+"08c2e9802d82788ed545.woff2"},397:(n,e,t)=>{n.exports=t.p+"e745771cf89e8d1d8a0e.woff"},725:(n,e,t)=>{n.exports=t.p+"4a825a7a3cadc4f4da5c.woff2"},908:(n,e,t)=>{n.exports=t.p+"7f96e470a33ad9ca047a.woff"},886:(n,e,t)=>{n.exports=t.p+"60871d9fd87137f521d9.woff2"},533:(n,e,t)=>{n.exports=t.p+"2eb4444bee624a7ae951.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),f=t.n(p),m=t(113),u=t.n(m),g=t(365),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),r()(g.A,h),g.A&&g.A.locals&&g.A.locals;const b=t.p+"91d5e55044037cc54bd0.png",v=t.p+"65382c284d724549aba9.png",w=t.p+"d11af4122656b1f671dd.png",x=t.p+"73d030d784f6876fac8c.png",y=t.p+"599cedf3a72511878ed1.png",k=(t.p,t.p+"7b1f2d008471d526a7ca.png"),L=[{projName:"Resume Builder",screenShotLink:t.p+"4aab2961f5d753c948ee.png",gitLink:"https://github.com/jehuzepedasilva2/cv-app",liveLink:"https://cv-app-dd8.pages.dev/",description:"This interface allows you to customize your resume quickly and easily, with all changes appearing in real-time. Once you’re satisfied with your resume, you can proceed to download it! Created with React"},{projName:"Battleship",screenShotLink:b,gitLink:"https://github.com/jehuzepedasilva2/battleship",liveLink:"https://jehuzepedasilva2.github.io/battleship/",description:"Test your strategy and precision with this interactive Battleship game! Built entirely with HTML, CSS, and JavaScript, this game offers a sleek and engaging experience where players can challenge themselves to sink all enemy ships on a classic grid-based battlefield."},{projName:"Todo List",screenShotLink:x,gitLink:"https://github.com/jehuzepedasilva2/todo-list",liveLink:"https://jehuzepedasilva2.github.io/todo-list/",description:"This responsive Todo List application provides an intuitive and visually appealing interface for managing tasks efficiently. Featuring a dark and light mode!"},{projName:"Tic-Tac-Toe",screenShotLink:v,gitLink:"https://github.com/jehuzepedasilva2/tic-tac-toe",liveLink:"https://jehuzepedasilva2.github.io/tic-tac-toe/",description:"Challenge yourself or a friend to this timeless 2-player strategy game, now in a sleek and interactive web version. Built with a clean and responsive interface, this game delivers a smooth experience on desktop."},{projName:"Restaurant Page",screenShotLink:w,gitLink:"https://github.com/jehuzepedasilva2/restaurant-page",liveLink:"https://jehuzepedasilva2.github.io/restaurant-page/",description:"Enter the delicious world of this fictitious restaurant. The Aztecan Kitchen!"},{projName:"Etch-a-Sketch",screenShotLink:y,gitLink:"https://github.com/jehuzepedasilva2/etch-a-sketch",liveLink:"https://jehuzepedasilva2.github.io/etch-a-sketch/",description:"A fun and interactive digital Etch-A-Sketch application built with HTML, CSS, and JavaScript. Users can draw on a customizable grid, adjust the grid size, and experiment with various drawing modes"},{projName:"DSA in JavaScript",screenShotLink:k,gitLink:"https://github.com/jehuzepedasilva2/data-structures-js",liveLink:null,description:"Implementation of important algorithms and data structures. Done in JavaScript."}],S={"--bg-triangle-clr":"#00172e","--bg-footer-clr":"#00172e","--box-shadow-clr":"#0b2545","--sections-bg-clr":"#002b5c","--drop-down-bg-clr":"#002244","--drop-down-text-clr":"#fffdd0","--text-color":"#fffdd0","--icon-fill-clr":"#d4af37","--body-bg-color":"#001f3f"},j={"--bg-triangle-clr":"#c7d4e5","--bg-footer-clr":"#c7d4e5","--box-shadow-clr":"#CBD5E0","--sections-bg-clr":"#FFFFFF","--drop-down-bg-clr":"#EDF2F7","--drop-down-text-clr":"#2D3748","--text-color":"#1A202C","--icon-fill-clr":"#63B3ED","--body-bg-color":"#F7FAFC"},z=t.p+"8fe34101af7136fd9ecc.jpg";function E(n=!1){let e=j;n&&(e=S);const t=document.documentElement;Object.keys(e).forEach((n=>{t.style.setProperty(n,e[n])}))}function T(){const n=document.querySelector(".mode.vis2"),e=document.querySelector(".mode.hidden");n.classList.remove("vis2"),e.classList.remove("hidden"),n.classList.add("hidden"),e.classList.add("vis2"),"dark"===n.classList[1]?E():E(!0)}E(),function(){const n=document.querySelector(".works-container");for(let e=0;e<L.length;e++){const t=L[e],o=document.createElement("div");o.classList.add("card"),o.innerHTML=`\n      <div class="card-top card-top-${e}">\n      </div>\n      <div class="card-bottom">\n        <div class="bottom-title">\n          <h3 class="header">${t.projName}</h3>\n          <div class="card-icons">\n\n             <button id="git-btn-${e}" title="GitHub">\n              <svg viewBox="0 0 128 128">\n                <g fill="#181616">\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>\n                </g>\n              </svg>\n            </button>\n\n            <button id="open-link-${e}" title="Live Link">\n              <svg viewBox="0 0 24 24">\n                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />\n              </svg>\n            </button>\n\n          </div>\n        </div>\n        <div class="bottom-desc">\n          <p>${t.description}</p>\n        </div>\n      </div>\n    `,n.appendChild(o),document.querySelector(`.card #git-btn-${e}`).addEventListener("click",(()=>{window.open(t.gitLink,"_blank")})),null!==t.liveLink&&document.querySelector(`.card #open-link-${e}`).addEventListener("click",(()=>{window.open(t.liveLink,"_blank")})),document.querySelector(`.card-top-${e}`).style.backgroundImage=`url("${t.screenShotLink}")`}}(),document.querySelectorAll(".linkedin-btn").forEach((n=>{n.addEventListener("click",(()=>{window.open("https://linkedin.com/in/jehuzepedasilva","_blank")}))})),document.querySelectorAll(".drop-down a").forEach((n=>{n.addEventListener("click",(()=>{const n=document.querySelector(".vis");null!==n&&n.classList.remove("vis")}))})),document.querySelectorAll(".git-btn").forEach((n=>{n.addEventListener("click",(()=>{const e=n.classList[0];document.querySelector(`${e} .drop-down`).classList.toggle("vis")}))})),document.querySelectorAll(".resume-btn").forEach((n=>{n.addEventListener("click",(()=>{window.open("https://github.com/jehuzepedasilva2/current-resume/blob/main/resume_2.0.pdf","_blank")}))})),document.querySelectorAll(".insta-btn").forEach((n=>{n.addEventListener("click",(()=>{window.open("https://www.instagram.com/_jwho__/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D","_blank")}))})),document.addEventListener("click",(n=>{const e=document.querySelector(".vis"),t=n.target.closest(".drop-down"),o=n.target.closest(".git-btn");console.log(t,o),null===e||t||o||e.classList.remove("vis")})),document.querySelector(".right-footer").innerHTML=`<img src="${z}" alt="doggies" load="lazy">`,document.querySelectorAll(".mode").forEach((n=>{n.addEventListener("click",T)}))})();