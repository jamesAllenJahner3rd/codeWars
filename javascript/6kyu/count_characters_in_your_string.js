/**The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
    let outputObject = {}
    for (letter of string){
      if ((letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) || (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)){
        if( Object.hasOwn(outputObject,letter)){  
          outputObject[letter] +=1
        }else {
          outputObject[letter] = 1
        }
      } 
    }
   
    return outputObject;
  }
  
  /*
  prep
  parameter is a string of letters. upper and lowercase. possibly empty
  return a count each the letters with a starting at 1, if empty return a empty literal
  string = '' => {}
         = 'abc' => {}
         = 'a' => {'a': 1}
         = 'ab' => {'a': 1, 'b': 1});
         
  let outputObject be and empty literal
  loop through the string
    if the letter is a letter
      is the the letter already include in the output Object?
        is so and one to the associated value.
        if not and a key of the letter that is one.
  return outputObject
  
  */