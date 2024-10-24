/**In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates. */
function solve(arr) {
    let output = new UniquenessCounter(arr)
    return output.run()
     }
     
     
     
     
   class UniquenessCounter{
     constructor(aArrayOfArrays){
       this._arr =aArrayOfArrays
       this._uniqueList =[]
       
     }
    
     sortArrays(aA){
       aA.sort((a, b) => a - b)
     };
   
     removeDupNums(aArray){
       let Duplicatechecker = {
         '0': console.log('DUP'),
         '-1': false ///not a duplicate
       }
      
       aArray.forEach((e,i,a)=> Duplicatechecker[Math.sign(e-a[i+1].toString())]||this._uniqueList.push( e) )
     }
     findTotal(){
       this._uniqueList.map((a,c) => a*c.length,1)
       }
       
    run(){
         this._arr.forEach((e,i,a)=>{
           this.sortArrays(e)
           this.removeDupNums(e)
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
   [ [ 1, 2 ], [ 4 ], [ 5, 6 ] ]
   make a object to hold the unique arrays as strings.
   push the combinations into strings
   check if it exist.
   if not add it to the object
   return length of the object
   find math equation to do it.
   
   
   */