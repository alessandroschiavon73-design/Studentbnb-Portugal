document.addEventListener('DOMContentLoaded',()=>{
  const money=v=>new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(v||0);
  document.querySelectorAll('.main-nav a').forEach(a=>{const h=(a.getAttribute('href')||'').toLowerCase();if(/#(?:faq|contact|contacto)$/.test(h))a.remove()});

  const request=document.querySelector('#student-request-form');
  if(request){
    const budget=document.querySelector('label[for="request-budget"]');if(budget)budget.textContent='Orçamento máximo para a estadia (€) *';
    let d=document.querySelector('#request-duration');
    if(!d){const g=request.querySelector('.form-grid');if(g){const f=document.createElement('div');f.className='field';f.innerHTML='<label for="request-duration">Duração da estadia *</label><select id="request-duration" name="duration" required><option>1 semana</option><option>2 semanas</option><option>1 mês</option></select>';g.appendChild(f)}}
    const h=document.querySelector('.form-heading h1'),p=document.querySelector('.form-heading p');
    if(h)h.textContent='Encontra casa e colegas para a tua estadia de teste';
    if(p)p.textContent='Escolhe a cidade, o orçamento e se queres ficar uma semana, duas semanas ou um mês.';
  }

  const form=document.querySelector('#publish-form');
  if(form){
    const h=document.querySelector('.form-heading h1'),p=document.querySelector('.form-heading p');
    if(h)h.textContent='Publica uma estadia StudentBnB';
    if(p)p.textContent='Disponibiliza a casa para um período de teste de uma semana, duas semanas ou um mês, com preços e regras claros.';
    const price=document.querySelector('#price'),pl=document.querySelector('label[for="price"]'),ml=document.querySelector('label[for="minimumStay"]'),min=document.querySelector('#minimumStay');
    if(pl)pl.textContent='Renda mensal de referência (€) *';
    if(ml)ml.textContent='Duração disponível *';
    if(min){min.placeholder='1 semana / 2 semanas / 1 mês';if(!min.value)min.value='1 semana / 2 semanas / 1 mês'}
    if(price&&!document.querySelector('#studentbnb-pricing-panel')){
      const box=document.createElement('div');box.id='studentbnb-pricing-panel';box.style.cssText='margin:22px 0 18px;padding:18px;border:1px solid #9fd8d2;border-radius:14px;background:#f0fbf9';
      box.innerHTML='<h3>Preços StudentBnB</h3><p>Define os preços para 1 semana, 2 semanas e 1 mês. A sugestão parte da renda mensal de referência com uma majoração ajustável.</p><div class="form-grid three"><div class="field"><label for="studentbnb-uplift">Majoração</label><select id="studentbnb-uplift"><option value="20">+20%</option><option value="25" selected>+25% recomendado</option><option value="30">+30%</option></select></div><div class="field"><label for="studentbnb-price-7">7 dias (€) *</label><input id="studentbnb-price-7" name="studentbnbPrice7" type="number" min="1" required></div><div class="field"><label for="studentbnb-price-14">14 dias (€) *</label><input id="studentbnb-price-14" name="studentbnbPrice14" type="number" min="1" required></div><div class="field"><label for="studentbnb-price-30">30 dias (€) *</label><input id="studentbnb-price-30" name="studentbnbPrice30" type="number" min="1" required></div></div><p id="studentbnb-price-summary" class="micro-note"></p>';
      price.closest('.form-grid')?.after(box);
    }
    const box=document.querySelector('#studentbnb-pricing-panel');
    if(price&&box){const u=box.querySelector('#studentbnb-uplift'),p7=box.querySelector('#studentbnb-price-7'),p14=box.querySelector('#studentbnb-price-14'),p30=box.querySelector('#studentbnb-price-30'),s=box.querySelector('#studentbnb-price-summary');const calc=()=>{const m=+price.value||0,pct=+u.value||25;if(!m){s.textContent='Introduz primeiro a renda mensal de referência.';return}const m30=Math.round(m*(1+pct/100)),v7=Math.round(m30/4),v14=Math.round(m30/2);if(!p7.dataset.edited)p7.value=v7;if(!p14.dataset.edited)p14.value=v14;if(!p30.dataset.edited)p30.value=m30;s.textContent=`Referência ${money(m)} → StudentBnB +${pct}%: ${money(v7)} / 7 dias, ${money(v14)} / 14 dias, ${money(m30)} / 30 dias.`};price.addEventListener('input',calc);u.addEventListener('change',()=>{[p7,p14,p30].forEach(x=>delete x.dataset.edited);calc()});[p7,p14,p30].forEach(x=>x.addEventListener('input',()=>x.dataset.edited='1'));calc()}
  }
});

(function(){if(document.querySelector('script[data-city-visuals]'))return;const s=document.createElement('script');s.src='assets/js/city-visuals.js?v=20260830-real-city-photos';s.defer=true;s.dataset.cityVisuals='1';document.head.appendChild(s)})();

(function(){const apply=()=>{const canonical=document.querySelector('link[rel="canonical"]')?.href||location.href,description=document.querySelector('meta[name="description"]')?.content||'';let schema=document.querySelector('#studentbnb-webpage-schema');if(!schema){schema=document.createElement('script');schema.id='studentbnb-webpage-schema';schema.type='application/ld+json';document.head.appendChild(schema)}schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:document.title,url:canonical,description,inLanguage:document.documentElement.lang||'pt-PT'})};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(apply,0));else setTimeout(apply,0)})();
