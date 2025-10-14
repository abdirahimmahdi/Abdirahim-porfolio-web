// year
document.getElementById('year').textContent = new Date().getFullYear();

// Data loading utilities (inline to avoid ES6 module issues)
const dataCache = new Map();

async function loadJSON(file) {
  if (dataCache.has(file)) {
    return dataCache.get(file);
  }

  try {
    const response = await fetch(`assets/data/${file}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${file}: ${response.statusText}`);
    }
    const data = await response.json();
    dataCache.set(file, data);
    return data;
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
    return null;
  }
}

async function loadPersonalData() {
  const data = await loadJSON('personal.json');
  if (!data) return;

  // Update hero title
  const heroTitleElement = document.getElementById('hero-title');
  if (heroTitleElement) {
    heroTitleElement.innerHTML = `${data.tagline} <span class="typed" id="typed"></span>`;
  }

  // Update hero subtitle
  const subtitleElement = document.getElementById('hero-subtitle');
  if (subtitleElement) {
    subtitleElement.innerHTML = `
      I'm passionate about ${data.specializations.join(', ')}, and building clean dashboards that improve productivity and inventory control. Seeking <b>${data.careerGoals.join('</b> and <b>')}</b> in <b>${data.careerFields.join('</b>, <b>')}</b>.
    `;
  }

  // Update about kicker
  const aboutKickerElement = document.getElementById('about-kicker');
  if (aboutKickerElement) {
    aboutKickerElement.textContent = data.title;
  }

  // Update about content
  const aboutContentElement = document.getElementById('about-content');
  if (aboutContentElement) {
    aboutContentElement.innerHTML = `
      ${data.bio} Based in <b>${data.location}</b>.
    `;
  }

  // Update contact section location
  const locationElement = document.querySelector('.contact .muted:last-child');
  if (locationElement) {
    locationElement.textContent = data.location;
  }

  // Update LinkedIn link
  const linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink) {
    linkedinLink.href = data.linkedin;
  }

  // Update phone link
  const phoneLinks = document.querySelectorAll('a[href*="tel:"]');
  phoneLinks.forEach(link => {
    link.href = `tel:${data.phone}`;
  });

  // Update typed.js words (we'll set this after initializing typed)
  if (data.careerGoals && data.careerFields) {
    window.typedWords = [
      `${data.careerGoals[0].charAt(0).toUpperCase() + data.careerGoals[0].slice(1)} Seeker`,
      `${data.careerFields[0].charAt(0).toUpperCase() + data.careerFields[0].slice(1)} Enthusiast`,
      `${data.title}`
    ];
  }
}

async function loadSkillsData() {
  const data = await loadJSON('skills.json');
  if (!data || !data.skills) return;

  const skillsContainer = document.querySelector('.skills');
  if (!skillsContainer) return;

  skillsContainer.innerHTML = '';

  data.skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.innerHTML = `
      <b>${skill.name}</b>
      <div class="bar">
        <span data-val="${skill.level}"></span>
      </div>
      <div class="muted">${skill.description}</div>
    `;
    skillsContainer.appendChild(skillElement);
  });
}

async function loadExperienceData() {
  const data = await loadJSON('experience.json');
  if (!data || !data.experience) return;

  const timelineContainer = document.querySelector('.timeline');
  if (!timelineContainer) return;

  timelineContainer.innerHTML = '';

  data.experience.forEach(exp => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item card';
    itemElement.innerHTML = `
      <div class="dot"></div>
      <div style="padding:16px">
        <h3>${exp.title} — ${exp.company}</h3>
        <div class="meta">${exp.location} • ${exp.period}</div>
        <ul>
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    `;
    timelineContainer.appendChild(itemElement);
  });
}

async function loadEducationData() {
  const data = await loadJSON('education.json');
  if (!data || !data.education) return;

  const educationContainer = document.querySelector('#education .card');
  if (!educationContainer) return;

  const education = data.education[0];
  educationContainer.innerHTML = `
    <b>${education.institution}</b> — ${education.degree} (Expected ${education.expectedGraduation}) • GPA ${education.gpa}<br/>
    <div class="list" style="margin-top:10px">
      ${education.courses.map(course => `<span class="pill">${course}</span>`).join('')}
    </div>
  `;
}

// Initialize data loading
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadPersonalData();
    await loadSkillsData();
    await loadExperienceData();
    await loadEducationData();
    console.log('Data loaded successfully');
  } catch (error) {
    console.error('Error loading data:', error);
  }
});

// typed effect (words will be set dynamically from personal.json)
let words = window.typedWords || [
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


