function evenLast(numbers) {
    return numbers.reduce((acc,cur,i,a)=>  acc+(i%2^1)*cur*a[a.length-1],0)
   }
   /*paramater: array of intergers,
   return a sum in the array
   [12,2,3,4] = 8
   [0] =0
   [234,234] = 0
   reduce
     use modulus to find the even indexs
     times the current element and the last element in the array.
     add that number to the accumalator.
   return
   */
   /*Given a sequence of integers,
   return the sum of all the integers
   that have an even index (odd index in COBOL),
   multiplied by the integer at the last index.
   
   Indices in sequence start from 0.
   
   If the sequence is empty, you should return 0.
   
   */