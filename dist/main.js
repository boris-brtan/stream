(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(15),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbutton {\n    background: 0;\n    border: 0;\n    color: unset;\n    outline: 0;\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    background: #000;\n    color: #fff;\n    font-size: 1.1rem;\n    font-family: sans-serif;\n}\n\nlabel {\n    min-width: 300px;\n}\n\nlabel input {\n    outline: none;\n    background: transparent;\n    font-size: .9rem;\n}\n\nlabel input[type=text],\nlabel input[type=url] {\n    border: none;\n    border-bottom: 1px dotted #ffffff;\n    width: 100%;\n    max-width: 40ex;\n    text-align: center;\n    padding: 7px;\n    color: #fff;\n}\n\nul {\n    margin: 1rem 0;\n    list-style-type: none;\n    min-width: 300px;\n}\n\nul li {\n    position: relative;\n}\n\nul li span {\n    display: block;\n    padding: 1ex;\n    text-align: center;\n}\n\nbody.edit ul li span {\n    background: rgba(255, 255, 255, .15);\n    margin-bottom: 1px;\n}\n\nbody.edit ul {\n    margin-left: -44px;\n}\n\nul li button {\n    display: none;\n    width: 43px;\n    height: 43px;\n    position: absolute;\n    background: rgba(255, 0, 0, .66);\n    bottom: 0;\n    right: -44px;\n}\n\nbutton.rename {\n    background: rgba(255, 255, 0, .66);\n    top: 0;\n}\nbody.rename li.rename button.rename {\n    background: rgba(0, 255, 0, .66);\n}\n\n\nbody > section {\n    display: flex;\n    flex-direction: column;\n}\n\nsection.menu {\n    flex: 0;\n    position: fixed;\n    max-width: 0;\n    overflow: hidden;\n    transition: max-width .25s linear;\n}\n\n.menu section.menu {\n    max-width: 50px;\n} \n\nsection.menu button.edit {\n    width: 35px;\n    height: 35px;\n    padding: 6px;\n}\n\nsection.menu button.edit:after {\n    content: "";\n    display: block;\n    height: 100%;\n    width: 50%;\n    background: linear-gradient(0deg, transparent 50%, #fff 50%);\n    border: 1px solid #fff;\n    border-radius: 3px;\n    transform: rotate(-45deg) translate(3px, 4px);\n}\n\nbody.edit .menu button.edit:after {\n    background: linear-gradient(0deg, #fff 50%, transparent 50%);\n}\n\nbody.edit ul li span:nth-child(n+2),\nbody.edit.rename ul li.rename button.rename,\nbody.edit ul li button {\n    display: block;\n}\n\nbody.rename button,\nbody.edit.rename button,\nbody ul li span:nth-child(n+2) {\n    display: none;\n}\n\nsection.content {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n@media(hover: hover) {\n    body.edit ul li:hover,\n    ul li:hover {\n        background: rgba(255, 255, 255, .25);\n        cursor: pointer;\n    }\n}\nbody.edit.selected ul li {\n    margin-top: 15px;\n}\n\nbody.edit.selected ul li:before {\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    right: 0;\n    display: block;\n    content: "";\n    height: 16px;\n    bottom: 100%;\n    background: #000;\n    border: 2px dashed rgba(255, 255, 255, .5);\n    box-shadow: 0 0 5px 6px rgba(0,0,0,.5);\n    pointer-events: none;\n}\n',"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;IACZ,iCAAiC;IACjC,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gCAAgC;IAChC,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,MAAM;AACV;AACA;IACI,gCAAgC;AACpC;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,UAAU;IACV,4DAA4D;IAC5D,sBAAsB;IACtB,kBAAkB;IAClB,6CAA6C;AACjD;;AAEA;IACI,4DAA4D;AAChE;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;;IAGI,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;;QAEI,oCAAoC;QACpC,eAAe;IACnB;AACJ;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,cAAc;IACd,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,0CAA0C;IAC1C,sCAAsC;IACtC,oBAAoB;AACxB",sourcesContent:['* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbutton {\n    background: 0;\n    border: 0;\n    color: unset;\n    outline: 0;\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    background: #000;\n    color: #fff;\n    font-size: 1.1rem;\n    font-family: sans-serif;\n}\n\nlabel {\n    min-width: 300px;\n}\n\nlabel input {\n    outline: none;\n    background: transparent;\n    font-size: .9rem;\n}\n\nlabel input[type=text],\nlabel input[type=url] {\n    border: none;\n    border-bottom: 1px dotted #ffffff;\n    width: 100%;\n    max-width: 40ex;\n    text-align: center;\n    padding: 7px;\n    color: #fff;\n}\n\nul {\n    margin: 1rem 0;\n    list-style-type: none;\n    min-width: 300px;\n}\n\nul li {\n    position: relative;\n}\n\nul li span {\n    display: block;\n    padding: 1ex;\n    text-align: center;\n}\n\nbody.edit ul li span {\n    background: rgba(255, 255, 255, .15);\n    margin-bottom: 1px;\n}\n\nbody.edit ul {\n    margin-left: -44px;\n}\n\nul li button {\n    display: none;\n    width: 43px;\n    height: 43px;\n    position: absolute;\n    background: rgba(255, 0, 0, .66);\n    bottom: 0;\n    right: -44px;\n}\n\nbutton.rename {\n    background: rgba(255, 255, 0, .66);\n    top: 0;\n}\nbody.rename li.rename button.rename {\n    background: rgba(0, 255, 0, .66);\n}\n\n\nbody > section {\n    display: flex;\n    flex-direction: column;\n}\n\nsection.menu {\n    flex: 0;\n    position: fixed;\n    max-width: 0;\n    overflow: hidden;\n    transition: max-width .25s linear;\n}\n\n.menu section.menu {\n    max-width: 50px;\n} \n\nsection.menu button.edit {\n    width: 35px;\n    height: 35px;\n    padding: 6px;\n}\n\nsection.menu button.edit:after {\n    content: "";\n    display: block;\n    height: 100%;\n    width: 50%;\n    background: linear-gradient(0deg, transparent 50%, #fff 50%);\n    border: 1px solid #fff;\n    border-radius: 3px;\n    transform: rotate(-45deg) translate(3px, 4px);\n}\n\nbody.edit .menu button.edit:after {\n    background: linear-gradient(0deg, #fff 50%, transparent 50%);\n}\n\nbody.edit ul li span:nth-child(n+2),\nbody.edit.rename ul li.rename button.rename,\nbody.edit ul li button {\n    display: block;\n}\n\nbody.rename button,\nbody.edit.rename button,\nbody ul li span:nth-child(n+2) {\n    display: none;\n}\n\nsection.content {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n@media(hover: hover) {\n    body.edit ul li:hover,\n    ul li:hover {\n        background: rgba(255, 255, 255, .25);\n        cursor: pointer;\n    }\n}\nbody.edit.selected ul li {\n    margin-top: 15px;\n}\n\nbody.edit.selected ul li:before {\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    right: 0;\n    display: block;\n    content: "";\n    height: 16px;\n    bottom: 100%;\n    background: #000;\n    border: 2px dashed rgba(255, 255, 255, .5);\n    box-shadow: 0 0 5px 6px rgba(0,0,0,.5);\n    pointer-events: none;\n}\n'],sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var t,o,r=(o=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var o,r,i=[],a=!0,A=!1;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(n){A=!0,r=n}finally{try{a||null==t.return||t.return()}finally{if(A)throw r}}return i}}(t,o)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],a=r[3];if(!a)return i;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),d="/*# ".concat(l," */"),s=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(s).concat([d]).join("\n")}return[i].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],A=0;A<n.length;A++){var l=n[A],d=o.base?l[0]+o.base:l[0],s=i[d]||0,c="".concat(d," ").concat(s);i[d]=s+1;var u=t(c),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(e[u].references++,e[u].updater(p)):e.push({identifier:c,updater:r(p,o),references:1}),a.push(c)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var l=o(n,r),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),A=t(565),l=t.n(A),d=t(216),s=t.n(d),c=t(589),u=t.n(c),p=t(424),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const b=document.querySelector("ul"),f=navigator.mediaSession&&(navigator.mediaSession.metadata=new MediaMetadata),g=()=>document.body.classList.contains("menu"),C=()=>document.querySelector("li.active"),h=()=>{localStorage.stream=JSON.stringify({...JSON.parse(localStorage.stream),items:[].slice.call(b.children).map((n=>({title:n.children[0].textContent,url:n.children[1].textContent})))})},I=()=>{b.innerHTML="",localStorage.stream&&JSON.parse(localStorage.stream).items?.forEach((n=>B(n,b)))},y=(n,e={},t=null)=>{const o=document.createElement(n);return Object.entries(e).forEach((([n,e])=>{o[n]=e})),t?t.appendChild(o):o};let v=null;const x=document.querySelector("audio"),B=(n,e=null)=>{const t=y("li"),o=y("span",{textContent:n.title,contentEditable:!1},t),r=y("span",{textContent:n.url,contentEditable:!1},t),i=y("button",{className:"rename"},t),a=y("button",{className:"remove"},t);return i.addEventListener("click",(n=>{n.stopImmediatePropagation(),document.body.classList.contains("rename")&&(confirm("Apply changes ?")&&h()||I()),[t,document.body].forEach((n=>n.classList.toggle("rename"))),[o,r].forEach((n=>n.contentEditable=!JSON.parse(n.contentEditable))),window.getSelection().collapse(o,1)})),a.addEventListener("click",(e=>{e.stopImmediatePropagation(),confirm(`Remove ${n.title} ?`)&&(t.remove(),h())})),t.addEventListener("click",(()=>{if(!document.body.classList.contains("rename")){if(document.body.classList.contains("edit"))return document.body.classList.contains("selected")?(document.body.classList.remove("selected"),b.insertBefore(v,t),v=null,void h()):(document.body.classList.add("selected"),void(v=t));var e;x.src=n.url,x.play().catch((n=>n)),e=t,[C(),e].forEach((n=>n?.classList.toggle("active"))),f&&(f.title=n.title.match(/[^/]+$/))}})),e?e.appendChild(t):t};function k(n){const e=n.touches&&n.touches[0].clientX||n.clientX,t=o=>{const r=(o.touches&&o.changedTouches[0].clientX||o.clientX)-e;!g()&&r>150?document.body.classList.add("menu"):g()&&r<-150&&document.body.classList.remove("menu"),n.target.removeEventListener("touchend",t),n.target.removeEventListener("mouseup",t)};(!g()&&e<50||g()&&e<300)&&(n.target.addEventListener("touchend",t),n.target.addEventListener("mouseup",t))}(localStorage.streamList||void 0===localStorage.stream)&&(localStorage.stream=JSON.stringify({items:JSON.parse(localStorage.streamList).map?.((n=>({title:n,url:n})))||[],version:1}),localStorage.removeItem("streamList")),1>localStorage.stream?.version&&console.log("migration needed"),document.querySelector("button.edit").addEventListener("click",(n=>document.body.classList.toggle("edit"))),f&&navigator.mediaSession.setActionHandler("previoustrack",(()=>{(C().previousElementSibling||C().parentElement.lastElementChild).click()})),f&&navigator.mediaSession.setActionHandler("nexttrack",(()=>{(C().nextElementSibling||C().parentElement.firstElementChild).click()})),"serviceWorker"in navigator&&(navigator.serviceWorker.controller||navigator.serviceWorker.register("sw.js",{scope:"./"})),I(),document.querySelector("input").addEventListener("keyup",(n=>{"Enter"===n.key&&(B({title:n.target.value,url:n.target.value},b),h(),n.target.value="")})),document.body.ontouchstart=k,document.body.onmousedown=k})()})();
//# sourceMappingURL=main.js.map