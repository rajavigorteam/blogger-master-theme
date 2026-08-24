(function(){
"use strict";
const C=window.BLOGGER_MASTER_CONFIG;
if(!C){console.warn("BLOGGER_MASTER_CONFIG belum dimuat.");return;}

function setVars(){
 const d=C.design||{},r=document.documentElement.style;
 Object.keys({primaryColor:"--bm-primary",textColor:"--bm-text",backgroundColor:"--bm-bg",cardColor:"--bm-card",borderColor:"--bm-border",radius:"--bm-radius",maxWidth:"--bm-max"})
 .forEach(k=>{if(d[k])r.setProperty({primaryColor:"--bm-primary",textColor:"--bm-text",backgroundColor:"--bm-bg",cardColor:"--bm-card",borderColor:"--bm-border",radius:"--bm-radius",maxWidth:"--bm-max"}[k],d[k])});
}
function renderMenu(){
 document.querySelector(".bm-master-nav")?.remove();
 const nav=document.createElement("nav");nav.className="bm-master-nav";
 const inner=document.createElement("div");inner.className="bm-master-nav-inner";
 const brand=document.createElement("a");brand.className="bm-master-brand";brand.href="/";brand.textContent=C.site?.name||document.title;
 const ul=document.createElement("ul");ul.className="bm-master-menu";
 (C.menu||[]).forEach(item=>{const li=document.createElement("li"),a=document.createElement("a");a.href=item.url||"#";a.textContent=item.title||"Menu";li.appendChild(a);ul.appendChild(li)});
 inner.append(brand,ul);nav.appendChild(inner);document.body.prepend(nav);
}
function renderSidebar(){
 const target=document.querySelector("[data-blogger-master-sidebar]");
 if(!target||!C.sidebar?.enabled)return;
 target.innerHTML="";target.classList.add("bm-master-sidebar");
 (C.sidebar.widgets||[]).forEach(w=>{
   const box=document.createElement("section");box.className="bm-master-widget";
   const h=document.createElement("h3");h.className="bm-master-widget-title";h.textContent=w.title||w.type;box.appendChild(h);
   const body=document.createElement("div");body.className="bm-master-links";
   if(w.type==="search"){
     const form=document.createElement("form");form.className="bm-master-search";
     form.innerHTML='<input type="search" placeholder="Search..."><button type="submit">Search</button>';
     form.onsubmit=e=>{e.preventDefault();const q=form.querySelector("input").value.trim();if(q)location.href="/search?q="+encodeURIComponent(q)};
     box.appendChild(form);
   }else{
     const note=document.createElement("span");note.textContent="Widget "+w.type+" siap disambungkan.";note.style.color="var(--bm-muted)";note.style.fontSize="14px";body.appendChild(note);box.appendChild(body);
   }
   target.appendChild(box);
 });
}
function renderFooter(){
 const t=document.querySelector("[data-blogger-master-footer]");
 if(t){t.classList.add("bm-master-footer");t.textContent=C.footer?.text||""}
}
function init(){setVars();renderMenu();renderSidebar();renderFooter()}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",init):init();
})();