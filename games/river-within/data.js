/* Original story symbols. Each interpretation belongs to the selected choice. */
const RIVER_DATA = {
  id: 'river_within', title: 'The River Within',
  scenes: [
    { id:'monkey', animal:'The monkey', icon:'🐒', chapter:'A little courage',
      scene:'A little monkey freezes at the first stepping stone. The water is shallow, but it feels like a big leap.',
      question:'How will you help it cross?', symbol:'The ones you care for',
      meaning:'In this story, the monkey stands for someone who looks to you for care.', axis:'closeness',
      answers:[
        {text:'Carry it on my back.',value:1,label:'A safe place first',short:'You offer safety before asking for courage.',reading:'You chose to carry the monkey. When someone feels small or afraid, your first instinct may be to make the hard part easier for them. Your care feels like a place to land.',nudge:'Leave a little room for them to surprise you with what they can do.'},
        {text:'Hold its hand as it steps across.',value:0,label:'Courage, hand in hand',short:'You help people discover their own footing.',reading:'You chose to walk beside the monkey. You may show care by staying close enough to help while letting someone try for themselves. You want their confidence to grow along with your bond.',nudge:'A little reassurance can matter as much as the lesson.'}
      ]},
    { id:'snake', animal:'The snake', icon:'🐍', chapter:'Room to be close',
      scene:'A small, friendly snake wants to come too. It can curl around your arm or rest on a branch you carry.',
      question:'Where will the snake ride?', symbol:'Your personal boundaries',
      meaning:'Here, the snake represents how much closeness feels comfortable to you.', axis:'closeness',
      answers:[
        {text:'On the branch in my hands.',value:0,label:'Close, with breathing room',short:'You can be connected without sharing every inch.',reading:'You chose the branch. You may feel most at ease when a relationship has space for separate thoughts, time and routines. A boundary can be your way of keeping a connection comfortable.',nudge:'Tell people what your space means, so they do not have to guess.'},
        {text:'Gently curled around my arm.',value:1,label:'Comfort in closeness',short:'You welcome people into your everyday world.',reading:'You chose to keep the snake close. You may enjoy the small, ordinary ways people become part of your day. Familiarity and shared moments can make a bond feel real to you.',nudge:'Check that the amount of closeness feels good to both of you.'}
      ]},
    { id:'dog', animal:'The puppy', icon:'🐶', chapter:'A familiar voice',
      scene:'Your puppy friend spots a butterfly and wanders away from the crossing. There is no hurry.',
      question:'How will you bring it back?', symbol:'Your friendships',
      meaning:'The puppy stands for how you respond when a friend drifts away.', axis:'initiative',
      answers:[
        {text:'Walk over and bring it along.',value:1,label:'The first one to reach out',short:'You turn missing someone into a small action.',reading:'You chose to go to the puppy. When a friendship goes quiet, you may prefer making the first move to wondering what happened. An invitation or check-in is how you keep the door open.',nudge:'Notice whether the effort comes back to you, too.'},
        {text:'Call softly and wait for it.',value:0,label:'An open door, no pressure',short:'You make room for friends to return at their pace.',reading:'You chose to call and wait. You may trust that a little distance does not erase a friendship. Your invitation is there, without making someone prove that they care right away.',nudge:'Sometimes a friend needs a second, clearer invitation.'}
      ]},
    { id:'bird', animal:'The bird', icon:'🐦', chapter:'Two ways together',
      scene:'A blue bird lands on your shoulder. It can stay with you or fly ahead and meet you on the far bank.',
      question:'What feels right to you?', symbol:'Your way of loving',
      meaning:'The bird represents the balance between togetherness and freedom in love.', axis:'closeness',
      answers:[
        {text:'Let it fly. We will meet there.',value:0,label:'Love with room to fly',short:'You can share a destination without every step.',reading:'You chose to meet on the far bank. You may enjoy love that leaves room for different interests and separate adventures. Being chosen again can matter more to you than being together all the time.',nudge:'Make your affection visible, even when you are comfortable apart.'},
        {text:'Invite it to stay on my shoulder.',value:1,label:'The little moments together',short:'Shared experiences are one of your love languages.',reading:'You chose the shared crossing. You may find affection in the ordinary moments between big milestones. Doing something side by side can feel more intimate than a perfect speech.',nudge:'An invitation stays warmest when the other person can say no.'}
      ]},
    { id:'deer', animal:'The deer', icon:'🦌', chapter:'A gentler pace',
      scene:'A young deer reaches the water and hesitates. A quiet path follows the bank to a shallow crossing.',
      question:'How will you help it feel ready?', symbol:'Your vulnerable side',
      meaning:'The deer stands for the part of you that needs gentleness when life feels unfamiliar.', axis:'initiative',
      answers:[
        {text:'Wait beside it until it is ready.',value:0,label:'Permission to take your time',short:'You give difficult feelings a little room to settle.',reading:'You chose to stay beside the deer. When things feel tender, you may value being understood before being pushed toward a solution. Pausing can be how you find your footing again.',nudge:'When you feel ready, choose one small next step.'},
        {text:'Lead it to the easier crossing.',value:1,label:'A small step toward relief',short:'You look for a practical way to make things gentler.',reading:'You chose the quieter route. You may respond to unease by changing what you can: the plan, the pace or the surroundings. A manageable next step helps you feel less stuck.',nudge:'You do not have to solve every feeling before you can feel it.'}
      ]},
    { id:'fox', animal:'The fox', icon:'🦊', chapter:'The last crossing',
      scene:'A fox finds two calm routes to the far bank. One uses clear stepping stones; the other follows a winding stream.',
      question:'Which route will you take together?', symbol:'Your relationship with uncertainty',
      meaning:'The fox represents how you move forward when there is more than one possible way.', axis:'initiative',
      answers:[
        {text:'Choose the stones and lead the way.',value:1,label:'A path you can picture',short:'You build momentum by choosing a clear next step.',reading:'You chose the stepping stones. You may feel freer once you have a direction and something concrete to do. A plan gives your curiosity a place to begin.',nudge:'A useful plan can change when you notice a better route.'},
        {text:'Follow the stream and see where it goes.',value:0,label:'Room for a surprise',short:'You let the next step reveal itself along the way.',reading:'You chose the winding stream. You may enjoy leaving some of the journey undecided. A detour can feel like a discovery instead of a mistake.',nudge:'A simple check-in can keep an open-ended journey from becoming aimless.'}
      ]}
  ],
  results:{
    'close-lead':{slug:'river-keeper',title:'The River Keeper',icon:'🌿',color:'#245c4c',chips:['Warm presence','First to act'],quote:'You make room beside you, then find a way forward.',description:'Your choices leaned toward shared closeness and taking the first step. You may be the person who turns “I am here” into something others can feel.',reminder:'Ask what kind of help is wanted before carrying the whole crossing.'},
    'close-listen':{slug:'quiet-anchor',title:'The Quiet Anchor',icon:'🌙',color:'#545d85',chips:['Shared moments','Patient trust'],quote:'You make it feel safe to arrive at your own pace.',description:'Your choices leaned toward closeness and letting things unfold. Your presence may feel reassuring because someone can stay near you without having to hurry.',reminder:'Your own needs deserve a voice, even when you are happy to wait.'},
    'room-lead':{slug:'trail-lantern',title:'The Trail Lantern',icon:'☀️',color:'#98541e',chips:['Room to grow','A clear next step'],quote:'You light the way without choosing every step for someone.',description:'Your choices leaned toward personal space and practical action. You may show care by offering a direction, an invitation or a hand, while leaving others room to choose.',reminder:'Sometimes company matters more than a clever way forward.'},
    'room-listen':{slug:'open-sky',title:'The Open Sky',icon:'☁️',color:'#366b80',chips:['Breathing room','An open path'],quote:'You leave room for people, and the journey, to surprise you.',description:'Your choices leaned toward independence and a patient, open pace. You may trust a bond without needing to direct every moment of it.',reminder:'Let people hear that you care; freedom can be easier to trust when it is spoken.'}
  }
};
if(typeof module!=='undefined') module.exports=RIVER_DATA;
