function apparently(string) {
    console.log(string)
    const arrayOfString = string.split(' ');
    let outputArray = arrayOfString.map((e,i,a)=>{
      console.log(a[i+1],a[i+1]!=="apparently")
      if((e.includes('but')||e.includes('and'))&&e.length === 3 &&(a[i+1]!=="apparently")){
         return e +=' apparently'
      } else{
         return e
      }
    })
    return outputArray.join(" ")
    
  }
  /*
  parameter: a string
  return if contains 'and',or 'but', add apparently after it
  "i was a toddler" >"i was a toddler"
  "i was a toddler, but now i'm not" > "i was a toddler but apparently now i'm not"
  'i have a butt' > 'i have a butt'
   split the string into a array, 
   search each element for but
    is element length 3?
    if true 
      add ' apparently'
   search each element for and
    is element length 3?
    if true 
      add ' apparently'
  */
  /*
  For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).
  
  If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.
  
  If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).
  
  Examples:
  Input 1
  
  'It was great and I've never been on live television before but sometimes I don't watch this.'
  Output 1
  
  'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'
  Input 2
  
  'but apparently'
  Output 2
  
  'but apparently' 
  (no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)
  
  An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.*/