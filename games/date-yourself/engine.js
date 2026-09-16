const MirrorEngine={
  profile(data,choices){
    if(choices.length!==8||choices.some(x=>!Number.isInteger(x)||x<0||x>2))throw new Error('Eight valid answers required.');
    const rows=data.topics.map((topic,index)=>{
      const give=choices[index*2],want=choices[index*2+1];
      if(!Number.isInteger(give)||!Number.isInteger(want))throw new Error('Missing answer.');
      return {topic:topic.id,name:topic.name,action:topic.actions[give],preference:topic.preferences[want],aligned:give===want,give,want};
    });
    const aligned=rows.filter(row=>row.aligned).length;
    const gift=rows.reduce((best,row)=>row.action.priority>best.action.priority?row:best,rows[0]);
    const friction=rows.find(row=>!row.aligned)||rows.reduce((lowest,row)=>row.action.priority<lowest.action.priority?row:lowest,rows[0]);
    return {rows,aligned,gift,friction,band:aligned>=3?'high':aligned===0?'low':'mixed'};
  },
  result(data,choices,verdict){
    if(!['yes','no'].includes(verdict))throw new Error('A date/pass choice is required.');
    const profile=this.profile(data,choices);const key=verdict+'-'+profile.band;
    return {...profile,key,verdict,result:data.results[key]};
  }
};
if(typeof module!=='undefined'&&module.exports)module.exports=MirrorEngine;
