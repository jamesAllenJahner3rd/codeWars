/**697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 
Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999. */
/**
 * parameters array integers array >1 - 50,000   int 0 > 49,999
 * return the number of the  subarray element with the same degree
 Input: nums = [1,2,2,3,1]
Output: 2 ----two 2's  [1,*2,2*,3,1]
Input: nums = [1,2,2,3,1,4,2]
Output: 6 --- three 2's    [1,*2,2,3,1,4,2*]
Input[3,5,3,4,4,2,54]

i now to know how many of each number
loop through and map the numbers 
then find a subarray that has than many of a number.
if the first and last of the biggest count or which is the smallest subarray 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    // max duplicates, distance
    let output = [0,1]
    let counter = {};
    nums.forEach((e, i, a) => {
       // console.log(e, i)
        //console.log(Object.hasOwn(counter,`${e}`))
        if (Object.hasOwn(counter,[e]) ===false) {
            // number : countOf, distance,locations
            counter[e] = [1, 0, i] 
            console.log(`${e} not included in counter`,counter[e])
        } else {
            console.log(`${e}  is included in counter`,counter[e])

            counter[e][0] = counter[e][0]+1
            console.log(counter[e])
            counter[e][1] = i - counter[e][2]+1
            counter[e].push(i)
            console.log('output:',output,`${e} just just updated`,counter[e],`compare counter[e][0]: ${counter[e][0]}> output[0]: ${output[0]}`, counter[e][0] > output[0])

            if (counter[e][0] > output[0]){
                output[0] = counter[e][0];
                console.log('output:',output,'f')
                output[1] = counter[e][1]
                console.log('output:',output,'e')
                console.log('output:',output,  `${e} counter was greater than output`,counter[e])
            }
            if (counter[e][0] === output[0])
            console.log('output:',output,'d')
            console.log('output:',output,  `${e} counter was equal to the output`,counter[e])

                if (output[1] > counter[e][1]) {
                    console.log('output:',output,'b')
                    output[1] = counter[e][1]
                    console.log('output:',output,'c')
                    console.log('output:',output, `${e} counter subarry was smaller than output`,counter)
                }
            
        }
        console.log('output:',output,'a')
    })
    console.log('output:',output,'counter:',counter)
    return output[1];
};

var findShortestSubArray = function (nums) {
    // max duplicates, distance
    let output = [0,1]
    let counter = {};
    nums.forEach((e, i, a) => {
        if (Object.hasOwn(counter,e) ===false) {
            //count,subarrayLength, 1st location
            counter[e] = [1, 0, i] 
        } else {
            counter[e][0] = counter[e][0] + 1
            counter[e][1] = i - counter[e][2] + 1
            if (counter[e][0] > output[0]){
                output[0] = counter[e][0];
                output[1] = counter[e][1]
            }
            if (counter[e][0] === output[0])
                if (output[1] > counter[e][1]) {
                    output[1] = counter[e][1]
                }
            
        }
    })
    return output[1];
};