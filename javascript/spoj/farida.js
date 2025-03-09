/*Once upon time there was a cute princess called Farida living in a castle with her father, mother and uncle. 
On the way to the castle there lived many monsters. Each one of them had some gold coins. 
Although they are monsters they will not hurt. 
Instead they will give you the gold coins, but if and only if you didn't take any coins from the monster directly before the current one. 
To marry princess Farida you have to pass all the monsters and collect as many coins as possible. 
Given the number of gold coins each monster has, calculate the maximum number of coins you can collect on your way to the castle.

Input
The first line of input contains the number of test cases.
 Each test case starts with a number N, the number of monsters, 0 ≤ N ≤ 104. 
 The next line will have N numbers,
  number of coins each monster has, 0 ≤ The number of coins with each monster ≤ 109. 
  Monsters described in the order they are encountered on the way to the castle.

Output
For each test case print “Case C: X” without quotes. C is the case number, starting with 1. X is the maximum number of coins you can collect.

Example
Input:
2//test case
5//number of monsters
1 2 3 4 5//# of coins per monster
1//number of monsters
10//# of coins per monster

Output:
Case 1: 9
Case 2: 10
parameters (...numbers)
let  testCases = numbers[0]
numbers = slice (0,1)
loop testCase times
    let  monstersCoinage = []
    while testCase >= 0{
    mostersCoinage.push (numbers.slice(1,numbers[0]))}


if monster n-1  has 0 coins take 
if monster n-1  didn't take , take

loop
console.log(`Case ${i}: ${testCase[i]} `)



*/
// function farida(...input){
//     console.log(input)
//     let inputString = input.join(' ');
//     console.log(inputString)
//     let output=[];
//     for(let i =0, numCases = 0,numMonsters = 0, sumMonster= false, gained = false; i< inputString.length-1; i++ ){
//         console.log('i',i,'numMonsters',numMonsters,"numCases",numCases,"gained",gained,"output",output,"inputString[i]",inputString[i],"sumMonster",sumMonster)
//         let num  = inputString[i]
//         if (inputString[i]!==" "){
//             if(inputString[i+1]!==' '){
//                 while (inputString[i+1] !== ' '&&inputString[i+1] !== undefined){
//                     num +=inputString[i+1]
//                     i++
//                 }

//             }
//             if (numMonsters > 0){
//                 if (gained === false && inputString[i] !== 0) {
//                     if (!output[+inputString[0]- +numCases]){
//                         output[+inputString[0]- +numCases] = 0;

//                     }
//                     output[+inputString[0]- +numCases]+=(+num);
//                     gained = true;
//                     console.log(`output[${+inputString[0]- +numCases}]`,output[+inputString[0]- +numCases])

//                 }else{
//                     gained = false;

//                 }
//                 numMonsters--;
//                 if (numMonsters === 0){
//                     numCases--;
//                     num=0;
//                     sumMonster = true;
//                     gained = false;

//                 }
//             }
//             if(i === 0){
//                 numCases = inputString[0];
//                 sumMonster = true;
//             }else if (sumMonster === true){
//                 numMonsters = +num;
//                 if (numMonsters != 0){
//                 sumMonster = false
//                 }
//             };
//         }

//     }
//     for (let i=0;i < output.length;i++){
//         console.log(`Case ${i+1}: ${output[i]}`)
//     }

// }
// function farida(...input) {
//   const getTestCase = function (n) {
//     const getMonsterCoins = input.slice(n + 1, input[n] + n + 1);
//     n = input[n] + n + 1;
//     return { monsterCountLocation:n, arrayOfMosters: getMonsterCoins };
//   };
//   const sumCoins = function (array) {
//     let testArray = array || ["test"];
//     let coinRecieved = false;
//     return testArray.reduce((acc, NumOfCoins, i, array) => {
//       if (coinRecieved !== true && array[i - 1] !== 0) {
//         coinRecieved = true;
//         return (acc += NumOfCoins);
//       } else {
//         coinRecieved = false;
//         console.log("coinRecieved", coinRecieved, NumOfCoins);
//         return acc;
//       }
//     }, 0);
//   };
//   const print = function (caseNum, goldOutput) {
//     console.log(`Case ${caseNum}: ${goldOutput}`);
//   };
//   const numTestCases = input[0];
//   let monsterCountLocation = 1;
//   let n = 1;
//   let i = 0;
//   let output = [];
//   while (numTestCases - i > 0) {
//     let { monsterCountLocation, arrayOfMosters } = getTestCase(n);
//     let totalGold = sumCoins(arrayOfMosters);
//     i++;
//     print(i, totalGold);
//     //totalGold = 0
//   }








/* 
input array
return max NUMBER of coins.
2,5,1,2,3,4,5,1,10
cAse1: 9
Case2: 10
3,5,1,2,0,4,5,1,0,2,3,5
Case1: 6
Case2: 0
Case3: 5
1,6,4,3,2,6,4,2
Case: 12


parse the array,
input[0] is the # of cases
input[1] is the total # of monster the first string
the first string will be input [2] to input[input[1] + 2]
the next # of monsters will be input[input[1]+2+1]
the second string will be input[input[1]+2+2] to input[input[input[1]+2+2] + 2]


let n = input[0]
inputParser(n){let meno = Array(input[0]).fill(-1)
 meno[i] = input.slice(inputParser(input[i+2]),inputParser(input[input[1] + 2]))


}

*/
function farida(...input) {
  let output = [];  
  let n = input[0];
  let memo = new Array(n).fill(-1);

  let currentIndex = 1;

  for (let i = 0; i < n; i++) {
      let monsterNum = input[currentIndex];
      let cutHere = currentIndex + 1;
      memo[i] = input.slice(cutHere, cutHere + monsterNum);
      output[i] = new Array(monsterNum).fill(-1);
      currentIndex = cutHere + monsterNum;
  }

  function helper(aCase, i) {
      if (i >= output[aCase].length) { return 0; }
      if (output[aCase][i] !== -1) { return output[aCase][i]; }

      let skipCurrent = helper(aCase, i + 1);
      let takeCurrent = memo[aCase][i] + helper(aCase, i + 2);

      output[aCase][i] = Math.max(skipCurrent, takeCurrent);
      return output[aCase][i];
  }

  for (let aCase = 0; aCase < n; aCase++) {
      console.log(`Case ${aCase + 1}: ${helper(aCase, 0)}`);
  }
}

farida(
  9,
  5, 1, 1, 1, 1, 1,
  0,
  2, 12, 15,
  2, 15, 12,
  5, 10, 1, 1, 1, 1,
  3, 12, 3, 1,
  3, 2, 2, 2,
  2, 5, 2,
  4, 10, 5, 2, 1000
);
