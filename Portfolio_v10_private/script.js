const menu=document.getElementById('menu');const nav=document.getElementById('nav');menu.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

const revealTargets=document.querySelectorAll('section:not(.hero) .eyebrow, section:not(.hero) h2, .cards article, .projects article, .experience article, .two, .contact .btn');
revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=((i%3)*0.08)+'s';});
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15,rootMargin:'0px 0px -60px 0px'});
revealTargets.forEach(el=>io.observe(el));