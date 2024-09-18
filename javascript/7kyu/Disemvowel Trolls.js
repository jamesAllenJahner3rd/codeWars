// Description:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    const vowel = 'aeiou'
    let i = 0
    let output =''
    //test each letter if it's a vowel
    for(letter of str){
      //if they aren't add it to the output
      if(!vowel.includes(letter.toLowerCase())){
        output += str.slice(i,i+1)
      } 
      i++
    }
    //return the output
    return output;
  }