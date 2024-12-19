/**
prep
parameter  2 arrays of numbers and 2 numbers being the total number of elements in each
return the two arrays merged
[4,5,6,0,0,0] [4,8,9] >[4,4,5,6,8,9]
[1],[] >1
[0], [1] >1
 subtract n from m
 then loop 
    pop that number from num1
 then concat or assign num2 to num1
 then sort them

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    while(n > 0){
        //remover the placeholder
        nums1.pop()
        //add the new number
        nums1.unshift(nums2[n-1])
        n--
    }
    //sort the numbers
     nums1.sort((a,b)=> a-b)
};
merge([1,2,3,0,0,0],3,[2,5,6],3)