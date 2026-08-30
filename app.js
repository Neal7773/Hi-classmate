/* All quiz content lives here, separate from the rendering engine below. */
const QUIZ_DATA = {
  title: "What Type of Classmate Are You?",
  results: {
    sunshine: {
      name: "The Human Sunshine",
      emoji: "☀️",
      color: "#ffd84d",
      tagline: "The class mood booster",
      description: "You make even Monday mornings feel lighter. You remember birthdays, hype up presentations, and somehow know when a seatmate needs a snack or a pep talk.",
      traits: ["Positive", "Caring", "Friendly"]
    },
    achiever: {
      name: "The Goal Getter",
      emoji: "🏆",
      color: "#ff9f43",
      tagline: "Prepared before the teacher asks",
      description: "You have the notes, the plan, and probably the backup plan. You work hard, pull the group forward, and turn deadlines into a personal sport.",
      traits: ["Driven", "Reliable", "Focused"]
    },
    comedian: {
      name: "The Class Comedian",
      emoji: "🤣",
      color: "#ff6fa9",
      tagline: "Certified laugh supplier",
      description: "Your timing is undefeated. Whether it is a perfect side comment or a legendary group-chat meme, you keep the room laughing without even trying.",
      traits: ["Funny", "Spontaneous", "Bold"]
    },
    chill: {
      name: "The Chill Seatmate",
      emoji: "😌",
      color: "#8ed8ff",
      tagline: "Calm in every classroom storm",
      description: "Surprise quiz? Group drama? You stay unbothered. People like sitting beside you because your easygoing energy makes everything feel manageable.",
      traits: ["Calm", "Easygoing", "Steady"]
    },
    leader: {
      name: "The Natural Leader",
      emoji: "📣",
      color: "#a68cff",
      tagline: "The one who gets things moving",
      description: "When the room goes quiet after ‘choose a leader,’ everyone looks at you. You organize the chaos, hear people out, and make sure the group actually finishes.",
      traits: ["Confident", "Organized", "Helpful"]
    },
    creative: {
      name: "The Creative Wildcard",
      emoji: "🎨",
      color: "#8ee4c3",
      tagline: "Turning every task into a masterpiece",
      description: "Your projects never look ordinary. You bring unexpected ideas, great visuals, and just enough chaos to make classroom life much more interesting.",
      traits: ["Imaginative", "Original", "Curious"]
    }
  },
  questions: [
    {
      kicker: "Morning check", icon: "⏰", text: "You arrive in class and the teacher isn't there yet. What are you doing?",
      answers: [
        { text: "Checking if everyone did the homework", scores: { leader: 2, achiever: 1 } },
        { text: "Making the whole row laugh", scores: { comedian: 2, sunshine: 1 } },
        { text: "Finishing a sketch or random idea", scores: { creative: 2, chill: 1 } },
        { text: "Sitting quietly and enjoying the peace", scores: { chill: 2, achiever: 1 } }
      ]
    },
    {
      kicker: "Group project", icon: "🧩", text: "Your group has no idea where to start. What's your first move?",
      answers: [
        { text: "Split the tasks and set a deadline", scores: { leader: 2, achiever: 1 } },
        { text: "Pitch a concept nobody expects", scores: { creative: 2, leader: 1 } },
        { text: "Lighten the mood before everyone panics", scores: { comedian: 2, sunshine: 1 } },
        { text: "Tell everyone we'll figure it out", scores: { chill: 2, sunshine: 1 } }
      ]
    },
    {
      kicker: "Surprise!", icon: "📝", text: "The teacher announces a surprise quiz. Your honest reaction?",
      answers: [
        { text: "Good thing I reviewed last night", scores: { achiever: 2, leader: 1 } },
        { text: "I whisper a dramatic goodbye to my seatmate", scores: { comedian: 2, creative: 1 } },
        { text: "Deep breath. Bahala na!", scores: { chill: 2, sunshine: 1 } },
        { text: "I give everyone an encouraging thumbs-up", scores: { sunshine: 2, leader: 1 } }
      ]
    },
    {
      kicker: "Lunch break", icon: "🍱", text: "Which lunch-table role sounds most like you?",
      answers: [
        { text: "Sharing food and checking on everyone", scores: { sunshine: 2, leader: 1 } },
        { text: "Telling the story everyone will remember", scores: { comedian: 2, creative: 1 } },
        { text: "Planning what we need for the next subject", scores: { achiever: 2, leader: 1 } },
        { text: "Just eating peacefully and listening", scores: { chill: 2, sunshine: 1 } }
      ]
    },
    {
      kicker: "Presentation day", icon: "🎤", text: "Your group is presenting in five minutes. You are most likely…",
      answers: [
        { text: "Rehearsing the key points one last time", scores: { achiever: 2, leader: 1 } },
        { text: "Fixing the slides so they look amazing", scores: { creative: 2, achiever: 1 } },
        { text: "Giving the nervous members a confidence boost", scores: { sunshine: 2, leader: 1 } },
        { text: "Improvising because somehow it always works", scores: { comedian: 2, chill: 1 } }
      ]
    },
    {
      kicker: "Class GC", icon: "💬", text: "What are you known for in the class group chat?",
      answers: [
        { text: "Posting reminders and complete instructions", scores: { leader: 2, achiever: 1 } },
        { text: "Sending the perfect reaction meme", scores: { comedian: 2, creative: 1 } },
        { text: "Reacting with hearts to everyone's wins", scores: { sunshine: 2, chill: 1 } },
        { text: "Reading everything and replying three hours later", scores: { chill: 2, creative: 1 } }
      ]
    },
    {
      kicker: "Free period", icon: "✨", text: "You get an unexpected free period. What's the plan?",
      answers: [
        { text: "Start tomorrow's work while I have time", scores: { achiever: 2, leader: 1 } },
        { text: "Make something—doodle, edit, write, anything", scores: { creative: 2, chill: 1 } },
        { text: "Gather the barkada for kwentuhan", scores: { sunshine: 2, comedian: 1 } },
        { text: "Put my head down and recharge", scores: { chill: 2, achiever: 1 } }
      ]
    },
    {
      kicker: "Yearbook energy", icon: "📸", text: "What would classmates probably write beside your photo?",
      answers: [
        { text: "Future CEO—remember us when you're famous", scores: { leader: 2, achiever: 1 } },
        { text: "Made every school day 10x funnier", scores: { comedian: 2, sunshine: 1 } },
        { text: "Most likely to create something brilliant", scores: { creative: 2, achiever: 1 } },
        { text: "The real one who was always there", scores: { sunshine: 2, chill: 1 } }
      ]
    }
  ]
};

const state = { current: 0, answers: [] };
const screens = {
  start: document.querySelector("#start-screen"),
  question: document.querySelector("#question-screen"),
  result: document.querySelector("#result-screen")
};
const $ = (selector) => document.querySelector(selector);

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => element.classList.toggle("active", key === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = QUIZ_DATA.questions[state.current];
  const number = state.current + 1;
  const percent = Math.round((number / QUIZ_DATA.questions.length) * 100);
  $("#progress-label").textContent = `Question ${number} of ${QUIZ_DATA.questions.length}`;
  $("#progress-percent").textContent = `${percent}%`;
  $("#progress-bar").style.width = `${percent}%`;
  $(".progress-track").setAttribute("aria-valuenow", number);
  $("#question-icon").textContent = question.icon;
  $("#question-kicker").textContent = question.kicker;
  $("#question-text").textContent = question.text;
  $("#back-button").style.visibility = state.current === 0 ? "hidden" : "visible";
  const answers = $("#answers");
  answers.replaceChildren();
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer.text}</span>`;
    button.addEventListener("click", () => chooseAnswer(index));
    answers.appendChild(button);
  });
}

function chooseAnswer(answerIndex) {
  state.answers[state.current] = answerIndex;
  if (state.current < QUIZ_DATA.questions.length - 1) {
    state.current += 1;
    renderQuestion();
  } else {
    renderResult();
  }
}

function calculateResult() {
  const scores = Object.fromEntries(Object.keys(QUIZ_DATA.results).map((key) => [key, 0]));
  state.answers.forEach((answerIndex, questionIndex) => {
    const answer = QUIZ_DATA.questions[questionIndex].answers[answerIndex];
    Object.entries(answer.scores).forEach(([resultKey, points]) => { scores[resultKey] += points; });
  });
  return Object.keys(scores).reduce((winner, key) => scores[key] > scores[winner] ? key : winner);
}

function renderResult() {
  const resultKey = calculateResult();
  const result = QUIZ_DATA.results[resultKey];
  $("#result-avatar").textContent = result.emoji;
  $("#result-avatar").style.background = result.color;
  $("#result-title").textContent = result.name;
  $("#result-tagline").textContent = result.tagline;
  $("#result-description").textContent = result.description;
  $("#result-traits").replaceChildren(...result.traits.map((trait) => {
    const item = document.createElement("span");
    item.textContent = trait;
    return item;
  }));
  $("#share-button").dataset.resultKey = resultKey;
  showScreen("result");
}

function shareOnFacebook() {
  const result = QUIZ_DATA.results[$("#share-button").dataset.resultKey];
  const pageUrl = /^https?:/.test(window.location.href) ? window.location.href.split("#")[0] : "";
  const shareText = `I'm ${result.name}! What type of classmate are you?`;
  if (!pageUrl) {
    navigator.clipboard?.writeText(shareText).catch(() => {});
    $("#share-status").textContent = "Publish the site first to share its link. Your result text was copied.";
    return;
  }
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(shareText)}`;
  const popup = window.open(shareUrl, "facebook-share-dialog", "width=640,height=520,noopener,noreferrer");
  if (!popup) window.location.href = shareUrl;
}

function restartQuiz() {
  state.current = 0;
  state.answers = [];
  $("#share-status").textContent = "";
  renderQuestion();
  showScreen("start");
}

$("#start-button").addEventListener("click", () => { renderQuestion(); showScreen("question"); });
$("#back-button").addEventListener("click", () => { if (state.current > 0) { state.current -= 1; renderQuestion(); } });
$("#restart-button").addEventListener("click", restartQuiz);
$("#share-button").addEventListener("click", shareOnFacebook);
