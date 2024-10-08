// This kata is part of the collection Mary's Puzzle Books.

// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.

// NOTES:

// • If both strings are the same, return []

// • Both strings will always be the same length

// • Capitalization and punctuation matter
function spot(s1,s2){
    let s1Array =[...s1]
    let outputArray = []
    s1Array.forEach((e,i,a)=>{ if(e !== s2[i]){
      outputArray.push(i)
    }})
    return outputArray}
  /*prep
  parameter : twos strings s1 and s2. always to same length. they will will have puncturation but not numbers
  returns an array of the keys that are different
  asdafa == kj;ljk  => []
  asdf == asaf => [0,1,3]
  asd. == ASD. => [3]
  compare the letters of s1 and s2
    if are not the same push to outputArray
  return outputArray
  
  */