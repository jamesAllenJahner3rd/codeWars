/**
 * Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

 
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if( arr.length === 0 ){
        return arr
        };
    let output =[];
    let start =0;
    let end =size;
    do{
        output.push(arr.slice(start, end))
        start =end 
        end = end +size
    }while(start<arr.length );
    return output
};
/**
parameter arr, num
return the array broken up into chunk of the num size
[1,2,3,3,4,4,5,5,6,5], 5 => [1,2,3,3,4][4,5,5,6,5]
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
loop a slice
    set the start to the end.
    add the size to the end.
return the output
 */
