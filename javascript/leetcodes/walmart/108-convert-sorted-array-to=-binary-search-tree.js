/**
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // if  the arrays length is 0 return null
    if (nums.length ===0) return null

    // * array.length /2 floor  parseInt
  
    let median = Math.round(nums.length /2)
      // *  save this number
      function CreateTree(nums){
        this.val =  nums [median]

        this.left = CreateTree(median-1)||null
        this.right = CreateTree(medain +1)||null
     
    // * look at the i-1 > left if it's less than the value else null

    // * look at the i-2 > right if it's greater than the value else null
    // * trun the function for left and right
    // * if the i >= n reeturn  null
    // * if i =>0 return null 
    }
    return CreateTree(nums)
};
 /**
  * 
  * 108. Convert Sorted Array to Binary Search Tree
Easy
Topics
Companies
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
  */
 /**parameter a integer array ascending
  * return a height-balanced binarysearch tree
  *  if  the arrays length is 0 return null
  * [1,2,3,4,5]
  * 
  *         3
  *     2       4
  * 1               5
  * [1,2,3,4,5,6]
  *         3
  *     2       4
  * 1         5    6
  * 
  * array.length /2 floor  parseInt
  *  save this number
  * look at the i-1 > left if it's less than the value else null
  * look at the i-2 > right if it's greater than the value else null
  * trun the function for left and right
  * if the i >= n reeturn  null
  * if i =>0 return null
  *  
  * 
  * 
  * 
  * class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    sortedArrayToBST(nums) {
        if (nums.length === 0) return null;
        return this.buildBST(nums, 0, nums.length - 1);
    }

    buildBST(nums, start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2); // Calculate middle index
        const root = new TreeNode(nums[mid]);

        root.left = this.buildBST(nums, start, mid - 1);
        root.right = this.buildBST(nums, mid + 1, end);

        return root;
    }
}*/
