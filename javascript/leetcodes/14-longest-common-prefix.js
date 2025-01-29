/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
 */
/**
 * para, array of strings., nums no, punc no, empty, 200 char,
 * return the begging letters that match?
 * for  the length on the first word compare each letter till one doesn't match. 
 * Then return the matching letters.
 * 
 */
// var longestCommonPrefix = function(strs) {
//     let map = {}

//     for (let i = 0,j=0; i < strs[0].length;){
//         console.log("word:",strs[j], "letter",strs[j][i])//console.log(i,j,strs[j][i],Object.keys(map).length,map)
//         map[strs[j][i]] = true
//         console.log("Object.keys(map).length <= i+1)",Object.keys(map).length <= i+1)
//         if(Object.keys(map).length <= i+1){
//             console.log("word:",strs[j], "letter",strs[j][i])
//             j++
//         }else{
//             delete map[strs[j][i]]
//             delete map[strs[j-1][i]]
//             break}
//         console.log("j === strs.length-1",j === strs.length-1)
//         if  (j === strs.length){
//             i++
//             j=0
//         }
//     }
//     console.log(Object.keys(map).join(""))
//     return Object.keys(map).join("")
// };


// var longestCommonPrefix = function(strs) {
//     let map =[
        
//     ]
//     for (let argCount = 0,letterCount = 0; letterCount< strs[0].length;){
//        console.log(strs[argCount][letterCount],map[letterCount] )
//         if(strs[argCount][letterCount]===map[letterCount]){
//             argCount++
//         }else{
//             map = map.slice(0,letterCount)
//            break
//         }
//         console.log(strs.length-1<argCount )
//         if (strs.length-1<argCount){
//             letterCount++
//             argCount=0
//         }
        
//     }
//     console.log(map.join(""))
//     return map.join("")
// }

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    strs.sort();
    console.log(strs)
    const first = strs[0];
    const last = strs[strs.length - 1];
    for(let i=0; i<first.length; i++) {
        if(first[i] !== last[i]) break;
        res += first[i];
    }
    return res;
};
longestCommonPrefix( [["flower","flow","flight"]])