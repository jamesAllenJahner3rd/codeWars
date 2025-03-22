String.prototype.camelCase=function(){
    console.log (this)
   let words = this.split(' ')
   let output= ""
   if(this.length ==0){
     return ''
   }
   words.forEach((word, index,array) =>{
     let letters = word.split('');
  //    if (index !== 0){
       letters[0] = letters[0].toUpperCase();
  //    }  
     output += letters.join('')
   })
   return output              
  }
  /*prep
  parameter a string no num, num punct
  return the string in CamelCase
  
  the world is big > theWorldIsBig
  pie are good > pieAreGood
  ping is slow > pingIsSlow
  
  spllit the string
  loop the array uppercase  the at 0 letter of each string
  join the strings
  */
  /*Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
  
  Examples (input --> output):
  "hello case" --> "HelloCase"
  "camel case word" --> "CamelCaseWord"*/