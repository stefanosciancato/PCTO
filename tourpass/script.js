const TOURS = {
  oldTown: {
    price: 15,
    bg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    label: {
      it: "Centro Storico e Orologio Astronomico (€15)",
      en: "Old Town & Astronomical Clock (€15)",
      cs: "Staré Město a orloj (€15)"
    },
    extras: [
      {
        key: "old_snack",
        price: 4,
        icon: "🥨",
        label: {
          it: "Snack boemo",
          en: "Bohemian snack",
          cs: "Český snack"
        }
      },
      {
        key: "old_beer",
        price: 6,
        icon: "🍺",
        label: {
          it: "Birra locale",
          en: "Local beer",
          cs: "Místní pivo"
        }
      },
      {
        key: "old_panorama",
        price: 7,
        icon: "🏛️",
        label: {
          it: "Vista panoramica",
          en: "Panoramic view",
          cs: "Panoramatický výhled"
        }
      }
    ]
  },
  castle: {
    price: 25,
    bg: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=80",
    label: {
      it: "Castello di Praga e Hradčany (€25)",
      en: "Prague Castle & Hradčany (€25)",
      cs: "Pražský hrad a Hradčany (€25)"
    },
    extras: [
      {
        key: "castle_guided",
        price: 8,
        icon: "🧭",
        label: {
          it: "Visita guidata del castello",
          en: "Castle guided tour",
          cs: "Prohlídka hradu s průvodcem"
        }
      },
      {
        key: "castle_garden",
        price: 5,
        icon: "🌿",
        label: {
          it: "Giardini reali",
          en: "Royal gardens",
          cs: "Královské zahrady"
        }
      },
      {
        key: "castle_view",
        price: 7,
        icon: "📸",
        label: {
          it: "Terrazza panoramica",
          en: "Panoramic terrace",
          cs: "Panoramatická terasa"
        }
      }
    ]
  },
  river: {
    price: 35,
    bg: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    label: {
      it: "Crociera sulla Moldava (€35)",
      en: "Vltava River Cruise (€35)",
      cs: "Plavba po Vltavě (€35)"
    },
    extras: [
      {
        key: "river_dinner",
        price: 12,
        icon: "🍽️",
        label: {
          it: "Cena in crociera",
          en: "Dinner on cruise",
          cs: "Večeře na lodi"
        }
      },
      {
        key: "river_drink",
        price: 6,
        icon: "🥂",
        label: {
          it: "Drink panoramico",
          en: "Panoramic drink",
          cs: "Panoramatický drink"
        }
      },
      {
        key: "river_photo",
        price: 4,
        icon: "📷",
        label: {
          it: "Foto ricordo",
          en: "Souvenir photo",
          cs: "Památeční fotografie"
        }
      }
    ]
  },
  food: {
    price: 45,
    bg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    label: {
      it: "Degustazione ceca (€45)",
      en: "Czech Tasting Tour (€45)",
      cs: "Česká ochutnávka (€45)"
    },
    extras: [
      {
        key: "food_premium",
        price: 10,
        icon: "🍲",
        label: {
          it: "Degustazione premium",
          en: "Premium tasting",
          cs: "Prémiová ochutnávka"
        }
      },
      {
        key: "food_dessert",
        price: 5,
        icon: "🍰",
        label: {
          it: "Dolce incluso",
          en: "Dessert included",
          cs: "Dezert v ceně"
        }
      },
      {
        key: "food_local",
        price: 8,
        icon: "🥟",
        label: {
          it: "Piatto tipico speciale",
          en: "Special local dish",
          cs: "Speciální místní jídlo"
        }
      }
    ]
  }
};

const FIXED_EXTRAS = [
  {
    key: "audio_guide",
    price: 6,
    icon: "🎧",
    label: {
      it: "Audioguida",
      en: "Audio guide",
      cs: "Audio průvodce"
    }
  },
  {
    key: "monthly_pass",
    price: 22,
    icon: "📅",
    label: {
      it: "Abbonamento di un mese",
      en: "1-month pass",
      cs: "Měsíční předplatné"
    }
  }
];

const SCHEDULES = {
  morning: { start: "09:00", end: "12:00" },
  afternoon: { start: "15:00", end: "18:00" },
  evening: { start: "19:00", end: "22:00" }
};

const I18N = {
  it: {
    title: "TourPass",
    slogan: "Esplora il mondo, un tour alla volta",
    lbl_tour: "Tipo di Tour",
    lbl_persone: "Numero Partecipanti",
    lbl_nome: "Nome e Cognome",
    lbl_email: "Email (opzionale)",
    lbl_extras: "Extra",
    extras_tour: "Extra a tema",
    extras_fixed: "Extra fissi",
    lbl_data: "Data",
    lbl_orario: "Fascia oraria",
    lbl_valuta: "Valuta",
    slot_morning: "Mattino (09:00 - 12:00)",
    slot_afternoon: "Pomeriggio (15:00 - 18:00)",
    slot_evening: "Sera (19:00 - 22:00)",
    currency_eur: "Euro (EUR)",
    currency_czk: "Corona ceca (CZK)",
    currency_usd: "Dollaro USA (USD)",
    lbl_totale: "Totale stimato",
    btn_prenota: "Genera biglietto",
    ready_title: "Biglietto pronto!",
    ready_text: "Scarica il PDF.",
    btn_download: "⬇ Scarica PDF",
    btn_back: "← Torna indietro",
    err_nome: "Inserisci nome e cognome per ogni partecipante.",
    err_email: "Email non valida per il partecipante",
    pdf_nome: "Biglietto_Tour",
    placeholder_nome: "Es: Mario Rossi",
    placeholder_email: "email@esempio.it",
    tour_label: "Tour",
    extras_label: "Extra",
    subtot_label: "Subtotale",
    tot_label: "TOTALE",
    pdf_date: "Data",
    pdf_schedule: "Orario",
    pdf_total_label: "TOTALE COMPLESSIVO",
    pdf_note_title: "ATTENZIONE",
    pdf_note_text: "Il tour può essere cancellato solo fino a 5 giorni prima della partenza. È possibile aggregarsi a gruppi successivi in caso di disponibilità, ma la richiesta deve essere effettuata direttamente in presenza. Per assistenza contatta tourpass@gmail.com.",
    nessuno: "Nessuno"
  },
  en: {
    title: "TourPass",
    slogan: "Explore the world, one tour at a time",
    lbl_tour: "Tour Type",
    lbl_persone: "Participants",
    lbl_nome: "Full Name",
    lbl_email: "Email (optional)",
    lbl_extras: "Extras",
    extras_tour: "Themed extras",
    extras_fixed: "Fixed extras",
    lbl_data: "Date",
    lbl_orario: "Time slot",
    lbl_valuta: "Currency",
    slot_morning: "Morning (09:00 - 12:00)",
    slot_afternoon: "Afternoon (15:00 - 18:00)",
    slot_evening: "Evening (19:00 - 22:00)",
    currency_eur: "Euro (EUR)",
    currency_czk: "Czech koruna (CZK)",
    currency_usd: "US dollar (USD)",
    lbl_totale: "Estimated total",
    btn_prenota: "Generate ticket",
    ready_title: "Ticket ready!",
    ready_text: "Download the PDF.",
    btn_download: "⬇ Download PDF",
    btn_back: "← Go back",
    err_nome: "Enter first and last name for each participant.",
    err_email: "Invalid email for participant",
    pdf_nome: "Tour_Ticket",
    placeholder_nome: "Ex: John Smith",
    placeholder_email: "email@example.com",
    tour_label: "Tour",
    extras_label: "Extras",
    subtot_label: "Subtotal",
    tot_label: "TOTAL",
    pdf_date: "Date",
    pdf_schedule: "Time",
    pdf_total_label: "GRAND TOTAL",
    pdf_note_title: "WARNING",
    pdf_note_text: "The tour can only be cancelled up to 5 days before departure. It is possible to join a later group if spots are available, but the request must be made in person. For assistance contact tourpass@gmail.com.",
    nessuno: "None"
  },
  cs: {
    title: "TourPass",
    slogan: "Prozkoumejte svět, jeden výlet po druhém",
    lbl_tour: "Typ zájezdu",
    lbl_persone: "Účastníci",
    lbl_nome: "Jméno a příjmení",
    lbl_email: "Email (volitelné)",
    lbl_extras: "Doplňky",
    extras_tour: "Tematické doplňky",
    extras_fixed: "Pevné doplňky",
    lbl_data: "Datum",
    lbl_orario: "Časový slot",
    lbl_valuta: "Měna",
    slot_morning: "Ráno (09:00 - 12:00)",
    slot_afternoon: "Odpoledne (15:00 - 18:00)",
    slot_evening: "Večer (19:00 - 22:00)",
    currency_eur: "Euro (EUR)",
    currency_czk: "Česká koruna (CZK)",
    currency_usd: "Americký dolar (USD)",
    lbl_totale: "Odhadovaná cena",
    btn_prenota: "Vytvořit lístek",
    ready_title: "Lístek je připraven!",
    ready_text: "Stáhněte si PDF.",
    btn_download: "⬇ Stáhnout PDF",
    btn_back: "← Zpět",
    err_nome: "Zadejte jméno a příjmení pro každého účastníka.",
    err_email: "Neplatný email pro účastníka",
    pdf_nome: "Tour_Ticket",
    placeholder_nome: "Např.: Jan Novák",
    placeholder_email: "email@priklad.cz",
    tour_label: "Zájezd",
    extras_label: "Doplňky",
    subtot_label: "Mezisoučet",
    tot_label: "CELKOVÁ CENA",
    pdf_date: "Datum",
    pdf_schedule: "Čas",
    pdf_total_label: "CELKOVÝ SOUČET",
    pdf_note_title: "UPOZORNĚNÍ",
    pdf_note_text: "Zájezd lze zrušit pouze nejpozději 5 dní před odjezdem. V případě dostupnosti je možné připojit se k následující skupině, ale žádost musí být provedena osobně. Pro pomoc kontaktujte tourpass@gmail.com.",
    nessuno: "Žádné"
  }
};

const BASE_RATES = { EUR: 1, USD: 1.1765, CZK: 24.333 };
let rates = { ...BASE_RATES };
let lang = "it";
let t = I18N[lang];
let currentBgLayer = "A";
let datePicker = null;

const tourSelect = document.getElementById("nomeTour");
const numPersone = document.getElementById("numPersone");
const numMinus = document.getElementById("numMinus");
const numPlus = document.getElementById("numPlus");
const dateInput = document.getElementById("dataTour");
const slotSelect = document.getElementById("fasciaOraria");
const currencySelect = document.getElementById("valutaSelect");
const partContainer = document.getElementById("partecipantiContainer");
const btnPrenota = document.getElementById("btnPrenota");
const statusMsg = document.getElementById("statusMessage");
const bookingCard = document.getElementById("bookingCard");
const resultView = document.getElementById("resultView");
const downloadLink = document.getElementById("downloadPdfLink");
const backBtn = document.getElementById("backBtn");
const totalDisplay = document.getElementById("totalDisplay");
const ticketBody = document.getElementById("ticketBody");
const ticketDateDisp = document.getElementById("ticketDateDisplay");
const ticketTourName = document.getElementById("ticketTourName");
const ticketTotal = document.getElementById("ticketTotal");
const bgA = document.getElementById("bgA");
const bgB = document.getElementById("bgB");

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

function getCurrentExtras() {
  const tour = TOURS[tourSelect.value] || TOURS.oldTown;
  return [...(tour.extras || []), ...FIXED_EXTRAS];
}

function buildTourOptions() {
  const cur = tourSelect.value || "oldTown";
  tourSelect.innerHTML = "";
  Object.entries(TOURS).forEach(([key, tour]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = tour.label[lang];
    tourSelect.appendChild(opt);
  });
  tourSelect.value = cur in TOURS ? cur : "oldTown";
}

function buildScheduleOptions() {
  const cur = slotSelect.value || "morning";
  slotSelect.innerHTML = "";

  [["morning", t.slot_morning], ["afternoon", t.slot_afternoon], ["evening", t.slot_evening]].forEach(([v, lbl]) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = lbl;
    slotSelect.appendChild(opt);
  });

  slotSelect.value = cur in SCHEDULES ? cur : "morning";
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

function isValidEmail(str) {
  if (!str) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function showError(msg) {
  statusMsg.textContent = msg;
  statusMsg.classList.remove("hidden");
}

function hideError() {
  statusMsg.textContent = "";
  statusMsg.classList.add("hidden");
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function collectParticipants() {
  return [...partContainer.querySelectorAll(".partecipante-box")].map(box => {
    const extraState = {};
    getCurrentExtras().forEach(extra => {
      const cb = box.querySelector(`[data-key="${extra.key}"]`);
      extraState[extra.key] = !!cb?.checked;
    });

    return {
      nome: box.querySelector(".nome-input")?.value || "",
      email: box.querySelector(".email-input")?.value || "",
      ...extraState
    };
  });
}

function buildParticipants(count, savedData = []) {
  partContainer.innerHTML = "";
  const extras = getCurrentExtras();
  const themeExtras = extras.filter(x => !FIXED_EXTRAS.some(f => f.key === x.key));
  const fixedExtras = FIXED_EXTRAS;

  for (let i = 0; i < count; i++) {
    const data = savedData[i] || {};
    const box = document.createElement("div");
    box.className = "partecipante-box";

    const makeExtrasHtml = (list) => list.map(extra => {
      const checked = data[extra.key] ? "checked" : "";
      const checkedClass = data[extra.key] ? "checked" : "";
      return `
        <label class="extra-chip ${checkedClass}">
          <input type="checkbox" class="extra-cb" data-key="${extra.key}" data-price="${extra.price}" ${checked}>
          <span class="chip-content">
            <span class="chip-text">${extra.icon} ${extra.label[lang]}</span>
            <span class="chip-price">+€${extra.price}</span>
          </span>
        </label>
      `;
    }).join("");

    box.innerHTML = `
      <div class="part-num">#${i + 1}</div>

      <div class="part-nome-group">
        <label>${t.lbl_nome}</label>
        <input type="text" class="field-input nome-input"
          placeholder="${t.placeholder_nome}"
          value="${escHtml(data.nome || "")}">
      </div>

      <div class="part-email-group">
        <label>${t.lbl_email}</label>
        <input type="email" class="field-input email-input"
          placeholder="${t.placeholder_email}"
          value="${escHtml(data.email || "")}">
      </div>

      <span class="extras-label">${t.extras_tour}</span>
      <div class="extras-row themed-extras">
        ${makeExtrasHtml(themeExtras)}
      </div>

      <span class="extras-label">${t.extras_fixed}</span>
      <div class="extras-row fixed-extras">
        ${makeExtrasHtml(fixedExtras)}
      </div>
    `;

    box.querySelectorAll(".extra-cb").forEach(cb => {
      cb.addEventListener("change", () => {
        cb.closest(".extra-chip")?.classList.toggle("checked", cb.checked);
        updateTotal();
      });
    });

    partContainer.appendChild(box);
  }

  updateTotal();
}

function syncParticipants() {
  const saved = collectParticipants();
  const n = Math.max(1, Math.min(20, parseInt(numPersone.value) || 1));
  numPersone.value = n;
  buildParticipants(n, saved);
}

function getSelectedDate() {
  return datePicker?.selectedDates?.[0] || null;
}

function formatDateLocal(dateObj) {
  return dateObj.toLocaleDateString(
    lang === "cs" ? "cs-CZ" : lang === "en" ? "en-GB" : "it-IT"
  );
}

function getScheduleLabel(slotKey) {
  const slot = SCHEDULES[slotKey] || SCHEDULES.morning;
  const label =
    slotKey === "afternoon" ? t.slot_afternoon :
    slotKey === "evening" ? t.slot_evening : t.slot_morning;
  return `${label} - ${slot.start} / ${slot.end}`;
}

function convertFromEur(amountEur, targetCurrency = currencySelect.value) {
  if (targetCurrency === "EUR") return amountEur;
  return amountEur * (rates[targetCurrency] || 1);
}

function formatCurrency(amountEur, targetCurrency = currencySelect.value) {
  const locale = lang === "cs" ? "cs-CZ" : lang === "en" ? "en-GB" : "it-IT";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: targetCurrency
  }).format(convertFromEur(amountEur, targetCurrency));
}

function formatPdfMoney(amountEur, targetCurrency = currencySelect.value) {
  const converted = convertFromEur(amountEur, targetCurrency);
  if (targetCurrency === "EUR") return `€${converted.toFixed(2).replace(".00", "")}`;
  return `${converted.toFixed(2)} ${targetCurrency}`;
}

function calculatePrices() {
  const tour = TOURS[tourSelect.value] || TOURS.oldTown;
  const basePrice = parseFloat(tour.price) || 0;
  const participantTotals = [];
  let grossEUR = 0;

  partContainer.querySelectorAll(".partecipante-box").forEach(box => {
    let indivEUR = basePrice;
    const selectedExtras = [];

    box.querySelectorAll(".extra-cb:checked").forEach(cb => {
      const extraPrice = parseFloat(cb.dataset.price) || 0;
      indivEUR += extraPrice;

      const key = cb.dataset.key;
      const extraObj = getCurrentExtras().find(x => x.key === key);
      if (extraObj) selectedExtras.push(extraObj.label[lang]);
    });

    participantTotals.push({
      nome: box.querySelector(".nome-input")?.value.trim() || "",
      email: box.querySelector(".email-input")?.value.trim() || "",
      prezzoBase: basePrice,
      extras: selectedExtras.join(", "),
      totale: indivEUR
    });

    grossEUR += indivEUR;
  });

  let discountEUR = 0;
  for (let i = 0; i < participantTotals.length; i += 2) {
    if (participantTotals[i + 1] !== undefined) {
      const pairSubtotal = participantTotals[i].totale + participantTotals[i + 1].totale;
      discountEUR += pairSubtotal * 0.05;
    }
  }

  const totalEUR = Math.max(0, grossEUR - discountEUR);

  return {
    grossEUR,
    discountEUR,
    totalEUR,
    participantTotals
  };
}

function updateTotal() {
  const p = calculatePrices();
  totalDisplay.textContent = formatCurrency(p.totalEUR, currencySelect.value);
}

function updateTexts() {
  document.getElementById("txt-titolo").textContent = t.title;
  document.getElementById("txt-slogan").textContent = t.slogan;
  document.getElementById("lbl-tour").textContent = t.lbl_tour;
  document.getElementById("lbl-persone").textContent = t.lbl_persone;
  document.getElementById("lbl-data").textContent = t.lbl_data;
  document.getElementById("lbl-orario").textContent = t.lbl_orario;
  document.getElementById("lbl-valuta").textContent = t.lbl_valuta;
  document.getElementById("txt-prenota").textContent = t.btn_prenota;
  document.getElementById("readyTitle").textContent = t.ready_title;
  document.getElementById("readyText").textContent = t.ready_text;
  document.getElementById("txt-download").textContent = t.btn_download;
  document.getElementById("txt-back").textContent = t.btn_back.replace("← ", "");
  document.getElementById("txt-totale-label").textContent = t.lbl_totale;
  dateInput.placeholder =
    lang === "en" ? "Select a date" :
    lang === "cs" ? "Vyberte datum" :
    "Seleziona una data";
  document.title = `${t.title} | Biglietti Turistici`;
}

function applyLanguage(newLang) {
  lang = newLang;
  t = I18N[lang];

  const saved = collectParticipants();
  updateTexts();
  buildTourOptions();
  buildScheduleOptions();
  buildCurrencyOptions();

  if (datePicker) {
    datePicker.set("locale", FP_LOCALES[lang] || FP_LOCALES.it);
  }

  const n = parseInt(numPersone.value) || 1;
  buildParticipants(n, saved);
  updateTotal();
}

function setupDatePicker() {
  const today = new Date();

  datePicker = flatpickr(dateInput, {
    locale: FP_LOCALES[lang] || FP_LOCALES.it,
    dateFormat: "Y-m-d",
    defaultDate: today,
    minDate: "today",
    allowInput: false,
    onChange: updateTotal
  });
}

function buildPdf(ticketData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFillColor(26, 18, 9);
  doc.rect(0, 0, 210, 42, "F");

  doc.setTextColor(201, 168, 76);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("TOURPASS", 105, 18, null, null, "center");

  doc.setTextColor(200, 200, 200);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Tour: ${ticketData.nomeTour}`, 20, 28);
  doc.text(`${t.pdf_date}: ${ticketData.dateStr}`, 20, 35);
  doc.text(`${t.pdf_schedule}: ${ticketData.scheduleText}`, 20, 42);

  let y = 58;

  ticketData.partecipanti.forEach((p, i) => {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setDrawColor(220, 210, 190);
    doc.line(18, y - 6, 192, y - 6);

    doc.setTextColor(26, 18, 9);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`${i + 1}. ${p.nome.toUpperCase()}`, 20, y);

    if (p.email) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(120, 100, 80);
      doc.text(p.email, 20, y + 5);
      y += 6;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 45, 25);
    doc.text(`Quota base: ${formatPdfMoney(p.prezzoBase, ticketData.currency)}`, 25, y + 8);
    doc.text(`Extra: ${p.extras || t.nessuno}`, 25, y + 14);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(26, 18, 9);
    doc.text(`Subtotale: ${formatPdfMoney(p.totale, ticketData.currency)}`, 185, y + 11, null, null, "right");

    y += 28;
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
  doc.text(`${t.pdf_total_label}: ${formatPdfMoney(ticketData.total, ticketData.currency)}`, 105, y + 14, null, null, "center");

  y += 30;

  doc.setTextColor(90, 70, 50);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`${t.pdf_schedule}: ${ticketData.scheduleText}`, 20, y + 4);

  y += 12;

  const noteText = ticketData.noteText;
  const noteLines = doc.splitTextToSize(noteText, 164);
  const noteHeight = 14 + (noteLines.length * 4);

  if (y + noteHeight > 285) {
    doc.addPage();
    y = 20;
  }

  doc.setDrawColor(192, 57, 43);
  doc.setFillColor(255, 245, 245);
  doc.rect(18, y, 174, noteHeight, "FD");

  doc.setTextColor(192, 57, 43);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(ticketData.noteTitle.toUpperCase(), 22, y + 8);

  doc.setTextColor(70, 50, 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(noteLines, 22, y + 14);

  doc.setTextColor(150, 130, 100);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text("Documento generato da TourPass | conserva questo biglietto", 105, 285, null, null, "center");

  return doc;
}

function fillTicketPreview(ticketData) {
  ticketDateDisp.textContent = ticketData.dateStr;
  ticketTourName.textContent = ticketData.nomeTour;
  ticketBody.innerHTML = "";

  ticketData.partecipanti.forEach(p => {
    const row = document.createElement("div");
    row.className = "ticket-row";
    row.innerHTML = `
      <div>
        <div class="ticket-row-name">${escHtml(p.nome)}</div>
        <div class="ticket-row-sub">${p.extras || t.nessuno}</div>
      </div>
      <div class="ticket-row-price">${formatCurrency(p.totale, ticketData.currency)}</div>
    `;
    ticketBody.appendChild(row);
  });

  const scheduleRow = document.createElement("div");
  scheduleRow.className = "ticket-row";
  scheduleRow.innerHTML = `
    <div>
      <div class="ticket-row-name">${t.pdf_schedule}</div>
      <div class="ticket-row-sub">${ticketData.scheduleText}</div>
    </div>
    <div class="ticket-row-price">●</div>
  `;
  ticketBody.appendChild(scheduleRow);

  ticketTotal.textContent = formatCurrency(ticketData.total, ticketData.currency);
}

function safeName(str) {
  return String(str).toLowerCase()
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_+|_+$/g, "");
}

async function loadExchangeRates() {
  try {
    const response = await fetch("https://api.frankfurter.dev/v2/rates?base=EUR&quotes=USD,CZK");
    if (!response.ok) throw new Error("Rate fetch failed");
    const data = await response.json();

    rates = {
      EUR: 1,
      USD: data?.rates?.USD ?? BASE_RATES.USD,
      CZK: data?.rates?.CZK ?? BASE_RATES.CZK
    };

    updateTotal();
  } catch {
    rates = { ...BASE_RATES };
    updateTotal();
  }
}

function initStaticUI() {
  setupLangBar();
  buildTourOptions();
  buildScheduleOptions();
  buildCurrencyOptions();
  setupDatePicker();

  bgA.style.backgroundImage = `url('${TOURS.oldTown.bg}')`;
  bgA.style.opacity = "1";
}

tourSelect.addEventListener("change", () => {
  const saved = collectParticipants();
  setBackground(TOURS[tourSelect.value]?.bg || "");
  const n = parseInt(numPersone.value) || 1;
  buildParticipants(n, saved);
  updateTotal();
});

currencySelect.addEventListener("change", updateTotal);
slotSelect.addEventListener("change", updateTotal);

numMinus.addEventListener("click", () => {
  const n = Math.max(1, parseInt(numPersone.value) - 1);
  numPersone.value = n;
  syncParticipants();
});

numPlus.addEventListener("click", () => {
  const n = Math.min(20, parseInt(numPersone.value) + 1);
  numPersone.value = n;
  syncParticipants();
});

partContainer.addEventListener("input", updateTotal);

btnPrenota.addEventListener("click", () => {
  hideError();

  const selectedDate = getSelectedDate();
  if (!selectedDate) {
    showError("Seleziona una data.");
    return;
  }

  const tourKey = tourSelect.value;
  const tourObj = TOURS[tourKey];
  const nomeTour = tourObj.label[lang];
  const prezzoBase = tourObj.price;
  const boxes = partContainer.querySelectorAll(".partecipante-box");

  const partecipanti = [];
  let hasError = false;

  boxes.forEach((box, i) => {
    const nomeInput = box.querySelector(".nome-input");
    const emailInput = box.querySelector(".email-input");
    const nomeVal = nomeInput.value.trim();
    const emailVal = emailInput.value.trim();

    const parole = nomeVal.split(/\s+/).filter(Boolean);
    if (parole.length < 2) {
      nomeInput.classList.add("error");
      nomeInput.addEventListener("animationend", () => nomeInput.classList.remove("error"), { once: true });
      hasError = true;
    } else {
      nomeInput.classList.remove("error");
    }

    if (emailVal && !isValidEmail(emailVal)) {
      emailInput.classList.add("error");
      emailInput.addEventListener("animationend", () => emailInput.classList.remove("error"), { once: true });
      showError(`${t.err_email} ${i + 1}`);
      hasError = true;
    } else {
      emailInput.classList.remove("error");
    }

    let costoExtra = 0;
    const nomiExtra = [];

    box.querySelectorAll(".extra-cb:checked").forEach(cb => {
      costoExtra += parseFloat(cb.dataset.price) || 0;
      const key = cb.dataset.key;
      const extraObj = getCurrentExtras().find(x => x.key === key);
      if (extraObj) {
        nomiExtra.push(extraObj.label[lang]);
      }
    });

    partecipanti.push({
      nome: nomeVal,
      email: emailVal,
      prezzoBase,
      extras: nomiExtra.join(", "),
      totale: prezzoBase + costoExtra
    });
  });

  if (hasError) {
    if (!statusMsg.textContent) showError(t.err_nome);
    return;
  }

  const grossTotalEUR = partecipanti.reduce((sum, p) => sum + p.totale, 0);
  let discountEUR = 0;

  for (let i = 0; i < partecipanti.length; i += 2) {
    if (partecipanti[i + 1] !== undefined) {
      const pairSubtotal = partecipanti[i].totale + partecipanti[i + 1].totale;
      discountEUR += pairSubtotal * 0.05;
    }
  }

  const finalTotalEUR = Math.max(0, grossTotalEUR - discountEUR);

  const ticketData = {
    nomeTour,
    partecipanti,
    dateStr: formatDateLocal(selectedDate),
    scheduleText: getScheduleLabel(slotSelect.value),
    currency: currencySelect.value,
    total: finalTotalEUR,
    noteTitle: t.pdf_note_title,
    noteText: t.pdf_note_text
  };

  const doc = buildPdf(ticketData);
  const firstName = partecipanti[0]?.nome || "ticket";
  const fileName = safeName(`${t.pdf_nome}_${firstName}`) + ".pdf";

  downloadLink.href = doc.output("datauristring");
  downloadLink.download = fileName;

  fillTicketPreview(ticketData);

  bookingCard.classList.add("hidden");
  resultView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  resultView.classList.add("hidden");
  bookingCard.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", async () => {
  initStaticUI();
  applyLanguage("it");

  if (partContainer.children.length === 0) {
    buildParticipants(1);
  }

  updateTotal();
  await loadExchangeRates();
});