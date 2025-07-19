// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;

//     let k = 1; // Start at 1, as the first element is always unique.

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) { // Compare with the last unique element.
//             nums[k] = nums[i]; // Place the unique element at index k.
//             k++;
//         }
//     }
//     return k; // k is the count of unique elements.
// };
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 0; // Start at 1, as the first element is always unique.

    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i ]) { // Compare with the last unique element.
            nums[k+1] = nums[i]; // Place the unique element at index k.
            k++;
        }
    }
    return k+1; // k is the count of unique elements.
};
removeDuplicates ([0,0,1,1,1,2,2,3,3,4]) 
