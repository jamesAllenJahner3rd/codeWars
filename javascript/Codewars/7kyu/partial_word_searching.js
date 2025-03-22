/*Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

ArraysStrings*/
function wordSearch(query, seq){
    let outputArray =[]
   outputArray=seq.filter((e)=> e.toLowerCase().includes(query.toLowerCase()) ) 
    return (outputArray.length == 0) ?  ['Empty'] :  outputArray
  }
  /*
  
  
  
  prep
  parameters query is going be a string of letters 
            seq will an array of string full just letters
  return an array of strings which includes the query string 
  
  adf => [adf ,adfk, adkf] => [adf, adfk]
  ajlk => [asdf, werq, arddf]=>["Empty"]
  "ab" => ["za", "ab", "abc", "zab", "zbc"] => ["ab", "abc", "zab"]
  
  for each element in seq
    if a lowercase version of query is included in a lowercase of seq 
      return the one to the new array outputArray
  if outputArray doesn't include any string return "Empty" 
  
  
  */