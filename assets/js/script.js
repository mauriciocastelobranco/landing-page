// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const elements = document.querySelectorAll('[data-animate]');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// SISTEMA DE TRADUÇÃO
const translations = {
  pt: {
    title: "Desenvolvedor Front-End",
    subtitle: "Criando experiências digitais modernas",
    cta: "Ver Projetos",
    about: "Sobre",
    about_text: "Sou desenvolvedor focado em criar interfaces bonitas, rápidas e responsivas.",
    projects: "Projetos",
    contact: "Contato"
  },
  en: {
    title: "Front-End Developer",
    subtitle: "Creating modern digital experiences",
    cta: "View Projects",
    about: "About",
    about_text: "I am a developer focused on building beautiful, fast and responsive interfaces.",
    projects: "Projects",
    contact: "Contact"
  },
  es: {
    title: "Desarrollador Front-End",
    subtitle: "Creando experiencias digitales modernas",
    cta: "Ver Proyectos",
    about: "Sobre mí",
    about_text: "Soy un desarrollador enfocado en crear interfaces bonitas, rápidas y responsivas.",
    projects: "Proyectos",
    contact: "Contacto"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
}

function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// carregar preferência
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
});
