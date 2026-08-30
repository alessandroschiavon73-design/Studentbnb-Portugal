(function(){
  if(window.__STUDENTBNB_PT_CITY_VISUALS__)return;window.__STUDENTBNB_PT_CITY_VISUALS__=true;
  const file=name=>'https://commons.wikimedia.org/wiki/Special:Redirect/file/'+encodeURIComponent(name);
  const images={
    lisboa:file('Panorama of Lisbon.jpg'),
    porto:file('Panoramic view of Porto, Portugal.jpg'),
    coimbra:file('Coimbra panoramica.JPG'),
    braga:file('Braga Panorama.jpg'),
    aveiro:file('Aveiro, Portugal - panoramio (3).jpg'),
    covilha:file('Perspectiva da Covilhã.jpg'),
    evora:file('Evora panorama.jpg'),
    faro:file('Faro aerial view.jpg')
  };
  const st=document.createElement('style');st.id='studentbnb-pt-city-visuals';st.textContent='.city-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:16px!important}.city-card{display:flex!important;flex-direction:column!important;min-height:205px!important;aspect-ratio:auto!important;border-radius:14px!important;overflow:hidden!important;background:#fff!important;background-image:none!important;border:1px solid rgba(20,31,45,.09)!important;box-shadow:0 6px 18px rgba(20,31,45,.08)!important}.city-card>img{display:block!important;width:100%!important;height:145px!important;min-height:145px!important;object-fit:cover!important;object-position:center!important;position:static!important;opacity:1!important}.city-card>strong{display:block!important;position:static!important;padding:12px 14px 14px!important;color:#171717!important;font-size:17px!important;text-shadow:none!important;background:#fff!important}.city-card:before{display:none!important}.city-hero{position:relative!important;height:clamp(390px,42vw,520px)!important;min-height:390px!important;overflow:hidden!important;color:#fff!important}.city-hero-bg{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;background-position:center center!important;background-size:cover!important;background-repeat:no-repeat!important}.city-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,18,25,.12),rgba(12,18,25,.72));z-index:1;pointer-events:none}.city-hero>.container{position:relative!important;z-index:2!important}@media(max-width:820px){.city-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}.city-card>img{height:112px!important;min-height:112px!important}.city-card{min-height:175px!important}.city-hero{height:clamp(360px,82vw,440px)!important;min-height:360px!important}.city-hero-bg{background-position:center center!important}}';document.head.appendChild(st);
  function slugFromHref(href){try{return new URL(href,location.href).searchParams.get('city')||''}catch(_){return''}}
  function apply(){
    document.querySelectorAll('.city-card').forEach(card=>{const slug=slugFromHref(card.getAttribute('href')||'');const src=images[slug];if(!src)return;const img=card.querySelector(':scope > img');if(img){img.src=src;img.removeAttribute('srcset');img.alt=(card.querySelector(':scope > strong')?.textContent||slug).trim();}});
    const slug=new URLSearchParams(location.search).get('city')||'';const src=images[slug];if(src){const bg=document.querySelector('.city-hero-bg');if(bg)bg.style.backgroundImage='url("'+src.replace(/"/g,'%22')+'")';const heroImg=document.querySelector('.city-hero img');if(heroImg){heroImg.src=src;heroImg.removeAttribute('srcset');}}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();window.addEventListener('load',apply);setTimeout(apply,200);
})();
