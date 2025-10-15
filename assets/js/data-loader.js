// Data loading utilities
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

export async function loadPersonalData() {
  const data = await loadJSON('personal.json');
  if (!data) return;

  // Update personal information in the DOM
  const bioElement = document.querySelector('#about .card');
  if (bioElement) {
    const specializations = data.specializations.map(spec => `<b>${spec}</b>`).join(', ');
    const careerGoals = data.careerGoals.join('</b> and <b>');
    const careerFields = data.careerFields.join('</b>, <b>');

    bioElement.innerHTML = `
      Motivated Industrial Engineering student with a passion for <b>process optimization</b>, <b>productivity improvement</b>, and <b>data‑driven decision‑making</b>. Hands‑on with dashboarding for production efficiency and inventory management. Based in <b>${data.location}</b>.
    `;
  }

  // Update hero section subtitle
  const subtitleElement = document.querySelector('.hero .sub');
  if (subtitleElement) {
    subtitleElement.innerHTML = `
      I'm passionate about process optimization, data‑driven decisions, and building clean dashboards that improve productivity and inventory control. Seeking <b>${data.careerGoals.join('</b> and <b>')}</b> in <b>${data.careerFields.join('</b>, <b>')}</b>.
    `;
  }

  // Update contact section location
  const locationElement = document.querySelector('.contact .muted:last-child');
  if (locationElement) {
    locationElement.textContent = data.location;
  }

  // Update LinkedIn link
  const linkedinLinks = document.querySelectorAll('a[href*="linkedin"]');
  linkedinLinks.forEach(link => {
    if (link.href.includes('linkedin.com')) {
      link.href = data.linkedin;
    }
  });

  // Update phone link
  const phoneLinks = document.querySelectorAll('a[href*="tel:"]');
  phoneLinks.forEach(link => {
    link.href = `tel:${data.phone}`;
  });
}

export async function loadSkillsData() {
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

export async function loadExperienceData() {
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

export async function loadEducationData() {
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
