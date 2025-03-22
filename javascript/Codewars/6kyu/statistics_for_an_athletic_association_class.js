console.log("started");
function stat(inputString) {
  
  const statisticOfTimes = new StatisticFinder(inputString);
  return statisticOfTimes.start()
}
class StatisticFinder{
  constructor(stringOfTimes){
    this.stringOfTimes = stringOfTimes
    this.arrayOfTimes =[];
  }
 unformatTimes() {
   if (this.stringOfTimes==='') return '';
//create a array to hold the series on numbers
 
  let inputStringArray=this.stringOfTimes.split(',')
 //change the format to seconds
  inputStringArray.forEach((time,indexOfTime,a) =>{
    let timesBrokenDown =time.split('|');
    this.arrayOfTimes.push( timesBrokenDown.reduce((totalOfSeconds,cur,indexOfArray,a)=>{
      if (a[indexOfArray+1]){
        return  +totalOfSeconds*60 + +a[indexOfArray+1];
      }else{
        return totalOfSeconds = totalOfSeconds 
      }
    },timesBrokenDown[0]))
  })
 }
 rangeFinder(){
  //the range is max - min
    const maxTime = Math.max(...this.arrayOfTimes);
    const minTime = Math.min(...this.arrayOfTimes);
    const range = maxTime - minTime;
    return range;
  }
  averageFinder(){
// the average is the sum of the numbers/ the total amount of numbers
  const sum = Math.floor(this.arrayOfTimes.reduce((acc,cur)=>{
//    console.log(acc,"+",cur,this.arrayOfTimes.length) 
    return  acc+cur
  },0)
  ) 
   let mean =Math.floor(sum/this.arrayOfTimes.length)
   return mean;
}
medianFinder(){
//the median needs the numbers to be in order to pick the two middle numbers/2 or the middle number of there is an odd amount 
  let median = this.arrayOfTimes.sort((a,b)=> a-b)
  if (!(median.length%2 ===0)){
  console.log("odd",median.length%2)
    median = (median[Math.floor(median.length/2)])
  }else {  
    median = (median[median.length/2]+median[median.length/2-1])/2
  }
  return median
}

  // turn the seconds back to  hh|mm|ss format
timeFormatter(num){
    let sec = Math.floor(num%60)
    let min = Math.floor(num/60)
    let hour= Math.floor(min /60) 
      while(min >= 60){
        min = min >=60?Math.floor(min-60):min
      }
    return `${hour}`.padStart(2,0)+"|"+`${min}`.padStart(2,0)+"|"+`${sec}`.padStart(2,0)
  }
  start(){
    this.unformatTimes()
    let range = this.rangeFinder()
    let mean = this.averageFinder()
    let median = this.medianFinder()
    
  // return the answer in the requested form 
    return `Range: ${this.timeFormatter(range)} Average: ${this.timeFormatter(mean)} Median: ${this.timeFormatter(median)}`
  }
  
}
console.log(  stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
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
