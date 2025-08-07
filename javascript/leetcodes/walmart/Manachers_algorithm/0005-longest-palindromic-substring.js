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
/****************** */
/**
 * @param {string} s
 * @return {string}
 */
 /**
 param is a string
 return a string, substring.
 1 1
 12112 2112 not 121
  123212321 123212321 not 12321
  so watch for even  or odd 
  check for longer ones.
  start is the middle work our way out
  watch for duplicates
    then test the center
    find the ends */ 
var longestPalindrome = function(s) {
    let completed = 0
    let jitter =0
    let middle = Math.floor(s.length/2);
    let start =0
    let end =0
    let length =1
    function tester(m){
        // console.log(`completed=${completed}, m=${m}, start=${start}, end=${end}, length=${length}, `)    
        middle = m

        let plus = middle+1;
        let minus =middle-1;
        if(s[plus]===s[minus]){
            // console.log(`s[plus]===s[minus]=${s[plus]===s[minus]} `)  
             checker(minus,plus)

        }
        if(s[middle]===s[minus]){
            // console.log(`s[middle]===s[minus]= ${s[middle]===s[minus]} `) 
             checker(minus,middle)
        }
        if(s[plus]===s[middle]){
            // console.log(`s[plus]===s[middle]= ${s[plus]===s[middle]} `) 
            checker(middle,plus)
        }
        jitter = jitter >0?(jitter +1)* -1:(jitter -1)* -1
        completed ++
        if (completed ===s.length || s.length === length ){
            // console.log(length%2 === 0,"a",s.slice(start-1,end),"b",s.slice(start,end+1),"c",s.slice(start,end),"start",start,"end",end)
            return s.slice(start,end+1)
            // return (start - end)%2 === 0? s.slice(start-1,end):s.slice(start,end+1);
        }
        return tester(m+jitter )
    }
    function checker(a,b){ 
        // console.log(`(s[a] === s[b]=${s[a] === s[b]} && s[a]& b= ${ s[a] && s[b]} `)        
            while(s[a] === s[b]&& s[a]!= undefined && s[b] != undefined){
                if (length < b-a +1){
                start = a
                end = b
                length =b-a+1
                }
                a--
                b++
            }
    }
    let answer = tester(middle)
    // console.log (answer)
    return answer
    };