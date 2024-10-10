// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.
function divCon(x){
    numSum = x.reduce((sum,e)=>{
      if(typeof(e) ==='number'){
        return sum+=Number(e)
      }else {
        return sum
      }
    } ,0)  
    let stringSum = x.reduce((sum,e)=>{
      if(String(e)===e){
        return sum +=Number(e)
      }else{
        return sum
      }
    },0 );
    return numSum - stringSum;
  }
  /*
  prep
  parameters are arrays of strings and integers.
  return the the sum of the integers minus the sum of the strings
  
  ex. 
  
  [5 ,4, '5','2'] => 2
  ['4', 5] => 1
  [1,1,1,1,1,1,'1','1','1'] =>3
  
  i would do two reduce functions
  let numSum be a reduction of the x array 
    if the element is a number add it to the numSum.
  stringSum be a reduction of the x array
    if the element is a string add it's number version to stringSum
    
    return the numsum minus the stringSum
    
  */