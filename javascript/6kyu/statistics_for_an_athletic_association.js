function stat(strg) {
 console.log(strg);
  let timeArr =[];
  strgArr=strg.split(',')
  console.log(strgArr)
  strgArr.forEach((e,i,a) =>{
     console.log(e)
    let tempArr =e.split('|');
    console.log(tempArr)
    timeArr.push( tempArr.reduce((acc,cur,i,a)=>{
      if (a[i+1]){
        console.log('cur', cur)
        console.log('acc',acc, '+', +cur*60)
        return acc = +acc*60 + +a[i+1];
//console.log('acc',acc)
      }else{
        console.log('acc',acc, '+', +cur)
        return acc = acc+ +cur
      }
     // 
    },a[0]))
  })
  console.log('timeArr',timeArr)
    const maxTime = Math.max(...timeArr);
 
    const minTime = Math.min(...timeArr);
    const range = maxTime - minTime;
console.log(range)
  const mean = Math.floor(timeArr.reduce((acc,cur)=>{
    return  acc+cur
  },0)/timeArr.length
  )
  console.log(mean) 
  
  let median = timeArr.sort((a,b)=> a-b)
// console.log(timeArr)
  if (!timeArr%2 ===0){
   // console.log(median[Math.ceil(median.length/2)])
    median = (median[Math.ceil(median.length/2)])
    console.log(median)
  }else { median = (median[median.length/2]+median[median.length/2-1])/2
    console.log(mean)
    
  }
  function timeStringify(num){
    let sec = Math.floor(num%60)
    let min = Math.floor(num/60)
    let hour= Math.floor(min /60)
      min = Math.floor(min/60)
     return `${hour}|${min}|${sec}`
  }
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
/*You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be*/
