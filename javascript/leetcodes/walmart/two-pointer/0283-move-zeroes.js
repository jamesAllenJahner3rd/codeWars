/**
 * 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */
/**
 * parameter is aN ARRAY OF INT
 * return  an array with zeros at the end. no copies
 * [0 ,54,3,7,8,0,8,9,8,0] => [54,3,7,8,8,9,8,0,0,0]
 * [1,1,1] => [1,1,1]
 * [0,0] = > [0,0]
 *  neg yes,no
 * ,slice,.split, map. no
 * splice yes
 * 
 * forEach((number))
 * if the number is 0 splice the  zero
 * then push zero to hte num
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length =nums.length;
    for(let i = 0;i< length;i++){
        if(nums[i]=== 0 ){
        nums.splice(i,1)
        nums.splice(nums.length,0,0)
        i--
        length--
        }
    }
    return nums
};