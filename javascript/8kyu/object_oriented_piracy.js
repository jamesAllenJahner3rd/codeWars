// OOP: Object Oriented Piracy
// JavaScript:
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt(){
    //find the weight of the crew
    this.draft -=this.crew *1.5;
    //check if there is still enough loot to pay the rent.
    return this.draft>20?true:false;
    }
  
}