function upArray(arr){
  console.log(arr)
 let i =arr.length -1
 let check = true
 let outputArr =[]// [...arr]
 do{
   //console.log(arr[i] ,parseInt(arr[i]) ,arr[i]> 9 , arr[i] ==='')
   
   if (arr[i] !== Math.abs(parseInt(arr[i])) || arr[i]> 9 || arr[i] ===''){
     return null
   }
   if (check ===true){
   
   if(arr[i] ==9){
     outputArr[i] =0
     if(!arr[i-1]){
        outputArr.unshift(1)
        }
     
   } else {
     outputArr[i]= arr[i]+1
     console.log(arr[i]+1,outputArr[i])
     check = false
          }
   
     }else{
       outputArr[i] = arr[i]
     }
   i-=1
   console.log(outputArr)
 }while(i >=0)
     return outputArr
}

/*prep
parameteran array of integers
returns an array that has 1 added to the value
[1,2,3,4]=> [1,2,3,5]
[1,2,3,-9] =>null
[1,9,9,9]=>[2,0,0,0]
loop
splice the -1 element with +1 or 0 if 9

if it's is 9  addto the nexxt

*/
