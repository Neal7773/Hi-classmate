(() => {
  'use strict';
  const data = ESCAPE_DATA, $ = id => document.getElementById(id);
  const url = 'https://hiclassmate.com/games/perfect-escape/';
  let screen = 'start', index = 0, choices = [], current = null, lockedUntil = 0;
  const track = (name, params = {}) => window.hcTrack?.(name, { game_id: data.id, quiz_id: data.id, ...params });
  const resultParams = () => ({ result_id: current.key, result_name: current.result.title });
  function accept(event) {
    if (event?.detail > 1 || performance.now() < lockedUntil) return false;
    lockedUntil = performance.now() + 280;
    return true;
  }
  function show(next, heading) {
    screen = next;
    document.body.dataset.screen = next;
    ['start', 'question', 'result'].forEach(name => $(name + '-panel').hidden = name !== next);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (heading) $(heading).focus({ preventScroll: true });
  }
  function progress(value, label, count) {
    $('progress-label').textContent = label;
    $('progress-count').textContent = count;
    $('progress-bar').style.width = value / data.questions.length * 100 + '%';
    $('progress-track').setAttribute('aria-valuenow', value);
    $('progress-track').setAttribute('aria-valuetext', label);
  }
  function question() {
    const q = data.questions[index];
    $('question-title').textContent = q.text;
    $('question-number').textContent = `Question ${index + 1} of ${data.questions.length}`;
    $('back-button').disabled = index === 0;
    $('answers').replaceChildren(...q.answers.map((answer, i) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'answer'; button.dataset.choice = i;
      button.setAttribute('aria-pressed', String(choices[index] === i));
      const letter = Object.assign(document.createElement('span'), { className: 'answer-letter', textContent: 'ABCD'[i] });
      letter.setAttribute('aria-hidden', 'true');
      button.append(letter, Object.assign(document.createElement('span'), { textContent: answer.text }));
      button.onclick = event => {
        if (screen !== 'question' || !accept(event)) return;
        choices[index] = i;
        track('question_answer', { question_id: q.id, answer_id: answer.id, question_number: index + 1 });
        index++;
        if (index < data.questions.length) question();
        else result();
      };
      return button;
    }));
    progress(index, 'Choose what feels closest to you.', `${index + 1} / ${data.questions.length}`);
    show('question', 'question-title');
  }
  function readingCard(title, text, match) {
    const card = Object.assign(document.createElement('div'), { className: 'reading-card' });
    card.append(Object.assign(document.createElement('h4'), { textContent: title }));
    if (match) card.append(Object.assign(document.createElement('span'), { className: 'travel-match', textContent: match }));
    card.append(Object.assign(document.createElement('p'), { textContent: text }));
    return card;
  }
  function result() {
    // Recalculate from the final answer array; going back never adds stale points.
    current = EscapeEngine.calculate(data, choices);
    const r = current.result;
    document.documentElement.style.setProperty('--result-color', r.color);
    $('result-symbol').textContent = r.icon;
    $('result-title').textContent = r.title;
    $('result-quote').textContent = r.hero;
    $('result-description').textContent = r.description;
    $('deep-dive').replaceChildren(...r.deepDive.map(item => readingCard(item.title, item.text)));
    $('chemistry').replaceChildren(...r.chemistry.map((item, i) => readingCard(i ? 'Chaotic Travel Buddy' : 'Easy Travel Buddy', item.text, item.title)));
    progress(8, 'Your perfect escape', '8 / 8');
    show('result', 'result-title');
    track('game_complete', resultParams());
    track('result_view', resultParams());
  }
  function share(withResult) {
    if (withResult && !current) return;
    const target = withResult ? url + 'results/' + current.result.slug + '/' : url;
    track(withResult ? 'share_result' : 'share_game', { platform: 'facebook', ...(withResult ? resultParams() : {}) });
    const facebook = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(target);
    const popup = window.open('about:blank', '_blank');
    if (popup) { popup.opener = null; popup.location.replace(facebook); }
    else window.location.assign(facebook);
  }
  function reset(focus = false) {
    index = 0; choices = []; current = null; lockedUntil = 0;
    progress(0, 'Your perfect escape', '8 choices');
    show('start', focus ? 'start-title' : null);
  }
  $('start-button').onclick = event => { if (screen === 'start' && accept(event)) { track('game_start', { question_count: 8 }); question(); } };
  $('back-button').onclick = event => {
    if (screen === 'question' && index > 0 && accept(event)) {
      index--; track('question_back', { question_id: data.questions[index].id }); question();
    }
  };
  $('restart-button').onclick = event => { if (screen === 'result' && accept(event)) { track('replay', resultParams()); reset(true); } };
  $('share-game-button').onclick = () => share(false);
  $('share-start-button').onclick = () => share(false);
  $('share-result-button').onclick = () => share(true);
  $('next-game-link').onclick = () => track('next_game_click', { ...resultParams(), next_game_id: 'inner_weather' });
  track('game_view'); reset();
})();
