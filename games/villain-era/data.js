/* Content and weights are independent of rendering and scoring. */
const VILLAIN_DATA = {
  id: 'villain_era',
  title: 'What Would Trigger Your Villain Era?',
  results: {
    applause: { slug: 'applause-addict', title: 'The Applause Addict', symbol: '♛', color: '#d9ff56', trigger: 'Being underestimated', excuse: '“I just want what I deserve.”', stop: 'A win still counts when nobody sees it.', truth: 'You want success. But you want their faces when they see it even more.', traits: ['Recognition', 'Ambition', 'Prove them wrong'] },
    revenge: { slug: 'beautiful-revenge', title: 'The Beautiful Revenge', symbol: '✦', color: '#ff79b8', trigger: 'Betrayal without consequences', excuse: '“I only want things to be fair.”', stop: 'Their regret is not your finish line.', truth: 'You said you moved on. You still want a front-row seat to their regret.', traits: ['Receipts', 'Patience', 'Unfinished business'] },
    control: { slug: 'puppet-master', title: 'The Puppet Master', symbol: '♟', color: '#bd9bff', trigger: 'Losing control of the story', excuse: '“Someone has to keep this together.”', stop: 'Being chosen means letting them choose.', truth: 'You want to be loved. Letting someone choose freely is the scary part.', traits: ['Certainty', 'Strategy', 'Control'] },
    armor: { slug: 'untouchable', title: 'The Untouchable', symbol: '◇', color: '#88e0ef', trigger: 'Being vulnerable again', excuse: '“I don’t need anyone anyway.”', stop: 'A boundary can have a door.', truth: 'You would rather need nobody than let somebody hurt you twice.', traits: ['Distance', 'Self-protection', 'No second chances'] },
    spotlight: { slug: 'main-character', title: 'The Main Character', symbol: '★', color: '#ffb773', trigger: 'Being replaced or forgotten', excuse: '“I just know I’m not replaceable.”', stop: 'Quiet love is still love.', truth: 'Being disliked hurts. Watching them do fine without you hurts more.', traits: ['Presence', 'Intensity', 'Remember me'] },
    angel: { slug: 'fallen-angel', title: 'The Fallen Angel', symbol: '☾', color: '#c7d5ff', trigger: 'Being everyone’s backup plan', excuse: '“It’s finally my turn to be selfish.”', stop: 'You can say no before you explode.', truth: 'You were the good one for so long that selfishness now feels like unpaid wages.', traits: ['Overgiving', 'Resentment', 'My turn now'] }
  },
  questions: [
    { id: 'comeback', label: 'THE COMEBACK', text: 'Someone who doubted you sees you winning. What do you want to hear?', answers: [
      { text: '“I was wrong about you.”', scores: { applause: 3, revenge: 1 } },
      { text: '“I need your help.”', scores: { control: 3, angel: 1 } },
      { text: '“Can we start over?”', scores: { spotlight: 3, revenge: 1 } },
      { text: 'Nothing. They lost access to me.', scores: { armor: 3, angel: 1 } }
    ] },
    { id: 'wish', label: 'ONE SECRET WISH', text: 'One wish. No consequences. Be honest.', answers: [
      { text: 'Whoever left me never forgets me.', scores: { spotlight: 3, control: 1 } },
      { text: 'Whoever hurt me feels that regret.', scores: { revenge: 3, applause: 1 } },
      { text: 'Nobody can ever lie to me.', scores: { control: 3, armor: 1 } },
      { text: 'Nobody needs anything from me.', scores: { angel: 3, armor: 1 } }
    ] },
    { id: 'sting', label: 'THE PART THAT STINGS', text: 'Which truth is hardest to swallow?', answers: [
      { text: 'Someone less capable gets the credit.', scores: { applause: 3, angel: 1 } },
      { text: 'The barkada is fine without me.', scores: { spotlight: 3, armor: 1 } },
      { text: 'They used me. Everyone loves them.', scores: { revenge: 3, angel: 1 } },
      { text: 'They know how much I cared.', scores: { armor: 3, control: 1 } }
    ] },
    { id: 'gc', label: 'THE GC RECEIPTS', text: 'A screenshot proves your friend mocked you. What hits first?', answers: [
      { text: 'I want them to regret every word.', scores: { revenge: 3, spotlight: 1 } },
      { text: 'I need to know who else saw it.', scores: { control: 3, applause: 1 } },
      { text: 'They will never know me that well again.', scores: { armor: 3, revenge: 1 } },
      { text: 'After everything I did for them?', scores: { angel: 3, applause: 1 } }
    ] },
    { id: 'success', label: 'THE DREAM SCENE', text: 'Your life finally looks perfect. What makes it feel real?', answers: [
      { text: 'Everyone who doubted me is watching.', scores: { applause: 3, revenge: 1 } },
      { text: 'Nothing important is out of my hands.', scores: { control: 3, armor: 1 } },
      { text: 'I’m the one nobody can replace.', scores: { spotlight: 3, applause: 1 } },
      { text: 'For once, somebody takes care of me.', scores: { angel: 3, spotlight: 1 } }
    ] },
    { id: 'apology', label: 'THE LATE APOLOGY', text: '“Sorry. I know I hurt you.” What are you thinking?', answers: [
      { text: 'Tell everyone else you were wrong.', scores: { applause: 3, control: 1 } },
      { text: 'Sorry doesn’t settle the score.', scores: { revenge: 3, angel: 1 } },
      { text: 'You don’t get another chance at me.', scores: { armor: 3, revenge: 1 } },
      { text: 'You only miss what I did for you.', scores: { angel: 3, spotlight: 1 } }
    ] },
    { id: 'replacement', label: 'THE NEW FAVORITE', text: 'Your closest friend has a new favorite person. Your private reaction?', answers: [
      { text: 'I’ll become impossible to overlook.', scores: { applause: 3, spotlight: 1 } },
      { text: 'I need to know where I stand. Now.', scores: { control: 3, applause: 1 } },
      { text: 'Fine. I’ll stop needing them first.', scores: { armor: 3, control: 1 } },
      { text: 'I want them to notice my absence.', scores: { spotlight: 3, revenge: 1 } }
    ] },
    { id: 'last_line', label: 'DROP THE GOOD-PERSON ACT', text: 'Which thought would you never send to the GC?', answers: [
      { text: 'I don’t want peace. I want their regret.', scores: { revenge: 3, applause: 1 } },
      { text: 'I feel safe when I hold the strings.', scores: { control: 3, armor: 1 } },
      { text: 'I want to be the one they never get over.', scores: { spotlight: 3, control: 1 } },
      { text: 'I’m tired of being the bigger person.', scores: { angel: 3, revenge: 1 } }
    ] }
  ]
};
if (typeof module !== 'undefined' && module.exports) module.exports = VILLAIN_DATA;
