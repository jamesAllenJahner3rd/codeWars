/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 so -we can loop through On
    -binary search Olog n
 - a two pointer  o(n)
123456789 6 55
123456666789 6 5,9
[] [-1,-1]
 finnnd the start and end
 the at the get the miuddle, if it's great than redo useing the small half, else the bigg half.
 once found do two poin going out tilll you find the edges on the numbers 
 */
var searchRange = function (nums, target) {
    
    let output = [-1, -1]
    function search(start, end) {
        let middle = Math.floor((start + end) / 2)
        if (start < end && nums[middle] !== target) {
            if (nums[middle] > target) {
                search(start, middle - 1)
            }
            else {
                search(middle + 1, end)
            }
        } else {
            output = range(nums,middle,target)
        }
    }
    search(0, nums.length - 1)
    return output
};
function range(nums,index,target) {
    let left = index, right = index
    let a = b = -1
    while (nums[left] === target || nums[right] === target) {
        if (nums[left] === target) {
            a = left
            left--
        }
        if (nums[right] === target) {
            b = right;
            right++
        }
    } return [a, b]
}

