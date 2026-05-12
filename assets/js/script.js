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
    title: "Maurício Castelo Branco",
    subtitle:
      "Desenvolvedor Full Stack focado em criar aplicações modernas, escaláveis e orientadas à experiência do usuário.",
    cta: "Ver Projetos",
    about: "Sobre mim",
    about_text_1:
    "Sou um desenvolvedor apaixonado por construir soluções que resolvem problemas reais com eficiência e elegância. Minha trajetória profissional consolidou-se na Administração Imobiliária, um setor que me exigiu extrema organização, resiliência e comunicação interpessoal assertiva.",
    about_text_2:
      "Hoje, traduzo essa bagagem para a tecnologia. Como desenvolvedor Full Stack, foco meu trabalho no ecossistema Ruby on Rails e em ferramentas modernas. Mais do que escrever código, aplico pensamento analítico e proatividade para entender regras de negócio e antecipar soluções.",
    about_text_3:
      "Sou um entusiasta do aprendizado contínuo e da colaboração em equipe, acreditando que adaptabilidade é tão fundamental quanto a escolha da stack tecnológica. Meu objetivo é unir maturidade profissional e rigor técnico para entregar aplicações limpas, escaláveis e de alto impacto.",
    projects: "Projetos",
    project1_text: "Uma plataforma web desenvolvida para otimizar a gestão de cuidados diários de pacientes. O sistema permite que cuidadores organizem rotinas de medicação, higiene e alimentação, garantindo que o histórico de saúde seja registrado de forma precisa e acessível. O foco principal é reduzir falhas de comunicação e proporcionar tranquilidade para as famílias e profissionais envolvidos.",
    project_link: "Ver Projeto",
    contact: "Contato",
    contact_title: "Vamos construir algo incrível juntos.",
    contact_text: "Estou disponível para oportunidades e projetos que valorizem design, performance e experiência do usuário.",
    contact_button: "Vamos conversar",
    footer: "Projetado e desenvolvido por Maurício Castelo Branco."
  },
  en: {
    title: "Maurício Castelo Branco",
    subtitle:
      "Full Stack Developer focused on building modern, scalable applications with exceptional user experiences.",
    cta: "View Projects",
    about: "About",
    about_text_1:
      "I am a developer passionate about building solutions that solve real-world problems with efficiency and elegance. My professional career was established in Real Estate Administration, a field that demanded strong organization, resilience, and assertive communication.",
    about_text_2:
      "Today, I translate that background into technology. As a Full Stack Developer, I focus my work on the Ruby on Rails ecosystem and modern tools. Beyond writing code, I apply analytical thinking and proactivity to understand business rules and anticipate solutions.",

    about_text_3:
      "I am passionate about continuous learning and team collaboration, believing adaptability is just as important as the choice of tech stack. My goal is to combine professional maturity with technical rigor to deliver clean, scalable, and high-impact applications.",
    Tech: "Tools & Technologies",
    projects: "Projects",
    project1_text: "A web platform developed to optimize the management of patients' daily care. The system allows caregivers to organize medication, hygiene, and feeding routines, ensuring that health history is recorded accurately and accessibly. The main focus is to reduce communication failures and provide peace of mind for families and professionals involved.",
    project_link: "View Project",
    contact: "Contact",
    contact_title: "Let's build something amazing together.",
    contact_text: "I'm available for opportunities and projects that value design, performance, and user experience.",
    contact_button: "Let's talk",
    footer: "Designed & built by Maurício Castelo Branco."
  },
  es: {
    title: "Maurício Castelo Branco",
    subtitle:
      "Desarrollador Full Stack enfocado en crear aplicaciones modernas, escalables y centradas en la experiencia del usuario.",
    cta: "Ver Proyectos",
    about: "Sobre mí",
    about_text_1:
      "Soy un desarrollador apasionado por construir soluciones que resuelven problemas reales con eficiencia y elegancia. Mi trayectoria profesional se consolidó en la Administración Inmobiliaria, un sector que exigió organización, resiliencia y comunicación asertiva.",
    about_text_2:
      "Hoy traduzco esa experiencia al mundo de la tecnología. Como desarrollador Full Stack, enfoco mi trabajo en el ecosistema Ruby on Rails y herramientas modernas. Más que escribir código, aplico pensamiento analítico y proactividad para comprender reglas de negocio.",
    about_text_3:
      "Soy un entusiasta del aprendizaje continuo y de la colaboración en equipo, creyendo que la adaptabilidad es tan importante como la elección del stack tecnológico. Mi objetivo es unir madurez profesional y rigor técnico para crear aplicaciones limpias y escalables.",
    Tech: "Herramientas & Tecnologías",
    projects: "Proyectos",
    project1_text: "Una plataforma web desarrollada para optimizar la gestión de los cuidados diarios de los pacientes. El sistema permite a los cuidadores organizar las rutinas de medicación, higiene y alimentación, asegurando que el historial de salud se registre de manera precisa y accesible. El enfoque principal es reducir las fallas de comunicación y brindar tranquilidad a las familias y profesionales involucrados.",
    project_link: "Ver proyecto",
    contact: "Contacto",
    contact_title: "Construyamos algo increíble juntos.",
    contact_text: "Estoy disponible para oportunidades y proyectos que valoren el diseño, el rendimiento y la experiencia del usuario.",
    contact_button: "Hablemos",
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
