//had to make it work with Big ints///////////
function sumStrings(a,b) {
    // turn the strings into arrays with the same elements.///////////
      a = a.padStart(b.length,0)
       b = b.padStart(a.length,0)
    // they need to be reverse to element an element incase of a carried 1///////////
      let aArray=[...a].reverse()
      let bArray=[...b].reverse()
      let cArray=[]
      let flag=0
    // sum the numbers.///////////
      for(let i= 0;i<=a.length-1;i++){
        let sum =+aArray[i]+ +bArray[i]
    // flag is for a test to cary the last one.///////////
        flag = sum
    // change whether i need to carry the one.///////////
        if (sum >9){
          aArray[i+1]=+aArray[i+1]+ +`${sum}`[0];
          sum -=10;
        }
        cArray.unshift(sum )
    //carry the last one .///////////
        if(!aArray[i+1]&& flag >9){
            cArray.unshift(1)
          }
      }
    // output a string of a number.///////////
      if(cArray[0]===0){
        cArray.shift()
      }
      
      let output = cArray.join('')
    return output
    }