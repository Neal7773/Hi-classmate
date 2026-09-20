const DEAL_DATA = {
  "id": "devils_offer",
  "title": "The Devil’s Offer",
  "questions": [
    {
      "id": "borrowed-heart",
      "chapter": "01 · The contract",
      "icon": "💘",
      "scene": "Anyone you choose falls deeply in love with you.",
      "question": "But you will never know if they would have chosen you without the deal.",
      "temptation": "love",
      "protection": "authenticity",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "love",
          "reflection": "You accepted love even without knowing whether it began freely."
        },
        {
          "text": "Walk away",
          "type": "authenticity",
          "reflection": "You kept the chance of being loved without a spell."
        }
      ]
    },
    {
      "id": "standing-ovation",
      "chapter": "02 · The contract",
      "icon": "🏆",
      "scene": "Everyone who dismissed you becomes jealous of your success.",
      "question": "But the person whose praise you want most will never know what you achieved.",
      "temptation": "recognition",
      "protection": "bonds",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "recognition",
          "reflection": "Being seen by your doubters was worth losing one person’s recognition."
        },
        {
          "text": "Walk away",
          "type": "bonds",
          "reflection": "You valued being seen by someone important over impressing a crowd."
        }
      ]
    },
    {
      "id": "rewind",
      "chapter": "03 · The contract",
      "icon": "⏳",
      "scene": "You can return to the moment you regret most and choose again.",
      "question": "But you might never meet the person you cherish most today.",
      "temptation": "rewrite",
      "protection": "bonds",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "rewrite",
          "reflection": "You opened the past even though a present connection might disappear."
        },
        {
          "text": "Walk away",
          "type": "bonds",
          "reflection": "You kept a real connection instead of gambling it on a different past."
        }
      ]
    },
    {
      "id": "perfect-plan",
      "chapter": "04 · The contract",
      "icon": "♟️",
      "scene": "Every plan you make works exactly as intended.",
      "question": "But for one day each year, the devil makes every decision for you.",
      "temptation": "power",
      "protection": "freedom",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "power",
          "reflection": "You traded a little control for the power to make your plans work."
        },
        {
          "text": "Walk away",
          "type": "freedom",
          "reflection": "Even guaranteed success was not worth handing over your choices."
        }
      ]
    },
    {
      "id": "never-left",
      "chapter": "05 · The contract",
      "icon": "🔒",
      "scene": "The person you love will never leave you.",
      "question": "But neither of you can ever choose to end the relationship.",
      "temptation": "love",
      "protection": "freedom",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "love",
          "reflection": "You chose permanence even when it came with no exit."
        },
        {
          "text": "Walk away",
          "type": "freedom",
          "reflection": "You kept the freedom to stay by choice, or to leave."
        }
      ]
    },
    {
      "id": "famous-name",
      "chapter": "06 · The contract",
      "icon": "🌟",
      "scene": "Your name becomes famous for the thing you care about most.",
      "question": "But the world believes an invented story about how you got there.",
      "temptation": "recognition",
      "protection": "authenticity",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "recognition",
          "reflection": "You accepted recognition even if people celebrated the wrong story."
        },
        {
          "text": "Walk away",
          "type": "authenticity",
          "reflection": "You kept an honest story rather than a louder reputation."
        }
      ]
    },
    {
      "id": "other-life",
      "chapter": "07 · The contract",
      "icon": "🚪",
      "scene": "You can step into the life you always wished you had.",
      "question": "But every memory of the life that made you who you are disappears.",
      "temptation": "rewrite",
      "protection": "identity",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "rewrite",
          "reflection": "You took the new life even at the cost of your personal history."
        },
        {
          "text": "Walk away",
          "type": "identity",
          "reflection": "You kept the memories that make this life yours."
        }
      ]
    },
    {
      "id": "final-signature",
      "chapter": "08 · The final offer",
      "icon": "👑",
      "scene": "One final offer: nobody can ever hurt, reject or overrule you again.",
      "question": "But you lose the ability to feel deeply moved by anyone, too.",
      "temptation": "power",
      "protection": "identity",
      "answers": [
        {
          "text": "Sign the deal",
          "type": "power",
          "reflection": "Being untouchable mattered enough to surrender emotional depth."
        },
        {
          "text": "Walk away",
          "type": "identity",
          "reflection": "You kept the part of yourself that can be moved, even at a risk."
        }
      ]
    }
  ],
  "results": {
    "love": {
      "slug": "chosen-at-any-cost",
      "title": "Chosen at Any Cost",
      "icon": "💘",
      "color": "#ac3260",
      "chips": [
        "Devil’s bait: love",
        "Being chosen"
      ],
      "quote": "The devil offered you a place no one could take.",
      "description": "The love deals you signed promised an end to uncertainty. Being wanted had enough pull to make the fine print negotiable.",
      "nudge": "Your soft spot: a promise that you will never have to wonder where you stand."
    },
    "recognition": {
      "slug": "the-last-laugh",
      "title": "The Last Laugh",
      "icon": "🏆",
      "color": "#a6531e",
      "chips": [
        "Devil’s bait: recognition",
        "Proving yourself"
      ],
      "quote": "The devil knew whose face you wanted to see.",
      "description": "You signed for the moment people finally notice. Your deals leaned toward recognition, even when the audience or the story was imperfect.",
      "nudge": "Your soft spot: “Imagine them realizing they were wrong about you.”"
    },
    "rewrite": {
      "slug": "one-more-chance",
      "title": "One More Chance",
      "icon": "⏳",
      "color": "#6650a4",
      "chips": [
        "Devil’s bait: a redo",
        "Another timeline"
      ],
      "quote": "The devil left a door open to your other life.",
      "description": "The chance to rewrite your story pulled you in. You accepted a different future even when getting there meant losing something real.",
      "nudge": "Your soft spot: “What if this time, it all turns out differently?”"
    },
    "power": {
      "slug": "untouchable",
      "title": "Untouchable",
      "icon": "👑",
      "color": "#174baf",
      "chips": [
        "Devil’s bait: power",
        "No more helplessness"
      ],
      "quote": "The devil promised that nobody could stop you.",
      "description": "Your signed deals leaned toward certainty and protection. The power to shape what happens made a difficult price worth considering.",
      "nudge": "Your soft spot: a guarantee that you never have to feel powerless again."
    },
    "unbought": {
      "slug": "not-for-sale",
      "title": "Not for Sale",
      "icon": "🛡️",
      "color": "#286858",
      "chips": [
        "Eight offers refused",
        "No signature"
      ],
      "quote": "The devil left with an unsigned contract.",
      "description": "You refused every offer. That does not mean you want nothing: none of these rewards justified the attached price in this playthrough.",
      "nudge": "Your answer to the fine print: “Wanting it does not mean I owe you everything.”"
    }
  },
  "protections": {
    "authenticity": {
      "title": "Something real",
      "text": "Your refusals protected honest feelings and a story you could call true."
    },
    "bonds": {
      "title": "The people who matter",
      "text": "Your refusals protected a real connection over a better-looking life."
    },
    "freedom": {
      "title": "The right to choose",
      "text": "Your refusals protected the ability to decide, change your mind and leave."
    },
    "identity": {
      "title": "The self you recognize",
      "text": "Your refusals protected your memories and your ability to feel deeply."
    }
  }
};
if(typeof module!=="undefined")module.exports=DEAL_DATA;
