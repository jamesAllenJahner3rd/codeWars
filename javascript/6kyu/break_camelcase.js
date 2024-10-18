// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// StringsFundamentals
function solution(string) {
    output = new Wordinator(string);
    return output.findCap() 
  }
  
  class Wordinator{
    constructor(camelCaseString){
      this._camelCaseString = camelCaseString
    }
    get input(){
      return this._camelCaseString
    }
  findCap(){
    let aString =""
    for(let e of this._camelCaseString){  e != e.toUpperCase()? aString += e: aString += ` ${e}`}
    return aString
    } 
  }
  /*prep
  parameter strings, no punc, num, edge maybe.
  return the string with space 
  psuedocode
  
  function to call a new instance of a class call Wordinator
  this will return the output string.
  
  the class Wordinator will make he string instanceable.
  i need a method to find the caps
    then break up the word checking check letter if they were equal to their uppercase counterparts.
    then return a new corrected string.
  */