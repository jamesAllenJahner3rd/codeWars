/**5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */
/**
 * param string
 * return string
 * ends and starts with the same letter
 *  1 2 2  1 2 3  1221
 * 5 5
 * 111111 111111
 * two point, start at both ends and  search for the end of the palindrom
 * start in the middle work out
 * i could for loop 
 * Start two pointers one at both ends
 * Each element move one pointer and input that into a memo that number and the index.
 * move the 2nd point , in it's i the index move the i  back to the index save the output
 * if error then delete the output  
 */
/**
 * @param {string} s
 * @return {string}
 1 1 2 1 1
 */
var longestPalindrome = function (s) {

    //two pointer
    let j = s.length - 1;
    let memo = new Map();
    let output = []
    console.log("s", s, "j", j, "memo", memo)
    for (let i = 0; i <= j; i++) {
        console.log("output",output)
        console.log("i", i, s[i], "j", j, s[j], "memo", memo)
        console.log(memo)
        if (!memo.has(s[i])) {
            memo.set(s[i], [i])
        } else {
            helper(i, memo.get(s[i][memo.get(s[i].length - 2)]))
            let e = memo.get(s[i])
            e.push(i)
            memo.set(s[i],e)
        }
        j--

        if (!memo.has(s[j])) {
            console.log('j is not including')
            memo.set(s[j], [j])
        } else {
            console.log('j is including')
            console.log(memo)
            console.log("a", memo, memo.get(s[i]
            ))
            console.log("b", memo, memo.get(s[i]), memo.get(s[j]))
            console.log(memo, ",", memo.get(s[j]), ",", memo.get(s[j.length - 2]))
            helper(j, memo.get(s[j][memo.get(s[j].length - 2)]))
            let e = memo.get(s[i])
            e.push(i)
            memo.set(s[i],e)

        }
        function helper(start, end) {
            console.log("helper is running")
            let k = end
            for (let l = start; s > k; s++) {
                if (s[l] === s[k]) {
                    k--
                    if (l === k || s + 1 === k) {
                        output = s.substring(start, end)
                    }
                }
            }
        }
    } return output
};