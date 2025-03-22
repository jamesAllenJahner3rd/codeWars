function reverseSlice(str) {
    let output=[]
    str.split('')
       .reverse()
       .forEach(function(e,i,a){
          output.push(
             a.slice(i)
              .reduce((a,c)=>a+c,'')
          );
       })
         return output;
  }