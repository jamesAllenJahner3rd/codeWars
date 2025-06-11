/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
para array of integers and int
returning array with a length of two that add to the target
[2,3,5,6] 9 [3,6]
[0,1,-1] 0 [1,-1]
[1,2,3,4] 6 [2,4]
two pointer
set one pointer to the target
set one pointer to iterate the array
set map/array ofthe the differnces
check if the number in of the map if true reutrn the number and the difference
interate forEach push difference up to the map



 */
var twoSum = function (nums, target) {
    let output = []
    let map = {}
    nums.forEach((e, i) => {
        if (map[target - e] === undefined) {
            map[e] = i;

        } else {
            output = [i, map[target - e]];
        }
    });
    return output;
};