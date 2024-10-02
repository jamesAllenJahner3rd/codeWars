
function sizeToNumber(size) {
    console.log( 'size',size)
    eroSize=null  
    if (size == 'm'){
     eroSize=38
      return eroSize
    }
    let xes = size.slice(0, size.length -1)
    let baseSize= size.slice( size.length -1)
    if(xes.split('x').join("") !='' &&xes.length != 0) { 
      return null}
    else{
      if(baseSize == 'l'){
        eroSize+=40 + xes.length*2
      }
       if(baseSize == 's'){
         eroSize=36 - xes.length*2
      }  
    }
    return eroSize ?? null ;
  }
  /*prep
  parameter will include strings.
  return  two digit numbers
  xs: 34
  s: 36
  m: 38
  count the number of x's in size
  slice off x's
  compare size to s,m,l
  if small subjract 2 per x
  if large add 2 per x
  return size number or null
  
  */