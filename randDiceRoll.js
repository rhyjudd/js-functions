// This function is supposed to mimic common dice rolls for dice such as d4 - d20 

// default dice value is for a d20 
const roll =(sides)=>{
  
  if(process.argv.length <=2){
    return `You rolled a d20: ${Math.floor(Math.random() * 20) + 1}`
  }else if(sides != 20 && sides >= 1){
    return `You rolled a d${sides}: ${Math.floor(Math.random() * sides) + 1}`
  }
   
}

console.log(roll(process.argv.slice(2)));