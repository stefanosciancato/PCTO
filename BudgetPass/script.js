const DESTINATIONS = {
  praga: {
    bg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    label: { it: "🇨🇿 Praga", en: "🇨🇿 Prague", cs: "🇨🇿 Praha" },
    tips: {
      it: [
        { icon: "🚇", text: "Usa la metro: economica e velocissima per spostarsi." },
        { icon: "🥨", text: "Mangia trdelník e svíčková nei ristoranti locali del centro storico." },
        { icon: "🏛️", text: "Il castello è gratuito dal tramonto all'alba." }
      ],
      en: [
        { icon: "🚇", text: "Use the metro: cheap and fast to get around." },
        { icon: "🥨", text: "Eat trdelník and svíčková at local restaurants in the old town." },
        { icon: "🏛️", text: "The castle is free from dusk to dawn." }
      ],
      cs: [
        { icon: "🚇", text: "Využijte metro: levné a rychlé." },
        { icon: "🥨", text: "Jezte trdelník a svíčkovou v místních restauracích." },
        { icon: "🏛️", text: "Hrad je od soumraku do úsvitu zdarma." }
      ]
    }
  },
  roma: {
    bg: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80",
    label: { it: "🇮🇹 Roma", en: "🇮🇹 Rome", cs: "🇮🇹 Řím" },
    tips: {
      it: [
        { icon: "🍕", text: "Evita i ristoranti vicino ai monumenti: prezzi triplicati." },
        { icon: "🎟️", text: "Prenota il Colosseo online con almeno 3 giorni di anticipo." },
        { icon: "🚌", text: "Il pass giornaliero mezzi costa solo €7." }
      ],
      en: [
        { icon: "🍕", text: "Avoid restaurants near monuments: prices are triple." },
        { icon: "🎟️", text: "Book the Colosseum online at least 3 days in advance." },
        { icon: "🚌", text: "Daily transport pass costs only €7." }
      ],
      cs: [
        { icon: "🍕", text: "Vyhněte se restauracím u památek: ceny jsou trojnásobné." },
        { icon: "🎟️", text: "Kolosseum rezervujte online alespoň 3 dny předem." },
        { icon: "🚌", text: "Denní jízdenka stojí jen €7." }
      ]
    }
  },
  parigi: {
    bg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    label: { it: "🇫🇷 Parigi", en: "🇫🇷 Paris", cs: "🇫🇷 Paříž" },
    tips: {
      it: [
        { icon: "🗼", text: "La Torre Eiffel è gratuita per i minori di 12 anni." },
        { icon: "🥐", text: "La colazione in boulangerie costa la metà di un café turistico." },
        { icon: "🎨", text: "Il Louvre è gratuito la prima domenica del mese." }
      ],
      en: [
        { icon: "🗼", text: "The Eiffel Tower is free for children under 12." },
        { icon: "🥐", text: "Breakfast at a boulangerie costs half a tourist café." },
        { icon: "🎨", text: "The Louvre is free the first Sunday of every month." }
      ],
      cs: [
        { icon: "🗼", text: "Eiffelova věž je zdarma pro děti do 12 let." },
        { icon: "🥐", text: "Snídaně v boulangerii stojí polovinu turistické kavárny." },
        { icon: "🎨", text: "Louvre je zdarma první neděli každého měsíce." }
      ]
    }
  },
  barcelona: {
    bg: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=80",
    label: { it: "🇪🇸 Barcellona", en: "🇪🇸 Barcelona", cs: "🇪🇸 Barcelona" },
    tips: {
      it: [
        { icon: "🚇", text: "T-Casual 10 viaggi: il modo più economico per muoversi." },
        { icon: "🏖️", text: "Le spiagge della Barceloneta sono gratuite e bellissime." },
        { icon: "🍷", text: "Il menù del giorno a pranzo nei bar locali costa €10-12." }
      ],
      en: [
        { icon: "🚇", text: "T-Casual 10 trips: the cheapest way to get around." },
        { icon: "🏖️", text: "Barceloneta beaches are free and beautiful." },
        { icon: "🍷", text: "Lunch menu at local bars costs €10-12." }
      ],
      cs: [
        { icon: "🚇", text: "T-Casual 10 jízd: nejlevnější způsob dopravy." },
        { icon: "🏖️", text: "Barcelonetské pláže jsou zdarma a krásné." },
        { icon: "🍷", text: "Polední menu v místních barech stojí €10-12." }
      ]
    }
  },
  amsterdam: {
    bg: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=80",
    label: { it: "🇳🇱 Amsterdam", en: "🇳🇱 Amsterdam", cs: "🇳🇱 Amsterdam" },
    tips: {
      it: [
        { icon: "🚲", text: "Noleggia una bici: il modo più economico e autentico di girare." },
        { icon: "🎫", text: "La I Amsterdam City Card include musei e trasporti." },
        { icon: "🧀", text: "I mercati locali offrono ottimo cibo a prezzi bassi." }
      ],
      en: [
        { icon: "🚲", text: "Rent a bike: the cheapest and most authentic way to explore." },
        { icon: "🎫", text: "The I Amsterdam City Card includes museums and transit." },
        { icon: "🧀", text: "Local markets offer great food at low prices." }
      ],
      cs: [
        { icon: "🚲", text: "Půjčte si kolo: nejlevnější a nejautentičtější způsob průzkumu." },
        { icon: "🎫", text: "I Amsterdam City Card zahrnuje muzea a dopravu." },
        { icon: "🧀", text: "Místní trhy nabízejí skvělé jídlo za nízké ceny." }
      ]
    }
  }
};

const BASE_RATES = { EUR: 1, USD: 1.1765, CZK: 24.333 };
let rates = { ...BASE_RATES };

const GROUP_EXPENSES = [
  { key: "hotel", icon: "🏨", labelKey: "lbl_hotel", mode: "night" },
  { key: "trasporto", icon: "✈️", labelKey: "lbl_trasporto", mode: "fixed" },
  { key: "cibo", icon: "🍽️", labelKey: "lbl_cibo", mode: "day" },
  { key: "attivita", icon: "🎭", labelKey: "lbl_attivita", mode: "day" },
  { key: "altro", icon: "🛍️", labelKey: "lbl_altro", mode: "fixed" }
];

const I18N = {
  it: {
    title: "BudgetPass",
    slogan: "Pianifica le spese, viaggia sereno",
    lbl_destinazione: "Destinazione",
    lbl_modalita: "Modalità di calcolo",
    mode_single: "Singolo",
    mode_group: "Gruppo",
    lbl_persone: "Numero persone",
    people_note: "Ogni persona ha le sue spese",
    lbl_giorni: "Date del viaggio",
    giorni_unit: "Seleziona un intervallo per calcolare i giorni",
    lbl_valuta: "Valuta",
    lbl_hotel: "Hotel (per notte)",
    lbl_trasporto: "Trasporto (totale A/R)",
    lbl_cibo: "Cibo (al giorno)",
    lbl_attivita: "Attività turistiche (al giorno)",
    lbl_altro: "Altro / Shopping (totale)",
    spese_titolo: "Voci di spesa",
    spese_sub: "per notte / per tratta / al giorno",
    lbl_giornaliero: "Budget / giorno",
    lbl_totale: "Totale viaggio",
    btn_calcola: "Calcola budget",
    currency_eur: "Euro (EUR)",
    currency_czk: "Corona ceca (CZK)",
    currency_usd: "Dollaro USA (USD)",
    ready_title: "Budget pronto!",
    ready_text: "Ecco il tuo piano di spesa. Scarica il PDF per averlo sempre con te.",
    btn_download: "⬇ Scarica PDF",
    btn_back: "← Torna indietro",
    lbl_person_view: "Persona da vedere",
    err_voci: "Inserisci almeno una voce di spesa.",
    err_nome: "Inserisci nome e cognome per ogni persona.",
    err_nome_spazio: "Il nome deve contenere nome e cognome separati da uno spazio.",
    err_persone: "Inserisci almeno 2 persone per il calcolo di gruppo.",
    pdf_nome: "Budget_Viaggio",
    pdf_group: "CALCOLO GRUPPO",
    pdf_person: "Persona",
    badge_max: "Più costoso",
    badge_min: "Più economico",
    chart_title_single: "Distribuzione spese",
    chart_title_group: "Totale per persona",
    ticket_giorni: "giorni di viaggio",
    pdf_budget_giornaliero: "Budget giornaliero",
    pdf_totale: "TOTALE VIAGGIO",
    pdf_footer: "Documento generato da BudgetPass | buon viaggio!"
  },
  en: {
    title: "BudgetPass",
    slogan: "Plan your expenses, travel worry-free",
    lbl_destinazione: "Destination",
    lbl_modalita: "Calculation mode",
    mode_single: "Single",
    mode_group: "Group",
    lbl_persone: "Number of people",
    people_note: "Each person has their own expenses",
    lbl_giorni: "Travel dates",
    giorni_unit: "Select a range to calculate the days",
    lbl_valuta: "Currency",
    lbl_hotel: "Hotel (per night)",
    lbl_trasporto: "Transport (total round trip)",
    lbl_cibo: "Food (per day)",
    lbl_attivita: "Tourist activities (per day)",
    lbl_altro: "Other / Shopping (total)",
    spese_titolo: "Expense breakdown",
    spese_sub: "per night / total / per day",
    lbl_giornaliero: "Budget / day",
    lbl_totale: "Trip total",
    btn_calcola: "Calculate budget",
    currency_eur: "Euro (EUR)",
    currency_czk: "Czech koruna (CZK)",
    currency_usd: "US dollar (USD)",
    ready_title: "Budget ready!",
    ready_text: "Here is your spending plan. Download the PDF to always have it handy.",
    btn_download: "⬇ Download PDF",
    btn_back: "← Go back",
    lbl_person_view: "Person to view",
    err_voci: "Enter at least one expense.",
    err_nome: "Enter first and last name for each person.",
    err_nome_spazio: "The name must include first and last name separated by a space.",
    err_persone: "Enter at least 2 people for group calculation.",
    pdf_nome: "Travel_Budget",
    pdf_group: "GROUP CALCULATION",
    pdf_person: "Person",
    badge_max: "Most expensive",
    badge_min: "Cheapest",
    chart_title_single: "Expense breakdown",
    chart_title_group: "Total per person",
    ticket_giorni: "days of travel",
    pdf_budget_giornaliero: "Daily budget",
    pdf_totale: "TOTAL TRAVEL COST",
    pdf_footer: "Generated by BudgetPass | have a great trip!"
  },
  cs: {
    title: "BudgetPass",
    slogan: "Plánujte výdaje, cestujte v klidu",
    lbl_destinazione: "Destinace",
    lbl_modalita: "Režim výpočtu",
    mode_single: "Jednotlivec",
    mode_group: "Skupina",
    lbl_persone: "Počet osob",
    people_note: "Každá osoba má své výdaje",
    lbl_giorni: "Datum cesty",
    giorni_unit: "Vyberte rozsah pro výpočet dnů",
    lbl_valuta: "Měna",
    lbl_hotel: "Hotel (za noc)",
    lbl_trasporto: "Doprava (celkem tam a zpět)",
    lbl_cibo: "Jídlo (za den)",
    lbl_attivita: "Turistické aktivity (za den)",
    lbl_altro: "Ostatní / Nákupy (celkem)",
    spese_titolo: "Položky výdajů",
    spese_sub: "za noc / celkem / za den",
    lbl_giornaliero: "Rozpočet / den",
    lbl_totale: "Celkem za cestu",
    btn_calcola: "Vypočítat rozpočet",
    currency_eur: "Euro (EUR)",
    currency_czk: "Česká koruna (CZK)",
    currency_usd: "Americký dolar (USD)",
    ready_title: "Rozpočet připraven!",
    ready_text: "Zde je váš plán výdajů. Stáhněte si PDF, abyste ho měli vždy po ruce.",
    btn_download: "⬇ Stáhnout PDF",
    btn_back: "← Zpět",
    lbl_person_view: "Osoba k zobrazení",
    err_voci: "Zadejte alespoň jednu položku výdajů.",
    err_nome: "Zadejte jméno a příjmení pro každou osobu.",
    err_nome_spazio: "Jméno musí obsahovat jméno a příjmení oddělené mezerou.",
    err_persone: "Pro skupinový výpočet zadejte alespoň 2 osoby.",
    pdf_nome: "Cestovni_Rozpocet",
    pdf_group: "SKUPINOVÝ VÝPOČET",
    pdf_person: "Osoba",
    badge_max: "Nejdražší",
    badge_min: "Nejlevnější",
    chart_title_single: "Rozložení výdajů",
    chart_title_group: "Celkem na osobu",
    ticket_giorni: "dní cesty",
    pdf_budget_giornaliero: "Denní rozpočet",
    pdf_totale: "CELKOVÉ NÁKLADY NA CESTU",
    pdf_footer: "Vygenerováno BudgetPass | hezkou cestu!"
  }
};

let lang = "it";
let t = I18N[lang];
let currentBgLayer = "A";
let chartInstance = null;
let currentResultData = null;
let selectedPersonIndex = 0;
let datePicker = null;

const destSelect = document.getElementById("destinazione");
const calcMode = document.getElementById("calcoloMode");
const groupPeopleWrap = document.getElementById("groupPeopleWrap");
const groupContainer = document.getElementById("groupContainer");
const singleSpeseSection = document.getElementById("singleSpeseSection");
const peopleInput = document.getElementById("numPersone");
const peopleMinus = document.getElementById("peopleMinus");
const peoplePlus = document.getElementById("peoplePlus");
const currencySelect = document.getElementById("valutaSelect");
const btnCalcola = document.getElementById("btnCalcola");
const statusMsg = document.getElementById("statusMessage");
const budgetCard = document.getElementById("budgetCard");
const resultView = document.getElementById("resultView");
const downloadLink = document.getElementById("downloadPdfLink");
const backBtn = document.getElementById("backBtn");
const ticketBody = document.getElementById("ticketBody");
const ticketDestDisp = document.getElementById("ticketDestDisplay");
const ticketGiorni = document.getElementById("ticketGiorni");
const ticketTotal = document.getElementById("ticketTotal");
const ticketInsight = document.getElementById("ticketInsight");
const tipsBox = document.getElementById("tipsBox");
const dailyDisplay = document.getElementById("dailyDisplay");
const totalDisplay = document.getElementById("totalDisplay");
const bgA = document.getElementById("bgA");
const bgB = document.getElementById("bgB");
const personBar = document.getElementById("personBar");
const personSelect = document.getElementById("personSelect");
const dateRangeInput = document.getElementById("dateRange");

const SINGLE_INPUTS = {
  hotel: { el: document.getElementById("inpHotel"), totEl: document.getElementById("tot-hotel"), mode: "night" },
  trasporto: { el: document.getElementById("inpTrasporto"), totEl: document.getElementById("tot-trasporto"), mode: "fixed" },
  cibo: { el: document.getElementById("inpCibo"), totEl: document.getElementById("tot-cibo"), mode: "day" },
  attivita: { el: document.getElementById("inpAttivita"), totEl: document.getElementById("tot-attivita"), mode: "day" },
  altro: { el: document.getElementById("inpAltro"), totEl: document.getElementById("tot-altro"), mode: "fixed" }
};

const FP_LOCALES = {
  it: window.flatpickr?.l10ns?.it,
  en: window.flatpickr?.l10ns?.default,
  cs: window.flatpickr?.l10ns?.cs
};

function setBackground(url) {
  if (currentBgLayer === "A") {
    bgB.style.backgroundImage = `url('${url}')`;
    bgB.style.opacity = "1";
    bgA.style.opacity = "0";
    currentBgLayer = "B";
  } else {
    bgA.style.backgroundImage = `url('${url}')`;
    bgA.style.opacity = "1";
    bgB.style.opacity = "0";
    currentBgLayer = "A";
  }
}

function setupLangBar() {
  const btns = document.querySelectorAll(".lang-btn");
  const slider = document.getElementById("langSlider");

  function moveSlider(btn) {
    slider.style.width = btn.offsetWidth + "px";
    slider.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  const activeBtn = document.querySelector(".lang-btn.active");
  if (activeBtn) setTimeout(() => moveSlider(activeBtn), 50);

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      moveSlider(btn);
      applyLanguage(btn.dataset.lang);
    });
  });
}

function buildDestOptions() {
  const cur = destSelect.value || "praga";
  destSelect.innerHTML = "";
  Object.entries(DESTINATIONS).forEach(([key, dest]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = dest.label[lang];
    destSelect.appendChild(opt);
  });
  destSelect.value = cur in DESTINATIONS ? cur : "praga";
}

function buildCurrencyOptions() {
  const cur = currencySelect.value || "EUR";
  currencySelect.innerHTML = "";
  [["EUR", t.currency_eur], ["CZK", t.currency_czk], ["USD", t.currency_usd]].forEach(([v, lbl]) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = lbl;
    currencySelect.appendChild(opt);
  });
  currencySelect.value = ["EUR", "CZK", "USD"].includes(cur) ? cur : "EUR";
}

function buildModeOptions() {
  const cur = calcMode.value || "single";
  calcMode.innerHTML = "";
  [["single", t.mode_single], ["group", t.mode_group]].forEach(([v, lbl]) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = lbl;
    calcMode.appendChild(opt);
  });
  calcMode.value = cur === "group" ? "group" : "single";
}

function isGroupMode() {
  return calcMode.value === "group";
}

function getDays() {
  if (!datePicker || !datePicker.selectedDates || datePicker.selectedDates.length < 2) return 1;
  const start = new Date(datePicker.selectedDates[0]);
  const end = new Date(datePicker.selectedDates[1]);
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const diff = Math.round((endDay - startDay) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(30, diff));
}

function getDateRangeText() {
  if (!datePicker || !datePicker.selectedDates || datePicker.selectedDates.length < 2) {
    return "-";
  }
  const start = formatDate(datePicker.selectedDates[0]);
  const end = formatDate(datePicker.selectedDates[1]);
  return `${start} → ${end}`;
}

function formatDate(date) {
  return date.toLocaleDateString(
    lang === "cs" ? "cs-CZ" : lang === "en" ? "en-GB" : "it-IT",
    { day: "2-digit", month: "2-digit", year: "numeric" }
  );
}

function convertFromEur(amountEur) {
  const cur = currencySelect.value;
  if (cur === "EUR") return amountEur;
  return amountEur * (rates[cur] || 1);
}

function formatCurrency(amountEur) {
  const cur = currencySelect.value;
  const locale = lang === "cs" ? "cs-CZ" : lang === "en" ? "en-GB" : "it-IT";
  return new Intl.NumberFormat(locale, { style: "currency", currency: cur }).format(convertFromEur(amountEur));
}

function formatPdfMoney(amountEur) {
  const cur = currencySelect.value;
  const converted = convertFromEur(amountEur);
  if (cur === "EUR") return `€${converted.toFixed(2).replace(".00", "")}`;
  return `${converted.toFixed(2)} ${cur}`;
}

function stripEmoji(str) {
  return String(str)
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDC00-\uDFFF])/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function validateFullName(str) {
  const value = String(str || "").trim();
  if (!value) return { ok: false, reason: "missing" };
  if (!/\S+\s+\S+/.test(value)) return { ok: false, reason: "space" };
  return { ok: true };
}

function showError(msg) {
  statusMsg.textContent = msg;
  statusMsg.classList.remove("hidden");
}

function hideError() {
  statusMsg.textContent = "";
  statusMsg.classList.add("hidden");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildGroupCards(count, saved = []) {
  groupContainer.innerHTML = "";

  const note = document.createElement("div");
  note.className = "group-note";
  note.textContent = t.people_note;
  groupContainer.appendChild(note);

  for (let i = 0; i < count; i++) {
    const data = saved[i] || {};
    const card = document.createElement("div");
    card.className = "person-card";

    const expenseHtml = GROUP_EXPENSES.map(exp => {
      const v = data[exp.key] ?? "";
      const ph = exp.key === "hotel" ? "80" : exp.key === "trasporto" ? "200" : exp.key === "cibo" ? "40" : exp.key === "attivita" ? "25" : "50";
      return `
        <div class="spesa-row person-expense-row" data-key="${exp.key}" data-mode="${exp.mode}">
          <div class="spesa-icon">${exp.icon}</div>
          <div class="spesa-info">
            <label>${t[exp.labelKey]}</label>
            <input type="number" class="spesa-input group-expense-input" data-key="${exp.key}" min="0" placeholder="Es. ${ph}" value="${v}">
          </div>
          <span class="spesa-total">-</span>
        </div>
      `;
    }).join("");

    card.innerHTML = `
      <div class="person-head">
        <div class="person-title">${t.pdf_person} ${i + 1}</div>
        <div class="person-total-badge">€0</div>
      </div>

      <input type="text" class="spesa-input person-name-input" placeholder="Es. Mario Rossi" value="${data.name ? escapeHtml(data.name) : ""}">

      <div class="person-expenses">
        ${expenseHtml}
      </div>
    `;

    groupContainer.appendChild(card);
  }

  groupContainer.querySelectorAll(".group-expense-input").forEach(inp => {
    inp.addEventListener("input", updatePreview);
  });
  groupContainer.querySelectorAll(".person-name-input").forEach(inp => {
    inp.addEventListener("input", updatePreview);
  });

  updateRowTotals();
  updatePreview();
}

function collectGroupCards() {
  return [...groupContainer.querySelectorAll(".person-card")].map(card => {
    const name = card.querySelector(".person-name-input").value.trim();
    const expenses = {};
    card.querySelectorAll(".group-expense-input").forEach(inp => {
      expenses[inp.dataset.key] = inp.value;
    });
    return { name, ...expenses };
  });
}

function calcSingleTotals() {
  const g = getDays();
  const totals = {};
  let grandEUR = 0;

  for (const [key, cfg] of Object.entries(SINGLE_INPUTS)) {
    const val = parseFloat(cfg.el.value) || 0;
    let tot = 0;
    if (cfg.mode === "night") tot = val * g;
    if (cfg.mode === "day") tot = val * g;
    if (cfg.mode === "fixed") tot = val;
    totals[key] = tot;
    grandEUR += tot;
  }

  const dailyEUR = g > 0 ? grandEUR / g : 0;
  return { totals, grandEUR, dailyEUR };
}

function calcGroupTotals() {
  const g = getDays();
  const cards = [...groupContainer.querySelectorAll(".person-card")];
  const people = [];

  cards.forEach(card => {
    const name = card.querySelector(".person-name-input").value.trim();
    const totals = {};
    let personTotal = 0;

    card.querySelectorAll(".person-expense-row").forEach(row => {
      const key = row.dataset.key;
      const mode = row.dataset.mode;
      const input = row.querySelector(".group-expense-input");
      const val = parseFloat(input.value) || 0;
      let tot = 0;

      if (mode === "night") tot = val * g;
      if (mode === "day") tot = val * g;
      if (mode === "fixed") tot = val;

      totals[key] = tot;
      personTotal += tot;
    });

    people.push({ name, totals, total: personTotal });
  });

  const grandEUR = people.reduce((sum, p) => sum + p.total, 0);
  const dailyEUR = g > 0 ? grandEUR / g : 0;

  return { people, grandEUR, dailyEUR };
}

function calcTotals() {
  return isGroupMode() ? calcGroupTotals() : calcSingleTotals();
}

function updateRowTotals() {
  if (!isGroupMode()) {
    const { totals } = calcSingleTotals();
    for (const [key, cfg] of Object.entries(SINGLE_INPUTS)) {
      cfg.totEl.textContent = totals[key] > 0 ? formatCurrency(totals[key]) : "-";
    }
    return;
  }

  const g = getDays();
  [...groupContainer.querySelectorAll(".person-card")].forEach(card => {
    let personTotal = 0;

    card.querySelectorAll(".person-expense-row").forEach(row => {
      const input = row.querySelector(".group-expense-input");
      const mode = row.dataset.mode;
      const val = parseFloat(input.value) || 0;
      let tot = 0;

      if (mode === "night") tot = val * g;
      if (mode === "day") tot = val * g;
      if (mode === "fixed") tot = val;

      row.querySelector(".spesa-total").textContent = tot > 0 ? formatCurrency(tot) : "-";
      personTotal += tot;
    });

    card.querySelector(".person-total-badge").textContent = formatCurrency(personTotal);
  });
}

function updatePreview() {
  if (isGroupMode()) {
    const { grandEUR, dailyEUR } = calcGroupTotals();
    dailyDisplay.textContent = formatCurrency(dailyEUR);
    totalDisplay.textContent = formatCurrency(grandEUR);
  } else {
    const { grandEUR, dailyEUR } = calcSingleTotals();
    dailyDisplay.textContent = formatCurrency(dailyEUR);
    totalDisplay.textContent = formatCurrency(grandEUR);
  }

  updateRowTotals();
}

function keyLabel(key) {
  const map = {
    hotel: t.lbl_hotel,
    trasporto: t.lbl_trasporto,
    cibo: t.lbl_cibo,
    attivita: t.lbl_attivita,
    altro: t.lbl_altro
  };
  return map[key] || key;
}

function keyLabelPdf(key) {
  return stripEmoji(keyLabel(key));
}

function getModeLabel(key, g) {
  const mode = GROUP_EXPENSES.find(x => x.key === key)?.mode || "fixed";
  if (mode === "night") return `${g} ${t.giorni_unit}`;
  if (mode === "day") return `${g} ${t.giorni_unit}`;
  return "-";
}

function getInsights(items) {
  const entries = Object.entries(items).filter(([, v]) => v > 0);
  if (entries.length < 2) return null;
  entries.sort((a, b) => b[1] - a[1]);
  return { max: entries[0], min: entries[entries.length - 1] };
}

function buildTips(dest) {
  const tips = dest.tips[lang] || dest.tips.it;
  tipsBox.innerHTML = `<span class="tips-title">${lang === "it" ? "💡 Consigli per risparmiare" : lang === "en" ? "💡 Money-saving tips" : "💡 Tipy na úspory"}</span>`;
  tips.forEach(tip => {
    const el = document.createElement("div");
    el.className = "tip-item";
    el.innerHTML = `<span class="tip-icon">${tip.icon}</span><span>${tip.text}</span>`;
    tipsBox.appendChild(el);
  });
}

function buildChart(data, selectedIndex = 0) {
  let labels = [];
  let values = [];

  if (isGroupMode()) {
    const person = data.people?.[selectedIndex];
    if (person) {
      for (const [key, val] of Object.entries(person.totals)) {
        if (val <= 0) continue;
        labels.push(keyLabel(key));
        values.push(parseFloat(convertFromEur(val).toFixed(2)));
      }
    }
  } else {
    for (const [key, val] of Object.entries(data.totals)) {
      if (val <= 0) continue;
      labels.push(keyLabel(key));
      values.push(parseFloat(convertFromEur(val).toFixed(2)));
    }
  }

  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  const canvas = document.getElementById("spesaChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: ["#c9a84c", "#a07830", "#e8c97a", "#8a6530", "#d4b06a", "#b58b3c", "#cdb06f"],
        borderColor: "#fdf8ee",
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { family: "'DM Sans', sans-serif", size: 12 },
            color: "#2d2010",
            padding: 12,
            boxWidth: 14
          }
        },
        title: {
          display: true,
          text: isGroupMode() ? t.chart_title_group : t.chart_title_single,
          font: { family: "'Playfair Display', serif", size: 14 },
          color: "#2d2010",
          padding: { bottom: 8 }
        }
      }
    }
  });
}

function renderSingleResult(data) {
  const dest = DESTINATIONS[destSelect.value];
  ticketDestDisp.textContent = dest.label[lang];
  personBar.classList.add("hidden");

  ticketBody.innerHTML = "";
  for (const [key, val] of Object.entries(data.totals)) {
    if (val <= 0) continue;

    const row = document.createElement("div");
    row.className = "ticket-row";
    row.innerHTML = `
      <div class="ticket-row-left">
        <div>
          <div class="ticket-row-name">${keyLabel(key)}</div>
          <div class="ticket-row-sub">${getModeLabel(key, getDays())}</div>
        </div>
      </div>
      <div class="ticket-row-price">${formatCurrency(val)}</div>
    `;
    ticketBody.appendChild(row);
  }

  ticketGiorni.textContent = `${getDateRangeText()} · ${getDays()} ${t.ticket_giorni}`;
  ticketTotal.textContent = formatCurrency(data.grandEUR);

  const ins = getInsights(data.totals);
  ticketInsight.innerHTML = "";
  if (ins) {
    ticketInsight.innerHTML = `
      <div class="insight-item">
        <span class="insight-badge insight-badge--max">${t.badge_max}</span>
        <span class="insight-name">${stripEmoji(keyLabel(ins.max[0]))}</span>
        <span class="insight-val">${formatCurrency(ins.max[1])}</span>
      </div>
      <div class="insight-item">
        <span class="insight-badge insight-badge--min">${t.badge_min}</span>
        <span class="insight-name">${stripEmoji(keyLabel(ins.min[0]))}</span>
        <span class="insight-val">${formatCurrency(ins.min[1])}</span>
      </div>
    `;
  }

  buildTips(dest);
  buildChart(data);
}

function renderGroupResult(data) {
  const dest = DESTINATIONS[destSelect.value];
  ticketDestDisp.textContent = dest.label[lang];

  const people = data.people || [];
  if (!people.length) return;

  const safeIndex = Math.max(0, Math.min(people.length - 1, selectedPersonIndex));
  selectedPersonIndex = safeIndex;

  personBar.classList.remove("hidden");
  personSelect.innerHTML = "";
  people.forEach((person, index) => {
    const opt = document.createElement("option");
    opt.value = String(index);
    opt.textContent = stripEmoji(person.name || `${t.pdf_person} ${index + 1}`);
    personSelect.appendChild(opt);
  });
  personSelect.value = String(selectedPersonIndex);

  const person = people[selectedPersonIndex];
  const personName = stripEmoji(person.name || `${t.pdf_person} ${selectedPersonIndex + 1}`);

  ticketBody.innerHTML = "";
  for (const [key, val] of Object.entries(person.totals)) {
    if (val <= 0) continue;

    const row = document.createElement("div");
    row.className = "ticket-row";
    row.innerHTML = `
      <div class="ticket-row-left">
        <div>
          <div class="ticket-row-name">${keyLabel(key)}</div>
          <div class="ticket-row-sub">${getModeLabel(key, getDays())}</div>
        </div>
      </div>
      <div class="ticket-row-price">${formatCurrency(val)}</div>
    `;
    ticketBody.appendChild(row);
  }

  ticketGiorni.textContent = `${personName} · ${getDateRangeText()} · ${getDays()} ${t.ticket_giorni}`;
  ticketTotal.textContent = formatCurrency(person.total);

  const ins = getInsights(person.totals);
  ticketInsight.innerHTML = "";
  if (ins) {
    ticketInsight.innerHTML = `
      <div class="insight-item">
        <span class="insight-badge insight-badge--max">${t.badge_max}</span>
        <span class="insight-name">${stripEmoji(keyLabel(ins.max[0]))}</span>
        <span class="insight-val">${formatCurrency(ins.max[1])}</span>
      </div>
      <div class="insight-item">
        <span class="insight-badge insight-badge--min">${t.badge_min}</span>
        <span class="insight-name">${stripEmoji(keyLabel(ins.min[0]))}</span>
        <span class="insight-val">${formatCurrency(ins.min[1])}</span>
      </div>
    `;
  }

  buildTips(dest);
  buildChart(data, selectedPersonIndex);
}

function fillTicketPreview(data) {
  currentResultData = data;
  if (isGroupMode()) {
    renderGroupResult(data);
  } else {
    renderSingleResult(data);
  }
}

function buildPdf(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const dest = DESTINATIONS[destSelect.value];
  const g = getDays();

  doc.setFillColor(26, 18, 9);
  doc.rect(0, 0, 210, 42, "F");

  doc.setTextColor(201, 168, 76);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("BUDGETPASS", 105, 16, null, null, "center");

  doc.setTextColor(200, 200, 200);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`${t.lbl_destinazione}: ${stripEmoji(dest.label[lang])}`, 20, 26);
  doc.text(`${t.lbl_giorni}: ${getDateRangeText()}`, 20, 32);
  doc.text(`${t.pdf_budget_giornaliero}: ${formatPdfMoney(data.dailyEUR)}`, 120, 26);

  let y = 56;

  if (isGroupMode()) {
    doc.setTextColor(90, 70, 50);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`${t.pdf_group}: ${data.people.length}`, 20, y - 4);
    y += 4;
  }

  if (isGroupMode()) {
    data.people.forEach((person, index) => {
      if (y > 245) {
        doc.addPage();
        y = 20;
      }

      doc.setDrawColor(220, 210, 190);
      doc.line(18, y - 5, 192, y - 5);

      doc.setTextColor(26, 18, 9);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${stripEmoji(person.name || `${t.pdf_person} ${index + 1}`)}`, 20, y);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(160, 120, 48);
      doc.text(formatPdfMoney(person.total), 185, y, null, null, "right");

      y += 8;

      Object.entries(person.totals).forEach(([key, val]) => {
        if (val <= 0) return;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(60, 45, 25);
        doc.text(`${keyLabelPdf(key)}: ${formatPdfMoney(val)}`, 25, y);
        y += 6;
      });

      y += 8;
    });

    if (y > 240) {
      doc.addPage();
      y = 20;
    }

    doc.setFillColor(245, 237, 216);
    doc.rect(0, y, 210, 22, "F");
    doc.setTextColor(26, 18, 9);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(`${t.pdf_totale}: ${formatPdfMoney(data.grandEUR)}`, 105, y + 14, null, null, "center");
  } else {
    for (const [key, val] of Object.entries(data.totals)) {
      if (val <= 0) continue;
      doc.setDrawColor(220, 210, 190);
      doc.line(18, y - 5, 192, y - 5);

      doc.setTextColor(26, 18, 9);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(`${keyLabelPdf(key)}`, 20, y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(90, 70, 50);
      doc.text(getModeLabel(key, g), 25, y + 6);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(160, 120, 48);
      doc.text(formatPdfMoney(val), 185, y, null, null, "right");

      y += 22;
    }

    if (y > 240) {
      doc.addPage();
      y = 20;
    }

    doc.setFillColor(245, 237, 216);
    doc.rect(0, y, 210, 22, "F");
    doc.setTextColor(26, 18, 9);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(`${t.pdf_totale}: ${formatPdfMoney(data.grandEUR)}`, 105, y + 14, null, null, "center");
  }

  doc.setTextColor(150, 130, 100);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text(stripEmoji(t.pdf_footer), 105, 285, null, null, "center");

  return doc;
}

function updateTexts() {
  document.getElementById("txt-titolo").textContent = t.title;
  document.getElementById("txt-slogan").textContent = t.slogan;
  document.getElementById("lbl-destinazione").textContent = t.lbl_destinazione;
  document.getElementById("lbl-modalita").textContent = t.lbl_modalita;
  document.getElementById("lbl-persone").textContent = t.lbl_persone;
  document.getElementById("lbl-giorni").textContent = t.lbl_giorni;
  document.getElementById("txt-giorni-unit").textContent = t.giorni_unit;
  document.getElementById("lbl-valuta").textContent = t.lbl_valuta;
  document.getElementById("lbl-hotel").textContent = t.lbl_hotel;
  document.getElementById("lbl-trasporto").textContent = t.lbl_trasporto;
  document.getElementById("lbl-cibo").textContent = t.lbl_cibo;
  document.getElementById("lbl-attivita").textContent = t.lbl_attivita;
  document.getElementById("lbl-altro").textContent = t.lbl_altro;
  document.getElementById("txt-spese-titolo").textContent = t.spese_titolo;
  document.getElementById("txt-spese-sub").textContent = t.spese_sub;
  document.getElementById("txt-giornaliero-label").textContent = t.lbl_giornaliero;
  document.getElementById("txt-totale-label").textContent = t.lbl_totale;
  document.getElementById("txt-calcola").textContent = t.btn_calcola;
  document.getElementById("readyTitle").textContent = t.ready_title;
  document.getElementById("readyText").textContent = t.ready_text;
  document.getElementById("txt-download").textContent = t.btn_download;
  document.getElementById("txt-back").textContent = t.btn_back.replace("← ", "");
  document.getElementById("lbl-person-view").textContent = t.lbl_person_view;
  dateRangeInput.placeholder = lang === "en"
    ? "Select start and end date"
    : lang === "cs"
      ? "Vyberte datum začátku a konce"
      : "Seleziona data inizio e fine";
  document.title = `${t.title} | Pianificatore di Viaggio`;
}

function updateModeUI() {
  const group = isGroupMode();
  groupPeopleWrap.classList.toggle("hidden", !group);
  groupContainer.classList.toggle("hidden", !group);
  singleSpeseSection.classList.toggle("hidden", group);

  if (group) {
    if (parseInt(peopleInput.value) < 2) peopleInput.value = 2;
    buildGroupCards(parseInt(peopleInput.value) || 2);
  } else {
    groupContainer.innerHTML = "";
    personBar.classList.add("hidden");
    updatePreview();
  }
}

function applyLanguage(newLang) {
  lang = newLang;
  t = I18N[lang];

  updateTexts();
  buildDestOptions();
  buildModeOptions();
  buildCurrencyOptions();

  if (datePicker) {
    datePicker.set("locale", FP_LOCALES[lang] || FP_LOCALES.it);
  }

  groupContainer.querySelectorAll(".person-name-input").forEach(inp => {
    inp.placeholder = "Es. Mario Rossi";
  });

  updateModeUI();
  if (currentResultData) {
    fillTicketPreview(currentResultData);
  }
}

function setupDatePicker() {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 2);

  datePicker = flatpickr(dateRangeInput, {
    mode: "range",
    dateFormat: "d/m/Y",
    minDate: "today",
    defaultDate: [today, endDate],
    locale: FP_LOCALES[lang] || FP_LOCALES.it,
    onChange() {
      updatePreview();
    }
  });
}

function updatePeopleCount(delta) {
  const current = parseInt(peopleInput.value) || 2;
  const next = Math.max(2, Math.min(30, current + delta));
  peopleInput.value = next;

  if (isGroupMode()) {
    const saved = collectGroupCards();
    buildGroupCards(next, saved);
  }

  updatePreview();
}

function setupDateDrivenPreview() {
  updatePreview();
}

destSelect.addEventListener("change", () => {
  setBackground(DESTINATIONS[destSelect.value]?.bg || "");
  updatePreview();
  if (currentResultData) fillTicketPreview(currentResultData);
});

currencySelect.addEventListener("change", () => {
  updatePreview();
  if (currentResultData) fillTicketPreview(currentResultData);
});

calcMode.addEventListener("change", () => {
  updateModeUI();
});

peopleMinus.addEventListener("click", () => updatePeopleCount(-1));
peoplePlus.addEventListener("click", () => updatePeopleCount(1));

Object.values(SINGLE_INPUTS).forEach(({ el }) => {
  el.addEventListener("input", updatePreview);
});

groupContainer.addEventListener("input", updatePreview);

personSelect.addEventListener("change", () => {
  selectedPersonIndex = parseInt(personSelect.value) || 0;
  if (currentResultData) {
    renderGroupResult(currentResultData);
  }
});

btnCalcola.addEventListener("click", () => {
  hideError();

  const data = calcTotals();
  const hasAny = isGroupMode()
    ? data.people.some(p => Object.values(p.totals).some(v => v > 0))
    : Object.values(data.totals).some(v => v > 0);

  if (!hasAny) {
    showError(t.err_voci);
    return;
  }

  if (isGroupMode()) {
    if (getGroupPeopleCount() < 2) {
      showError(t.err_persone);
      return;
    }

    const cards = [...groupContainer.querySelectorAll(".person-card")];
    for (const card of cards) {
      const nameInput = card.querySelector(".person-name-input");
      const check = validateFullName(nameInput.value);
      if (!check.ok) {
        nameInput.classList.add("error");
        nameInput.addEventListener("animationend", () => nameInput.classList.remove("error"), { once: true });
        showError(check.reason === "space" ? t.err_nome_spazio : t.err_nome);
        return;
      }
    }
  }

  fillTicketPreview(data);

  const doc = buildPdf(data);
  const fileName = `${t.pdf_nome}_${destSelect.value}.pdf`;
  downloadLink.href = doc.output("datauristring");
  downloadLink.download = fileName;

  budgetCard.classList.add("hidden");
  resultView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  resultView.classList.add("hidden");
  budgetCard.classList.remove("hidden");
});

function getGroupPeopleCount() {
  return Math.max(2, Math.min(30, parseInt(peopleInput.value) || 2));
}

async function loadExchangeRates() {
  try {
    const response = await fetch("https://api.frankfurter.dev/v2/rates?base=EUR&quotes=USD,CZK");
    if (!response.ok) throw new Error();
    const data = await response.json();
    rates = { EUR: 1, USD: data?.rates?.USD ?? BASE_RATES.USD, CZK: data?.rates?.CZK ?? BASE_RATES.CZK };
    updatePreview();
  } catch {
    rates = { ...BASE_RATES };
    updatePreview();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  setupLangBar();
  applyLanguage("it");
  setupDatePicker();

  bgA.style.backgroundImage = `url('${DESTINATIONS.praga.bg}')`;
  bgA.style.opacity = "1";

  updateModeUI();
  updatePreview();
  await loadExchangeRates();
});