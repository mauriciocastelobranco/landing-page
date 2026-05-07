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
      entry.target.classList.add('show'); // 👈 ADICIONA ISSO
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
document.querySelectorAll('.project-card')
  .forEach(card => observer.observe(card));

// SISTEMA DE TRADUÇÃO
const translations = {
  pt: {
    title: "Desenvolvedor Fullstack",
    subtitle: "Criando experiências digitais modernas",
    cta: "Ver Projetos",
    about: "Sobre mim",
    about_text: "Sou desenvolvedor focado em criar interfaces bonitas, rápidas e responsivas.",
    projects: "Projetos",
    contact: "Contato",
    footer: "Projetado e desenvolvido por Maurício Castelo Branco."
  },
  en: {
    title: "Fullstack Developer",
    subtitle: "Creating modern digital experiences",
    cta: "View Projects",
    about: "About",
    about_text: "I am a developer focused on building beautiful, fast and responsive interfaces.",
    projects: "Projects",
    contact: "Contact",
    footer: "Designed & built by Maurício Castelo Branco."
  },
  es: {
    title: "Desarrollador Fullstack",
    subtitle: "Creando experiencias digitales modernas",
    cta: "Ver Proyectos",
    about: "Sobre mí",
    about_text: "Soy un desarrollador enfocado en crear interfaces bonitas, rápidas y responsivas.",
    projects: "Proyectos",
    contact: "Contacto",
    footer: "Diseñado y desarrollado por Maurício Castelo Branco."
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });

  // destacar botão ativo
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.remove('active');
  });

  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

  localStorage.setItem('lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);
});

function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector('.theme-toggle .icon');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    icon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// carregar ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.querySelector('.theme-toggle .icon');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    icon.textContent = '☀️';
  }
});

const scrollTopBtn = document.querySelector('.menu-toggle');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const footer = document.querySelector('.footer');

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.style.opacity = '1';
      footer.style.transform = 'translateY(0)';
      footer.style.filter = 'blur(0)';
    }
  });
}, {
  threshold: 0.2
});

footerObserver.observe(footer);
