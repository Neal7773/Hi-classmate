const TRUTH_DATA = {
  id:'need_to_know', title:'What Do You NEED to Know?',
  questions:[
    {id:'one-name',chapter:'01 · One name',icon:'👀',scene:'The phone can show you one name. The other stays hidden.',question:'Whose name would you open?',answers:[
      {text:'The person who secretly liked me.',type:'love',reflection:'You chose to find a sign that you mattered to someone.'},
      {text:'The person who smiled at me, then talked behind my back.',type:'trust',reflection:'You chose to check whether someone’s warmth could be trusted.'}
    ]},
    {id:'deleted-message',chapter:'02 · Deleted messages',icon:'💬',scene:'One deleted message can be restored. You have to choose the conversation.',question:'Which message do you recover?',answers:[
      {text:'What my friends said in the chat without me.',type:'trust',reflection:'You chose clarity about the version of your friendships you do not usually see.'},
      {text:'The confession someone typed to me, then deleted.',type:'love',reflection:'You chose a feeling that almost reached you but never quite did.'}
    ]},
    {id:'future-self',chapter:'03 · Future you',icon:'🔮',scene:'Your future self picks up. There is time for one question.',question:'What do you ask?',answers:[
      {text:'Which decision should I make differently, starting now?',type:'control',reflection:'You chose information you could turn into a different next step.'},
      {text:'What would my life be like if I took the other path?',type:'possibility',reflection:'You chose a glimpse of the life that could have unfolded beside this one.'}
    ]},
    {id:'sealed-file',chapter:'04 · The sealed file',icon:'📁',scene:'Two files appear under your name. Opening one permanently closes the other.',question:'Which file do you unlock?',answers:[
      {text:'The opportunity I missed without ever knowing it.',type:'possibility',reflection:'You chose to discover a possibility you never had the chance to consider.'},
      {text:'The one mistake I still have time to prevent.',type:'control',reflection:'You chose a warning that might help you change what happens next.'}
    ]},
    {id:'one-person',chapter:'05 · That one person',icon:'❤️',scene:'Think of someone you wish you understood better. Two answers light up.',question:'Which answer matters more?',answers:[
      {text:'How they really feel about me right now.',type:'love',reflection:'You chose to know where you stand in someone’s heart today.'},
      {text:'What would happen if I finally made the first move.',type:'control',reflection:'You chose a clearer outcome before deciding whether to act.'}
    ]},
    {id:'unfinished-chat',chapter:'06 · The unfinished chat',icon:'🕰️',scene:'An old conversation reappears. It belongs to someone you drifted away from.',question:'What do you want to know?',answers:[
      {text:'What could have happened if I had reached out once more.',type:'possibility',reflection:'You chose the continuation of a story that ended without a final page.'},
      {text:'The real reason they stopped talking to me.',type:'trust',reflection:'You chose an honest explanation instead of having to fill in the silence yourself.'}
    ]},
    {id:'almost',chapter:'07 · The almost',icon:'🎧',scene:'The phone finds two things nobody ever told you. Only one can play.',question:'Which recording do you choose?',answers:[
      {text:'The moment someone realized they could not forget me.',type:'love',reflection:'You chose evidence that your presence stayed with someone.'},
      {text:'The thing that almost happened and would have changed everything.',type:'possibility',reflection:'You chose the turning point that existed just outside your own story.'}
    ]},
    {id:'last-charge',chapter:'08 · Last charge',icon:'🔋',scene:'The screen dims. This is your final choice before the phone switches off.',question:'Which truth gets the last charge?',answers:[
      {text:'What someone I rely on has been hiding from me.',type:'trust',reflection:'You chose to understand the uncertainty inside a bond you depend on.'},
      {text:'The decision that will shape my next year the most.',type:'control',reflection:'You chose a direction you could use, rather than leaving the next chapter to chance.'}
    ]}
  ],
  results:{
    love:{slug:'proof-i-matter',title:'Proof I Matter',icon:'💌',color:'#af3761',chips:['Being remembered','Being chosen'],quote:'You wanted to know that you meant something to someone.',description:'Your choices leaned toward feelings that were never said out loud. A small sign that you were wanted, remembered or chosen may carry more weight than a dramatic secret.',need:'A clear sign of affection, without having to read between every line.',nudge:'Ask for the reassurance you want. You do not have to earn it by guessing.'},
    trust:{slug:'someone-to-trust',title:'Someone to Trust',icon:'🔐',color:'#174baf',chips:['Honest answers','Solid ground'],quote:'You were searching for a reason to feel sure about someone.',description:'Your choices leaned toward hidden conversations and unexplained distance. You may be looking for clarity about who you can rely on, more than the thrill of catching someone out.',need:'Words and actions that make sense together.',nudge:'A missing answer is not proof of betrayal. Start with what you know, then ask directly.'},
    control:{slug:'a-future-i-can-steer',title:'A Future I Can Steer',icon:'🧭',color:'#a6531e',chips:['A clear next step','Room to act'],quote:'You wanted an answer you could do something with.',description:'Your choices leaned toward consequences, warnings and next steps. Knowing what might happen may feel valuable because it gives you a chance to respond, prepare or choose differently.',need:'Enough clarity to make a move without needing every outcome guaranteed.',nudge:'Choose one step within your control. You can adjust when new information arrives.'},
    possibility:{slug:'the-life-i-missed',title:'The Life I Missed',icon:'🌀',color:'#6650a4',chips:['Unfinished stories','The other path'],quote:'You wanted to meet the version of life that almost happened.',description:'Your choices leaned toward missed chances and unfinished connections. The story you did not get to live may feel full of questions that an ordinary answer cannot quite settle.',need:'A way to honor what could have been while still choosing what comes next.',nudge:'Let one old “what if” tell you what you want to try now.'}
  }
};
if(typeof module!=='undefined')module.exports=TRUTH_DATA;
