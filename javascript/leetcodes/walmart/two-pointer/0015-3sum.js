/**
 * @param {number[]} nums
 * @return {number[][]}
 array nums
 rturn a [array  of[ arrays of nums]]
 -1,-2,3 -1.-2.3
 -1,-2,3,-1,-2,3,-1,-2,3   [[-1,-2,3],[-1,-2,3],[-1,-2,3]] they have different indices
 000 000
 OK so I am returning in array of numbers come and that means I don't need to worry about what the indexes are I just need to know that they're not Means I can 
 sort this if 
 I can sort it means I can use Pointer technique
I'll start at the ends and if nums of plus nums of J is positive I'll move nums of I if nums of A and nums of J is negative I'll move numbs Jay

 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {//i>>>
        if (i > 0 && nums[i] === nums[i - 1]) continue;// [(-1, **-1**,)(0,**0**,)2,3,4]

        let left = i + 1, right = nums.length - 1;//i,left,...,right

        while (left < right) {//i,...,right,left
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]); //save! this It'll never happen again because I the next  next
                left++;//i  left>>>  right  [(-1), (-1)>>,0,0,<<(2),3,4]
                right--;//i  left  <<<right
                while (left < right && nums[left] === nums[left - 1]) left++;// So if you have two numbers that are same in a row It's going to be left
                while (left < right && nums[right] === nums[right + 1]) right--;// So if you have two numbers in row right That smells right Smells like someone's burning yeah
            } else if (sum < 0) {
                left++;//i  left>>>  right
            } else {
                right--;//i  left  <<<right
            }
        }
    }

    return res;
}