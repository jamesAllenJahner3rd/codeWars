function correctPolishLetters (string) {
    let conversion = new LetterConverter(string)
     return conversion.run()
   }
   
   class LetterConverter{
     constructor(polishLetters){
       this._string = polishLetters
      this._spclChar = {
         'ą' : 'a',
         'ć' : 'c',
         'ę' : 'e',
         'ł' : 'l',
         'ń' : 'n',
         'ó' : 'o',
         'ś' : 's',
         'ź' : 'z',
         'ż' : 'z'
      } 
       this._output=''
     }
     run(){
       //chooses which letters are passed to the output
       for(let letter of this._string ){
        !this._spclChar[letter] && (this._output += letter) 
         this._spclChar[letter] && (this._output += this._spclChar[letter])
       }
       //returns output
       return  this._output
     }
   }
   
   /*prep
   parameter is a string, spaces, punct, no num,special characters
   return string w/o special char
   "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
   "Lech Wałęsa"),"Lech Walesa");
   Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
   
   psu
   set a hash map 
   looop through the input string 
     add to a output Unless it's a special char.
   return output
   
   */
   /*
   There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
   
   Your task is to change the letters with diacritics:
   
   ą -> a,
   ć -> c,
   ę -> e,
   ł -> l,
   ń -> n,
   ó -> o,
   ś -> s,
   ź -> z,
   ż -> z
   and print out the string without the use of the Polish letters.
   
   For example:
   
   "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
   */