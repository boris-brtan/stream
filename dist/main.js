(()=>{var a=document.querySelector("ul"),d=navigator.mediaSession&&(navigator.mediaSession.metadata=new MediaMetadata),m=()=>document.body.classList.contains("menu"),y=()=>document.body.classList.contains("edit"),b=()=>document.body.classList.contains("rename"),x=()=>document.body.classList.contains("selected"),s=()=>document.querySelector("li.active"),k=e=>[s(),e].forEach(o=>o?.classList.toggle("active")),l=()=>{localStorage.stream=JSON.stringify({...JSON.parse(localStorage.stream),items:[].slice.call(a.children).map(e=>({title:e.children[0].textContent,url:e.children[1].textContent}))})},S=()=>{a.innerHTML="",localStorage.stream&&JSON.parse(localStorage.stream).items?.forEach(e=>f(e,a))},c=(e,o={},t=null)=>{let n=document.createElement(e);return Object.entries(o).forEach(([r,g])=>{n[r]=g}),t?t.appendChild(n):n},p=null,v=document.querySelector("audio"),f=(e,o=null)=>{let t=c("li"),n=c("span",{textContent:e.title,contentEditable:!1},t),r=c("span",{textContent:e.url,contentEditable:!1},t),g=c("button",{className:"rename"},t),L=c("button",{className:"remove"},t);return g.addEventListener("click",i=>{i.stopImmediatePropagation(),document.body.classList.contains("rename")&&(confirm("Apply changes ?")&&l()||S()),[t,document.body].forEach(u=>u.classList.toggle("rename")),[n,r].forEach(u=>u.contentEditable=!JSON.parse(u.contentEditable)),window.getSelection().collapse(n,1)}),L.addEventListener("click",i=>{i.stopImmediatePropagation(),confirm(`Remove ${e.title} ?`)&&(t.remove(),l())}),t.addEventListener("click",()=>{if(!b()){if(y()){if(x()){document.body.classList.remove("selected"),a.insertBefore(p,t),p=null,l();return}document.body.classList.add("selected"),p=t;return}v.src=e.url,v.play().catch(i=>i),k(t),d&&(d.title=e.title.match(/[^/]+$/))}}),o?o.appendChild(t):t};function E(){let e=[];if(localStorage.streamList){try{e=JSON.parse(localStorage.streamList).map(o=>({title:o,url:o}))}catch(o){console.debug("wrong format of streamList",o)}localStorage.removeItem("streamList")}localStorage.stream===void 0&&(localStorage.stream=JSON.stringify({items:e,version:1})),1>localStorage.stream?.version&&console.log("migration needed")}E();document.querySelector("button.edit").addEventListener("click",e=>document.body.classList.toggle("edit"));d&&navigator.mediaSession.setActionHandler("previoustrack",()=>{(s().previousElementSibling||s().parentElement.lastElementChild).click()});d&&navigator.mediaSession.setActionHandler("nexttrack",()=>{(s().nextElementSibling||s().parentElement.firstElementChild).click()});"serviceWorker"in navigator&&(navigator.serviceWorker.controller||navigator.serviceWorker.register("sw.js",{scope:"./"}));S();document.querySelector("input").addEventListener("keyup",e=>{if(e.key==="Enter"){let o=f({title:e.target.value,url:e.target.value},a);l(),e.target.value=""}});function h(e){let o=e.touches&&e.touches[0].clientX||e.clientX,t=n=>{let r=(n.touches&&n.changedTouches[0].clientX||n.clientX)-o;!m()&&r>150?document.body.classList.add("menu"):m()&&r<-150&&document.body.classList.remove("menu"),e.target.removeEventListener("touchend",t),e.target.removeEventListener("mouseup",t)};(!m()&&o<50||m()&&o<300)&&(e.target.addEventListener("touchend",t),e.target.addEventListener("mouseup",t))}document.body.ontouchstart=h;document.body.onmousedown=h;})();
