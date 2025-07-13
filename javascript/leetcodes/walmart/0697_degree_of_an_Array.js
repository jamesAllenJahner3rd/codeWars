/**Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums. */

/**
 * 
 * parameter array integer 
 * return a int
 * 
 * 1,1,1,2,2,3,4,5  3  111
 * 1.2.3.4.5.6.1  7 
 * 1 1
 * 
 * keep track of duplicates.
 * map to keep degree
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = {}
    let degree = 0
    let output = [0, 0, 49999]
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = [0]
        }
        map[nums[i]][0]++
        map[nums[i]].push(i)
        if (map[nums[i]][0] > degree) {
            degree++
        }
    }
    for (let num in map) {
        if (map[num][0] >= degree) {
            degree = map[num][0]
            if (((map[num][map[num].length - 1]) - map[num][1]+1) < (output[output.length - 1] - output[1]+1)) {
                output = map[num]
            }
        }
    }
    return output[output.length - 1] - output[1]+1
};