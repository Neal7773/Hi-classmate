const WEATHER_DATA = {
  "id": "inner_weather",
  "title": "What’s Your Inner Weather?",
  "questions": [
    {
      "id": "q1",
      "text": "You had a terrible day.\nA friend asks, “Are you okay?”",
      "answers": [
        {
          "id": "q1_a",
          "text": "“Yeah. I’ll tell you what happened.”",
          "scores": {
            "clear_sky": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q1_b",
          "text": "“I’m fine 😂” even when I’m really not.",
          "scores": {
            "sunshower": 2,
            "thunderstorm": 1
          }
        },
        {
          "id": "q1_c",
          "text": "“I don’t even know how I feel yet.”",
          "scores": {
            "morning_fog": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q1_d",
          "text": "“I need some time alone first.”",
          "scores": {
            "quiet_night": 2,
            "morning_fog": 1
          }
        }
      ]
    },
    {
      "id": "q2",
      "text": "Someone says something that really hurts you.",
      "answers": [
        {
          "id": "q2_a",
          "text": "I tell them it bothered me.",
          "scores": {
            "clear_sky": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q2_b",
          "text": "I laugh it off, then think about it later.",
          "scores": {
            "sunshower": 2,
            "morning_fog": 1
          }
        },
        {
          "id": "q2_c",
          "text": "I stay quiet until I understand why it hurt.",
          "scores": {
            "morning_fog": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q2_d",
          "text": "I hold it in... until one more thing happens.",
          "scores": {
            "thunderstorm": 2,
            "quiet_night": 1
          }
        }
      ]
    },
    {
      "id": "q3",
      "text": "Your plans suddenly fall apart.",
      "answers": [
        {
          "id": "q3_a",
          "text": "Okay. New plan.",
          "scores": {
            "after_the_rain": 2,
            "clear_sky": 1
          }
        },
        {
          "id": "q3_b",
          "text": "I act chill, but inside I’m disappointed.",
          "scores": {
            "sunshower": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q3_c",
          "text": "I need a moment to process the change.",
          "scores": {
            "morning_fog": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q3_d",
          "text": "My whole mood changes immediately.",
          "scores": {
            "thunderstorm": 2,
            "sunshower": 1
          }
        }
      ]
    },
    {
      "id": "q4",
      "text": "It’s 1 AM and something is still bothering you.",
      "answers": [
        {
          "id": "q4_a",
          "text": "I message someone I trust.",
          "scores": {
            "clear_sky": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q4_b",
          "text": "I distract myself with memes, videos or music.",
          "scores": {
            "sunshower": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q4_c",
          "text": "I replay everything until it finally makes sense.",
          "scores": {
            "morning_fog": 2,
            "thunderstorm": 1
          }
        },
        {
          "id": "q4_d",
          "text": "I sit with it quietly until the feeling passes.",
          "scores": {
            "quiet_night": 2,
            "after_the_rain": 1
          }
        }
      ]
    },
    {
      "id": "q5",
      "text": "You’re upset with someone you care about.",
      "answers": [
        {
          "id": "q5_a",
          "text": "I’d rather talk about it and clear the air.",
          "scores": {
            "clear_sky": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q5_b",
          "text": "I still joke with them, but they can tell something is off.",
          "scores": {
            "sunshower": 2,
            "thunderstorm": 1
          }
        },
        {
          "id": "q5_c",
          "text": "I become quieter while I figure out what I want to say.",
          "scores": {
            "morning_fog": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q5_d",
          "text": "I say nothing for a long time, then everything comes out at once.",
          "scores": {
            "thunderstorm": 2,
            "morning_fog": 1
          }
        }
      ]
    },
    {
      "id": "q6",
      "text": "Something amazing happens to you.",
      "answers": [
        {
          "id": "q6_a",
          "text": "Everyone close to me knows immediately.",
          "scores": {
            "clear_sky": 2,
            "thunderstorm": 1
          }
        },
        {
          "id": "q6_b",
          "text": "I’m smiling all day but trying to act normal.",
          "scores": {
            "sunshower": 2,
            "clear_sky": 1
          }
        },
        {
          "id": "q6_c",
          "text": "I enjoy it quietly before telling people.",
          "scores": {
            "quiet_night": 2,
            "morning_fog": 1
          }
        },
        {
          "id": "q6_d",
          "text": "I remember how hard things were before this and appreciate it even more.",
          "scores": {
            "after_the_rain": 2,
            "thunderstorm": 1
          }
        }
      ]
    },
    {
      "id": "q7",
      "text": "After a stressful week, what helps you reset?",
      "answers": [
        {
          "id": "q7_a",
          "text": "Talking, laughing and spending time with people I trust.",
          "scores": {
            "clear_sky": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q7_b",
          "text": "Something fun that changes my mood.",
          "scores": {
            "sunshower": 2,
            "after_the_rain": 1
          }
        },
        {
          "id": "q7_c",
          "text": "Quiet time to understand what I’m feeling.",
          "scores": {
            "morning_fog": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q7_d",
          "text": "Being completely alone until my energy comes back.",
          "scores": {
            "quiet_night": 2,
            "thunderstorm": 1
          }
        }
      ]
    },
    {
      "id": "q8",
      "text": "Which sentence sounds most like you?",
      "answers": [
        {
          "id": "q8_a",
          "text": "“If I feel it, I’d rather be honest about it.”",
          "scores": {
            "clear_sky": 2,
            "thunderstorm": 1
          }
        },
        {
          "id": "q8_b",
          "text": "“I can smile even when there’s a lot happening inside.”",
          "scores": {
            "sunshower": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q8_c",
          "text": "“Give me time. I’m still figuring out what I feel.”",
          "scores": {
            "morning_fog": 2,
            "quiet_night": 1
          }
        },
        {
          "id": "q8_d",
          "text": "“I may have a storm, but I always find my way back.”",
          "scores": {
            "after_the_rain": 2,
            "thunderstorm": 1
          }
        }
      ]
    }
  ],
  "results": {
    "clear_sky": {
      "id": "clear_sky",
      "slug": "clear-sky",
      "title": "CLEAR SKY",
      "icon": "☀️",
      "color": "#986200",
      "hero": "You’d rather know what you feel than make everyone guess.",
      "description": "Your emotions usually have a clear route from inside your head to the outside world. When something matters, you would rather acknowledge it than spend days pretending it does not.",
      "deepDive": [
        {
          "title": "What people see",
          "text": "People often know where they stand with you. You tend to communicate your mood clearly instead of leaving everyone to decode small signals."
        },
        {
          "title": "What’s happening inside",
          "text": "You still have complicated feelings, but your instinct is usually to name them, talk about them or do something about them."
        },
        {
          "title": "Your hidden strength",
          "text": "Emotional clarity. You can often move forward because you are willing to admit what is actually bothering you."
        },
        {
          "title": "Your blind spot",
          "text": "Being ready to talk does not mean everyone else is ready at the same time. Sometimes another person needs longer to understand their own feelings."
        },
        {
          "title": "What helps you reset",
          "text": "An honest conversation, a clear decision and the feeling that nothing important has been left hanging."
        }
      ],
      "chemistry": [
        {
          "title": "AFTER THE RAIN 🌈",
          "text": "Both of you prefer movement over staying stuck, even if you reach that point in different ways."
        },
        {
          "title": "MORNING FOG 🌫️",
          "text": "You want clarity now. They may need time before clarity even exists."
        }
      ]
    },
    "sunshower": {
      "id": "sunshower",
      "slug": "sunshower",
      "title": "SUNSHOWER",
      "icon": "🌦️",
      "color": "#19708a",
      "hero": "You can laugh while five different feelings are happening at once.",
      "description": "From the outside, you often look lighter than you actually feel. Humor, energy and normal conversation can continue even when something deeper is happening underneath.",
      "deepDive": [
        {
          "title": "What people see",
          "text": "Funny, flexible and surprisingly okay even when the day is not."
        },
        {
          "title": "What’s happening inside",
          "text": "Your emotions often overlap. You can genuinely enjoy a moment while still carrying disappointment, worry or uncertainty from something else."
        },
        {
          "title": "Your hidden strength",
          "text": "You know how to keep life moving without letting every difficult feeling take over the entire day."
        },
        {
          "title": "Your blind spot",
          "text": "Because you still look okay, people may not notice when you actually need support."
        },
        {
          "title": "What helps you reset",
          "text": "Someone who notices the difference between your normal jokes and the jokes you use when you are trying not to think about something."
        }
      ],
      "chemistry": [
        {
          "title": "QUIET NIGHT 🌙",
          "text": "They are often good at noticing what exists underneath the noise."
        },
        {
          "title": "THUNDERSTORM ⛈️",
          "text": "You soften feelings with humor. They may let those feelings arrive at full volume."
        }
      ]
    },
    "morning_fog": {
      "id": "morning_fog",
      "slug": "morning-fog",
      "title": "MORNING FOG",
      "icon": "🌫️",
      "color": "#566b85",
      "hero": "You’re not hiding your feelings. You’re still finding them.",
      "description": "You rarely want to react before you understand what is actually happening inside you. Your emotions become clearer with time, distance and reflection.",
      "deepDive": [
        {
          "title": "What people see",
          "text": "Quiet, thoughtful and sometimes difficult to read in the moment."
        },
        {
          "title": "What’s happening inside",
          "text": "You are sorting through details, reactions and possibilities before deciding what the feeling actually means."
        },
        {
          "title": "Your hidden strength",
          "text": "You are less likely to confuse the first reaction with the final truth."
        },
        {
          "title": "Your blind spot",
          "text": "Waiting for perfect clarity can sometimes turn a conversation that needed ten minutes into something you carry for three days."
        },
        {
          "title": "What helps you reset",
          "text": "Space without pressure, followed by a conversation when the fog has started to lift."
        }
      ],
      "chemistry": [
        {
          "title": "QUIET NIGHT 🌙",
          "text": "Neither of you needs every feeling explained immediately."
        },
        {
          "title": "CLEAR SKY ☀️",
          "text": "They process by expressing. You often express after processing."
        }
      ]
    },
    "thunderstorm": {
      "id": "thunderstorm",
      "slug": "thunderstorm",
      "title": "THUNDERSTORM",
      "icon": "⛈️",
      "color": "#654298",
      "hero": "You can hold a lot in—until suddenly you can’t.",
      "description": "Your emotions have intensity. You may stay calm longer than people expect, but when too many things build up at once, everything can arrive with full force.",
      "deepDive": [
        {
          "title": "What people see",
          "text": "Usually fine... until the moment you are very obviously not fine."
        },
        {
          "title": "What’s happening inside",
          "text": "Small frustrations can accumulate even when you decide each one is “not worth talking about.”"
        },
        {
          "title": "Your hidden strength",
          "text": "You feel deeply, care strongly and rarely give half-hearted reactions to things that truly matter to you."
        },
        {
          "title": "Your blind spot",
          "text": "People may think the final small event caused the whole storm when it was actually only the last drop."
        },
        {
          "title": "What helps you reset",
          "text": "Releasing pressure earlier—before ten small problems become one enormous one."
        }
      ],
      "chemistry": [
        {
          "title": "AFTER THE RAIN 🌈",
          "text": "They understand that a difficult emotional moment does not have to become a permanent state."
        },
        {
          "title": "SUNSHOWER 🌦️",
          "text": "You release intensity. They often disguise it."
        }
      ]
    },
    "quiet_night": {
      "id": "quiet_night",
      "slug": "quiet-night",
      "title": "QUIET NIGHT",
      "icon": "🌙",
      "color": "#354b8f",
      "hero": "Your feelings get louder when the world gets quieter.",
      "description": "You often process emotions privately. Solitude is not necessarily avoidance for you—it can be the place where everything finally becomes easier to hear.",
      "deepDive": [
        {
          "title": "What people see",
          "text": "Calm, private and independent."
        },
        {
          "title": "What’s happening inside",
          "text": "More than you usually show. You may think deeply about a situation long after the conversation itself has ended."
        },
        {
          "title": "Your hidden strength",
          "text": "You know how to sit with your own thoughts without needing immediate outside validation."
        },
        {
          "title": "Your blind spot",
          "text": "People who care about you cannot always tell the difference between “I need space” and “I need help but don’t know how to ask.”"
        },
        {
          "title": "What helps you reset",
          "text": "Time alone, low pressure and one trusted person who does not demand an instant explanation."
        }
      ],
      "chemistry": [
        {
          "title": "MORNING FOG 🌫️",
          "text": "Both of you understand that silence can be part of processing rather than a rejection."
        },
        {
          "title": "CLEAR SKY ☀️",
          "text": "They may want to talk before you have finished thinking."
        }
      ]
    },
    "after_the_rain": {
      "id": "after_the_rain",
      "slug": "after-the-rain",
      "title": "AFTER THE RAIN",
      "icon": "🌈",
      "color": "#1b7563",
      "hero": "You don’t avoid hard feelings. You turn them into something you can carry.",
      "description": "Difficult moments affect you, but you have a strong instinct to recover, learn and eventually find a way forward.",
      "deepDive": [
        {
          "title": "What people see",
          "text": "Resilient, hopeful and surprisingly able to come back after a difficult period."
        },
        {
          "title": "What’s happening inside",
          "text": "You do feel the weight of bad moments. Your strength is not that nothing hurts—it is that hurt rarely becomes the final chapter."
        },
        {
          "title": "Your hidden strength",
          "text": "You are good at finding meaning after disappointment and remembering that a bad moment is not automatically a bad future."
        },
        {
          "title": "Your blind spot",
          "text": "Being “the resilient one” can create pressure to recover quickly even when you actually need more time."
        },
        {
          "title": "What helps you reset",
          "text": "Time, perspective and something that reminds you life is larger than the moment that just hurt."
        }
      ],
      "chemistry": [
        {
          "title": "CLEAR SKY ☀️",
          "text": "They help create clarity; you help create perspective."
        },
        {
          "title": "THUNDERSTORM ⛈️",
          "text": "They experience the emotional peak intensely. You naturally start looking toward what comes after it."
        }
      ]
    }
  }
};
if (typeof module !== "undefined" && module.exports) module.exports = WEATHER_DATA;
