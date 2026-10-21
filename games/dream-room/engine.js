const RoomEngine = (() => {
  function calculate(data, choices) {
    if (!Array.isArray(choices) || choices.length !== 8 || Array.from({length:8},(_,i)=>choices[i]).some(v=>!Number.isInteger(v)||v<0||v>3)) throw Error('Choose an item for all eight steps.');
    const scores=Object.fromEntries(Object.keys(data.results).map(k=>[k,0]));
    choices.forEach((v,i)=>{const o=data.steps[i].options[v];scores[o.primary]+=2;if(o.secondary)scores[o.secondary]+=1;});
    const max=Math.max(...Object.values(scores));let tied=Object.keys(scores).filter(k=>scores[k]===max);
    for(let i=7;i>=0&&tied.length>1;i--){const o=data.steps[i].options[choices[i]],weight=k=>o.primary===k?2:o.secondary===k?1:0,highest=Math.max(...tied.map(weight));tied=tied.filter(k=>weight(k)===highest);}
    const key=tied[0];
    return {key,result:data.results[key],scores,observations:[1,3,7].map(i=>({label:data.steps[i].options[choices[i]].label,text:data.steps[i].options[choices[i]].observation}))};
  }
  return {calculate};
})();
if(typeof module!=='undefined')module.exports=RoomEngine;
