const genres = [
  {
    id: "vypravovani",
    name: "Vypravování",
    emoji: "📖",
    main: "Děj a napětí",
    intro: "Seznámení s postavami, místem a časem.",
    body: "Zápletka, gradace a vyvrcholení.",
    ending: "Rozuzlení, pointa nebo ponaučení.",
    maturityFocus: "Pohlídej si jasný děj, posloupnost událostí a pointu.",
    phrases: ["Najednou...", "Vtom se ozvalo...", "Netušil jsem, že...", "Konečně jsme dorazili."],
    clues: ["Obsahuje zápletku a vyvrcholení.", "Hlavní roli hraje děj.", "Často používá časovou posloupnost."],
    prompts: [
      "Napiš příběh o ztraceném mobilu během školního výletu.",
      "Vypravuj o dni, kdy se pokazilo úplně všechno.",
      "Napiš příběh o setkání s člověkem, na kterého nikdy nezapomeneš.",
      "Vypravuj o situaci, kdy jsi musel rychle rozhodnout a nevěděl jsi, co dělat.",
      "Napiš příběh, ve kterém hlavní hrdina překoná svůj strach.",
      "Vypravuj o dni, který začal jako každý jiný, ale skončil překvapivě.",
      "Napiš příběh o tom, jak malá náhoda změnila velkou věc.",
      "Vypravuj o prvním dni na novém místě — ve škole, práci nebo cizím městě."
    ],
    markers: ["najednou", "potom", "nakonec", "vtom", "jednoho dne", "když", "pak"],
    example: {
      intro: "Bylo pondělní ráno, chladné a šedivé jako myš. Seděl jsem ve vlaku a z okna jsem sledoval pole, která se táhla až k obzoru.",
      body: "Vtom se dveře kupé otevřely a dovnitř vstoupil starší muž s kufrem. Zeptal se, jestli může sednout. Najednou jsem si uvědomil, že ho znám — byl to učitel, který mě kdysi málem propadl.",
      ending: "Vystoupil o dvě stanice dřív. Na rozloučenou mi podal ruku a řekl: »Rád jsem tě zase viděl.« Celý zbytek cesty jsem přemýšlel, jak moc se člověk dokáže změnit."
    }
  },
  {
    id: "liceni",
    name: "Líčení",
    emoji: "🎨",
    main: "Atmosféra a city",
    intro: "První dojem z místa, věci a celková nálada.",
    body: "Detailní a citový popis barev, vůní a zvuků.",
    ending: "Shrnutí pocitů, loučení se s obrazem.",
    maturityFocus: "Stav na atmosféře, smyslových detailech a celkovém dojmu.",
    phrases: ["Křišťálová rosa...", "Příroda se uložila ke spánku...", "Vzduchem se linula sladká vůně..."],
    clues: ["Pracuje s náladou a smyslovými vjemy.", "Často popisuje vůně, zvuky a barvy.", "Cílem je vyvolat obraz a pocit."],
    prompts: [
      "Vylíč ráno po letní bouřce.",
      "Popiš atmosféru opuštěné školní chodby večer.",
      "Vylíč přírodu v prvních minutách po svítání.",
      "Popiš atmosféru starého knihkupectví plného zaprášených knih.",
      "Vylíč zimní město těsně před Vánocemi — světla, vůně, ruch.",
      "Popiš pocit z procházky lesem v podzimním odpoledni.",
      "Vylíč slavnostní večeři u stolu — zvuky, vůně, světlo svíček.",
      "Popiš atmosféru prázdného koupaliště na konci léta."
    ],
    markers: ["vůně", "ticho", "světlo", "stín", "barva", "zvuk", "atmosféra", "pocit"],
    example: {
      intro: "Vzduch voněl mokrou zemí a jehličím. Mlha se pomalu stahovala mezi kmeny stromů jako tenký závoj, který nikdo nehodlal sundat.",
      body: "Kapky rosy visely na každém listu a třpytily se, jakmile se za mraky schoulilo bledé slunce. Odněkud zdaleka přilétal tlumený zpěv kosa — jediný hlas v té veliké tiché prázdnotě.",
      ending: "Stála jsem tam dlouho, bez pohybu, a jen jsem dýchala. Bylo to jako dovolená od vlastních myšlenek."
    }
  },
  {
    id: "uvaha",
    name: "Úvaha",
    emoji: "🤔",
    main: "Myšlenky a otázky",
    intro: "Představení problému a nastolení otázky.",
    body: "Argumenty, úhly pohledu a vlastní přemýšlení.",
    ending: "Shrnutí postojů, otevřená otázka čtenáři.",
    maturityFocus: "Potřebuje jasnou otázku, argumenty a vlastní postoj podložený úvahou.",
    phrases: ["Zamýšlím se nad tím, zda...", "Na druhou stranu...", "Je však pravdou, že...?"],
    clues: ["Staví na názorech a argumentech.", "Pokládá otázky a hledá odpovědi.", "Nemusí mít jednoznačný závěr."],
    prompts: [
      "Zamysli se nad tím, jestli jsou sociální sítě přínosem.",
      "Napiš úvahu na téma Proč lidé odkládají povinnosti?",
      "Úvaha na téma: Je svoboda volby vždy výhodou?",
      "Zamysli se, zda škola připravuje mladé lidi na skutečný život.",
      "Napiš úvahu o tom, co je důležitější — talent, nebo píle.",
      "Zamysli se nad tím, jestli moderní technologie lidi spojují, nebo rozdělují.",
      "Napiš úvahu: Má smysl číst knihy v době internetu?",
      "Zamysli se nad otázkou: Jsme za činy svých předků zodpovědní?"
    ],
    markers: ["myslím", "domnívám", "na druhou stranu", "protože", "otázka", "proč", "podle mě"],
    example: {
      intro: "Každé ráno otevřu telefon a hned vidím, co se děje na druhém konci světa. Je to pohodlné — ale začínám se ptát, jestli stálý přívod informací skutečně znamená, že jsme lépe informovaní.",
      body: "Na druhou stranu si uvědomuji, že přístup k informacím sám o sobě nestačí. Záleží na tom, jak s nimi pracujeme. Mnoho lidí sdílí zprávy bez ověření, což vede k rychlému šíření dezinformací. Myslím, že problémem není technologie, ale způsob, jakým ji používáme.",
      ending: "Nevím, jestli internet lidi dělá chytřejšími. Ale jsem přesvědčen, že nás učí jedné věci: kriticky myslet je dnes důležitější než kdy dřív. Otázka zní, jestli to chceme slyšet."
    }
  },
  {
    id: "charakteristika",
    name: "Charakteristika",
    emoji: "🧍",
    main: "Vlastnosti a vzhled",
    intro: "Kdo je ta osoba a jaký k ní máš vztah.",
    body: "Vnější vzhled a vnitřní povaha, chování.",
    ending: "Celkové zhodnocení postavy.",
    maturityFocus: "Spojuj vzhled, povahu i konkrétní projevy chování do jednoho celku.",
    phrases: ["Působí dojmem...", "Jeho dominantní vlastností je...", "V hloubi duše je to však..."],
    clues: ["Popisuje vnější i vnitřní znaky člověka.", "Hodnotí chování a povahu.", "Často se píše o konkrétní osobě."],
    prompts: [
      "Charakterizuj spolužáka, který je na první pohled nenápadný.",
      "Napiš charakteristiku oblíbené literární postavy.",
      "Charakterizuj člověka, od kterého ses naučil nejvíc.",
      "Napiš charakteristiku osoby, kterou obdivuješ, ale dobře neznáš.",
      "Charakterizuj postavu z knihy nebo filmu, která tě zaujala svou složitostí.",
      "Napiš charakteristiku souseda nebo člena rodiny, který je pro tebe záhadou.",
      "Charakterizuj člověka, jehož první dojem byl klamný.",
      "Napiš charakteristiku učitele nebo trenéra, který ti dal důležitou lekci."
    ],
    markers: ["vypadá", "působí", "chová", "vlastnost", "povaha", "dojem", "charakter"],
    example: {
      intro: "Na první pohled by ho člověk přehlédl. Sedí vždy vzadu, nemluví nahlas a nikdy nepřichází pozdě — ale nikdy není ani první.",
      body: "Přesto má jednu vlastnost, které si cením víc než cokoli jiného: vždy dodrží slovo. Nevychválí tě, ale pokud řekne, že přijde, přijde. Jeho dominantní vlastností je spolehlivost, která nehlásí příchod dopředu.",
      ending: "V hloubi duše je to člověk, který se nestará o dojem — stará se o výsledek. A to je, myslím, ta nejcennější forma charakteru."
    }
  },
  {
    id: "recenze",
    name: "Recenze",
    emoji: "🎬",
    main: "Hodnocení a názor",
    intro: "Základní fakta o díle: název, autor, žánr.",
    body: "Rozbor kladů a záporů: styl, výkony, děj.",
    ending: "Verdikt a doporučení.",
    maturityFocus: "Uveď fakta o díle, argumenty pro hodnocení a jasné doporučení.",
    phrases: ["Dílo vyniká především...", "Slabinou je naopak...", "Fanouškům žánru vřele doporučuji."],
    clues: ["Hodnotí nějaké dílo.", "Uvádí klady, zápory a doporučení.", "Pracuje s názorem autora textu."],
    prompts: [
      "Napiš recenzi na film nebo seriál, který jsi nedávno viděl.",
      "Zkus zhodnotit knihu, kterou bys doporučil spolužákům.",
      "Napiš recenzi na hru nebo aplikaci, která tě oslovila.",
      "Zhodnoť koncert, divadelní představení nebo výstavu, které jsi navštívil.",
      "Napiš recenzi na dokumentární film nebo podcast.",
      "Zhodnoť knihu nebo film, který tě zklamal — a vysvětli proč.",
      "Napiš recenzi na klasické literární dílo z povinné četby.",
      "Zhodnoť album nebo hudební projekt, který tě v poslední době zaujal."
    ],
    markers: ["autor", "děj", "doporučuji", "nedoporučuji", "klady", "zápory", "hodnotím"],
    example: {
      intro: "Román Hrdý Budžes od Ireny Douskové byl vydán v roce 1998 a dodnes patří mezi nejčtenější česká díla pro mladé čtenáře. Autorka v něm zachycuje dětský pohled na normalizační Československo.",
      body: "Dílo vyniká především autentickým hlasem hlavní hrdinky Helenky, jehož humor je přirozený a nezatížený. Slabinou je naopak místy roztříštěná dějová linka, která může méně trpělivého čtenáře zmást.",
      ending: "I přes drobné výhrady knihu doporučuji každému, kdo chce pochopit, jak vypadal život za komunismu očima dítěte. Je to čtení rychlé, chytré a překvapivě dojemné."
    }
  }
];

const state = {
  score: Number(localStorage.getItem("sloh-score") || 0),
  currentQuiz: null,
  currentStructure: null,
  currentPrompt: null,
  history: JSON.parse(localStorage.getItem("sloh-history") || "[]"),
  mockExam: {
    active: false,
    startTime: null,
    durationMinutes: 60,
    timerId: null
  },
  structureSelections: {
    intro: null,
    body: null,
    ending: null
  },
  quiz: {
    total: Number(localStorage.getItem("sloh-quiz-total") || 0),
    correct: Number(localStorage.getItem("sloh-quiz-correct") || 0)
  },
  darkMode: localStorage.getItem("sloh-dark") === "1"
};

const MATURITY_MIN_WORDS = 250;
const HISTORY_LIMIT = 5;
const FILLER_WORDS = ["prostě", "jakoby", "vlastně", "určitě", "opravdu", "hodně"];
const STOP_WORDS = ["který", "kterou", "které", "protože", "takže", "ještě", "může", "mohou", "bude", "jsem", "jsou", "byla", "byly", "napiš", "téma"];

const totalScore = document.getElementById("total-score");
const scoreMessage = document.getElementById("score-message");
const genreSelect = document.getElementById("genre-select");
const studyCard = document.getElementById("study-card");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizStats = document.getElementById("quiz-stats");
const structureTitle = document.getElementById("structure-title");
const introOptions = document.getElementById("intro-options");
const bodyOptions = document.getElementById("body-options");
const endingOptions = document.getElementById("ending-options");
const structureFeedback = document.getElementById("structure-feedback");
const promptContent = document.getElementById("prompt-content");
const essayText = document.getElementById("essay-text");
const evaluationScore = document.getElementById("evaluation-score");
const evaluationBand = document.getElementById("evaluation-band");
const evaluationBreakdown = document.getElementById("evaluation-breakdown");
const evaluationTips = document.getElementById("evaluation-tips");
const quickWarningsList = document.getElementById("quick-warnings-list");
const wordCounter = document.getElementById("word-counter");
const wordProgressBar = document.getElementById("word-progress-bar");
const mockExamTimer = document.getElementById("mock-exam-timer");
const mockExamVerdict = document.getElementById("mock-exam-verdict");
const mockExamToggle = document.getElementById("mock-exam-toggle");
const mockExamPresets = [...document.querySelectorAll(".timer-preset")];
const historyList = document.getElementById("history-list");
const notes = document.getElementById("notes");
const darkModeToggle = document.getElementById("dark-mode-toggle");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function updateScore(points, message) {
  state.score += points;
  localStorage.setItem("sloh-score", String(state.score));
  totalScore.textContent = state.score;
  scoreMessage.textContent = message;
}

function renderStudyCard(genreId) {
  const genre = genres.find((item) => item.id === genreId) || genres[0];
  genreSelect.value = genre.id;
  studyCard.innerHTML = `
    <h3>${genre.emoji} ${genre.name}</h3>
    <div class="info-grid">
      <div class="info-pill">
        <span>Hlavní prvek</span>
        <strong>${genre.main}</strong>
      </div>
      <div class="info-pill">
        <span>Úvod</span>
        <p>${genre.intro}</p>
      </div>
      <div class="info-pill">
        <span>Stať</span>
        <p>${genre.body}</p>
      </div>
      <div class="info-pill">
        <span>Závěr</span>
        <p>${genre.ending}</p>
      </div>
    </div>
    <div class="tip-box">
      <span>Typické výrazy</span>
      <ul class="tag-list">
        ${genre.phrases.map((phrase) => `<li>${phrase}</li>`).join("")}
      </ul>
    </div>
    ${genre.example ? `
    <details class="example-box">
      <summary>Ukázkové odstavce</summary>
      <div class="example-grid">
        <div class="example-part">
          <span class="example-label">Úvod</span>
          <p>${genre.example.intro}</p>
        </div>
        <div class="example-part">
          <span class="example-label">Stať</span>
          <p>${genre.example.body}</p>
        </div>
        <div class="example-part">
          <span class="example-label">Závěr</span>
          <p>${genre.example.ending}</p>
        </div>
      </div>
    </details>
    ` : ""}
  `;
}

function buildQuizRound() {
  const answer = genres[Math.floor(Math.random() * genres.length)];
  const clue = answer.clues[Math.floor(Math.random() * answer.clues.length)];
  const options = shuffle(genres.map((genre) => genre.name));
  state.currentQuiz = { answer: answer.name, clue };
  quizQuestion.textContent = clue;
  quizFeedback.textContent = "";
  quizFeedback.className = "feedback";
  quizOptions.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => handleQuizGuess(button, option));
    quizOptions.appendChild(button);
  });
}

function renderQuizStats() {
  if (!quizStats) return;
  const { total, correct } = state.quiz;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  quizStats.innerHTML = total === 0
    ? "Zatím bez odpovědí"
    : `${correct} / ${total} správně &nbsp;·&nbsp; ${pct} %`;
}

function handleQuizGuess(button, guess) {
  const buttons = [...quizOptions.querySelectorAll("button")];
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === state.currentQuiz.answer) {
      item.classList.add("correct");
    }
  });

  state.quiz.total += 1;

  if (guess === state.currentQuiz.answer) {
    button.classList.add("correct");
    quizFeedback.textContent = "Správně! Získáváš 10 bodů.";
    quizFeedback.className = "feedback success";
    updateScore(10, "Skvělé, poznávačka ti jde.");
    state.quiz.correct += 1;
  } else {
    button.classList.add("wrong");
    quizFeedback.textContent = `Tentokrát ne. Správná odpověď je ${state.currentQuiz.answer}.`;
    quizFeedback.className = "feedback error";
  }

  localStorage.setItem("sloh-quiz-total", String(state.quiz.total));
  localStorage.setItem("sloh-quiz-correct", String(state.quiz.correct));
  renderQuizStats();
}

function createStructureOptions(correctText, pool) {
  return shuffle([correctText, ...shuffle(pool.filter((item) => item !== correctText)).slice(0, 2)]);
}

function renderStructureRound() {
  const genre = genres[Math.floor(Math.random() * genres.length)];
  state.currentStructure = genre;
  state.structureSelections = { intro: null, body: null, ending: null };
  structureFeedback.textContent = "";
  structureFeedback.className = "feedback";
  structureTitle.textContent = `Vyber správnou stavbu pro útvar ${genre.name}.`;

  renderStructureColumn(introOptions, "intro", createStructureOptions(genre.intro, genres.map((item) => item.intro)));
  renderStructureColumn(bodyOptions, "body", createStructureOptions(genre.body, genres.map((item) => item.body)));
  renderStructureColumn(endingOptions, "ending", createStructureOptions(genre.ending, genres.map((item) => item.ending)));
}

function renderStructureColumn(container, key, options) {
  container.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => selectStructureOption(container, key, option, button));
    container.appendChild(button);
  });
}

function selectStructureOption(container, key, option, clickedButton) {
  [...container.children].forEach((button) => button.classList.remove("correct", "wrong"));
  clickedButton.classList.add("correct");
  state.structureSelections[key] = option;
  maybeScoreStructure();
}

function maybeScoreStructure() {
  const { intro, body, ending } = state.structureSelections;
  if (!intro || !body || !ending) {
    return;
  }

  const genre = state.currentStructure;
  const isCorrect = intro === genre.intro && body === genre.body && ending === genre.ending;

  if (isCorrect) {
    structureFeedback.textContent = "Perfektní! Stavbu slohu máš správně. +15 bodů.";
    structureFeedback.className = "feedback success";
    updateScore(15, "Výborně, umíš i stavbu jednotlivých útvarů.");
  } else {
    structureFeedback.textContent = "Ještě ne. Zkus nové zadání a sleduj rozdíly mezi útvary.";
    structureFeedback.className = "feedback error";
  }

  [introOptions, bodyOptions, endingOptions].forEach((container) => {
    [...container.children].forEach((button) => {
      button.disabled = true;
      const text = button.textContent;
      const matchesIntro = container === introOptions && text === genre.intro;
      const matchesBody = container === bodyOptions && text === genre.body;
      const matchesEnding = container === endingOptions && text === genre.ending;
      if (matchesIntro || matchesBody || matchesEnding) {
        button.classList.add("correct");
      }
    });
  });
}

function renderPrompt() {
  const genre = genres[Math.floor(Math.random() * genres.length)];
  const prompt = genre.prompts[Math.floor(Math.random() * genre.prompts.length)];
  state.currentPrompt = { genre, prompt };
  promptContent.innerHTML = `
    <div class="info-grid">
      <div class="info-pill">
        <span>Vylosovaný útvar</span>
        <strong>${genre.emoji} ${genre.name}</strong>
      </div>
      <div class="info-pill">
        <span>Hlavní zaměření</span>
        <p>${genre.main}</p>
      </div>
      <div class="info-pill">
        <span>Téma</span>
        <p>${prompt}</p>
      </div>
      <div class="info-pill">
        <span>Rada</span>
        <p>${genre.maturityFocus}</p>
      </div>
    </div>
  `;
  resetEvaluation();
}

function setMockExamVerdict(message, tone = "default") {
  mockExamVerdict.textContent = message;
  mockExamVerdict.className = tone === "default" ? "timer-note" : `timer-note ${tone}`;
}

function resetEvaluation() {
  evaluationScore.textContent = "Zatím nevyhodnoceno";
  evaluationBand.textContent = "Napiš draft a spusť kontrolu.";
  evaluationBand.className = "feedback";
  evaluationBreakdown.innerHTML = "";
  evaluationTips.innerHTML = "<span>Doporučení</span><p>Po vyhodnocení tu uvidíš konkrétní tipy, co v maturitním slohu zlepšit.</p>";
  setMockExamVerdict(
    state.mockExam.active
      ? "Trénink běží. Piš bez přerušení a na konci si nech text vyhodnotit."
      : "Vyber délku a spusť odpočet času."
  );
  renderQuickWarnings(essayText.value || "");
}

function getWordCount(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function getParagraphs(text) {
  return text
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function getPromptKeywords(prompt) {
  return prompt
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4 && !["napiš", "napiš", "téma", "který", "kterou", "během"].includes(word));
}

function countMatches(text, patterns) {
  const lowerText = text.toLowerCase();
  return patterns.filter((pattern) => lowerText.includes(pattern.toLowerCase())).length;
}

function getTopRepeatedWords(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4 && !STOP_WORDS.includes(word));
  const counts = words.reduce((accumulator, word) => {
    accumulator[word] = (accumulator[word] || 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(counts)
    .filter(([, count]) => count >= 4)
    .sort((first, second) => second[1] - first[1])
    .slice(0, 3);
}

function getLongSentences(text) {
  return text
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .filter((sentence) => sentence.split(/\s+/).length > 28);
}

function getQuickWarnings(text) {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return ["Začni psát draft. Průběžně tu uvidíš varování k rozsahu, odstavcům a stylu."];
  }

  const warnings = [];
  const wordCount = getWordCount(trimmedText);
  const paragraphs = getParagraphs(trimmedText);
  const longSentences = getLongSentences(trimmedText);
  const repeatedWords = getTopRepeatedWords(trimmedText);
  const fillerHits = countMatches(trimmedText, FILLER_WORDS);

  if (wordCount < MATURITY_MIN_WORDS) {
    warnings.push(`Text má zatím ${wordCount} slov. K maturitě míříš na minimum ${MATURITY_MIN_WORDS} slov.`);
  }

  if (paragraphs.length < 3) {
    warnings.push("Zatím nejsou jasně oddělené aspoň tři odstavce pro úvod, stať a závěr.");
  }

  if (longSentences.length > 0) {
    warnings.push(`Máš ${longSentences.length} velmi dlouhých vět. Zkus některé rozdělit pro lepší čitelnost.`);
  }

  if (repeatedWords.length > 0) {
    warnings.push(`Často se opakují slova: ${repeatedWords.map(([word]) => word).join(", ")}.`);
  }

  if (fillerHits >= 3) {
    warnings.push("Text používá víc vycpávkových slov. Zkus omezit výrazy jako prostě, vlastně nebo jakoby.");
  }

  if (warnings.length === 0) {
    warnings.push("Průběžná kontrola je v pořádku: rozsah, odstavce i čitelnost zatím vypadají dobře.");
  }

  return warnings;
}

function renderQuickWarnings(text) {
  quickWarningsList.innerHTML = getQuickWarnings(text)
    .map((warning) => `<li>${warning}</li>`)
    .join("");
}

function renderWordCounter(text) {
  const count = getWordCount(text);
  wordCounter.textContent = String(count);
  if (wordProgressBar) {
    const pct = Math.min(100, Math.round((count / MATURITY_MIN_WORDS) * 100));
    wordProgressBar.style.width = `${pct}%`;
    wordProgressBar.className = "word-progress-fill" +
      (count >= MATURITY_MIN_WORDS ? " done" : count >= 150 ? " close" : "");
  }
}

function updateMockExamPresetButtons() {
  mockExamPresets.forEach((button) => {
    const isActive = Number(button.dataset.minutes) === state.mockExam.durationMinutes;
    button.classList.toggle("active", isActive);
    button.disabled = state.mockExam.active;
  });
}

function scoreTaskFulfillment(text, prompt, genre) {
  const wordCount = getWordCount(text);
  const promptKeywords = getPromptKeywords(prompt);
  const keywordMatches = countMatches(text, promptKeywords);
  const markerMatches = countMatches(text, genre.markers);

  let score = 0;
  if (wordCount >= MATURITY_MIN_WORDS) {
    score += 14;
  } else if (wordCount >= 200) {
    score += 10;
  } else if (wordCount >= 150) {
    score += 6;
  } else if (wordCount >= 100) {
    score += 2;
  }

  score += Math.min(8, keywordMatches * 2);
  score += Math.min(3, markerMatches);

  return {
    label: "Zadání a rozsah",
    score: Math.min(25, score),
    hint: wordCount < MATURITY_MIN_WORDS
      ? `Text je zatím krátký. Pro maturitní režim počítej aspoň s ${MATURITY_MIN_WORDS} slovy.`
      : "Rozsah i vazba na zadání působí použitelně."
  };
}

function scoreComposition(text) {
  const paragraphs = getParagraphs(text);
  const lowerText = text.toLowerCase();
  const hasConclusionSignal = ["závěrem", "nakonec", "shrnu", "celkově", "proto si myslím", "na závěr"].some((signal) => lowerText.includes(signal));
  const hasOpeningSignal = ["když", "dnes", "mnoho lidí", "často", "jednoho dne", "na první pohled"].some((signal) => lowerText.includes(signal));

  let score = 0;
  if (paragraphs.length >= 3) {
    score += 14;
  } else if (paragraphs.length === 2) {
    score += 8;
  } else if (paragraphs.length === 1) {
    score += 3;
  }

  if (hasOpeningSignal) {
    score += 5;
  }

  if (hasConclusionSignal) {
    score += 6;
  }

  return {
    label: "Kompozice",
    score: Math.min(25, score),
    hint: paragraphs.length < 3
      ? "Pomohlo by jasně oddělit úvod, stať a závěr do odstavců."
      : "Text je členěný a kompozice je čitelnější."
  };
}

function scoreGenreStyle(text, genre) {
  const markerMatches = countMatches(text, genre.markers);
  const phraseMatches = countMatches(text, genre.phrases.map((phrase) => phrase.replace(/\.\.\./g, "").toLowerCase()));
  const questionMarks = (text.match(/\?/g) || []).length;

  let score = Math.min(10, markerMatches * 2 + phraseMatches * 2);
  let hint = `Zkus víc zapojit typické znaky útvaru ${genre.name.toLowerCase()}.`;

  if (genre.id === "uvaha") {
    const argumentSignals = countMatches(text, ["na druhou stranu", "podle mě", "domnívám", "myslím", "protože", "proto"]);
    score += Math.min(10, argumentSignals * 2);
    if (questionMarks > 0) {
      score += 5;
    }
    hint = argumentSignals >= 3
      ? "Úvaha má argumenty i osobní stanovisko, což je pro maturitu dobrý základ."
      : "U úvahy přidej víc argumentů, protinázorů a vlastní stanovisko.";
  }

  if (genre.id === "recenze") {
    const reviewSignals = countMatches(text, ["autor", "režisér", "kniha", "film", "seriál", "klady", "zápory", "doporučuji", "nedoporučuji"]);
    if (/doporuč|nedoporuč/i.test(text)) {
      score += 4;
    }
    score += Math.min(11, reviewSignals * 2);
    hint = reviewSignals >= 4
      ? "Recenze obsahuje fakta o díle i hodnoticí jazyk, což funguje dobře."
      : "U recenze doplň fakta o díle, konkrétní klady a zápory a jasné doporučení.";
  }

  if (genre.id === "vypravovani") {
    const storySignals = countMatches(text, ["najednou", "potom", "nakonec", "vtom", "když", "pak", "nakonec"]);
    const climaxSignals = countMatches(text, ["nakonec", "najednou", "vtom", "překvapivě", "pointa"]);
    score += Math.min(10, storySignals * 2) + Math.min(5, climaxSignals * 2);
    hint = storySignals >= 3
      ? "Vypravování drží dějovou linku a používá časovou posloupnost."
      : "U vypravování posil časovou návaznost, zápletku a pointu.";
  }

  if (genre.id === "liceni") {
    const sensorySignals = countMatches(text, ["vůně", "zvuk", "ticho", "světlo", "stín", "barva", "chlad", "teplo", "pocit"]);
    score += Math.min(15, sensorySignals * 2);
    hint = sensorySignals >= 4
      ? "Líčení dobře pracuje se smysly a atmosférou."
      : "U líčení přidej víc smyslových detailů, barev, zvuků a celkové nálady.";
  }

  if (genre.id === "charakteristika") {
    const characterSignals = countMatches(text, ["vypadá", "působí", "povaha", "vlastnost", "chová", "dojem", "spolehliv", "laskav", "odváž"]);
    score += Math.min(15, characterSignals * 2);
    hint = characterSignals >= 4
      ? "Charakteristika propojuje vzhled, chování i povahu."
      : "U charakteristiky spoj vzhled s povahou a dolož vlastnosti konkrétním chováním.";
  }

  return {
    label: "Znaky útvaru",
    score: Math.min(25, score),
    hint
  };
}

function scoreLanguage(text) {
  const sentences = text.split(/[.!?]+/).map((sentence) => sentence.trim()).filter(Boolean);
  const wordCount = getWordCount(text);
  const avgSentenceLength = sentences.length ? wordCount / sentences.length : 0;
  const punctuationCount = (text.match(/[,.!?;:]/g) || []).length;
  const uppercaseStarts = sentences.filter((sentence) => /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/.test(sentence)).length;

  let score = 0;
  if (sentences.length >= 5) {
    score += 8;
  } else if (sentences.length >= 3) {
    score += 5;
  }

  if (avgSentenceLength >= 7 && avgSentenceLength <= 24) {
    score += 8;
  } else if (avgSentenceLength > 0) {
    score += 4;
  }

  if (punctuationCount >= Math.max(4, Math.floor(sentences.length * 0.8))) {
    score += 5;
  }

  if (uppercaseStarts >= Math.max(1, sentences.length - 1)) {
    score += 4;
  }

  return {
    label: "Jazyk a čitelnost",
    score: Math.min(25, score),
    hint: score < 14
      ? "Zkontroluj věty, interpunkci a plynulost. Pomáhají kratší, jasně oddělené myšlenky."
      : "Text je poměrně čitelný a věty mají použitelný rytmus."
  };
}

function getEvaluationBand(total) {
  if (total >= 80) {
    return { text: "Silný maturitní základ", className: "feedback success" };
  }

  if (total >= 60) {
    return { text: "Dobré, ale ještě to chce dopilovat", className: "feedback success" };
  }

  if (total >= 40) {
    return { text: "Základ tam je, ale hrozí ztráta bodů", className: "feedback error" };
  }

  return { text: "Draft je zatím slabý pro maturitní hodnocení", className: "feedback error" };
}

function getMaturityVerdict(total, text) {
  const wordCount = getWordCount(text);
  const paragraphs = getParagraphs(text).length;

  if (total >= 60 && wordCount >= MATURITY_MIN_WORDS && paragraphs >= 3) {
    return { text: "Orientačně bys v maturitním režimu prošel.", className: "feedback success" };
  }

  if (wordCount < MATURITY_MIN_WORDS) {
    return { text: `Největší problém je rozsah. Pro maturitní režim se potřebuješ dostat aspoň na ${MATURITY_MIN_WORDS} slov.`, className: "feedback error" };
  }

  return { text: "Teď by hrozila ztráta bodů. Dopracuj kompozici, znaky útvaru nebo jazykovou čistotu.", className: "feedback error" };
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderHistory() {
  if (!state.history.length) {
    historyList.innerHTML = "<div class=\"history-item\"><strong>Zatím bez pokusů</strong><p>Jakmile vyhodnotíš první sloh, objeví se tady přehled posledních výsledků.</p></div>";
    return;
  }

  historyList.innerHTML = state.history
    .map((entry) => `
      <article class="history-item">
        <strong>${entry.genre}</strong>
        <span>${entry.score} / 100 bodů · ${entry.mode}</span>
        <div class="history-meta">
          <span>${formatDate(entry.createdAt)}</span>
          <span>${entry.wordCount} slov</span>
          <span>${entry.band}</span>
        </div>
        <p>${entry.prompt}</p>
      </article>
    `)
    .join("");
}

function saveAttempt(result) {
  state.history = [result, ...state.history].slice(0, HISTORY_LIMIT);
  localStorage.setItem("sloh-history", JSON.stringify(state.history));
  renderHistory();
}

function updateMockExamUi() {
  if (state.mockExam.active && state.mockExam.startTime) {
    const elapsedSeconds = Math.floor((Date.now() - state.mockExam.startTime) / 1000);
    const remainingSeconds = state.mockExam.durationMinutes * 60 - elapsedSeconds;

    mockExamTimer.textContent = formatTime(remainingSeconds);
    mockExamToggle.textContent = "Odpočet běží";
    updateMockExamPresetButtons();

    if (remainingSeconds <= 0) {
      finishMockExam(true);
    }
    return;
  }

  mockExamTimer.textContent = formatTime(state.mockExam.durationMinutes * 60);
  mockExamToggle.textContent = "Spustit odpočet času";
  updateMockExamPresetButtons();
}

function startMockExam() {
  if (state.mockExam.active) {
    return;
  }

  state.mockExam.active = true;
  state.mockExam.startTime = Date.now();
  clearInterval(state.mockExam.timerId);
  state.mockExam.timerId = window.setInterval(updateMockExamUi, 1000);
  setMockExamVerdict("Trénink běží. Piš bez přerušení a na konci si nech text vyhodnotit.");
  updateMockExamUi();
}

function stopMockExam() {
  state.mockExam.active = false;
  state.mockExam.startTime = null;
  clearInterval(state.mockExam.timerId);
  state.mockExam.timerId = null;
  updateMockExamUi();
}

function finishMockExam(timeExpired = false) {
  const evaluation = evaluateWriting({ mode: "Trénink nanečisto" });
  stopMockExam();

  if (!evaluation) {
    setMockExamVerdict("Trénink skončil bez textu. Zkus příště napsat aspoň základ draftu.", "error");
    return;
  }

  const verdict = getMaturityVerdict(evaluation.total, evaluation.text);
  setMockExamVerdict(
    timeExpired ? `Čas vypršel. ${verdict.text}` : verdict.text,
    verdict.className.includes("success") ? "success" : "error"
  );
}

function renderEvaluation(results, total, genre) {
  const band = getEvaluationBand(total);
  evaluationScore.textContent = `${total} / 100 bodů`;
  evaluationBand.textContent = band.text;
  evaluationBand.className = band.className;
  evaluationBreakdown.innerHTML = results
    .map((item) => `
      <div class="evaluation-card">
        <span>${item.label}</span>
        <strong>${item.score} / 25</strong>
        <p>${item.hint}</p>
      </div>
    `)
    .join("");

  const weakAreas = results.filter((item) => item.score < 15).map((item) => `<li>${item.hint}</li>`);
  const defaultTips = [
    `<li>U útvaru ${genre.name.toLowerCase()} si hlídej: ${genre.maturityFocus.toLowerCase()}</li>`,
    "<li>Piš do odstavců a nech v závěru jasný dojem, pointu nebo stanovisko.</li>",
    "<li>Před odevzdáním si text jednou přečti nahlas — odhalíš kostrbaté věty i opakování.</li>"
  ];

  evaluationTips.innerHTML = `
    <span>Doporučení</span>
    <ul>
      ${[...weakAreas, ...defaultTips].slice(0, 5).join("")}
    </ul>
  `;
}

function evaluateWriting(options = {}) {
  const text = essayText.value.trim();

  if (!text) {
    evaluationScore.textContent = "Chybí text slohu";
    evaluationBand.textContent = "Nejdřív napiš aspoň krátký draft, potom půjde vyhodnotit.";
    evaluationBand.className = "feedback error";
    evaluationBreakdown.innerHTML = "";
    evaluationTips.innerHTML = "<span>Doporučení</span><p>Začni alespoň úvodem a jedním odstavcem stati.</p>";
    renderQuickWarnings(text);
    return null;
  }

  const genre = state.currentPrompt?.genre || genres[0];
  const prompt = state.currentPrompt?.prompt || genre.prompts[0];
  const results = [
    scoreTaskFulfillment(text, prompt, genre),
    scoreComposition(text),
    scoreGenreStyle(text, genre),
    scoreLanguage(text)
  ];
  const total = results.reduce((sum, item) => sum + item.score, 0);
  const band = getEvaluationBand(total);

  renderEvaluation(results, total, genre);
  renderQuickWarnings(text);

  if (!options.silent) {
    saveAttempt({
      createdAt: Date.now(),
      genre: genre.name,
      prompt,
      score: total,
      band: band.text,
      wordCount: getWordCount(text),
      mode: options.mode || "Běžné hodnocení"
    });
  }

  return { total, genre, prompt, results, text, band };
}

function applyDarkMode() {
  document.body.classList.toggle("dark-mode", state.darkMode);
  if (darkModeToggle) {
    darkModeToggle.textContent = state.darkMode ? "☀️ Světlý" : "🌙 Tmavý";
    darkModeToggle.setAttribute("aria-pressed", String(state.darkMode));
  }
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  localStorage.setItem("sloh-dark", state.darkMode ? "1" : "0");
  applyDarkMode();
}

function copyEssayToClipboard() {
  const text = essayText.value.trim();
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copy-essay");
    if (btn) {
      const original = btn.textContent;
      btn.textContent = "✓ Zkopírováno";
      setTimeout(() => { btn.textContent = original; }, 1800);
    }
  });
}

function downloadEssay() {
  const text = essayText.value.trim();
  if (!text) return;

  const genre = state.currentPrompt?.genre?.name || "Sloh";
  const prompt = state.currentPrompt?.prompt || "";
  const date = new Date().toLocaleDateString("cs-CZ");
  const filename = `${genre.toLowerCase().replace(/\s+/g, "-")}-${new Date().toISOString().slice(0, 10)}.pdf`;

  const paragraphs = text.split(/\n+/).filter(Boolean);

  const docDefinition = {
    content: [
      { text: genre, style: "title" },
      { text: prompt ? `${prompt} \u2013 ${date}` : date, style: "subtitle" },
      {
        canvas: [
          { type: "line", x1: 0, y1: 6, x2: 515, y2: 6, lineWidth: 0.5, lineColor: "#cccccc" }
        ]
      },
      { text: "", margin: [0, 10, 0, 0] },
      ...paragraphs.map((p) => ({ text: p, style: "body" }))
    ],
    styles: {
      title: { fontSize: 17, bold: true, marginBottom: 5, color: "#111111" },
      subtitle: { fontSize: 10, color: "#666666", marginBottom: 10 },
      body: { fontSize: 12, lineHeight: 1.65, marginBottom: 8, color: "#111111", alignment: "justify" }
    },
    pageMargins: [56, 50, 56, 50],
    defaultStyle: { font: "Roboto" }
  };

  pdfMake.createPdf(docDefinition).download(filename);
}

const FLASHCARD_FACTS = genres.map((genre) => [
  { q: `Co je hlavním prvkem útvaru ${genre.name}?`, a: genre.main },
  { q: `Jak začíná ${genre.name}?`, a: genre.intro },
  { q: `Co tvoří stať v ${genre.name.toLowerCase()}?`, a: genre.body },
  { q: `Jak typicky končí ${genre.name}?`, a: genre.ending },
  { q: `Na co si dát pozor v maturitním ${genre.name.toLowerCase()}?`, a: genre.maturityFocus }
]).flat();

let flashcardIndex = 0;
let flashcardFlipped = false;

function renderFlashcard() {
  const card = FLASHCARD_FACTS[flashcardIndex];
  const cardEl = document.getElementById("flashcard-inner");
  const counterEl = document.getElementById("flashcard-counter");
  if (!cardEl) return;
  flashcardFlipped = false;
  cardEl.classList.remove("flipped");
  document.getElementById("flashcard-front-text").textContent = card.q;
  document.getElementById("flashcard-back-text").textContent = card.a;
  if (counterEl) counterEl.textContent = `${flashcardIndex + 1} / ${FLASHCARD_FACTS.length}`;
}

function flipFlashcard() {
  flashcardFlipped = !flashcardFlipped;
  const cardEl = document.getElementById("flashcard-inner");
  if (cardEl) cardEl.classList.toggle("flipped", flashcardFlipped);
}

function nextFlashcard() {
  flashcardIndex = (flashcardIndex + 1) % FLASHCARD_FACTS.length;
  renderFlashcard();
}

function prevFlashcard() {
  flashcardIndex = (flashcardIndex - 1 + FLASHCARD_FACTS.length) % FLASHCARD_FACTS.length;
  renderFlashcard();
}

function shuffleFlashcards() {
  FLASHCARD_FACTS.sort(() => Math.random() - 0.5);
  flashcardIndex = 0;
  renderFlashcard();
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`${tab.dataset.tab}-panel`).classList.add("active");
    });
  });
}

function populateGenres() {
  genreSelect.innerHTML = genres
    .map((genre) => `<option value="${genre.id}">${genre.name}</option>`)
    .join("");
  genreSelect.addEventListener("change", (event) => renderStudyCard(event.target.value));
}

function init() {
  totalScore.textContent = state.score;
  populateGenres();
  renderStudyCard(genres[0].id);
  buildQuizRound();
  renderStructureRound();
  renderPrompt();
  renderHistory();
  renderQuizStats();
  updateMockExamUi();
  setupTabs();
  applyDarkMode();
  renderFlashcard();

  document.getElementById("next-quiz").addEventListener("click", buildQuizRound);
  document.getElementById("new-structure").addEventListener("click", renderStructureRound);
  document.getElementById("new-prompt").addEventListener("click", renderPrompt);
  document.getElementById("evaluate-writing").addEventListener("click", () => evaluateWriting());
  document.getElementById("clear-writing").addEventListener("click", () => {
    essayText.value = "";
    localStorage.removeItem("sloh-draft");
    resetEvaluation();
    renderWordCounter(essayText.value);
  });
  mockExamToggle.addEventListener("click", startMockExam);
  mockExamPresets.forEach((button) => {
    button.addEventListener("click", () => {
      if (state.mockExam.active) {
        return;
      }

      state.mockExam.durationMinutes = Number(button.dataset.minutes);
      updateMockExamUi();
    });
  });
  essayText.addEventListener("input", () => {
    localStorage.setItem("sloh-draft", essayText.value);
    renderQuickWarnings(essayText.value);
    renderWordCounter(essayText.value);
  });
  notes.addEventListener("input", () => localStorage.setItem("sloh-notes", notes.value));

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }

  const copyBtn = document.getElementById("copy-essay");
  if (copyBtn) copyBtn.addEventListener("click", copyEssayToClipboard);

  const downloadBtn = document.getElementById("download-essay");
  if (downloadBtn) downloadBtn.addEventListener("click", downloadEssay);

  const fcFlip = document.getElementById("fc-flip");
  const fcNext = document.getElementById("fc-next");
  const fcPrev = document.getElementById("fc-prev");
  const fcShuffle = document.getElementById("fc-shuffle");
  if (fcFlip) fcFlip.addEventListener("click", flipFlashcard);
  if (fcNext) fcNext.addEventListener("click", nextFlashcard);
  if (fcPrev) fcPrev.addEventListener("click", prevFlashcard);
  if (fcShuffle) fcShuffle.addEventListener("click", shuffleFlashcards);

  const fcCard = document.getElementById("flashcard-inner");
  if (fcCard) {
    fcCard.addEventListener("click", flipFlashcard);
    fcCard.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") flipFlashcard(); });
  }

  const quizReset = document.getElementById("quiz-reset-stats");
  if (quizReset) {
    quizReset.addEventListener("click", () => {
      state.quiz.total = 0;
      state.quiz.correct = 0;
      localStorage.removeItem("sloh-quiz-total");
      localStorage.removeItem("sloh-quiz-correct");
      renderQuizStats();
    });
  }

  essayText.value = localStorage.getItem("sloh-draft") || "";
  notes.value = localStorage.getItem("sloh-notes") || "";
  renderQuickWarnings(essayText.value);
  renderWordCounter(essayText.value);
}

init();
