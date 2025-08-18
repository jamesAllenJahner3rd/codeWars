/*Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.*/



/**
 * @param {number[]} nums
 * @return {number[][]}
 param number array
 array of array of numbers
 [1234] 1234 1243 1324 1342 1423 1432...2134 2143 2341 2314 2431 2413 ...3241 3214 3142 3124 3421 3412 4123 4132 4213 4231 4312 4321
 24 
 we could use a set to filter
 loop to add string n to (!(n-1))/n arrays.
 we could use backtracking re
 reutn the array if push if it's length equals the input
for loop through the numbers 
    push the number a current array
    then run the function (current, i+1)
    current.pop()

 O(!n)
 */
var permute = function(nums) {
    let output =[];

    function helper(currentArray, used ){//i->used
        
        if (currentArray.length === nums.length ){
            output.push([...currentArray]);
           return; 
        };

        //let currentNumber = nums[i];
        for( let i=0;i<nums.length; i++){
            if (used[i]) continue;
            used[i] = true;//
            currentArray.push(nums[i]);//
            //currentArray = ([...currentArray,nums[i]])
            helper(currentArray, used)//i+1 -> used
            currentArray.pop();
            used[i] = false;//
        };
    };
    helper([], Array(nums.length).fill(false)); //helper([],0);
    
    return output;
};