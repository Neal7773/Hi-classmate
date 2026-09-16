/* Quiz content and weights, separate from scoring and presentation. */
const DATING_DATA = {
  id: 'toxic_dating_habit',
  title: "What's Your Most Toxic Dating Habit?",
  results: {
    reply: {slug:'reply-accountant',title:'The Reply Accountant',symbol:'≠',color:'#a71d36',truth:'You remember every late reply. Somehow, love became a spreadsheet.',habit:'Matching their effort, minute for minute.',impact:'Every message feels like a test.',repair:'“I miss talking. When are you free?”',traits:['Keeps score','Reply timer','Effort audit']},
    jealousy: {slug:'jealousy-director',title:'The Jealousy Director',symbol:'◉',color:'#9e3464',truth:'A little jealousy feels like proof. So you keep creating the scene.',habit:'Provoking a reaction to feel wanted.',impact:'They feel tested instead of trusted.',repair:'“I could use some reassurance today.”',traits:['Reaction seeker','Story bait','Prove you care']},
    almost: {slug:'almost-lover',title:'The Almost Lover',symbol:'∞',color:'#7b3f99',truth:'You want their attention. The label? Suddenly, you need more time.',habit:'Keeping things close but undefined.',impact:'They keep waiting for a clear answer.',repair:'“Here is what I can actually offer.”',traits:['Mixed signals','No-label zone','One foot out']},
    silent: {slug:'silent-punisher',title:'The Silent Punisher',symbol:'…',color:'#99501c',truth:'“Okay lang.” Two words. An entire argument hiding underneath.',habit:'Going cold and hoping they notice.',impact:'They have to guess what went wrong.',repair:'“I’m hurt. Can we talk about it?”',traits:['Cold replies','Hidden hurt','Mind-reading test']},
    exit: {slug:'exit-planner',title:'The Exit Planner',symbol:'↗',color:'#276473',truth:'You prepare for the breakup before the relationship gets a fair chance.',habit:'Pulling away before you can be left.',impact:'They feel you leave before they do.',repair:'“I’m scared, but I want to stay present.”',traits:['Escape route','Guard up','Leaves first']},
    fixer: {slug:'the-fixer',title:'The Fixer',symbol:'✚',color:'#416037',truth:'You fell for who they could become. Now you are dating a project.',habit:'Treating their potential as a promise.',impact:'They feel managed instead of accepted.',repair:'“Do you want help, or just a listener?”',traits:['Potential crush','Rescue mode','I can fix this']}
  },
  questions: [
    {id:'late_reply',label:'THE THREE-HOUR REPLY',text:'They reply three hours late. Your next move?',answers:[
      {text:'Wait exactly three hours back.',scores:{reply:3,silent:1}},
      {text:'Reply now. Make it noticeably cold.',scores:{silent:3,exit:1}},
      {text:'Post a story so they know I’m busy too.',scores:{jealousy:3,reply:1}},
      {text:'Pull back before I get too attached.',scores:{exit:3,almost:1}}
    ]},
    {id:'proof',label:'BE HONEST ABOUT THIS',text:'Which confession secretly feels the best?',answers:[
      {text:'“I get jealous when they flirt with you.”',scores:{jealousy:3,almost:1}},
      {text:'“I’ll wait until you’re ready for a label.”',scores:{almost:3,jealousy:1}},
      {text:'“You’re the only one who can change me.”',scores:{fixer:3,exit:1}},
      {text:'“I know you put in more effort.”',scores:{reply:3,silent:1}}
    ]},
    {id:'cooling_off',label:'WHEN THE KILIG FADES',text:'When do you start losing interest?',answers:[
      {text:'When the chase becomes a sure thing.',scores:{almost:3,exit:1}},
      {text:'When they get close enough to hurt me.',scores:{exit:3,silent:1}},
      {text:'When they stop acting a little jealous.',scores:{jealousy:3,almost:1}},
      {text:'When they don’t need my advice anymore.',scores:{fixer:3,reply:1}}
    ]},
    {id:'cancelled',label:'THE CANCELLED DATE',text:'They cancel your date for a barkada plan. What comes out?',answers:[
      {text:'“Enjoy.” Then one-word replies all night.',scores:{silent:3,reply:1}},
      {text:'“That’s twice. I cancelled nothing for you.”',scores:{reply:3,jealousy:1}},
      {text:'A full plan for fixing their priorities.',scores:{fixer:3,silent:1}},
      {text:'“No worries.” I quietly stop making plans.',scores:{exit:3,almost:1}}
    ]},
    {id:'friends',label:'YOUR FRIENDS HAVE QUESTIONS',text:'Your friends ask, “So, what are you two?”',answers:[
      {text:'“No label. But they better not date anyone.”',scores:{almost:3,jealousy:1}},
      {text:'“Let’s post this and see if they react.”',scores:{jealousy:3,reply:1}},
      {text:'“They’ve got issues, but I can help.”',scores:{fixer:3,almost:1}},
      {text:'“Ask them. Apparently I have to guess too.”',scores:{silent:3,exit:1}}
    ]},
    {id:'sorry',label:'AFTER THE ARGUMENT',text:'They say sorry. What is still running through your head?',answers:[
      {text:'I apologized first the last three times.',scores:{reply:3,silent:1}},
      {text:'If they cared, I wouldn’t have to explain.',scores:{silent:3,jealousy:1}},
      {text:'I need to care less from now on.',scores:{exit:3,almost:1}},
      {text:'I know exactly how to fix their behavior.',scores:{fixer:3,jealousy:1}}
    ]},
    {id:'secure',label:'THEY ARE ACTUALLY CONSISTENT',text:'They like you. They show up. No games. Your private worry?',answers:[
      {text:'Are they relaxed because they care less?',scores:{jealousy:3,reply:1}},
      {text:'Does this mean I have to commit now?',scores:{almost:3,exit:1}},
      {text:'Will they notice when I’m upset?',scores:{silent:3,reply:1}},
      {text:'How bad will it hurt when this ends?',scores:{exit:3,fixer:1}}
    ]},
    {id:'unsent',label:'THE TEXT YOU NEVER SEND',text:'Which unsent message is a little too you?',answers:[
      {text:'“I want you to try as hard as I do.”',scores:{reply:3,jealousy:1}},
      {text:'“Don’t leave. Just don’t ask what we are.”',scores:{almost:3,exit:1}},
      {text:'“You’d be perfect if you listened to me.”',scores:{fixer:3,almost:1}},
      {text:'“I said I’m fine. I wanted you to ask again.”',scores:{silent:3,jealousy:1}}
    ]}
  ]
};
if (typeof module !== 'undefined' && module.exports) module.exports = DATING_DATA;
