/* Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

COFFEE

Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

Output: string with all instances of coffee in all-caps:

Examples:

Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"

Good luck!*/
Kindweb_Creations
function coffee(str) {
  const lowerCaseStr = str.toLowerCase()
  let testStr =lowerCaseStr
  let outputStr =lowerCaseStr.replace('coffee','COFFEE')
  while (testStr!= outputStr){
    testStr = outputStr
    outputStr =outputStr.replace('coffee','COFFEE')
  }
  let strArray = str.split('')
  let outputArray = outputStr.split('')
  strArray.forEach((e,i,a)=>{
    if(e == e.toUpperCase()){outputArray[i]=strArray[i]}
  })
 return outputArray.join('')
}




// 
/*
PREp
parameters  are a sentence including the word coffee in some form
return the same sentence but with coffee capitalized
examples "Did I only have two cups of coffee this morning? I need more : "Did I only have two cups of COFFEE this morning? I need more."
Coffee! Buy me a COFFEE!" : "COFFEE! Buy me a COFFEE!"
Is that coffee?  Can I have it?  I'll pay you." :Is that COFFEE?  Can I have it?  I'll pay you."

to simplify the search i'll make a string lowerCaseStr of the str this is lowercase.
I'll index the word coffeeas an array of indexs iArray
i'll loop through the string to find all the coffee
then loop through str replacing the original coffees
return the corrected string.
*/