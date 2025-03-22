function getMiddle(s)
{
  sLength = s.length
   sCenter = sLength/2
  if(sLength%2 == 0){
    return s[sCenter-1]+s[sCenter]
  }else{
     return s[parseInt(sCenter)]
  }
  
  //Code goes here!
}
/*prep
parameter  that you are giving me are going to be a word in the form of a String
it's not going to have spaces or puncuation right?
return i'm going to return the middle letter of odd words and the center two letters of even words.

get =e
stop = to
grab  =ra

find the length of s sLength
check whether it's even or odd. 
  if even then 
    sCenter  will be s divided by 2
    return the s[sCenter]+s[sCenter +1]
  else if its odd
     sCenter  will be s divided by 2
    return the s[sCenter] rounded down
    */