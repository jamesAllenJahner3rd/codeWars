function missingNo(nums) {
    return Array.from({length:101},((_,i)=> i)).filter((n)=> !nums.includes(n))[0]
  }
  //O(n),
  //You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

Algorithms