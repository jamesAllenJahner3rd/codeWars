/*771. Jewels and Stones
Solved
Easy
Topics
Companies
Hint
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.*/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 parameter two  stings of letters, lower or upper.
 return a  number representing the number of letters in stones that is equal to the letters in jewels
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 
 Input: jewels = "asd", stones = "ASDFWQASDZZ"
Output: 0

 create an object with keys of the jewels. by looping through the jewels
 test whether the stones are in the list of jewels and count each jewel 
 sum the count of the types of jewels in the object
 return the sum
 */
 var numJewelsInStones = function(jewels, stones) {
    const jewelFinder = new JewelFinder(jewels, stones);
    return jewelFinder.compare();
  };

// a class to find all the jewels in the pile of stones.
class JewelFinder{
    constructor(input,stones){
       this._jewelCounts = new Set(input)
       this._stones =stones
       this._output = 0
    }
   
    //test and count each jewel 
    countJewelsInStones() {
        for (const stone of this._stones) {
            this._jewelCounts.has(stone) && ( this._output += 1);
        }
    }
    
    //run the methods. return the output
    compare(){      
        this.countJewelsInStones()
        return this._output
    }
}
  /*class JewelFinder {
    constructor(jewels, stones) {
      this._jewels = jewels;
      this._jewelCounts = {};
      this._stones = stones;
      this._totalJewels = 0;
    }

    createJewelList() {
      // Create an object with keys of the jewels.
      for (let i = 0; i < this._jewels.length; i++) {

        this._jewelCounts[this._jewels[i]] = 0;
      }
    }

    countJewelsInStones() {
      // Test and count each jewel
      for (const stone of this._stones) {
        const actions = {
          'true': () => this._jewelCounts[stone] += 1,
          'false': () => console.log('Just a stone')
        };
        actions[Object.hasOwn(this._jewelCounts, stone)]();
      }
    }

    sumTotalJewels() {
      // Sum the count of the types of jewels or 0 if NaN
      for (let key in this._jewelCounts) {
        this._totalJewels += this._jewelCounts[key];
      }
    }

    // Run the methods and return the total jewel count
    compare() {
      this.createJewelList();
      this.countJewelsInStones();
      this.sumTotalJewels();
      return this._totalJewels;
    }
  }
*/
//score %5