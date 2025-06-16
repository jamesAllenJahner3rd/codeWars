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
let map = {}
for(let i =0;i< nums.length;i++){
    if (!map[i]) map[i] = 0
    map[i] ++
}
const degree = Math.max(...map.values)
for ()


