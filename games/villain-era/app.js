(() => {
  'use strict';
  const data = VILLAIN_DATA;
  const gameUrl = 'https://hiclassmate.com/games/villain-era/';
  const $ = id => document.getElementById(id);
  const panels = ['start', 'question', 'result'];
  let choices = [], index = 0, current = null, screen = 'start', accepting = true, unlockTimer;
  const track = (event, detail = {}) => window.hcTrack?.(event, { game_id: data.id, quiz_id: data.id, ...detail });

  function show(next) {
    screen = next;
    document.body.dataset.screen = next;
    panels.forEach(name => { $(name + '-panel').hidden = name !== next; });
  }
  function progress(number, label) {
    $('progress-label').textContent = label;
    $('progress-count').textContent = `${number} / ${data.questions.length}`;
    $('progress-bar').style.width = `${number / data.questions.length * 100}%`;
    $('progress-track').setAttribute('aria-valuenow', number);
    $('progress-track').setAttribute('aria-valuetext', label);
  }
  function renderQuestion() {
    const question = data.questions[index];
    show('question');
    progress(index, `Question ${index + 1} of ${data.questions.length}`);
    $('question-kicker').textContent = question.label;
    $('question-text').textContent = question.text;
    $('back-button').disabled = index === 0;
    $('answers').replaceChildren(...question.answers.map((answer, choice) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer';
      button.dataset.choice = choice;
      const letter = document.createElement('span');
      letter.className = 'answer-letter';
      letter.setAttribute('aria-hidden', 'true');
      letter.textContent = 'ABCD'[choice];
      const copy = document.createElement('strong');
      copy.textContent = answer.text;
      button.append(letter, copy);
      button.addEventListener('click', event => choose(choice, event));
      return button;
    }));
    $('question-text').focus({ preventScroll: true });
  }
  function choose(choice, event) {
    if (screen !== 'question' || !accepting || event.detail > 1) return;
    accepting = false;
    clearTimeout(unlockTimer);
    choices[index] = choice;
    track('question_answer', { question_id: data.questions[index].id, question_number: index + 1, answer_choice: 'abcd'[choice] });
    index++;
    if (index === data.questions.length) finish(); else renderQuestion();
    unlockTimer = setTimeout(() => { accepting = true; }, 260);
  }
  function finish() {
    current = VillainEngine.calculate(data, choices);
    const result = current.result;
    document.documentElement.style.setProperty('--result-color', result.color);
    $('result-symbol').textContent = result.symbol;
    $('result-title').textContent = result.title;
    $('result-match').textContent = current.match + '%';
    $('result-truth').textContent = result.truth;
    $('result-trigger').textContent = result.trigger;
    $('result-excuse').textContent = result.excuse;
    $('result-stop').textContent = result.stop;
    $('trait-list').replaceChildren(...result.traits.map(text => Object.assign(document.createElement('span'), { textContent: text })));
    progress(8, 'Your villain era, exposed');
    show('result');
    $('result-title').focus({ preventScroll: true });
    track('game_complete', { result_type: result.slug, result_match: current.match, question_count: 8 });
    track('result_view', { result_type: result.slug, result_match: current.match });
  }
  function share(resultShare) {
    if (resultShare && !current) return;
    const result = current?.result;
    const url = resultShare ? `${gameUrl}results/${result.slug}/` : gameUrl;
    const quote = resultShare ? `I got ${result.title}. My trigger? ${result.trigger}. What would trigger YOUR villain era?` : 'What would trigger your villain era? 8 choices. 6 hidden sides. Be honest.';
    track(resultShare ? 'share_result' : 'share_game', { platform: 'facebook', ...(resultShare ? { result_type: result.slug, result_match: current.match } : {}) });
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`;
    // Open a blank window first so a blocked popup can be distinguished from
    // browsers returning null for a successfully opened noopener window.
    const popup = window.open('about:blank', '_blank');
    if (popup) { popup.opener = null; popup.location.replace(shareUrl); }
    else window.location.assign(shareUrl);
  }
  function reset(focus = false) {
    clearTimeout(unlockTimer);
    choices = []; index = 0; current = null; accepting = true;
    progress(0, 'A little too honest?');
    show('start');
    if (focus) $('start-button').focus({ preventScroll: true });
  }
  $('start-button').addEventListener('click', () => {
    if (screen !== 'start') return;
    track('game_start', { question_count: 8 });
    renderQuestion();
  });
  $('back-button').addEventListener('click', () => {
    if (screen !== 'question' || index === 0 || !accepting) return;
    index--; choices.length = index; renderQuestion();
  });
  $('restart-button').addEventListener('click', () => {
    track('replay', { result_type: current?.result.slug }); reset(true);
  });
  $('share-game-button').addEventListener('click', () => share(false));
  $('share-start-button').addEventListener('click', () => share(false));
  $('share-result-button').addEventListener('click', () => share(true));
  $('next-game-link').addEventListener('click', () => track('next_game_click', { destination_game_id: 'what_kind_of_overthinker' }));
  track('game_view');
  reset();
})();
