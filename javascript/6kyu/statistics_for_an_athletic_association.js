function stat(strg) {
  if (strg==='') return '';
//create a array to hold the series on numbers
  let timeArr =[];
  strgArr=strg.split(',')
 //change the format to seconds
  strgArr.forEach((e,i,a) =>{
    let tempArr =e.split('|');
    timeArr.push( tempArr.reduce((acc,cur,i,a)=>{
      if (a[i+1]){
        return  +acc*60 + +a[i+1];
      }else{
        return acc = acc 
      }
    },tempArr[0]))
  })
  //the range is max - min
    const maxTime = Math.max(...timeArr);
    const minTime = Math.min(...timeArr);
    const range = maxTime - minTime;
// the average is the sum of the numbers/ the total amount of numbers
  const sum = Math.floor(timeArr.reduce((acc,cur)=>{
//    console.log(acc,"+",cur,timeArr.length) 
    return  acc+cur
  },0)
  ) 
   let mean =Math.floor(sum/timeArr.length)
//the median needs the numbers to be in order to pick the two middle numbers/2 or the middle number of there is an odd amount 
  let median = timeArr.sort((a,b)=> a-b)
  if (!(median.length%2 ===0)){
  console.log("odd",median.length%2)
    median = (median[Math.floor(median.length/2)])
  }else {  
    median = (median[median.length/2]+median[median.length/2-1])/2
  }
  // turn the seconds back to  hh|mm|ss format
  function timeStringify(num){
    let sec = Math.floor(num%60)
    let min = Math.floor(num/60)
    let hour= Math.floor(min /60) 
      while(min >= 60){
        min = min >=60?Math.floor(min-60):min
      }
    return `${hour}`.padStart(2,0)+"|"+`${min}`.padStart(2,0)+"|"+`${sec}`.padStart(2,0)
  }
  // return the answer in the requested form 
  return `Range: ${timeStringify(range)} Average: ${timeStringify(mean)} Median: ${timeStringify(median)}`
}

/*return a string of 3 values"Range: 01|47|18 Average: 01|35|15 Median: 01|32|34"
1|01|18

 01,47,18
-01,32,34
range  00 14 44
mean
loop
  split the string into thee elements
  reduce the array to a total of second
get the highest time by testing the new array with Math.max
get the lowest time by using Math.min
range =max - min
mean = sum the array.reduce/ array.length
median =
is the array even or odd check using modulus
if even , median = the array length/2 number
if odd , median = the array [(length/2 +(length/2 +1))2]
loop each string divid by 60 for ming, modulus%2 for sec, then do the same for hour and min.




*/
