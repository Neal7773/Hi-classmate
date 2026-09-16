const MIRROR_DATA = {
  id:'date_yourself',title:'Would You Date Yourself?',
  topics:[
    {id:'replies',name:'Replies',give:'Your crush messages you. What do you usually do?',want:'When they text you, what rhythm do you like?',
     actions:[
      {text:'Reply as soon as I see it.',profile:'They reply as soon as they see your message.',short:'Quick replies',gift:'You make your interest visible.',friction:'Fast replies work best without expecting constant access.',priority:3},
      {text:'Reply when I have the headspace.',profile:'They reply when they have the headspace.',short:'Replies at their own pace',gift:'You leave room for a life outside the chat.',friction:'Your quiet stretches can leave someone guessing.',priority:2},
      {text:'Wait a bit. I don’t want to look too eager.',profile:'They deliberately wait so they do not look too eager.',short:'Deliberately delayed replies',gift:'You put thought into the impression you make.',friction:'A planned delay can look like a lack of interest.',priority:1}
     ],preferences:[{text:'Quick replies. I like clear interest.',short:'Quick replies'},{text:'Reply when you can. No stopwatch.',short:'Replies at their own pace'},{text:'A little suspense makes it exciting.',short:'A little reply suspense'}]},
    {id:'conflict',name:'Conflict',give:'Something they said hurt you. Your usual response?',want:'When you upset them, how would you rather they respond?',
     actions:[
      {text:'Tell them what hurt and talk it through.',profile:'They tell you directly when something hurts.',short:'Direct conversations',gift:'You give the other person something clear to respond to.',friction:'Directness still needs a kind tone and good timing.',priority:3},
      {text:'Ask for a break, then come back to talk.',profile:'They ask for a break and come back to talk.',short:'Space, then a conversation',gift:'You make space to calm down without disappearing.',friction:'They need to know when the conversation will resume.',priority:3},
      {text:'Say “okay lang” and hope they notice.',profile:'They say “okay lang” and hope you notice they are hurt.',short:'Hints instead of explanations',gift:'You notice the small changes in a conversation.',friction:'A partner may not decode the hints you leave.',priority:1}
     ],preferences:[{text:'Tell me directly. I don’t want to guess.',short:'Direct conversations'},{text:'Take a breather, then talk to me.',short:'Space, then a conversation'},{text:'A hint is enough. I’ll read the room.',short:'Subtle hints'}]},
    {id:'closeness',name:'Closeness',give:'Things are getting serious. What does your attention look like?',want:'What kind of attention feels best to you?',
     actions:[
      {text:'Consistent check-ins and time together.',profile:'They keep in touch consistently and make time for you.',short:'Steady attention',gift:'You make your presence predictable.',friction:'Your steady routine still needs room for separate plans.',priority:3},
      {text:'Affection, with plenty of solo time.',profile:'They show affection and keep plenty of solo time.',short:'Affection plus independence',gift:'You give both people room to stay themselves.',friction:'Your idea of enough contact may differ from theirs.',priority:2},
      {text:'All-in one week. Quiet the next.',profile:'They are all-in one week and quiet the next.',short:'An unpredictable rhythm',gift:'Your enthusiastic moments bring a lot of energy.',friction:'The switch from intense to quiet can feel confusing.',priority:1}
     ],preferences:[{text:'Steady effort. I like knowing we’re good.',short:'Steady attention'},{text:'Love me, but give me plenty of space.',short:'Affection plus independence'},{text:'Keep it spontaneous. No fixed rhythm.',short:'An unpredictable rhythm'}]},
    {id:'plans',name:'Making plans',give:'Time to plan a date. What do you usually do?',want:'How would you like them to handle your next date?',
     actions:[
      {text:'Suggest a time and follow through.',profile:'They suggest a time and follow through on plans.',short:'A clear plan',gift:'You turn interest into a real plan.',friction:'Even a good plan needs room for the other person’s input.',priority:3},
      {text:'Keep it flexible and decide together.',profile:'They keep plans flexible and decide with you.',short:'Flexible, shared planning',gift:'You make room for both people’s ideas.',friction:'Flexibility needs a decision before the day disappears.',priority:2},
      {text:'Let them choose. I’ll go along.',profile:'They leave the choice to you and go along.',short:'They let you choose',gift:'You are willing to try the other person’s choice.',friction:'Leaving every decision to them can become work.',priority:2}
     ],preferences:[{text:'Pick a time and make an actual plan.',short:'A clear plan'},{text:'Let’s decide together closer to the day.',short:'Flexible, shared planning'},{text:'Let me choose. I know what I like.',short:'They let me choose'}]}
  ],
  results:{
    'yes-high':{slug:'my-own-type',title:'My Own Type',symbol:'♥',color:'#174baf',truth:'You said yes to your own dating style—and most of it fits what you ask for.',verdict:'YES, I WOULD',quote:'I would date myself. Apparently I’m my own type.'},
    'yes-mixed':{slug:'give-me-a-chance',title:'I’d Give Me a Chance',symbol:'✦',color:'#98470f',truth:'You said yes. You also have a few expectations your own habits do not meet.',verdict:'YES, I WOULD',quote:'I would give myself a chance. The mirror had receipts, though.'},
    'yes-low':{slug:'plot-twist-still-yes',title:'Plot Twist: Still Yes',symbol:'↗',color:'#91418b',truth:'You said yes—even though these four habits differ from the ones you said you want.',verdict:'YES, I WOULD',quote:'My dating mirror was not my usual type. I still said yes.'},
    'no-high':{slug:'good-on-paper-still-no',title:'Good on Paper, Still No',symbol:'◇',color:'#276875',truth:'Most of the habits fit your preferences. You still passed. Your final choice matters too.',verdict:'NO, I WOULDN’T',quote:'I matched my own checklist… and still would not date myself.'},
    'no-mixed':{slug:'not-my-type',title:'Not My Type',symbol:'≠',color:'#a12b4f',truth:'You passed on your own profile. Some habits you give are not the ones you want back.',verdict:'NO, I WOULDN’T',quote:'I said no to my own dating profile. This quiz exposed me.'},
    'no-low':{slug:'swiped-left-on-me',title:'I Swiped Left on Me',symbol:'←',color:'#9d381b',truth:'You passed—and all four habits differ from what you said you prefer receiving.',verdict:'NO, I WOULDN’T',quote:'I swiped left on myself. Would you date YOU?'}
  }
};
if(typeof module!=='undefined'&&module.exports)module.exports=MIRROR_DATA;
