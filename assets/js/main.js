// year
document.getElementById('year').textContent = new Date().getFullYear();

// typed effect
const words = [
  'Data Analysis Enthusiast',
  'Process Optimizer',
  'Operations & Supply Chain Learner'
];
let wi=0, ci=0; const typedEl = document.getElementById('typed');
function type(){
  if(ci<=words[wi].length){ typedEl.textContent = words[wi].slice(0,ci++); setTimeout(type, 70); }
  else setTimeout(erase, 1200);
}
function erase(){
  if(ci>=0){ typedEl.textContent = words[wi].slice(0,ci--); setTimeout(erase, 40); }
  else { wi=(wi+1)%words.length; setTimeout(type, 300);} }
type();

// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);
    // animate bars inside this section
    e.target.querySelectorAll('.bar>span').forEach(b=>{
      const v = b.getAttribute('data-val')||0; requestAnimationFrame(()=>{ b.style.width = v+'%'; });
    });
  }});
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// metric counters
function countUp(el){
  const target = parseFloat(el.dataset.count); const isInt = Number.isInteger(target); let cur=0; const steps=60; const inc = target/steps; let i=0;
  const tick=()=>{ i++; cur+=inc; if(i>=steps){ el.textContent = isInt? Math.round(target): target.toFixed(2);} 
    else { el.textContent = isInt? Math.round(cur) : cur.toFixed(2); requestAnimationFrame(tick);} };
  tick();
}
document.querySelectorAll('.num').forEach(n=>countUp(n));

// contact form (Formspree)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const statusEl = document.getElementById('formStatus');
  const sendBtn = document.getElementById('sendBtn');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      statusEl.textContent = 'Please fill all required fields correctly.';
      return;
    }
    statusEl.textContent = 'Sending...';
    sendBtn.disabled = true;
    try {
      const formData = new FormData(contactForm);
      const resp = await fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (resp.ok) {
        statusEl.textContent = 'Thanks! Your message has been sent.';
        contactForm.reset();
      } else {
        statusEl.textContent = 'Sorry, something went wrong. Please try again.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error. Please try again later.';
    } finally {
      sendBtn.disabled = false;
    }
  });
}

// Note: removed the old placeholder downloadCV handler. Resume controls are in-page.


