// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  console.log(saturdayFun()); 
  console.log(saturdayFun("bathe my dog")); 
  
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  

  console.log(mondayWork()); 
  console.log(mondayWork("work from home")); 
  
  function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
 
  const emphatic = wrapAdjective("*");
  console.log(emphatic("amazing")); 
  
  const excited = wrapAdjective("||");
  console.log(excited("a champion")); 
  