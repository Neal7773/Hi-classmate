const MEMORY_DATA = {
  "id": "memory_auction",
  "title": "The Memory Auction",
  "questions": [
    {
      "id": "first-confession",
      "chapter": "LOT 01 · Memory auction",
      "icon": "💌",
      "scene": "A buyer offers a future with someone who truly understands you.",
      "question": "The price: the memory of the first time you dared to say “I love you.”",
      "temptation": "love",
      "protection": "authenticity",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "love",
          "reflection": "You traded a first act of courage for the chance to feel understood again."
        },
        {
          "text": "Keep it forever",
          "type": "authenticity",
          "reflection": "You kept the moment you learned to let someone see your heart."
        }
      ]
    },
    {
      "id": "proud-voice",
      "chapter": "LOT 02 · Memory auction",
      "icon": "🏆",
      "scene": "The auctioneer offers success in the career you have always wanted.",
      "question": "The price: every memory of one special person saying they were proud of you.",
      "temptation": "recognition",
      "protection": "bonds",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "recognition",
          "reflection": "You chose a future achievement over remembering the voice that cheered you on."
        },
        {
          "text": "Keep it forever",
          "type": "bonds",
          "reflection": "You kept a familiar voice of support instead of a guaranteed career win."
        }
      ]
    },
    {
      "id": "last-afternoon",
      "chapter": "LOT 03 · Memory auction",
      "icon": "☀️",
      "scene": "A fresh start awaits: a new city, a home and work you actually enjoy.",
      "question": "The price: your last happy afternoon with a friend you no longer see.",
      "temptation": "rewrite",
      "protection": "bonds",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "rewrite",
          "reflection": "You traded an irreplaceable afternoon for the chance to begin somewhere new."
        },
        {
          "text": "Keep it forever",
          "type": "bonds",
          "reflection": "You kept a connection that still mattered, even after your paths separated."
        }
      ]
    },
    {
      "id": "childhood-map",
      "chapter": "LOT 04 · Memory auction",
      "icon": "🗺️",
      "scene": "You can travel wherever you want, with no bills or obligations waiting.",
      "question": "The price: all memories of the places you dreamed of visiting as a child.",
      "temptation": "power",
      "protection": "freedom",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "power",
          "reflection": "You chose the freedom to go now over remembering where the dream began."
        },
        {
          "text": "Keep it forever",
          "type": "freedom",
          "reflection": "You kept the childhood dreams that gave your adventures their meaning."
        }
      ]
    },
    {
      "id": "imagined-future",
      "chapter": "LOT 05 · Memory auction",
      "icon": "🎟️",
      "scene": "You are offered a circle of people with whom you never have to pretend.",
      "question": "The price: the future you once imagined with your first love, and every memory of imagining it.",
      "temptation": "love",
      "protection": "freedom",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "love",
          "reflection": "You made room for belonging now by releasing an old imagined future."
        },
        {
          "text": "Keep it forever",
          "type": "freedom",
          "reflection": "You kept the hopeful version of yourself who once pictured a life with someone."
        }
      ]
    },
    {
      "id": "first-comeback",
      "chapter": "LOT 06 · Memory auction",
      "icon": "🎹",
      "scene": "Tomorrow, you wake up brilliant at the skill you most wish you had.",
      "question": "The price: the memory of failing at something, trying again and finally getting it right.",
      "temptation": "recognition",
      "protection": "authenticity",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "recognition",
          "reflection": "You chose mastery now over remembering how you learned to keep trying."
        },
        {
          "text": "Keep it forever",
          "type": "authenticity",
          "reflection": "You kept proof that your own effort could change an ending."
        }
      ]
    },
    {
      "id": "ordinary-sunday",
      "chapter": "LOT 07 · Memory auction",
      "icon": "📷",
      "scene": "You can begin your next chapter without carrying any old regrets.",
      "question": "The price: the memory of an ordinary day when you quietly liked being yourself.",
      "temptation": "rewrite",
      "protection": "identity",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "rewrite",
          "reflection": "You traded a small moment of contentment for a lighter beginning."
        },
        {
          "text": "Keep it forever",
          "type": "identity",
          "reflection": "You kept an ordinary day that reminded you your life did not need fixing."
        }
      ]
    },
    {
      "id": "last-song",
      "chapter": "LOT 08 · Final bid",
      "icon": "🎧",
      "scene": "The final bid: enough money and free time to live at your own pace.",
      "question": "The price: every memory attached to the song that has always felt like home.",
      "temptation": "power",
      "protection": "identity",
      "answers": [
        {
          "text": "Sell this memory",
          "type": "power",
          "reflection": "You exchanged a familiar emotional refuge for freedom over your days."
        },
        {
          "text": "Keep it forever",
          "type": "identity",
          "reflection": "You kept the song that holds versions of you no one else can quite reach."
        }
      ]
    }
  ],
  "results": {
    "love": {
      "slug": "a-place-to-belong",
      "title": "A Place to Belong",
      "icon": "💌",
      "color": "#ac3260",
      "chips": [
        "Your bid: belonging",
        "Feeling understood"
      ],
      "quote": "You made room for people you have not met yet.",
      "description": "Your sales leaned toward a future where you feel understood. You were willing to part with pieces of the past for the possibility of a closer connection.",
      "nudge": "The life you bid on had room for someone to really know you."
    },
    "recognition": {
      "slug": "the-life-i-could-build",
      "title": "The Life I Could Build",
      "icon": "🏆",
      "color": "#a6531e",
      "chips": [
        "Your bid: achievement",
        "Making it happen"
      ],
      "quote": "You saw a future worth investing your past in.",
      "description": "Your sales leaned toward skill and achievement. The chance to become who you imagine carried enough weight to make a personal memory negotiable.",
      "nudge": "The life you bid on gave your ambition somewhere to go."
    },
    "rewrite": {
      "slug": "a-lighter-tomorrow",
      "title": "A Lighter Tomorrow",
      "icon": "☀️",
      "color": "#6650a4",
      "chips": [
        "Your bid: a fresh start",
        "Room to begin"
      ],
      "quote": "You wanted the next chapter to feel different.",
      "description": "Your sales leaned toward a fresh start. You were willing to release familiar pieces of your story to make the next part feel more open.",
      "nudge": "The life you bid on felt like permission to begin again."
    },
    "power": {
      "slug": "a-life-of-my-own",
      "title": "A Life of My Own",
      "icon": "🗺️",
      "color": "#174baf",
      "chips": [
        "Your bid: freedom",
        "Your own pace"
      ],
      "quote": "You wanted your days to belong to you.",
      "description": "Your sales leaned toward freedom over your time and direction. A life with fewer constraints was worth considering even at a deeply personal price.",
      "nudge": "The life you bid on let you choose where to go and when to stay."
    },
    "unbought": {
      "slug": "the-memory-keeper",
      "title": "The Memory Keeper",
      "icon": "📷",
      "color": "#286858",
      "chips": [
        "Every memory kept",
        "Nothing sold"
      ],
      "quote": "You left with the same memories you brought in.",
      "description": "You kept all eight memories. None of these imagined futures felt worth its price in this playthrough, even if the offers were tempting.",
      "nudge": "Your history stayed yours. The future can wait for another kind of offer."
    }
  },
  "protections": {
    "authenticity": {
      "title": "The moments you grew",
      "text": "You kept memories of courage and effort that helped you become yourself."
    },
    "bonds": {
      "title": "The people in your story",
      "text": "You kept memories that preserve a connection, even when life has moved on."
    },
    "freedom": {
      "title": "The dreams you once had",
      "text": "You kept the hopeful futures your younger self used to imagine."
    },
    "identity": {
      "title": "Your quiet sense of home",
      "text": "You kept the small, familiar moments that make life feel like yours."
    }
  }
};
if(typeof module!=="undefined")module.exports=MEMORY_DATA;
