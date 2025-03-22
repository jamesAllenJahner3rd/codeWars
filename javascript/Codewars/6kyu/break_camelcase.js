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
  *//*
    class CharacterHandler {
        handle(character) {
          return character;
        }
      }
      
      class UpperCaseHandler extends CharacterHandler {
        handle(character) {
          return ` ${character}`;
        }
      }
      
      class LowerCaseHandler extends CharacterHandler {
        // Inherits the handle method from CharacterHandler which returns the character as-is.
      }
      
      class Wordinator {
        constructor(camelCaseString) {
          this._camelCaseString = camelCaseString;
          this.handlers = {};
      
          for (let i = 65; i <= 90; i++) { // A-Z ASCII range
            this.handlers[String.fromCharCode(i)] = new UpperCaseHandler();
          }
          for (let i = 97; i <= 122; i++) { // a-z ASCII range
            this.handlers[String.fromCharCode(i)] = new LowerCaseHandler();
          }
        }
      
        findCap() {
          let result = '';
          for (const letter of this._camelCaseString) {
            const handler = this.handlers[letter] || new CharacterHandler();
            result += handler.handle(letter);
          }
          return result;
        }
      }
      
      function solution(string) {
        const output = new Wordinator(string);
        return output.findCap()
      }
        */