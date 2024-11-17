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
console.log ("hi"); 
function duplicateCount(text) {
    
    console.log("hi"); 
} // Importing the required libraries dynamically 
(async () => {
    const { assert } = await import('chai'); 
    const Mocha = await import('mocha'); 
    const mocha = new Mocha.default(); 
    // Create a new test suite 
    mocha.suite.emit('pre-require', this, 'solution', mocha); 
    describe("Tests", () => {
         it("test", () => {
             assert.strictEqual(duplicateCount(""), 0); 
             assert.strictEqual(duplicateCount("abcde"), 0); 
             assert.strictEqual(duplicateCount("aabbcde"), 2); 
             assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case"); 
             assert.strictEqual(duplicateCount("Indivisibility"), 1); 
             assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent"); 
            }); 
        });
    });
