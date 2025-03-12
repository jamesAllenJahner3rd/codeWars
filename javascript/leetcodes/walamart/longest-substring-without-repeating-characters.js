/**Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. */

/**prep
 * parameter s string num,punc symbl spaces
 *  return a int of the string length  substring w/o repeat
 *  "asldkjr" , 7
 * ";lkgrff", 6
 * "     ", 1
 * create a set
 * add the elements to the set.
 * return the set size
 */
// var lengthOfLongestSubstring = function(s) {
//    let map = [""]
//    for (let i = 0,j =0;i <= s.length-1;i++){

//     //console.log('forloop:',s[i],s)
//     //console.log('j',j,'map[j]',map[j])
//     if (i==0 || !map[j].includes(s[i]) ){
//         //console.log(' if j',j)
//         map[j] += s[i]
//     }else {
//         map[j+1] =""
//        i = s.lastIndexOf(s[i],i-1)
//        j+=1

//     }
//    }
//   // console.log(map)
//    map = map.sort((a , b)=>b.length-a.length)
//    console.log(map[0].length)
//    return map[0].length
// };
var lengthOfLongestSubstring = function (s) {
  let map = {};
  let size = 0;
  for (var i = 0, j = 0; i < s.length; i++) {
    let ss = str.substring(i, j)
     
  }
  console.log(size);
};

lengthOfLongestSubstring("abcabcbb")