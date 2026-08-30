document.addEventListener('DOMContentLoaded',()=>{
  const hero=document.querySelector('.home-hero .hero-copy');
  const brand=document.querySelector('.site-header .brand');if(brand)brand.setAttribute('aria-label','StudentBnB home');
  if(hero){
    document.title='StudentBnB — Alojamento temporário para estudantes | 1 semana, 2 semanas ou 1 mês';
    const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Alojamento temporário para estudantes em residências, casas partilhadas e apartamentos de estudantes. Encontra um quarto por uma semana, duas semanas ou um mês para Erasmus, estágio, cursos ou estadias universitárias curtas.');
    const h=hero.querySelector('h1'),p=hero.querySelector(':scope > p');hero.querySelectorAll('.studentbnb-tagline,.studentbnb-duration-options').forEach(el=>el.remove());
    if(h){h.innerHTML='Vive por algum tempo no centro da <span>vida estudantil.</span>';const t=document.createElement('div');t.className='studentbnb-tagline';t.textContent='A tua estadia temporária, entre estudantes.';h.before(t);}
    if(p){p.classList.add('studentbnb-concept');p.textContent='Encontra um quarto numa residência, numa casa partilhada por estudantes ou num apartamento estudantil para Erasmus, estágio, cursos, exames ou algumas semanas noutra cidade.';const d=document.createElement('div');d.className='studentbnb-duration-options';d.innerHTML='<strong>1 semana</strong><span>•</span><strong>2 semanas</strong><span>•</span><strong>1 mês</strong>';p.after(d);}
    const sh=hero.querySelector('.search-card h2');if(sh)sh.textContent='Onde queres ficar?';
  }
  const intl=document.querySelector('.footer-international > strong');if(intl)intl.textContent='Para estadias mais longas: CasaStudent';
  const copy=document.querySelector('.footer-bottom span:first-child');if(copy)copy.textContent='© 2026 StudentBnB';
  const login=document.querySelector('#login-title');if(login)login.textContent='Entrar no StudentBnB';
  const f=document.querySelector('.site-footer .container')||document.querySelector('footer');if(f&&!f.querySelector('.casastudent-family')){const b=document.createElement('div');b.className='casastudent-family';b.innerHTML='StudentBnB é dedicado a estadias temporárias dentro da comunidade estudantil. Para uma solução mais estável, visita <a href="https://casastudent.eu/">CasaStudent ↗</a>.';f.appendChild(b)}
});
