If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

FundamentalsStrings
Ad
Have an idea for a Codewars feature?
If we could change one thing about Codewars tomorrow, what should it be? 
var countSheep = function (num){
    counter = new SheepCounter(num);
    return counter.run()
  }
  class SheepCounter{
    constructor(input){
      this._num = input
    }
    run(){
    let output = ''
    for(let i = 1; i <=  this._num;i++){
    output += `${i} sheep...` 
    }
    return output
    }
  }
  /*prep
  para num 0  to infinite
  return string with the counting of sheep
      assert.strictEqual(countSheep(0), "");
      assert.strictEqual(countSheep(1), "1 sheep...");
      assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
      assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  
  loop  concatinating the 'index sheep...'
  return the string
  
  var countSheep = function (num){ 
    let output = ''
    for(let i = 1; i <= num;i++){
    output += `${i} sheep...` 
    }
    return output
    
  }
  */