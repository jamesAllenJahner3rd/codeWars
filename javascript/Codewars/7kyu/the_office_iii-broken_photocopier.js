// Description:
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.
Kindweb_Creations
function broken(x){
let binaryArray = [...x]
let output ='' 
for(const digit of binaryArray){digit ==='1'?  output += '0':output +='1'}
return output
}
/* 
let binaryArray = array of (x)
forEach element in binaryArray
  if 1
    return 0
  else
   return 1*/