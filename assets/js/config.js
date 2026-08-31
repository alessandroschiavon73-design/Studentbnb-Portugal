window.STUDENTBNB_CONFIG={appName:"StudentBnB",brandLine:"Base & Belong",countryCode:"PT",countryName:"Portugal",locale:"pt-PT",currency:"EUR",domain:"studentbnb.pt",apiBaseUrl:"/api/v1",apiEnabled:false,analyticsEnabled:false,routes:{city:"cidade.html",listing:"anuncio.html",publish:"publicar.html",request:"procuro.html",students:"estudantes.html",solidarity:"casa-solidaria.html",privacy:"privacidade.html",confirm:"confirmar-email.html"},networkSites:[{code:"EU",label:"Europe",flag:"🇪🇺",url:"https://studentbnb.eu/"},{code:"IT",label:"Italia",flag:"🇮🇹",url:"https://studentbnb.it/"},{code:"ES",label:"España",flag:"🇪🇸",url:"https://studentbnb.es/"},{code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://studentbnb.pt/"},{code:"FR",label:"France",flag:"🇫🇷",url:"https://studentbnb.fr/"},{code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://student-bnb.de/"},{code:"PL",label:"Polska",flag:"🇵🇱",url:"https://studentbnb.pl/"}],ui:{select:"Selecionar",allCities:"Todas as cidades",allZones:"Todas as zonas",login:"Entrar"}};
(function(){const cfg=window.STUDENTBNB_CONFIG,sites=cfg.networkSites;function meta(k,v,c){let e=document.head.querySelector(`meta[${k}="${v}"]`);if(!e){e=document.createElement("meta");e.setAttribute(k,v);document.head.appendChild(e)}e.content=c}function link(r,h,l){let s=`link[rel="${r}"]${l?`[hreflang="${l}"]`:""}`,e=document.head.querySelector(s);if(!e){e=document.createElement("link");e.rel=r;if(l)e.hreflang=l;document.head.appendChild(e)}e.href=h}function applyBranding(){document.title=document.title.replaceAll("CasaStudent","StudentBnB");const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))n.nodeValue=n.nodeValue.replaceAll("CasaStudent","StudentBnB");document.querySelectorAll("[aria-label]").forEach(e=>e.setAttribute("aria-label",e.getAttribute("aria-label").replaceAll("CasaStudent","StudentBnB")));document.querySelectorAll(".brand").forEach(b=>{const labels=[...b.children].filter(e=>e.tagName==="SPAN"&&!e.classList.contains("brand-icon")),l=labels[labels.length-1];if(!l)return;const s=l.querySelector("small"),h=s?s.outerHTML:"";l.innerHTML=`Student<strong>BnB</strong>${h}`})}function apply(){applyBranding();document.querySelectorAll(".brand small").forEach(e=>{e.textContent="Base & Belong";e.style.fontStyle="italic"});const fp=document.querySelector(".site-footer .footer-grid>div:first-child p");if(fp)fp.textContent="StudentBnB dedica-se a estadias temporárias dentro da comunidade estudantil: uma semana, duas semanas ou um mês, para Erasmus, estágio, cursos e exames.";const p=location.pathname.endsWith("/")?"":location.pathname.split("/").pop(),q=new URLSearchParams(location.search),cp=new URLSearchParams();if(p===cfg.routes.city&&q.get("city"))cp.set("city",q.get("city"));if(p===cfg.routes.listing&&q.get("id"))cp.set("id",q.get("id"));const u=`https://${cfg.domain}/${p||""}${cp.toString()?`?${cp}`:""}`;link("canonical",u);meta("name","robots","index,follow,max-image-preview:large");meta("property","og:site_name","StudentBnB — Base & Belong");meta("property","og:type","website");meta("property","og:title",document.title);meta("property","og:url",u);if(!p||p==="index.html"){sites.forEach(s=>link("alternate",s.url,s.code.toLowerCase()));link("alternate","https://studentbnb.eu/","x-default")}let schema=document.head.querySelector('#studentbnb-website-schema');if(!schema){schema=document.createElement('script');schema.id='studentbnb-website-schema';schema.type='application/ld+json';document.head.appendChild(schema)}schema.textContent=JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"StudentBnB",url:`https://${cfg.domain}/`,inLanguage:cfg.locale});const b=document.querySelector(".footer-international .footer-country-links");if(b)b.innerHTML=sites.map(s=>`<a href="${s.url}"${s.code===cfg.countryCode?' aria-current="page"':' target="_blank" rel="noopener"'}><span aria-hidden="true">${s.flag}</span> ${s.label}</a>`).join("");const i=document.querySelector(".footer-international");if(i&&!i.querySelector(".europe-contact")){const x=document.createElement("p");x.className="europe-contact";x.innerHTML='<a href="mailto:contact@studentbnb.eu">contact@studentbnb.eu</a> · <em>Base & Belong</em>';i.appendChild(x)}alignMap()}function alignMap(){const m=document.querySelector(".country-market-map");if(!m)return;m.querySelector(".market-map-top")?.remove();m.querySelector(".market-map-note")?.remove();const img=m.querySelector(".market-map-image");if(img){img.src="assets/img/country-map-illustrated.svg?v=20260824-master3";img.removeAttribute("srcset");img.style.display="block";img.style.visibility="visible";img.style.opacity="1"}const positions={braga:[47,18.5],porto:[45.5,30.5],aveiro:[43,42.5],coimbra:[45.5,54.5],covilha:[52,47],lisboa:[42.5,65.5],evora:[45,77],faro:[42,86.5]};m.querySelectorAll('.map-city-marker').forEach(a=>{try{const city=new URL(a.href,location.href).searchParams.get('city');const p=positions[city];if(p){a.style.setProperty('--x',p[0]+'%');a.style.setProperty('--y',p[1]+'%')}}catch(_){}});const st=document.createElement("style");st.textContent='.country-market-map{height:650px!important;min-height:650px!important;background:#f7f4eb!important;border:0!important;box-shadow:none!important;padding:0!important;border-radius:0!important}.country-market-map:before{display:none!important}.market-map-canvas{height:100%;padding:0!important}.market-map-visual{max-height:none!important;height:100%!important;aspect-ratio:1/1!important}.market-map-image{display:block!important;visibility:visible!important;opacity:1!important;filter:none!important}.map-city-marker{width:1px!important;height:1px!important;background:transparent!important;border:0!important;box-shadow:none!important}.map-city-marker:after{display:none!important}.map-city-marker span{left:8px!important;background:rgba(255,255,255,.94)!important;border:1px solid rgba(23,23,23,.15)!important;border-radius:9px!important;padding:5px 8px!important;font-size:11px!important;box-shadow:0 3px 10px rgba(0,0,0,.14)!important}.map-city-marker.label-left span{left:auto!important;right:8px!important}.map-city-marker:hover span{background:#ffc400!important}@media(max-width:820px){.country-market-map{height:560px!important;min-height:560px!important}}';document.head.appendChild(st)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply()})();
(function(){if(document.querySelector('script[data-studentbnb-analytics]'))return;const s=document.createElement('script');s.src='assets/js/analytics.js?v=20260824';s.defer=true;s.dataset.studentbnbAnalytics='1';document.head.appendChild(s)})();

(function () {
  const cfg = window.STUDENTBNB_CONFIG || {};
  const casaStudentSites = [
    { code: "EU", label: "Europe", flag: "🇪🇺", url: "https://casastudent.eu/" },
    { code: "IT", label: "Italia", flag: "🇮🇹", url: "https://casastudent.it/" },
    { code: "ES", label: "España", flag: "🇪🇸", url: "https://casastudent.es/" },
    { code: "FR", label: "France", flag: "🇫🇷", url: "https://casastudent.fr/" },
    { code: "DE", label: "Deutschland", flag: "🇩🇪", url: "https://casastudent.de/" },
    { code: "PL", label: "Polska", flag: "🇵🇱", url: "https://casastudent.pl/" }
  ];
  const studentBnBSites = [
    { code: "IT", label: "Italia", flag: "🇮🇹", url: "https://studentbnb.it/" },
    { code: "ES", label: "España", flag: "🇪🇸", url: "https://studentbnb.es/" },
    { code: "FR", label: "France", flag: "🇫🇷", url: "https://studentbnb.fr/" },
    { code: "DE", label: "Deutschland", flag: "🇩🇪", url: "https://student-bnb.de/" },
    { code: "PL", label: "Polska", flag: "🇵🇱", url: "https://studentbnb.pl/" },
    { code: "PT", label: "Portugal", flag: "🇵🇹", url: "https://studentbnb.pt/" }
  ];
  const headings = {
    it: ["Portali CasaStudent", "Portali StudentBnB"],
    es: ["Portales CasaStudent", "Portales StudentBnB"],
    fr: ["Portails CasaStudent", "Portails StudentBnB"],
    de: ["CasaStudent-Portale", "StudentBnB-Portale"],
    pl: ["Portale CasaStudent", "Portale StudentBnB"],
    pt: ["Portais CasaStudent", "Portais StudentBnB"],
    en: ["CasaStudent portals", "StudentBnB portals"]
  };

  function currentFamily() {
    const identity = `${cfg.appName || ""} ${cfg.domain || ""}`.toLowerCase();
    return identity.includes("studentbnb") || identity.includes("student-bnb.de") ? "studentbnb" : "casastudent";
  }

  function removeHeaderFaqAndContacts() {
    document.querySelectorAll(".main-nav a").forEach((link) => {
      const href = (link.getAttribute("href") || "").toLowerCase();
      if (/#(?:faq|contact|contacts|contatti|contatto|contacto)$/.test(href)) link.remove();
    });
  }

  function links(sites, family) {
    const activeFamily = currentFamily();
    return sites.map((site) => {
      const active = family === activeFamily && site.code === (cfg.countryCode || "EU");
      return `<a class="portal-country-link${active ? " is-current" : ""}" href="${site.url}"${active ? ' aria-current="page"' : ""}><span class="portal-country-flag" aria-hidden="true">${site.flag}</span><span>${site.label}</span><span class="network-open" aria-hidden="true">${active ? "✓" : "↗"}</span></a>`;
    }).join("");
  }

  function renderDualFooter() {
    const footer = document.querySelector(".footer-international");
    if (!footer) return;
    const language = (document.documentElement.lang || cfg.locale || "en").slice(0, 2).toLowerCase();
    const labels = headings[language] || headings.en;
    footer.classList.add("dual-portal-footer");
    footer.innerHTML = `
      <section class="portal-family" aria-labelledby="casastudent-network-title">
        <strong class="portal-family-title" id="casastudent-network-title">${labels[0]}</strong>
        <nav class="footer-country-links portal-country-links" aria-label="${labels[0]}">${links(casaStudentSites, "casastudent")}</nav>
      </section>
      <section class="portal-family" aria-labelledby="studentbnb-network-title">
        <strong class="portal-family-title" id="studentbnb-network-title">${labels[1]}</strong>
        <nav class="footer-country-links portal-country-links" aria-label="${labels[1]}">${links(studentBnBSites, "studentbnb")}</nav>
      </section>`;
  }

  function installStyles() {
    if (document.getElementById("dual-portal-footer-style")) return;
    const style = document.createElement("style");
    style.id = "dual-portal-footer-style";
    style.textContent = `
      .footer-international.dual-portal-footer{display:grid!important;gap:18px!important;align-items:stretch!important}
      .dual-portal-footer .portal-family{display:grid;grid-template-columns:minmax(150px,.3fr) minmax(0,1fr);gap:14px 20px;align-items:start}
      .dual-portal-footer .portal-family+.portal-family{padding-top:18px;border-top:1px solid rgba(255,255,255,.18)}
      .dual-portal-footer .portal-family-title{display:block;line-height:1.35;padding-top:9px}
      .dual-portal-footer .portal-country-links{display:flex!important;flex-wrap:wrap!important;gap:9px!important;margin:0!important}
      .dual-portal-footer .portal-country-link{display:inline-flex!important;align-items:center!important;gap:7px!important;min-height:40px;padding:8px 11px!important;border-radius:10px;text-decoration:none}
      .dual-portal-footer .portal-country-link.is-current{font-weight:800;box-shadow:inset 0 0 0 2px currentColor}
      .dual-portal-footer .portal-country-flag{font-size:20px;line-height:1}
      .dual-portal-footer .network-open{margin-left:auto;opacity:.72}
      @media(max-width:720px){
        .dual-portal-footer .portal-family{grid-template-columns:1fr;gap:8px}
        .dual-portal-footer .portal-family-title{padding-top:0}
        .dual-portal-footer .portal-country-links{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}
        .dual-portal-footer .portal-country-link{width:100%;min-width:0}
      }
      @media(max-width:380px){.dual-portal-footer .portal-country-links{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function applyPortalNavigation() {
    removeHeaderFaqAndContacts();
    installStyles();
    renderDualFooter();
  }

  function applyAfterBranding() {
    window.setTimeout(applyPortalNavigation, 0);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", applyAfterBranding);
  else applyAfterBranding();
})();
