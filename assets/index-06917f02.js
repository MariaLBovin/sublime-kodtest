(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();async function g(){return await fetch("https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false").then(r=>r.json()).then(r=>r).catch(r=>(console.error("nått blev fel:",r),null))}const h=document.querySelector(".section__podlist-pods");let s=0;async function y(){const r=await g();r.programs.forEach(a=>{s++;const l=t();m();const o=n();f(),p(),c();function t(){const e=document.createElement("article");return e.setAttribute("class","section__article-innerarticle"),e.setAttribute("tabindex","1"),h.appendChild(e),e}function n(){const e=document.createElement("div");return e.setAttribute("class","section__article-div"),l.appendChild(e),e}function c(){const e=document.createElement("a"),i=document.createTextNode("Lyssna här");e.setAttribute("href",r.programs[s].programurl),e.setAttribute("tabindex","1"),e.appendChild(i),o.appendChild(e)}function m(){const e=document.createElement("IMG");e.setAttribute("src",r.programs[s].socialimage),e.setAttribute("width","100"),e.setAttribute("height","100"),l.appendChild(e)}function p(){const e=document.createElement("p"),i=document.createTextNode(r.programs[s].description);e.appendChild(i),o.appendChild(e)}function f(){const e=document.createElement("h2"),i=document.createTextNode(r.programs[s].name);e.appendChild(i),o.appendChild(e)}})}const d=document.querySelector(".toggle-btn");d.addEventListener("click",u);console.log(d);function u(){document.body.classList.toggle("darkmode"),document.body.classList.contains("darkmode")?d.innerHTML="Välj mörkt läge":d.innerHTML="Välj ljust läge"}function b(){u(),y()}b();
