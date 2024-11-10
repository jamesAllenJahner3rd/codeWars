// write the function isAnagram
var isAnagram = function(test, original) {
  //check if the string are the same length
  if( original.length !== test.length){
    return false;
  };
  let charMap ={};
  //normalize the letters.
  test = test.toLowerCase();
  original  = original.toLowerCase();
  //set up a map to compare too. add the letters to the map
  for(letter of original){
      charMap[letter]=  (charMap[letter]||0) +1;
  };
  //remove the letters of the test case.
  //ABS accounts for too many of a letter else a -1 + 1 = 0 still.
  for(letter of test){
       charMap[letter]= Math.abs(charMap[letter] - 1);
  }
  //return whether or not charMap's values total 0 now.
  return Object.values(charMap).reduce((a,e)=> a+e,0) === 0;
};
/**
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

StringsFundamentals
 */
/*
prep
parameter   two strings, yes punt,no num
return  true or false 
examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
Leon => noel
we can check the length.
we can add one string to a map.
  then compare the second string to it
*/