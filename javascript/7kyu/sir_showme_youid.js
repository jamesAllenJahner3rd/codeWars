/* There's a new security company in Paris, and they decided to give their employees an algorithm to make first name recognition faster. In the blink of an eye, they can now detect if a string is a first name, no matter if it is a one-word name or an hyphenated name. They're given this documentation with the algorithm:

In France, you'll often find people with hyphenated first names. They're called "prénoms composés". There could be two, or even more words linked to form a new name, quite like jQuery function chaining ;). They're linked using the - symbol, like Marie-Joelle, Jean-Michel, Jean-Mouloud. Thanks to this algorithm, you can now recognize hyphenated names quicker than Flash ! (yeah, their employees know how to use jQuery. Don't ask me why)

Your mission if you accept it, recreate the algorithm. Using the function showMe, which takes a yourID argument, you will check if the given argument is a name or not, by returning true or false.

Note that

String will either be a one-word first name, or an hyphenated first name , its words being linked by "-".
Words can only start with an uppercase letter, and then lowercase letters (from a to z)
Now is your time to help the guards !

Regular ExpressionsStringsFundamentals*/
function showMe(yourID) {
    console.log(yourID)
    yourIDArray = yourID.split(' ')
    console.log(yourIDArray.length, yourIDArray[0].charCodeAt([yourIDArray[0].length -1]))
    
    if (yourIDArray.length > 1) return false
    else  if(yourIDArray[0].charCodeAt(yourIDArray[0]) > 90 || yourIDArray[0].charCodeAt(yourIDArray[0]) < 65) return false
    else  if(yourIDArray[0].charCodeAt([yourIDArray[0].length -1]) > 122 || yourIDArray[0].charCodeAt([yourIDArray[0].length -1])  < 97) return false
    else  if(yourIDArray[0].includes('--')) return false
    else {
      yourIDArray = yourIDArray.toString().split('-')
       for(element of yourIDArray){
         console.log(element.length, element.slice(1))
        if (element[0] !== element[0].toUpperCase())return false 
        if(element.length ==1) return false
        else if(element.slice(1) !== element.slice(1).toLowerCase()) return false
      }
        return true  }
   
  }
  /*prep
  parameter a string including a name or names. capitialized words not uppercase words
  return true if is a name and false if its more than one name
  
  James = true
  James the Man  = false
  James-James =true
  
  yourId will split in yourIDArray by ' '
    if yourIdArrays length is greater than one then returns false
    .....didn't expect that many edge cases.......
    else its will return true
  */