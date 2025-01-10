/**Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 // prep
// parameter  an array, and a integer
// return a number of left over in the array
// [3,2,2,3],3 >2
// [2,25,6,0],1 >4
// [0,1,2,2,3,0,4,2],2 > 5
loop through nums till val isn't in it
for each element check if it's val
    for each val remove it
    for everything else move them to the end and then remove it.
*/
var removeElement = function(nums, val) {
    //console.log(nums.includes(val))
while(nums.includes(val)){
    if (nums[0] ===val){
        nums.shift()
    }else{
        nums.push(nums[0])
        nums.shift()
    }
}
return nums.length
};