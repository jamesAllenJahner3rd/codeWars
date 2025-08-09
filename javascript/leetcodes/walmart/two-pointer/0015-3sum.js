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


/**
 * @param {number[]} nums
 * @return {number[][]}
 array nums
 i'm returninf an num[][]
 -return num add to zero, nopt indexs, so we can change the index using sort and alike.
 -we are finding all the solutions not one. so we have to look at all the numbers can't skip
 -can't resuse the same group of nums
 so sort them 
 use two pointer techhq solves the re using bitlets to skiip incorect dups
 for each i have pointer i+1  and length -1  move inward till reach 0
 */

var threeSum = function (nums) {

    let output = []
    const sorted = nums.sort((a, b) => a - b)
    lastNum = sorted.length - 1

    for (let i = 0; i < lastNum; i++) {
        while (sorted[i] === sorted[i - 1 ] ) {i++};

        let left = i + 1;
        let right = lastNum;

        while (left < right) {
           
            let sum = sorted[i] + sorted[left] + sorted[right];
            if(sum === 0)  {
                output.push([sorted[i], sorted[left], sorted[right]]);
            
                left++; 
                right--
            }else{
                while (sorted[left] === sorted[left + 1 ] && left<right) {left++};
                while (sorted[right] === sorted[right - 1] && left<right) {right--};
                if (sum > 0) {right--}
                if (sum < 0) {left++}
            }
        };
    }
    return output
};
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 OK so we're taking array of numbers and returning an array of array of numbers
 We don't want duplicates of the arrays meaning we wanna skip over duplicate numbers
 And since we're looking for the numbers and month indexes that means we can change the indexes This means we can sort
 If we can sort that means but we can use two pointer
 
 sort nums
  loop with i
   check if nums[i] is the same as  [i-1] or if nums[i] > 0
    else skip it
    for each i have two pointers scan between it and the end for a sum of 0*/
var threeSum = function(nums) {
    let n = nums.length
    let sorted = nums.sort((a,b)=> a-b);
    let output =[];
    for(let i =0; i<n;i++){
        if(i > 0){
            // console.log("a",nums[i-1] === nums[i],nums[i-1], nums[i])
            if(nums[i-1] === nums[i] ||nums[i]> 0){
                // console.log("b",nums[i-1] === nums[i])
                continue
            }
        }
        let left =i+1
        let right= n-1
        while (left <right){
            // console.log(i,nums[i],nums[i-1],left,right)
            let sum = nums[i]+nums[left]+nums[right]            
            if(0 === sum){
                //  console.log("c",nums[i-1] === nums[i])
                output.push([nums[i],nums[left],nums[right]])
                left++
                while(nums[left] === nums[left-1] ){
                        left++
                    }
            }else{
                if (sum > 0){
                    right --
                    while(nums[right] === nums[right+1] ){
                        right--
                    }
                }else{
                    left++
                    while(nums[left] === nums[left-1] ){
                        left++
                    }
                }
            }
        }
    }
    return output
};