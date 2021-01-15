//This is a simple Dice object written in Javascript


class Dice {
  
  constructor(sides){
    this.sides = sides;
    }
  
  sided(sides){
    return `This is a d${this.sides}`;
  }

  roll(x){
    let diceRolls = x;
    do{
      console.log(`You rolled a d${this.sides}: ${Math.floor(Math.random() * this.sides) + 1}`);
      diceRolls--;
    } while (diceRolls >= 1)
    return "";
   
  }
}

let fireball = new Dice(6);
console.log(fireball.sided());
console.log(fireball.roll(8));




