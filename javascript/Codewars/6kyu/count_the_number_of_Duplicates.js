/**Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

 */
/**prep 
 * parameter case doesn't matter, no  punct, yes num, yes aphl ,string
 * return number of duplicated  letters.
 * asdfg -> 0
 * aasdfg-> 1
 * aaaaaasdf -> 1
 * make a  map
 * loop through  the string,
 *   check if in the map, 
 *      if true add to output
 *      else add to map
 *  return length of output.
*/
console.log ("js is running"); 
function duplicateCount(text) {
    console.log ("function is running"); 
    let char = new Map();
    let output = new Set();
    console.log("hi"); 
    for(let chara of text){
        chara = chara.toLowerCase();
        if (char.has(chara)){
           output.add(chara)
        }else{
            char.set(chara, true);
        }
    }
    console.log(output.size)
    return output.size
 }
//  // Importing the required libraries dynamically 
//  (async () => { 
//     const { assert } = await import('chai'); 
//     const Mocha = await import('mocha'); 
//     const mocha = new Mocha.default(); 
//   // Create a new test suite 
//   mocha.suite.emit('pre-require', this, 'solution', mocha); 
//   console.log("Test suite created"); 
//   describe("Tests", () => { 
//     it("test", () => {
//         console.log("Test is running"); 
duplicateCount("")
duplicateCount("abcde")
duplicateCount("aabbcde")
duplicateCount("aabBcde")
duplicateCount("Indivisibility")
duplicateCount("Indivisibilities")
        console.log("Test completed"); 
      