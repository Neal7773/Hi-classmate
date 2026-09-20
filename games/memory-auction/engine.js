const MemoryEngine=(()=>{
function result(data,choices){
 if(!Array.isArray(choices)||choices.length!==8)throw Error('Complete eight choices.');
 const counts=Object.fromEntries(Object.keys(data.results).filter(k=>k!=='unbought').map(k=>[k,0])),protectedCounts=Object.fromEntries(Object.keys(data.protections).map(k=>[k,0]));
 const rows=data.questions.map((question,i)=>{const choice=choices[i];if(!Object.hasOwn(choices,i)||!Number.isInteger(choice)||choice<0||choice>1)throw Error('Invalid choice.');if(choice===0)counts[question.temptation]++;else protectedCounts[question.protection]++;return{question,answer:question.answers[choice],choice}});
 const rank=(scores,choice,field)=>{const max=Math.max(...Object.values(scores));const tied=Object.keys(scores).filter(k=>scores[k]===max);return{max,tied,key:max?[...rows].reverse().find(r=>r.choice===choice&&tied.includes(r.question[field])).question[field]:null}};
 const temptation=rank(counts,0,'temptation'),boundary=rank(protectedCounts,1,'protection'),key=temptation.key||'unbought';
 const accepted=rows.filter(r=>r.choice===0).length;
 return{key,result:data.results[key],counts,protectedCounts,tied:temptation.max?temptation.tied:[],rows,count:temptation.max,accepted,boundary:boundary.key,need:boundary.key?data.protections[boundary.key].title+': '+data.protections[boundary.key].text:'You sold all eight memories. No memory in this auction was a firm boundary for you in this playthrough.'};
}return{result};})();
if(typeof module!=='undefined')module.exports=MemoryEngine;
