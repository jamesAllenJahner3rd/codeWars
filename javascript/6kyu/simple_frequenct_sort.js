/**
 * In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
 */
/**
 * prep
 * parameter a array of number, will there are neg, 0, float,s, third
 * return a array in in order of most repeats. seconndly higher number
 * 545454455 >[5,5,5,5,5,4,4,4,4]
 * [2,3,4]> [2,3,4]
 * [552223334]> [2,2,2,3,3,3,5,5,4]
 */
function solve(arr){
    console.log(arr)
    const frequencyMap = new Asorter(arr);
    //console.log(frequencyMap.mapper())
    return frequencyMap.start();
    //console.log('test',arr)
  }
class Asorter{
    constructor (aArray){
        let anArray = aArray;
        this.inputArray = function(){
           return anArray;
        }
        this.map ={};
    }
    start(){
        this.mapper();
        //this.sorter();
    }
    mapper() {
        
        this.inputArray().forEach((num,i,a)=>{
           this.map[num]? this.map[num]++: this.map[num] =1;
        })
        console.log('this.map',this.map)
        let groupedByValue = Object.groupBy(Object.entries(this.map), ([key, value]) => value.toString());
        console.log('groupedByValue',groupedByValue)
console.log(groupedByValue['2'][2].keys())
    }
    // sorter() {
    //     const maxFreq = Math.max(...Object.values(this.map))
    //     let sortedArray =[];
    //     console.log('map',this.map) 
    //     console.log('values',Object.values(this.map)) 
    //     console.log('mf',maxFreq,sortedArray,Array.from(this.map)) 
    //     sortedArray = this.reqursive(maxFreq,sortedArray)
        
        
    // }
//     reqursive(n,aArray){
// console.log("requ",n,aArray,Array.from(this.map))
        
        
//         for(const key in this.map){
//             console.log('n',n,'key',key,"value",this.map[key]);
//             if(this.map[key] == n){
                
//                 console.log('Array(this.map[key]).fill(key)',Array(this.map[key]).fill(key))
//                 aArray.push(...(Array(this.map[key]).fill(key)))
//             }
//         }
//         console.log('re',aArray,'n',n)
//         if (n>0){
//             aArray =aArray.concat( this.reqursive(n-1,aArray))
//         }
//         return  aArray;
//     }
} 

  solve([2,3,5,3,7,9,5,3,7])
  solve([1,2,3,0,5,0,1,6,8,8,6,9,1])
    solve([5,9,6,9,6,5,9,9,4,4])
    solve([4,4,2,5,1,1,3,3,2,8])
    solve([4,9,5,0,7,3,8,4,9,0])
        
//         let workingArr = Array.from(this.map);
//         let outputArr =[]
//         workingArr.forEach((e,i,a)=>{
// //console.log('e',e,e[1],e[0])
//             let current= Array(e[1]).fill(e[0])
            
//             let previous =[];
//             if(i!=0) previous = Array(a[i-1][1]).fill(a[i-1][0]);
//             console.log('console:',current,outputArr[0])
//             if(i==0){
//                 console.log("0")
//                 outputArr.unshift( current)
//             }else if (current.length >outputArr[0].length){
//                 console.log(">")
//                  outputArr.splice(0,0, current)
//              }else if (current.length <outputArr[0].length){
//                 console.log("<")
//                outputArr.splice(1,0, current)
//             }else if (e[0] > outputArr[1]){
//                 console.log("e>p")
//                 outputArr.splice(1,0, current)
//             }else{
//                 console.log("e<p")
//                 outputArr.splice(2,0, current)
//             }