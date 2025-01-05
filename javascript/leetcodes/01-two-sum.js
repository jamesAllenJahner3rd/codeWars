// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
/**
 * para array of integers, no letter,no punc,no float, no neg, 
return index of the two numbers that add to the target
 *[2,3,5,6], 9 .[1,3] 
 * [8,5,9,6] ,13 . [0,1]
 * [0,8,5,3], 5 [0,2]
 * for() loop through elements
 *  loop again through adding the element  and compare to the target
 *  return the first one that equals the target
 * 
 * object map of the array elements keyed withe index
 * subtract the element from the target 
 * if the key exist return the index of both numbers
 *
 * 
 * 
 */

/*var twoSum = function(nums, target) {
    const map = {}
    nums.forEach((e,i,a)=>{
        map[e] = i
    })
    let output =[]
     nums.forEach((e,i,a)=>{
        if(Object.hasOwn(map,target -e) && i !== map[target -e]){
            output = [i, map[target - e]]
        }
    })
    return output
};*/
var twoSum = function(nums, target) {
    let output =[]
    for (let i = 0; i <=nums.length;i++){
        for(let j = 0; j <=nums.length;j++){
            if (nums[i] +nums[j] ===target && i!==j){
                output = [i,j]
                
                
            }
        
        }

    }
    console.log(output)
};
twoSum([2,5,4,5],6)