// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Fundamentals
/**
 * prep
 * parameter array of int with with that is respesent an odd number of times.
 * return the number
 * [1,23,4,1,4] , 23
 * [0], 0
 * [2,2,4,3,3], 4
 * so i need to know which number has and odd  times
 * modulus with a Map; a map
 *  for each the input array 
 *  set each number to a key and add 1 to the value of a map
 * find the odd number and return it
 * 
 */
function findOdd(A) {
    let output=0
    let numMap = new Map();
    A.forEach((e,i,a) => { 
        numMap.has(e)? numMap.set(e, numMap.get(e)+1): numMap.set(e,1);
    })
    for(num of numMap){
        if ( num[1]%2  !== 0){
            output = +num[0]
        }
    }
   return output
  }
  findOdd[1,2,2,3,3,3,4,3,3,3,2,2,1]