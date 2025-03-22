function largest(n, array) {
    let orderArray = array.sort((a,b)=> b-a)
     
    return orderArray.slice(0,n).sort((a,b)=> a-b);//.reverse()
  }
  /*parameters a number  and a array of numbers
  return an array of the n greatest numbers with n being the number parameter
  (5,[1,2,3,4,5,6,7,8,9]) = > [9,8,7,6,5]
  (0,[1,2,4])=> []
  (2, [12,3,4,5,6]) => [12,6]
  use sort to move the greatest number to the end  
   slice the n numbers off the end. 
    re-sort the new array from least to greastest
  return new array
  
  Write a program that outputs the top n elements from a list.
  
  Example:
  
  largest(2, [7,6,5,4,3,2,1])
  // => [6,7]
  */