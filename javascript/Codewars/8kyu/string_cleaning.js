String cleaning
JavaScript:
function stringClean(s){
  newString ='';
  for (letter of s){
    if (letter <'0' || letter>'9'){
      newString +=letter;
    }
  }
  return newString;
}