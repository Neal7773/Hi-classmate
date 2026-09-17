const RiverEngine = (()=>{
  'use strict';
  function result(data,choices){
    if(!Array.isArray(choices)||choices.length!==data.scenes.length)throw new Error('Complete all six scenes first.');
    const scores={closeness:0,initiative:0};
    const rows=data.scenes.map((scene,i)=>{
      if(!Object.hasOwn(choices,i)||!Number.isInteger(choices[i])||!scene.answers[choices[i]])throw new Error('Invalid choice.');
      const answer=scene.answers[choices[i]];scores[scene.axis]+=answer.value;
      return {scene,answer,choice:choices[i]};
    });
    const key=(scores.closeness>=2?'close':'room')+'-'+(scores.initiative>=2?'lead':'listen');
    return {key,result:data.results[key],rows,scores};
  }
  return {result};
})();
if(typeof module!=='undefined')module.exports=RiverEngine;
