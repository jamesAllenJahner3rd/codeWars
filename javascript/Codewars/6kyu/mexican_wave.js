/**In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */


// function wave(str) {
//   const upRightLetter = new MexicanWave(str);
//   return upRightLetter.go();
// }
// class MexicanWave{
//   constructor(input){
//     this._array =[];
//     this._input =input
//   }
//   get input(){
//     return this._input
//   }
//   get aArray(){
//     return this._array
//   }
//   go =() =>{
//   const looptyLoop = new Loop(this._array, this._input)
//   return looptyLoop.run()
    
//   }
// }
// class Loop{
//   constructor(aArray, stringOfLetters){
//     this._array = aArray;///****
//     this._stringOfLetters =stringOfLetters
//     }
//     run =() =>{ 
//  //     for(const [index,letter] of  this._stringOfLetters){////*****
//  //          if (this._stringOfLetters[index] !== ' ') {////****
//  //            const upper = new Capitalize(index, this._stringOfLetters);
//  //            const capitalized = upper.capIt();
//  //            this._array.push(capitalized);///****
//  //     }
//         const  upper = new Capitalize( letter,  this._stringOfLetters)
//         let x =upper.capIt()
//         const pusher = new ArrayPusher(upper)
//         let y = pusher.pushIt()
//         Object.assign(this._array,y)
//        
//     }
//     console.log( 'the array output',this._array)
//     return this._array
// }
//   }
  
// class Capitalize{
//   constructor( index, aString){
//     this._aString = aString;
//     this._index = index;
  
//   }
//   capIt = () =>this._aString.replace(this._aString[this._index ],this._aString[this._index ].toUpperCase())
// }
// class ArrayPusher{
//   constructor(thePushed){
//     this._thePushed= thePushed
//      console.log('pushing',this._thePushed)
//   }
//   pushIt = () =>this._thePushed
// }

function wave(str) {
    const upRightLetter = new MexicanWave(str);
    return upRightLetter.go();
  }
  
  class MexicanWave {
    constructor(input) {
      this._array = [];
      this._input = input;
    }
  
    get input() {
      return this._input;
    }
  
    get aArray() {
      return this._array;
    }
  
    go = () => {
      const looptyLoop = new Loop(this._array, this._input);
      return looptyLoop.run();
    }
  }
  
  class Loop {
    constructor(aArray, stringOfLetters) {
      this._array = aArray;
      this._stringOfLetters = stringOfLetters;
    }
  
    run = () => {
      for (let i = 0; i < this._stringOfLetters.length; i++) {
        if (this._stringOfLetters[i] !== ' ') {
          const upper = new Capitalize(i, this._stringOfLetters);
          const capitalized = upper.capIt();
          this._array.push(capitalized);
        }
      }
      return this._array;
    }
  }
  
  class Capitalize {
    constructor(index, aString) {
      this._aString = aString;
      this._index = index;
    }
  
    capIt = () => {
      return this._aString.slice(0, this._index) + 
             this._aString[this._index].toUpperCase() + 
             this._aString.slice(this._index + 1);
    }
  }
  
  /*
  prep
  parameter string , emtpy, no punctionation,, no numbers
  return : array with the string and every word is going have a letter that is capitialize like a flip book of a mexican wave
  wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
  ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
  
   for each letter of str 
   push the string that has replaced the letter with the uppercase letter to outputArray
     return the outputArray
  */