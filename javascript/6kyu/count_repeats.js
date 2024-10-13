/*Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
StringsFundamentals
*/
function countRepeats(str) {
    count = 0;
    for(let i=1; i <= str.length-1;i++)
      if (str[i] ===str[i-1]){
        count++
      } 
      return count;
    
    
  }
  /* prep
  parameters cap matter. no numbs, no symb, strings of letters
  return a numbers, the count of remove letters
  aaasssdddd => asd => 7
  gdf => 0
  aaaaaaaaaaaaaaaaa=> alot
  let count be zero
  do a for each letter
    if the letter is the same as the previous increment count 
    output the count
  */