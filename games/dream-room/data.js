const ROOM_DATA = {
  "id": "dream_room",
  "steps": [
    {
      "id": "walls",
      "name": "WALLS",
      "prompt": "First things first. What color feels like home?",
      "options": [
        {
          "id": "1-1",
          "label": "Warm Cream",
          "description": "soft and sunny",
          "icon": "◒",
          "primary": "cozy",
          "secondary": "social",
          "observation": "Warm Cream gives the whole room a sunny base, even when the lighting gets quiet.",
          "layer": 0
        },
        {
          "id": "1-2",
          "label": "Blush Pink",
          "description": "sweet and dreamy",
          "icon": "♥",
          "primary": "creative",
          "secondary": "secret",
          "observation": "Blush Pink makes your room feel like a deliberately dreamy escape.",
          "layer": 1
        },
        {
          "id": "1-3",
          "label": "Midnight Blue",
          "description": "calm after dark",
          "icon": "☾",
          "primary": "neon",
          "secondary": "secret",
          "observation": "Midnight Blue turns the walls into a calm backdrop for your evening rituals.",
          "layer": 2
        },
        {
          "id": "1-4",
          "label": "Sage Green",
          "description": "fresh and grounded",
          "icon": "❧",
          "primary": "zen",
          "secondary": "cozy",
          "observation": "Sage Green brings an outdoors-inspired calm into your everyday space.",
          "layer": 3
        }
      ]
    },
    {
      "id": "bed",
      "name": "BED",
      "prompt": "Pick the bed you'll never want to leave.",
      "options": [
        {
          "id": "2-1",
          "label": "Cloud Bed",
          "description": "plush duvet and pillows",
          "icon": "☁",
          "primary": "cozy",
          "secondary": "secret",
          "observation": "Your Cloud Bed makes rest the centerpiece rather than an afterthought.",
          "layer": 0
        },
        {
          "id": "2-2",
          "label": "Low Platform",
          "description": "neat and minimal",
          "icon": "▱",
          "primary": "zen",
          "secondary": "neon",
          "observation": "The Low Platform keeps the biggest piece of furniture simple and grounded.",
          "layer": 1
        },
        {
          "id": "2-3",
          "label": "Canopy Bed",
          "description": "your own little world",
          "icon": "♜",
          "primary": "secret",
          "secondary": "creative",
          "observation": "A Canopy Bed gives you a little room within your room when you want privacy.",
          "layer": 2
        },
        {
          "id": "2-4",
          "label": "Cozy Daybed",
          "description": "relax, read, repeat",
          "icon": "▰",
          "primary": "social",
          "secondary": "cozy",
          "observation": "The Cozy Daybed leaves room for reading, lounging or a friend dropping by.",
          "layer": 3
        }
      ]
    },
    {
      "id": "lighting",
      "name": "LIGHTING",
      "prompt": "How should your room glow?",
      "options": [
        {
          "id": "3-1",
          "label": "Fairy Lights",
          "description": "tiny cozy sparkles",
          "icon": "✧",
          "primary": "secret",
          "secondary": "cozy",
          "observation": "Fairy Lights turn the room into a collection of little comforting moments.",
          "layer": 0
        },
        {
          "id": "3-2",
          "label": "Golden Lamp",
          "description": "warm and mellow",
          "icon": "◕",
          "primary": "cozy",
          "secondary": "zen",
          "observation": "The Golden Lamp makes a warm pool of light for winding down.",
          "layer": 1
        },
        {
          "id": "3-3",
          "label": "Neon LEDs",
          "description": "a little main-character energy",
          "icon": "ϟ",
          "primary": "neon",
          "secondary": "creative",
          "observation": "Neon LEDs give your room its own after-dark identity.",
          "layer": 2
        },
        {
          "id": "3-4",
          "label": "Sunlit Window",
          "description": "bright and natural",
          "icon": "☀",
          "primary": "social",
          "secondary": "zen",
          "observation": "A Sunlit Window lets natural brightness lead the mood.",
          "layer": 3
        }
      ]
    },
    {
      "id": "desk-corner",
      "name": "DESK CORNER",
      "prompt": "What belongs in your favorite corner?",
      "options": [
        {
          "id": "4-1",
          "label": "Gaming Setup",
          "description": "monitor and headset",
          "icon": "▣",
          "primary": "neon",
          "secondary": "secret",
          "observation": "Your Gaming Setup is a dedicated corner for getting completely absorbed.",
          "layer": 0
        },
        {
          "id": "4-2",
          "label": "Creative Studio",
          "description": "sketches and supplies",
          "icon": "✎",
          "primary": "creative",
          "secondary": "neon",
          "observation": "A Creative Studio gives unfinished ideas a place to stay out and grow.",
          "layer": 1
        },
        {
          "id": "4-3",
          "label": "Study Nook",
          "description": "books and tidy notes",
          "icon": "▤",
          "primary": "zen",
          "secondary": "cozy",
          "observation": "The Study Nook reserves a clear corner for focus and small accomplishments.",
          "layer": 2
        },
        {
          "id": "4-4",
          "label": "Vanity Corner",
          "description": "mirror and essentials",
          "icon": "◈",
          "primary": "secret",
          "secondary": "social",
          "observation": "Your Vanity Corner makes getting ready a personal ritual.",
          "layer": 3
        }
      ]
    },
    {
      "id": "wall-decor",
      "name": "WALL DECOR",
      "prompt": "Your walls need a personality.",
      "options": [
        {
          "id": "5-1",
          "label": "Photo Wall",
          "description": "memories with my people",
          "icon": "▦",
          "primary": "social",
          "secondary": "cozy",
          "observation": "The Photo Wall keeps your people present, even when you have the room to yourself.",
          "layer": 0
        },
        {
          "id": "5-2",
          "label": "Art Prints",
          "description": "color everywhere",
          "icon": "▧",
          "primary": "creative",
          "secondary": "social",
          "observation": "Art Prints let color and imagination take up real wall space.",
          "layer": 1
        },
        {
          "id": "5-3",
          "label": "Clean Shelves",
          "description": "a few favorite objects",
          "icon": "▥",
          "primary": "zen",
          "secondary": "secret",
          "observation": "Clean Shelves make the objects you do keep feel intentionally chosen.",
          "layer": 2
        },
        {
          "id": "5-4",
          "label": "Music Posters",
          "description": "soundtrack of my life",
          "icon": "♫",
          "primary": "neon",
          "secondary": "creative",
          "observation": "Music Posters give your favorite sounds a visible place in the room.",
          "layer": 3
        }
      ]
    },
    {
      "id": "cozy-extra",
      "name": "COZY EXTRA",
      "prompt": "Choose one thing that makes it yours.",
      "options": [
        {
          "id": "6-1",
          "label": "Fluffy Rug",
          "description": "barefoot comfort",
          "icon": "◌",
          "primary": "cozy",
          "secondary": "secret",
          "observation": "The Fluffy Rug adds comfort to the part of the room you actually walk across.",
          "layer": 0
        },
        {
          "id": "6-2",
          "label": "Big Plants",
          "description": "a little indoor jungle",
          "icon": "❧",
          "primary": "zen",
          "secondary": "creative",
          "observation": "Big Plants make living things part of the atmosphere, not just decoration.",
          "layer": 1
        },
        {
          "id": "6-3",
          "label": "Beanbag Chair",
          "description": "a perfect chill spot",
          "icon": "◕",
          "primary": "social",
          "secondary": "neon",
          "observation": "A Beanbag Chair creates a relaxed seat without making the room feel formal.",
          "layer": 2
        },
        {
          "id": "6-4",
          "label": "Pet Corner",
          "description": "space for a furry friend",
          "icon": "♧",
          "primary": "secret",
          "secondary": "cozy",
          "observation": "The Pet Corner leaves a little place for a companion in your private world.",
          "layer": 3
        }
      ]
    },
    {
      "id": "window-view",
      "name": "WINDOW VIEW",
      "prompt": "What do you want to see outside?",
      "options": [
        {
          "id": "7-1",
          "label": "Ocean Sunset",
          "description": "waves and warm skies",
          "icon": "≋",
          "primary": "social",
          "secondary": "creative",
          "observation": "Ocean Sunset gives your window a daily invitation to slow down.",
          "layer": 0
        },
        {
          "id": "7-2",
          "label": "City at Night",
          "description": "lights that never sleep",
          "icon": "▥",
          "primary": "neon",
          "secondary": "secret",
          "observation": "City at Night keeps a little outside energy glowing beyond your window.",
          "layer": 1
        },
        {
          "id": "7-3",
          "label": "Green Mountains",
          "description": "quiet and open air",
          "icon": "△",
          "primary": "zen",
          "secondary": "cozy",
          "observation": "Green Mountains give your room an imaginary horizon with breathing space.",
          "layer": 2
        },
        {
          "id": "7-4",
          "label": "Rainy Street",
          "description": "cozy weather all day",
          "icon": "☂",
          "primary": "secret",
          "secondary": "cozy",
          "observation": "Rainy Street makes staying indoors feel like a choice worth enjoying.",
          "layer": 3
        }
      ]
    },
    {
      "id": "final-touch",
      "name": "FINAL TOUCH",
      "prompt": "One last detail. What's the vibe?",
      "options": [
        {
          "id": "8-1",
          "label": "Tea & Books",
          "description": "peaceful reset",
          "icon": "☕",
          "primary": "cozy",
          "secondary": "zen",
          "observation": "Tea & Books sets aside a gentle ritual that asks very little of you.",
          "layer": 0
        },
        {
          "id": "8-2",
          "label": "Snacks & Friends",
          "description": "come hang out",
          "icon": "♡",
          "primary": "social",
          "secondary": "creative",
          "observation": "Snacks & Friends turns the finished room into an invitation to hang out.",
          "layer": 1
        },
        {
          "id": "8-3",
          "label": "Headphones On",
          "description": "my private universe",
          "icon": "♫",
          "primary": "secret",
          "secondary": "neon",
          "observation": "Headphones On lets you choose when the rest of the world can reach you.",
          "layer": 2
        },
        {
          "id": "8-4",
          "label": "Camera & Memories",
          "description": "capture the moment",
          "icon": "▣",
          "primary": "creative",
          "secondary": "social",
          "observation": "Camera & Memories makes noticing and keeping moments part of your routine.",
          "layer": 3
        }
      ]
    }
  ],
  "results": {
    "cozy": {
      "slug": "cozy-daydreamer",
      "title": "COZY DAYDREAMER",
      "icon": "☁️",
      "tagline": "Soft lights, softer landings.",
      "color": "#b16c3f",
      "description": "Your dream room knows how to welcome you back after a long day. Comfort leads the design, but it is the little rituals that make the space feel personal: somewhere to settle, something familiar within reach, and permission to take your time. You do not need every corner to be impressive. You want it to feel good to live here. Friends might notice how easy it is to relax around you, while you notice whether the mood feels gentle enough to breathe. Your room is a reminder that rest can be something you choose on purpose."
    },
    "neon": {
      "slug": "neon-night-owl",
      "title": "NEON NIGHT OWL",
      "icon": "🌙",
      "tagline": "Your best ideas arrive after dark.",
      "color": "#7755d6",
      "description": "Your dream room has its own evening rhythm. Once the outside world gets quieter, your interests have room to get louder: a game, a playlist, an idea that suddenly needs another hour. You like a space that can hold your attention without feeling like a classroom or an office. The atmosphere matters as much as the activity. There is a playful sense of control in choosing your own little world of sound, color and focus. Just remember to leave an easy way to switch off, too. Even a brilliant midnight thought deserves a well-rested person to finish it."
    },
    "zen": {
      "slug": "minimal-zen",
      "title": "MINIMAL ZEN",
      "icon": "🌿",
      "tagline": "Less noise. More breathing room.",
      "color": "#397965",
      "description": "Your dream room gives your attention somewhere soft to land. Instead of asking every object to compete, you let a few thoughtful choices do the work. Calm does not have to mean empty: a useful corner, a comfortable place to rest and a view you enjoy can be more than enough. You may like knowing where things belong so that your mind can wander somewhere else. This room is less about perfect tidiness than about making everyday life feel lighter. Leave space for one unexpected favorite, too. A little personality can belong in a peaceful room without becoming clutter."
    },
    "creative": {
      "slug": "creative-chaos",
      "title": "CREATIVE CHAOS",
      "icon": "🎨",
      "tagline": "Every corner has a story.",
      "color": "#c05848",
      "description": "Your dream room looks like someone actually lives, thinks and makes things here. You are drawn to details that can start an idea or keep a memory alive, even when they do not match a tidy decorating rule. A corner can be practical one day and become part of a new project the next. The fun comes from finding a combination that feels unmistakably yours. You do not need to explain every choice to make it work. Give your favorite experiments enough room to shine, and keep one clear landing spot for whatever you are excited to try tomorrow."
    },
    "social": {
      "slug": "social-sunshine",
      "title": "SOCIAL SUNSHINE",
      "icon": "☀️",
      "tagline": "There's always room for one more friend.",
      "color": "#b57b22",
      "description": "Your dream room feels like an invitation with the door already open. You care about how a place feels when people arrive: whether they can get comfortable, find something to talk about and stay a little longer than planned. Personal memories and easy pleasures matter more than a perfectly staged picture. You might be the person who turns an ordinary afternoon into a small occasion without calling it one. The space still belongs to you, though. Keep a quiet ritual or a favorite corner that is only yours, so welcoming everyone else never means forgetting what helps you recharge."
    },
    "secret": {
      "slug": "secret-sanctuary",
      "title": "SECRET SANCTUARY",
      "icon": "🔮",
      "tagline": "A whole little universe of your own.",
      "color": "#715b95",
      "description": "Your dream room holds more than someone could understand from a quick glance. It is a place to follow your own interests, let your thoughts settle and decide how much of your world to share. You may enjoy details that feel quietly magical, especially when they turn an ordinary evening into a private ritual. Privacy here is not the same as loneliness. It is the freedom to choose your company, your pace and the atmosphere around you. Leave a little opening for the people who understand that world. A sanctuary can protect your energy and still make room for connection."
    }
  }
};
if(typeof module!=="undefined")module.exports=ROOM_DATA;
