import{A as y,S as g,N as h,a as E,i as f,b}from"./assets/vendor-2418e84e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header-place-for-btn");if(window.innerWidth>=768){const e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("header-order-project-btn"),e.textContent="Order the project";const o=document.createElement("a");o.setAttribute("href","#work-together"),o.style.textDecoration="none",o.style.color="inherit",e.addEventListener("click",()=>{window.location.href=o.getAttribute("href")}),e.prepend(o),t.appendChild(e)}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header-menu-text");let e;const o=()=>{e=document.createElement("ul"),e.classList.add("header-nav-list");const c=["About me","Benefits","Projects","FAQ"],s=["about-me","benefits","projects","faq"];c.forEach((r,i)=>{const a=document.createElement("li");a.classList.add("header-nav-list-item");const l=document.createElement("a");l.href=`#${s[i]}`,l.textContent=r,l.classList.add("header-nav-list-item-link"),a.appendChild(l),e.appendChild(a)}),t.insertAdjacentElement("afterend",e)};t.addEventListener("click",function(){e||o(),e.classList.toggle("is-visible")})});(()=>{const t=document.querySelector(".header-overlay"),e=document.querySelector(".burger-menu-btn"),o=document.querySelector(".header-mobile-menu-close-btn"),c=()=>{const i=t.querySelectorAll('a[href*="#"]'),a=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open");const l=a?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body),i.length>0&&i.forEach(d=>{a?d.removeEventListener("click",c):d.addEventListener("click",c)})};e.addEventListener("click",c),o.addEventListener("click",c);const s=i=>{i.matches&&t.classList.remove("is-open")};window.matchMedia("(min-width: 767px)").addEventListener("change",s)})();new y(".accordion-container",{duration:600,showMultiple:!0,openOnInit:[0]});const L=document.querySelectorAll(".about-accordion-item");L.forEach(function(t){const e=t.querySelector(".about-accordion-title"),o=t.querySelector(".ac-trigger");o.addEventListener("mouseenter",function(){e.classList.add("hovered")}),o.addEventListener("mouseleave",function(){e.classList.remove("hovered")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".about-skills-item"),e=document.querySelector(".swiper-wrapper");t.forEach((s,r)=>{const i=s.cloneNode(!0);e.appendChild(i)});const o=new g(".about-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const s=this.slides[this.previousIndex],r=this.slides[this.activeIndex];s.style.background="",r.style.backgroundColor="#ed3b44"}}});document.querySelector(".about-skills-btn").addEventListener("click",()=>{o.slideNext()})});const w=document.querySelector(".covers"),v=document.querySelectorAll(".marquee__line"),S={root:null,rootMargin:"0px",threshold:.5},k=new IntersectionObserver(function(t,e){t.forEach(o=>{o.isIntersecting?v.forEach(c=>{c.classList.add("animation")}):v.forEach(c=>{c.classList.remove("animation")})})},S);k.observe(w);const m=document.querySelector(".reviews-section");if(m){let s=function(i){return i.map(a=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${a.avatar_url}" alt="${a.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${a.author}</h3>
          <p class="review-text">${a.review}</p>
        </div>
      </li>
  `).join("")};const t=m.querySelector(".reviews-cards"),e=m.querySelector(".reviews-btn-prev"),o=m.querySelector(".reviews-btn-next");async function c(i){const d="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(d)).json()}catch(u){return console.log(u),f.error({position:"topRight",message:"Not Found"}),[]}}async function r(){try{const i=await c();if(i.length>0){const a=s(i);t.insertAdjacentHTML("beforeend",a);const l=new g(m.querySelector(".swiper"),{modules:[h,E],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});document.addEventListener("keydown",d=>{if(d.key==="ArrowRight")l.slideNext();else if(d.key==="ArrowLeft")l.slidePrev();else if(d.key==="Tab"){const u=document.activeElement;u===e?(d.preventDefault(),o.focus()):u===o&&(d.preventDefault(),e.focus())}})}else console.log("No reviews to display")}catch(i){console.log(i),f.error({position:"topRight",message:"Failed to load reviews"})}}r()}const n={commentsElem:document.getElementById("comments"),emailElem:document.getElementById("email"),successMessage:document.getElementById("successMessage"),errorMessage:document.getElementById("errorMessage"),formElem:document.querySelector(".footer-form"),footerElem:document.getElementById("footer")},M=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;n.commentsElem.addEventListener("blur",function(){const e=n.commentsElem.value;e.length>35&&(n.commentsElem.value=e.substring(0,35)+"...")});n.emailElem.addEventListener("input",function(){const t=n.emailElem.value.trim();M.test(t)?(n.emailElem.classList.add("success"),n.emailElem.classList.remove("error"),n.successMessage.style.display="block",n.errorMessage.style.display="none"):(n.emailElem.classList.add("error"),n.emailElem.classList.remove("success"),n.successMessage.style.display="none",n.errorMessage.style.display="block")});n.commentsElem.addEventListener("input",function(){localStorage.setItem("comments",n.commentsElem.value)});n.emailElem.addEventListener("input",function(){localStorage.setItem("email",n.emailElem.value)});document.addEventListener("DOMContentLoaded",function(){const t=localStorage.getItem("comments"),e=localStorage.getItem("email");t&&(n.commentsElem.value=t),e&&(n.emailElem.value=e)});function q({title:t,message:e}){p();const o=`<div class="backdrop is-open"><div class="modal is-visible"><button class="modal-close-btn" type="button"><svg
        class="modal-close-btn-icon"
        aria-label="close icon"
        width="14" height="14"><use href="../img/icons.svg#icon-close-x"></use></svg></button>
    <h2 class="modal-title">${t}</h2><p class="modal-description">${e}</p></div></div>`;n.footerElem.insertAdjacentHTML("afterend",o),document.body.classList.add("no-scroll"),x(),n.formElem.reset()}function x(){const t=document.querySelector(".backdrop"),e=document.querySelector(".modal-close-btn");t&&(e.addEventListener("click",p),t.addEventListener("click",function(o){o.target===t&&p()}),document.addEventListener("keydown",function(o){o.key==="Escape"&&p()}))}function p(){const t=document.querySelector(".backdrop.is-open");t&&(t.classList.add("fade-out"),t.addEventListener("animationend",function(){t.remove(),document.body.classList.remove("no-scroll")},{once:!0}))}n.formElem.addEventListener("submit",async function(t){var c,s;t.preventDefault();const e=n.emailElem.value.trim(),o=n.commentsElem.value;try{const r=await b.post("https://portfolio-js.b.goit.study/api/requests/",{email:e,comment:o},{headers:{"Content-Type":"application/json"}});n.emailElem.classList.remove("success"),n.successMessage.style.display="none",q(r.data),localStorage.removeItem("email"),localStorage.removeItem("comments")}catch(r){console.log(r),f.error({position:"topRight",theme:"dark",messageColor:"white",backgroundColor:"#ef4040",message:"Error:"+(((s=(c=r.response)==null?void 0:c.data)==null?void 0:s.message)||"Something went wrong")})}});
//# sourceMappingURL=commonHelpers.js.map
