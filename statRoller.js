// Stat block dice roller function for DnD

diceRoll = (sides) => {
  let dSides = sides; 
  return Math.floor(Math.random() * dSides) +1;
}

statRoller = () =>{
  let statArray = [];

  for(i=0; i<4; i++){
    statArray.push(diceRoll(6));
    //console.log(`Roll: ${i+1}. You rolled a ${statArray[i]}`);
    
  }
  
  let result = statArray.sort().filter((_,i) => i).reduce((a, b)=>{
   
    return a + b;
});
  
  return result;
}

console.log(`Strength:      ${statRoller()}`);
console.log(`Dexterity:     ${statRoller()}`);
console.log(`Constitution:  ${statRoller()}`);
console.log(`Intelligence:  ${statRoller()}`);
console.log(`Wisdom:        ${statRoller()}`);
console.log(`Charisma:      ${statRoller()}`);