/**108. Convert Sorted Array to Binary Search Tree
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
nums is sorted in a strictly increasing order. */

/**
 * /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * param array of int
 * output: heigh balanced binary search tree
 * 
 *  return{
        val: 0,
        left: {
            val: -10,
            left: null,
            right: { val: -3, left: null, right: null }
        },
        right: {
            val: 5,
            left: null,
            right: { val: 9, left: null, right: null }
        }
    }
    };
i need to find the root

i'll interate  the array, 

check if the value is greater or less
place it in the left or right.
is the left or right is empty  leave null.


 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let n =Math.floor(nums.length/2)///first find the mid. we'll use it to split the array
   let mid = nums[n]// this will be the first value of each node
    let root = new TreeNode(mid)// who knew? Treenode exist 
    root.left = sortedArrayToBST(nums.slice(0,n))
    root.right = sortedArrayToBST(nums.slice(n+1))
    return root
}

//this is the TreeNode object
//this will find the mid of the bottom half

//    Definition for a binary tree node.
//     let output = function TreeNode(val, left = TreeNode(nums[n-2],nums[n-3], nums[n-1]), right = TreeNode( nums[n+2],nums[n+3], nums[n+1])) {
//         if (val ===undefined){
//             return
//         }
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//         n = 
//         return {
//             'val':this.val,
//             'left' :this.left,
//             'right': this.right
//         }
//     }
// }



















// var sortedArrayToBST = function(nums) {
//     if (nums.length === 0) return null; // Base case: empty array

//     let mid = Math.floor(nums.length / 2); // Find the middle index
//     let root = new TreeNode(nums[mid]); // Create a new TreeNode with the middle value

//     root.left = sortedArrayToBST(nums.slice(0, mid)); // Recursively construct left subtree
//     root.right = sortedArrayToBST(nums.slice(mid + 1)); // Recursively construct right subtree

//     return root; // Return the constructed tree
// };

    // {



    //     val: 0,
    //     left: {
    //         val: -10,
    //         left: null,
    //         right: { val: -3, left: null, right: null }
    //     },
    //     right: {
    //         val: 5,
    //         left: null,
    //         right: { val: 9, left: null, right: null }
    //     }
    // }
    
    sortedArrayToBST( [-10,-3,0,5,9])