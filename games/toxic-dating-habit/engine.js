/* Deterministic scoring: normalize unequal opportunities across the six types. */
const DatingEngine = {
  calculate(data, choices) {
    if (choices.length !== data.questions.length) throw new Error('Complete every question first.');
    const keys = Object.keys(data.results);
    const totals = Object.fromEntries(keys.map(key => [key, 0]));
    const maximums = Object.fromEntries(keys.map(key => [key, 0]));
    data.questions.forEach((question, index) => {
      const choice = choices[index];
      if (!Number.isInteger(choice) || !question.answers[choice]) throw new Error('Invalid answer.');
      keys.forEach(key => {
        totals[key] += question.answers[choice].scores[key] || 0;
        maximums[key] += Math.max(...question.answers.map(answer => answer.scores[key] || 0));
      });
    });
    // Compare ratios with integers; equal scores use the latest relevant answer,
    // then the stable content order. Replaying identical answers gives the same type.
    const ranked = keys.slice().sort((a, b) => {
      const difference = totals[b] * maximums[a] - totals[a] * maximums[b];
      if (difference) return difference;
      for (let i = choices.length - 1; i >= 0; i--) {
        const weights = data.questions[i].answers[choices[i]].scores;
        const recent = (weights[b] || 0) - (weights[a] || 0);
        if (recent) return recent;
      }
      return keys.indexOf(a) - keys.indexOf(b);
    });
    const key = ranked[0];
    return { key, result: data.results[key], match: Math.round(100 * totals[key] / maximums[key]), totals, maximums };
  }
};
if (typeof module !== 'undefined' && module.exports) module.exports = DatingEngine;
