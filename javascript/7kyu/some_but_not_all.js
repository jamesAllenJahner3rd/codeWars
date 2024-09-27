const someButNotAll = (seq,pred) => {
    let NumberOfTest = seq.length;
    let seqArray =[];
    seqArray = [...seq] ;
    if(seqArray.some(pred)&& !seqArray.every(pred)){
      return true}
    else{
      return false
      }
  }
  
  /*Goal:We need to know when some of the sequence is true, of all or none are true this will be false.
  
  //find out how many elements we are dealing with.
  NumberOfTest = the length of seq
    seqArray = change seq to an array
  
  
  if NumTruths === NumberOfTest or if NumTruths === 0 
    return false
  else
    return true
  */
 /* Description:
Some but not all
Description
Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the elements in the sequence are True after applying the predicate

Examples
('abcdefg&%$', x -> isLetter(x)) == true
('&%$=', x -> isLetter x) == false
('abcdefg', x -> isLetter x) == false

([4, 1], x -> x > 3) == true
([1, 1], x -> x > 3) == false
([4, 4], x -> x > 3) == false
ListsStringsFundamentals*/