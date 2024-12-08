function stat(inputString) {
  const statisticOfTimes = new StatisticFinder
  return statisticOfTimes.start()
}
  if (inputString==='') return '';
//create a array to hold the series on numbers
  let arrayOfTimes =[];
  inputStringArr=inputString.split(',')
 //change the format to seconds
  inputStringArr.forEach((time,indexOfTime,a) =>{
    let timesBrokenDown =time.split('|');
    arrayOfTimes.push( timesBrokenDown.reduce((acc,cur,indexOfArray,a)=>{
      if (a[indexOfArray+1]){
        return  +totalOfSeconds*60 + +a[indexOfArray+1];
      }else{
        return totalOfSeconds = totalOfSeconds 
      }
    },timesBrokenDown[0]))
  })
  //the range is max - min
    const maxTime = Math.max(...arrayOfTimes);
    const minTime = Math.min(...arrayOfTimes);
    const range = maxTime - minTime;
// the average is the sum of the numbers/ the total amount of numbers
  const sum = Math.floor(arrayOfTimes.reduce((acc,cur)=>{
//    console.log(acc,"+",cur,arrayOfTimes.length) 
    return  acc+cur
  },0)
  ) 
   let mean =Math.floor(sum/arrayOfTimes.length)
//the median needs the numbers to be in order to pick the two middle numbers/2 or the middle number of there is an odd amount 
  let median = arrayOfTimes.sort((a,b)=> a-b)
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
