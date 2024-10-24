/**In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates. */
function solve(arr) {
    // setup a new class to run
   let output = new UniquenessCounter(arr)
   //run the program
    return output.run()
    }
      
  class UniquenessCounter{
    constructor(aArrayOfArrays){
      this._arr =aArrayOfArrays
      // this will hold the cleaned up arrays
      this._uniqueList =[]    
    }
    // to math this i need to remove the duplicates. Set are basicly a object with keys and those keys can't have duplicates
     removeDupNums(aArray,num){
       let uniqueSet = new Set();
      aArray.forEach((e) => uniqueSet.add(e));
      this._uniqueList[num] = Array.from(uniqueSet);
     }
   //this does the maths 
    findTotal(){
      return this._uniqueList.reduce((a,c) => a*c.length,1)
      }
      //this runs all the other methods.
   run(){
        this._arr.forEach((e,i,a)=>{
          this._uniqueList[i] =[]
          this.removeDupNums(e,i)
      })
       return   this.findTotal()                
   }  
  }
   
  
  /*prep
  parameter array of arrays of num
  remove doubles from the arrays
  return a num of the total unique combinations
  ex
  [1,2],[4],[5,6]]),4);
  [[1,2],[4,4],[5,6,6]]),4);
  ([[1,2],[3,4],[5,6]]),8);
  [1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
  1,3  2,3  1,4 2,4
  1,3,5 2,3,5 1,4,5 2,4,5 
  
  psuedo
  loop through the array. 
  remove the duplicate numbers from the inner arrays
  multiply the lengths of the numbers
  return the tota
  
  //first try psuedocode________________________________________
  make a object to hold the unique arrays as strings.
  push the combinations into strings
  check if it exist.
  if not add it to the object
  return length of the object
  find math equation to do it.*/