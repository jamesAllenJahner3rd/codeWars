function divideStrings(a,b) {
  
  
    console.log(`${a}/${b}`)
    
    
    
    
    aArray = [...a];
    cArray = [];
    rArray = [];
    aLength = a.length-1 
    for(let i =0; i<=aArray.length-1;i++){
      if (i == aLength){
        
        cArray.push(parseInt(aArray[i]/Number(b),10))
        rArray.push(Number(aArray[i])%Number(b))
        
      return [`${parseInt(cArray.join(''))}`, rArray.join('')]
      }else  if(Number(aArray[i]) < Number(b)) {
         cArray.push('0')
        
         aArray[i+1] = `${aArray[i]}${aArray[i+1] ||0}`
         console.log(`cArray: ${cArray} aArray: ${aArray}`)
      }else {
        // cArray.push(parseInt(aArray[i]/Number(b),10))
        console.log(aArray[i],Number(b))
        while(Number(b)<= aArray[i]){
          console.log(`${aArray[i]}-${Number(b)} = ${Number(aArray[i]) -Number(b)}`)
          aArray[i]=Number(aArray[i]) -Number(b)
          console.log('aArray[i]',aArray[i])
          cArray[i]= (cArray[i]||0)+1
          console.log('cArray[i]',cArray[i])
        }
        aArray[i+1] = `${aArray[i]%b}${aArray[i+1]|| 0}`
      }
    }
  }
    
    //console.log(parseInt(aArray[i]/Number(b)))
    //console.log(cArray)
    
  // console.log(`PARAMETERS a: ${a},b:${b},aArray: ${aArray},aLength:${aLength},cArray:${cArray}`)
  // console.log(`aArray.length: ${aArray.length}`)
  //    for(let i =0; i<=aArray.length-1;i++){
  // console.log('i',i)
  // console.log("cArray",cArray)
  // console.log(aArray[i], aArray[i]== '0', aArray[i+1]== undefined, aArray[i+1], 'so continue')
  //       if (parseInt(aArray[i])==0 && aArray[i+1]==undefined) {
  //        return [cArray.slice(0,aLength).join('')||'0',rArray.join('')||'0']
  //         }else{ 
  //           if(Number(aArray[i]) < Number(b)) {
  // //console.log(`aArray[${i}] ${aArray[i]}<${b} is ${aArray[i]<b} so let move to the next digit`)
  //             cArray.push('0')
  // //console.log("aArray.length-1",aArray.length-1)
  //             aArray[i+1] = `${aArray[i]}${aArray[i+1] ||0}`
  // console.log(`aArray[${i+1}]is now ${aArray[i+1]}`)
  // console.log("aArray.length-1 is now",aArray.length-1)
  // console.log(`i+1 <= aArray.length-1 = ${ i+1}<= ${aArray.length-1}`)
  //           }else{
  // //console.log(`aArray[${i}]>${b} is ${aArray[i]>b} so  ${aArray[i]}/${b} = ${parseInt(aArray[i]/b)}`)
  //             console.log("remainder",aArray[i]%b)
  //             if (i==aLength){
  //              rArray.push(aArray[i]%b) 
  //              console.log(aArray[i]%b)
  //            }
  //             cArray.push(`${parseInt(aArray[i]/b)}`)
  //             aArray[i+1] = `${aArray[i]%b}${aArray[i+1]|| 0}`
  // console.log(cArray)
  // console.log(`i+1 <= aArray.length-1 =  ${ i+1}<= ${aArray.length-1}`)
  //           }  
                
    
    
    
    
    
  //     }
    
  //    // return [cArray.slice(0,aLength).join('')||'0',cArray.slice(aLength).join('')||'0']
  //    }
  // }
  
  
  
  // function divideStrings(a,b) {
    
  //   aArray = [...a];
  //   bArray = [...b];
  //   cArray = [];
  //   aLength = aArray.length
  //   console.log(`PARAMETERS a: ${a},b:${b},aArray: ${aArray},bArray: ${bArray},cArray:${cArray}`)
    
  //   cArray = aArray.map((e,i,aA)=>{
     
  //     let eQuotient = Number(e)/Number (b)
  //     console.log(` e: ${e},i:${i},a[i+1]: ${a[i+1]},eQuotient: ${eQuotient}`)
  //     console.log(`  ________`)
  //     console.log(`${b}/${a}`)
      
      
  //     if(eQuotient <1){
        
  //       aA[i+1]= (aA[i+1] || '0');
  //       console.log(`eQuotient: ${eQuotient} is less than 1, aA[i+1]: ${aA[i+1]},`)
  //       aA[i+1]=e+aA[i+1]
  //       console.log(`e pushes do next digit e+aA[i+1]: ${aA[i+1]},`)
  //        console.log(`  ________`)
  //        console.log(`${b}/${a}`)
  //     }else {
       
  //        aA[i+1]= (aA[i+1]|| '0'); 
  //       console.log(`eQuotient: ${eQuotient} is greater than 1, aA[i+1]: ${aA[i+1]}`)
  //       console.log(`cArray[${i}] before change: ${cArray[i]} `)
  //       console.log(`parseInt(eQuotient):${parseInt(eQuotient)} is pushed to cArray[${i}]: ${cArray[i]} `)
  //       cArray.push(parseInt(eQuotient))
  //       console.log(`After push cArray[${i}]: ${cArray[i]} `)
  //       console.log("parseInt(Number(e)/Number (b)",parseInt(Number(e)/Number (b)))
  //       aA[i+1] = `${parseInt(Number(e)/Number (b))}${(aA[i+1])}`
  //       console.log(" aA[i+1]", aA[i+1])
  //        console.log("cArray", cArray)
  //     }
  //     console.log("aA[a.length]:",aA[a.length])
  // //     if(aA[a.length]< b){
  //       cArray.push(aA[aLength])
  //      console.log("cArray:",cArray)
  // //     }
  //   })
  //   return [cArray.slice(0,aLength).join('')||'0',cArray.slice(a.length).join('')||'0' ]
  // }
    
  
    //return [Math.floor(+a / +b).toString(), (+a % +b).toString()];  // This doesn't work on big numbers!
  
  
  //PREP
  //A AND B ARE STRINGS OF  LARGE NUMBERS.
  // RETURN THE QUOTIENT, AND THE REMAINDER AS AN ARRAY OF STRINGS
  //(0, 5 ) = ['0', '0']
  // BREAK THE PARAMETERS UP INTO ARRAYS OF STRINGS
  // TO DO LONG DIVISION ON PAPER YOU COMPARE THE THE FIRST DIGIT OF a TO b.
  //then return the amount of times b goes into that number. 
  //if a is too small then you concatentate it to the next digit, repeat.
  // then join the output. 
  //modulus a to b to get the remainer.
  
  