function areYouPlayingBanjo(name) {
    result = new Player(name)
    return result.run()
  }
  class Player{
    constructor(name){
      this._name =name
    }
     get name(){
       return this._name
     }
    run()  {
      const firstLetter = new Test(this._name)
      return firstLetter.playOrNot( this._name)
    }
  }
    class Test {
      constructor(theName){
        this._aName = theName
        this._decider ={
          'r' : 'plays banjo',
          'R' : 'plays banjo'
        }
    }   
    playOrNot(){
       let doOrNot = this._decider[this._aName[0]] || 'does not play banjo'
       return `${this._aName} ${doOrNot}` 
    }
  }

  /*prep
  parameter a name in of a string; punct, no;  no nums.
  return two ouputs:
  name + " plays banjo" 
  name + " does not play banjo"

  psuedocoode
  search the name to see if the first letter is 'R'or'r'
  return the name + " plays banjo" if true

  return the name + " does not play banjo" if true

  */