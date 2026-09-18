const TruthEngine=(()=>{
  'use strict';
  function result(data,choices){
    if(!Array.isArray(choices)||choices.length!==data.questions.length)throw Error('Complete all eight choices.');
    const counts=Object.fromEntries(Object.keys(data.results).map(k=>[k,0]));
    const rows=data.questions.map((question,i)=>{if(!Object.hasOwn(choices,i)||!Number.isInteger(choices[i])||!question.answers[choices[i]])throw Error('Invalid choice.');const answer=question.answers[choices[i]];counts[answer.type]++;return{question,answer,choice:choices[i]}});
    const max=Math.max(...Object.values(counts)),tied=Object.keys(counts).filter(k=>counts[k]===max);
    const key=[...rows].reverse().find(row=>tied.includes(row.answer.type)).answer.type;
    return{key,result:data.results[key],counts,tied,rows,evidence:rows.filter(row=>row.answer.type===key),count:max};
  }
  return{result};
})();
if(typeof module!=='undefined')module.exports=TruthEngine;
