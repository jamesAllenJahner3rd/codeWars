
/**
 * Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 2"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
 */
 function expandedForm(num) {
    aString = num.toString()
    aArray  = aString.split("")
    aLength = aString.length
    //loop through the array to turn the digits into a number string.
    outputArray = aArray.map((digit, index)=>{
      //deal with 0's 
      if(digit == '0'){
        return undefined
      }
      //pad the digits with the correct number of zeros.
      return digit.padEnd(aLength - index, '0')
      })
   //remover the undefined to used to be 0
    outputArray = outputArray.filter(element => element !== undefined)
    //turn the array back into a string.
    return outputArray.join(' + ')          
    
  }
  /*
  parameter: number
  return  a string broken down by unit. 
  12, '10 + 2'
  42, '40 + 2'
  70304, '70000 + 300 + 4'
  turn the num to a string.
  break the string into a array
  loopingly pad the number arround the to length of the string and the position of the element in the array.
  joing the array back into a string with ' + '
  return the resulting string.
  
  */
