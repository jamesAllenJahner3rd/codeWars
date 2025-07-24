/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 param array of numbers
 param number
 return number , index of where it is or where it should be
 4,5,6 5  return 1
 4,6 5 return 1
 1 2 return 1
 loop array
 looking for the target or find the first number > the target
 return the index of the target or the index or the next number.
  0 1 2 3 4 5 6 7 8 9 10 */
// var searchInsert = function (nums, target) {
//   function helper(start, end) {
//     let middle = Math.floor((start + end) / 2);
//     if (nums[start] > target) return start;
//     if (nums[end] < target)  return end + 1;
//     if (nums[middle] === target) return middle;
//     if (nums[middle] < target) {
//       (start === middle)? end:  helper(middle, end);
//     } else {
//       (start === middle)? start: helper(start, middle);
//     }
//   }
// //   trigger the loop
//   return helper(0, nums.length - 1);
// };
var searchInsert = function (nums, target) {
    function helper(start, end) {
        if (start > end) return start;

        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return helper(mid + 1, end);
        return helper(start, mid - 1);
    }

    return helper(0, nums.length - 1);
};