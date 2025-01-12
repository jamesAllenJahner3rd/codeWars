/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */
/**
 * prep 
 * param a string resp numerals no 0 or -, punc, symbols.
 * return a number, NO ','
 * 
 * VII ,7
 * lII , 52
 * MMMDCCCCLXXXXVIIII, 3,999
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
LET OUTPUT  
looop starting at the end.
    if i , +1 to output
    if v check the digit for I, 
        if true +4 
            else +5
    if x check the next digit for I, 
        if true +9 
        else +10
    if l check the next digit for X,
        if true +40
        else +50
    if C check the next digit for X,
        if true +90
        else +100
    if D check the next digit for C,
        if true +400
        else +500
    if M check the next digit for c,
        if true +900
        else +1000
return output

 */
/**
 * @param {string} s
 * @return {number}
 */
/*var romanToInt = function(s) {
    let output = 0;
    for (i = s.length-1;i>=0 ;i-- ) {
        if (s[i] ==='I'){
            output+=1
        }
        if (s[i] ==='V'){
            if (s[i-1] ==='I'){
            output+=4
            i--
            }else{
                output+=5
            }
        }
        if (s[i] ==='X'){
            if (s[i-1] ==='I'){
            output+=9
            i--
            }else{
                output+=10
            }
        }
        if (s[i] ==='L'){
            if (s[i-1] ==='X'){
            output+=40
            i--
            }else{
                output+=50
            }
        }
        if (s[i] ==='C'){
            if (s[i-1] ==='X'){
            output+=90
            i--
            }else{
                output+=100
            }
        }
        if (s[i] ==='D'){
            if (s[i-1] ==='C'){
            output+=400
            i--
            }else{
                output+=500
            }
        }
        if (s[i] ==='M'){
            if (s[i-1] ==='C'){
            output+=900
            i--
            }else{
                output+=1000
            }
        }
    }
    console.log(output);
    return output
};*/
// var romanToInt = function(s) {
//     let output = 0;
    
//     for (i = s.length-1;i>=0 ;i-- ) {
//         switch(s[i]){
//         case 'I':
//             output+=1
//             break;
//         case 'V':
//             if (s[i-1] ==='I'){
//                 output+=4
//                 i--
//             }else{
//                 output+=5
//             }
//         break;
//         case 'X':
//                 if (s[i-1] ==='I'){
//                 output+=9
//             i--
//             }else{
//                 output+=10
//             }
//             break;
//         case 'L':
//             if (s[i-1] ==='X'){
//                 output+=40
//                 i--
//             }else{
//                 output+=50
//             }
//             break;
//         case 'C':
//             if (s[i-1] ==='X'){
//                 output+=90
//                 i--
//             }else{
//                 output+=100
//             }
//             break;
//         case 'D':
//             if (s[i-1] ==='C'){
//                 output+=400
//                 i--
//             }else{
//                 output+=500
//             }
//             break;
//         case 'M':
//             if (s[i-1] ==='C'){
//                 output+=900
//                 i--
//             }else{
//                 output+=1000
//             }
//             break;
//         }
//     }
//     console.log(output);
//     return output
// };
// var romanToInt = function(s) {
//         let output = 0;
//         i = s.length-1
//         while (i>=0) {
//             switch(s[i]){
//             case 'I':
//                 output+=1
//                 i--
//                 break;
//             case 'V':
//                 if (s[i-1] ==='I'){
//                     output+=4
//                     i-=2
//                 }else{
//                     output+=5
//                     i--

//                 }
//             break;
//             case 'X':
//                     if (s[i-1] ==='I'){
//                     output+=9
//                 i-=2
//                 }else{
//                     output+=10
//                     i--
//                 }
//                 break;
//             case 'L':
//                 if (s[i-1] ==='X'){
//                     output+=40
//                     i-=2
//                 }else{
//                     output+=50
//                     i--
//                 }
//                 break;
//             case 'C':
//                 if (s[i-1] ==='X'){
//                     output+=90
//                     i-=2
//                 }else{
//                     output+=100
//                     i--
//                 }
//                 break;
//             case 'D':
//                 if (s[i-1] ==='C'){
//                     output+=400
//                     i-=2
//                 }else{
//                     output+=500
//                     i--
//                 }
//                 break;
//             case 'M':
//                 if (s[i-1] ==='C'){
//                     output+=900
//                     i-=2
//                 }else{
//                     output+=1000
//                     i--
//                 }
//                 break;
//             }
//         }
//         console.log(output);
//         return output
//     };