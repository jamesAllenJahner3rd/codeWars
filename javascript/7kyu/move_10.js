
// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// FundamentalsStringsArrays
Kindweb_Creations
function moveTen(s){
  let output =  [...s]
  output =output.map((e,i,a)=>{
  let eCharCode = s.charCodeAt(i)
  if (eCharCode + 10<=122){
    return eCharCode +10
  }else {
    return eCharCode -16
  }
 console.log('string',String.fromCharCode(...output))
})
   return String.fromCharCode(...output)
}


// function moveTen(s){
//   let output =  [...s]
//   output.forEach((e,i,a)=>{
//   let eCharCode = s.charCodeAt(i)
//   if (eCharCode + 10<=122){
//     output[i] = eCharCode +10
//   }else {
//     output[i] = eCharCode -16
//   }
//  console.log('string',String.fromCharCode(...output))
// })
//    return String.fromCharCode(...output)
// }
/* prep
 parameter : a random length string of letters
 return : a string with the letters +10, wrap around to a from z
 example a :j, t:d e:o
set sArray to letters of s
using charcodes add ten to each letter
  if greater than z
    subtract 26 to wrap to a
join sArray back together as output
return the string*/
