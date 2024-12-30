// Description:
// Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

// If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

// Note: The sum of an empty array is zero.

// [1, 2]      --> "11"
// [1, "a", 2] --> false / False (depending on the language)
// Fundamentals 
/**prep
 * parameter array of intergers
 * return sum of the elements in binary
 * [1,0] 01
 * [1,2,3,4] 01, 10,11,100 1011
 * [0,0] 00
 * reduce the array 
 *  then convert it to binary
 *  divid by 2 and take the remanders place 
 *  reverse the order.
 * then return
 * toString(2) turn to binary......
 */
function arr2bin(arr){
    //check for an empty arry
    if (arr.length ==0){
       console.log(arr)
        return '0'
    }
    //verify that all the elements are integers
    if(arr.every((num)=> num === parseInt(num)) ===false){
      return false
    }
    let outputBinary =[]
    let total = 0
    //sum up the numbers in the array
    total = arr.reduce((acc,cur)=> acc +cur, 0)
    //convert the sum to binary
   do{
      outputBinary.push(total % 2)
      total = parseInt(total/ 2)
   } while(total >0)
    //return as a string
    return outputBinary.reverse().join('')
  }