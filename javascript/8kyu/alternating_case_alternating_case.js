String.prototype.toAlternatingCase = function () {
    originalString =this
    originalStringLength = this.length
    outputString = "";
    charArray=[]
    
    for (let letter in originalString){
      charArray.push(originalString.charCodeAt(letter))
    }
    //the for loop above pushes the oth letter on the end for some reason. so cut if off.
    charArray=charArray.slice(0,-1);
    //time to switch letter cases
    for(char of charArray){
      //uppercase to lowercase
      if (char >= 64& char <= 91){
        char+=32;
        char = String.fromCharCode(char)
        //add the letter
         outputString +=char
        //lowercase to uppercase
     }else if (char >= 97& char <= 122){
        char-=32;
        char = String.fromCharCode(char)
        outputString +=char      
     }else{ //add the other letters back        
        char = String.fromCharCode(char)
        outputString +=char
      }    
    }
    return outputString
  }
  /*Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string. */