// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

function remove (string) {
  let outputString=""
  for(letter of string){// iterate through the string
   if ("!"!==letter) // check for !
   {outputString+=letter} // since strings are immutable write to another string
    
    }
  outputString+="!" //add a "!" to the output
return outputString; //output the output.
}  
 