
function points(games) {
    pointsAwarded = new Looper(games);
    return pointsAwarded.start();
  }
  
  class Looper{
    constructor(games){
      this._games = games
    }
    start() {
      return this._games.reduce((a,e)=>{
        let didWeWin = new SignCheck(e)
        let test2 = didWeWin.run() 
        a +=  Number(test2)     
        return a
      },0)
      
    }         
  } 
  
  class SignCheck{
    constructor(score){
    this._score = score;
    this._victoryPoints={
      '0':1,
      '1': 3,
      '-1': 0
    }  
  }
    run() {
      let scoreArray = this._score.split(':');
      let pointsAdded = this._victoryPoints[Math.sign(scoreArray[0]-scoreArray[1]).toString()] ;
      return pointsAdded
    }
  }
  /*prep
  paramteter  array of strings 
  return a sum of points
  i need to loop through the array, 
  split the strings around ':'
  subtract the numbers. if 0 add 1point
  if positive add 3point
  Math.sign()
  return
  
  */