const I18N = {
  it: {
    heroBadge: "PCTO 2025 - 2026",
    heroTitleLeft: "Gruppo",
    heroTitleSpan: "Cinque",
    heroSub: "Progetti web realizzati durante il Percorso per le Competenze Trasversali e l'Orientamento",
    teamTitle: "Il nostro team",
    groupNum: "Gruppo 5",
    roles: [
      "💻 Sviluppatore",
      "💡 Brainstorming",
      "🗣️ Presentatore",
      "🔎 Ricercatori",
      "🔎 Ricercatori",
      "🔎 Ricercatori"
    ],
    projectsTitle: "I nostri progetti",
    tourTitle: "Biglietti Turistici",
    tourDesc: "Prenota tour guidati, scegli gli extra per ogni partecipante e scarica il biglietto PDF.",
    budgetTitle: "Pianificatore di Budget",
    budgetDesc: "Calcola hotel, trasporti, cibo e attività con grafico delle spese, convertitore di valuta e consigli di risparmio.",
    openProject: "Apri progetto",
    footer: "Realizzato da <span class=\"gold\">Stefano Sciancato</span> · Gruppo 5 · PCTO 2025-2026"
  },
  en: {
    heroBadge: "PCTO 2025 - 2026",
    heroTitleLeft: "Group",
    heroTitleSpan: "Five",
    heroSub: "Web projects created during the Pathway for Transversal Skills and Orientation",
    teamTitle: "Our team",
    groupNum: "Group 5",
    roles: [
      "💻 Developer",
      "💡 Brainstorming",
      "🗣️ Presenter",
      "🔎 Researchers",
      "🔎 Researchers",
      "🔎 Researchers"
    ],
    projectsTitle: "Our projects",
    tourTitle: "Tour Tickets",
    tourDesc: "Book guided tours, choose extras for each participant and download the PDF ticket.",
    budgetTitle: "Budget Planner",
    budgetDesc: "Calculate hotel, transport, food and activities with expense chart, currency converter and saving tips.",
    openProject: "Open project",
    footer: "Created by <span class=\"gold\">Stefano Sciancato</span> · Group 5 · PCTO 2025-2026"
  },
  cs: {
    heroBadge: "PCTO 2025 - 2026",
    heroTitleLeft: "Skupina",
    heroTitleSpan: "Pět",
    heroSub: "Webové projekty vytvořené během programu pro klíčové kompetence a orientaci",
    teamTitle: "Náš tým",
    groupNum: "Skupina 5",
    roles: [
      "💻 Vývojář",
      "💡 Brainstorming",
      "🗣️ Moderátor",
      "🔎 Výzkumníci",
      "🔎 Výzkumníci",
      "🔎 Výzkumníci"
    ],
    projectsTitle: "Naše projekty",
    tourTitle: "Turistické vstupenky",
    tourDesc: "Rezervujte si vedené prohlídky, vyberte doplňky pro každého účastníka a stáhněte si PDF vstupenku.",
    budgetTitle: "Plánovač rozpočtu",
    budgetDesc: "Spočítejte hotel, dopravu, jídlo a aktivity pomocí grafu výdajů, převodníku měn a tipů na úsporu.",
    openProject: "Otevřít projekt",
    footer: "Vytvořil <span class=\"gold\">Stefano Sciancato</span> · Skupina 5 · PCTO 2025-2026"
  }
};

let lang = "it";

const heroBadge = document.getElementById("heroBadge");
const heroTitle = document.getElementById("heroTitle");
const heroSub = document.getElementById("heroSub");
const teamTitle = document.getElementById("teamTitle");
const groupNum = document.getElementById("groupNum");
const projectsTitle = document.getElementById("projectsTitle");
const tourTitle = document.getElementById("tourTitle");
const tourDesc = document.getElementById("tourDesc");
const budgetTitle = document.getElementById("budgetTitle");
const budgetDesc = document.getElementById("budgetDesc");
const openTour = document.getElementById("openTour");
const openBudget = document.getElementById("openBudget");
const footerText = document.getElementById("footerText");
const langSlider = document.getElementById("langSlider");

function updateLangBar(activeBtn) {
  if (!activeBtn || !langSlider) return;
  langSlider.style.width = activeBtn.offsetWidth + "px";
  langSlider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
}

function applyLanguage(newLang) {
  lang = newLang;
  const t = I18N[lang];

  heroBadge.textContent = t.heroBadge;
  heroTitle.innerHTML = `${t.heroTitleLeft} <span>${t.heroTitleSpan}</span>`;
  heroSub.textContent = t.heroSub;
  teamTitle.textContent = t.teamTitle;
  groupNum.textContent = t.groupNum;
  projectsTitle.textContent = t.projectsTitle;
  tourTitle.textContent = t.tourTitle;
  tourDesc.textContent = t.tourDesc;
  budgetTitle.textContent = t.budgetTitle;
  budgetDesc.textContent = t.budgetDesc;
  openTour.innerHTML = `${t.openProject} <span class="arrow">→</span>`;
  openBudget.innerHTML = `${t.openProject} <span class="arrow">→</span>`;
  footerText.innerHTML = t.footer;

  document.title =
    lang === "it"
      ? "Gruppo 5 | PCTO 2025 - 2026"
      : lang === "en"
        ? "Group 5 | PCTO 2025 - 2026"
        : "Skupina 5 | PCTO 2025 - 2026";
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-btn");
  const activeBtn = document.querySelector(".lang-btn.active");

  updateLangBar(activeBtn);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateLangBar(btn);
      applyLanguage(btn.dataset.lang);
    });
  });

  applyLanguage("it");

  const logo = document.getElementById("heroLogo");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.animationDuration = "1.5s";
    });
    logo.addEventListener("mouseleave", () => {
      logo.style.animationDuration = "14s";
    });
  }

  const members = document.querySelectorAll(".member");
  members.forEach((m, i) => {
    m.style.opacity = "0";
    m.style.transform = "translateY(14px)";
    m.style.transition = `opacity 0.4s ease ${0.05 * i + 0.3}s, transform 0.4s ease ${0.05 * i + 0.3}s`;
  });

  const teamCard = document.querySelector(".team-card");
  if (teamCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          members.forEach(m => {
            m.style.opacity = "1";
            m.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(teamCard);
  }

  const cards = document.querySelectorAll(".project-card");
  cards.forEach((c, i) => {
    c.style.opacity = "0";
    c.style.transform = "translateY(20px)";
    c.style.transition = `opacity 0.45s ease ${0.12 * i + 0.2}s, transform 0.45s cubic-bezier(.2,.8,.3,1) ${0.12 * i + 0.2}s, box-shadow 0.22s`;
  });

  const projectsSection = document.querySelector(".projects-section");
  if (projectsSection) {
    const obsCards = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach(c => {
            c.style.opacity = "1";
            c.style.transform = "translateY(0)";
          });
          obsCards.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obsCards.observe(projectsSection);
  }

  const bg = document.querySelector(".bg-layer");
  if (bg && window.innerWidth > 640) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          bg.style.transform = `translateY(${scrollY * 0.25}px)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  const devBadge = document.querySelector(".dev-badge");
  if (devBadge) {
    setTimeout(() => {
      devBadge.style.transition = "box-shadow 0.4s ease";
      devBadge.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.35)";
      setTimeout(() => {
        devBadge.style.boxShadow = "none";
      }, 1400);
    }, 1200);
  }
});