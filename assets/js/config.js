window.STUDENTBNB_CONFIG={appName:"StudentBnB",brandLine:"Base & Belong",countryCode:"PT",countryName:"Portugal",locale:"pt-PT",currency:"EUR",domain:"studentbnb.pt",apiBaseUrl:"/api/v1",apiEnabled:false,analyticsEnabled:false,routes:{city:"cidade.html",listing:"anuncio.html",publish:"publicar.html",request:"procuro.html",students:"estudantes.html",solidarity:"casa-solidaria.html",privacy:"privacidade.html",confirm:"confirmar-email.html"},networkSites:[{code:"EU",label:"Europe",flag:"🇪🇺",url:"https://studentbnb.eu/"},{code:"IT",label:"Italia",flag:"🇮🇹",url:"https://studentbnb.it/"},{code:"ES",label:"España",flag:"🇪🇸",url:"https://studentbnb.es/"},{code:"FR",label:"France",flag:"🇫🇷",url:"https://studentbnb.fr/"},{code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://student-bnb.de/"},{code:"PL",label:"Polska",flag:"🇵🇱",url:"https://studentbnb.pl/"},{code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://studentbnb.pt/"}],ui:{select:"Selecionar",allCities:"Todas as cidades",allZones:"Todas as zonas",login:"Entrar"}};

(function(){
  const cfg=window.STUDENTBNB_CONFIG;
  const sites=cfg.networkSites;
  const meta=(key,value,content)=>{let e=document.head.querySelector(`meta[${key}="${value}"]`);if(!e){e=document.createElement("meta");e.setAttribute(key,value);document.head.appendChild(e)}e.content=content};
  const link=(rel,href,hreflang)=>{const s=`link[rel="${rel}"]${hreflang?`[hreflang="${hreflang}"]`:""}`;let e=document.head.querySelector(s);if(!e){e=document.createElement("link");e.rel=rel;if(hreflang)e.hreflang=hreflang;document.head.appendChild(e)}e.href=href};
  const canonicalUrl=()=>{const page=location.pathname.endsWith("/")?"":location.pathname.split("/").pop();const q=new URLSearchParams(location.search),keep=new URLSearchParams();if(page===cfg.routes.city&&q.get("city"))keep.set("city",q.get("city"));if(page===cfg.routes.listing&&q.get("id"))keep.set("id",q.get("id"));return `https://${cfg.domain}/${page||""}${keep.toString()?`?${keep}`:""}`};
  function applyBrand(){document.querySelectorAll(".brand").forEach(b=>{const labels=[...b.children].filter(e=>e.tagName==="SPAN"&&!e.classList.contains("brand-icon"));const l=labels[labels.length-1];if(!l)return;l.innerHTML='Student<strong>BnB</strong><small>Base & Belong</small>'});document.querySelectorAll(".main-nav a").forEach(a=>{const h=(a.getAttribute("href")||"").toLowerCase();if(/#(?:faq|contact|contacts|contatti|contatto|contacto)$/.test(h))a.remove()})}
  function updateSeo({title=document.title,description}={}){const canonical=canonicalUrl();const desc=description||document.head.querySelector('meta[name="description"]')?.content||"Estadias temporárias para estudantes em Portugal.";link("canonical",canonical);meta("name","robots","index,follow,max-image-preview:large");meta("property","og:site_name","StudentBnB — Base & Belong");meta("property","og:type","website");meta("property","og:title",title);meta("property","og:description",desc);meta("property","og:url",canonical)}
  function apply(){applyBrand();updateSeo();const page=location.pathname.endsWith("/")?"":location.pathname.split("/").pop();if(!page||page==="index.html"){sites.filter(s=>s.code!=="EU").forEach(s=>link("alternate",s.url,s.code.toLowerCase()));link("alternate","https://studentbnb.eu/","x-default")}let schema=document.head.querySelector('#studentbnb-website-schema');if(!schema){schema=document.createElement('script');schema.id='studentbnb-website-schema';schema.type='application/ld+json';document.head.appendChild(schema)}schema.textContent=JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"StudentBnB",url:"https://studentbnb.pt/",inLanguage:"pt-PT"})}
  window.StudentBnBSEO={update:updateSeo};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply();
})();

(function(){if(document.querySelector('script[data-studentbnb-analytics]'))return;const s=document.createElement('script');s.src='assets/js/analytics.js?v=20260824';s.defer=true;s.dataset.studentbnbAnalytics='1';document.head.appendChild(s)})();

(function(){
  const cfg=window.STUDENTBNB_CONFIG||{};
  const casaStudentSites=[
    {code:"EU",label:"Europe",flag:"🇪🇺",url:"https://casastudent.eu/"},
    {code:"IT",label:"Italia",flag:"🇮🇹",url:"https://casastudent.it/"},
    {code:"ES",label:"España",flag:"🇪🇸",url:"https://casastudent.es/"},
    {code:"FR",label:"France",flag:"🇫🇷",url:"https://casastudent.fr/"},
    {code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://casastudent.de/"},
    {code:"PL",label:"Polska",flag:"🇵🇱",url:"https://casastudent.pl/"},
    {code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://casastudent.pt/"},
    {code:"GR",label:"Ελλάδα",flag:"🇬🇷",url:"https://casastudent.gr/"}
  ];
  const studentBnBSites=[
    {code:"EU",label:"Europe",flag:"🇪🇺",url:"https://studentbnb.eu/"},
    {code:"IT",label:"Italia",flag:"🇮🇹",url:"https://studentbnb.it/"},
    {code:"ES",label:"España",flag:"🇪🇸",url:"https://studentbnb.es/"},
    {code:"FR",label:"France",flag:"🇫🇷",url:"https://studentbnb.fr/"},
    {code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://student-bnb.de/"},
    {code:"PL",label:"Polska",flag:"🇵🇱",url:"https://studentbnb.pl/"},
    {code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://studentbnb.pt/"}
  ];
  const headings={it:["Portali CasaStudent","Portali StudentBnB"],es:["Portales CasaStudent","Portales StudentBnB"],fr:["Portails CasaStudent","Portails StudentBnB"],de:["CasaStudent-Portale","StudentBnB-Portale"],pl:["Portale CasaStudent","Portale StudentBnB"],pt:["Portais CasaStudent","Portais StudentBnB"],en:["CasaStudent portals","StudentBnB portals"]};
  const currentFamily=()=>`${cfg.appName||""} ${cfg.domain||""}`.toLowerCase().includes("studentbnb")||`${cfg.domain||""}`.includes("student-bnb.de")?"studentbnb":"casastudent";
  const links=(sites,family)=>sites.map(site=>{const active=family===currentFamily()&&site.code===(cfg.countryCode||"EU");return `<a class="portal-country-link${active?" is-current":""}" href="${site.url}"${active?' aria-current="page"':''}><span class="portal-country-flag" aria-hidden="true">${site.flag}</span><span>${site.label}</span><span class="network-open" aria-hidden="true">${active?"✓":"↗"}</span></a>`}).join("");
  function render(){const footer=document.querySelector(".footer-international");if(!footer)return;const lang=(document.documentElement.lang||cfg.locale||"en").slice(0,2).toLowerCase(),labels=headings[lang]||headings.en;footer.classList.add("dual-portal-footer");footer.innerHTML=`<section class="portal-family"><strong class="portal-family-title">${labels[0]}</strong><nav class="footer-country-links portal-country-links" aria-label="${labels[0]}">${links(casaStudentSites,"casastudent")}</nav></section><section class="portal-family"><strong class="portal-family-title">${labels[1]}</strong><nav class="footer-country-links portal-country-links" aria-label="${labels[1]}">${links(studentBnBSites,"studentbnb")}</nav></section>`}
  function styles(){if(document.getElementById("dual-portal-footer-style"))return;const st=document.createElement("style");st.id="dual-portal-footer-style";st.textContent='.footer-international.dual-portal-footer{display:grid!important;gap:18px!important}.dual-portal-footer .portal-family{display:grid;grid-template-columns:minmax(150px,.3fr) minmax(0,1fr);gap:14px 20px;align-items:start}.dual-portal-footer .portal-family+.portal-family{padding-top:18px;border-top:1px solid rgba(255,255,255,.18)}.dual-portal-footer .portal-family-title{display:block;padding-top:9px;font:800 15px/1.35 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;color:#fff!important}.dual-portal-footer .portal-country-links{display:flex!important;flex-wrap:wrap!important;gap:9px!important;margin:0!important}.dual-portal-footer .portal-country-link{display:inline-flex!important;align-items:center!important;gap:7px!important;min-height:40px;padding:8px 11px!important;border-radius:10px;text-decoration:none}.dual-portal-footer .portal-country-link.is-current{font-weight:800;box-shadow:inset 0 0 0 2px currentColor}.dual-portal-footer .portal-country-flag{font-size:20px;line-height:1}.dual-portal-footer .network-open{margin-left:auto;opacity:.72}@media(max-width:720px){.dual-portal-footer .portal-family{grid-template-columns:1fr;gap:8px}.dual-portal-footer .portal-family-title{padding-top:0}.dual-portal-footer .portal-country-links{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}.dual-portal-footer .portal-country-link{width:100%;min-width:0}}@media(max-width:380px){.dual-portal-footer .portal-country-links{grid-template-columns:1fr}}';document.head.appendChild(st)}
  const apply=()=>{styles();render()};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(apply,0));else setTimeout(apply,0);
})();
