/**paramate a string with brackets
 * return boolean if valid
 *  
 * (())
 * ({}{})
 * {(})  check for the next close
 * (
 * ({}{}[]})
 * keep track of the opens
 * meno the opens
 */



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let openingsList = []
    let brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (let bracket of s) {
        

        if (!brackets[bracket]) {
            openingsList.push(bracket)
        } else {
            let pop = openingsList.pop()
            if(brackets[bracket] !== pop) { return false}
        }
    }
    return openingsList.length === 0?    true:false  
    
}



/**20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */
/**
 * parameter a string of these char ()[]{}'
 * return a boolean of the correct order
 * so i could for loop through  the string or 
 * so i need to either track the char code or the chars
 * if these is ever a closing bracket before a opening one, this should return false.
 * i can load them into a map, with open is +1 and close is -1
 * they are ever negative fail.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     map = new Map([['[', 0], ['{', 0], ['(', 0]]);
//     let output = true
//     depth = 0
//     let a = 1, b = 1, c = 1;
//     for (let i = 0; i <= s.length - 1; i++) {
//         if (s[i] === '[') {
//             depth += 1;
//             a = depth;
//             map.set('[', map.get('[') + a);
//             output = false
//         }
//         if (s[i] === ']') {
//             map.set('[', map.get('[') - depth);
//             depth -= 1;
//             output = true
//         }
//         if (s[i] === '{') {
//             depth += 1;            
//             b = depth;
//             map.set('{', map.get('{') + b);
//             output = false
//         }
//         if (s[i] === '}') {
//             map.set('{', map.get('{') - depth);
//             depth -= 1;
//             output = true
//         }
//         if (s[i] === '(') {
//             depth += 1;
//             c = depth;
//             map.set('(', map.get('(') + c);
//             output = false
//             console.log(map,'(')
//         }
//         if (s[i] === ')') {
//             map.set('(', map.get('(') - depth);
//             depth -= 1;
//             console.log(map,")")
//             output = true
//         }
// console.log(map,i,"depth:", depth)

//         if (![...map.values()].every(x => x > -1) || Math.sign(depth)===-1 ) {
// console.log(map,i)
//             output = false
//             return output
//         }
//     }
//     if(depth!== 0){
//         return false
//     }
//     return output
// };
var isValid = function (s) {
    const stack = [];
    const pairs = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '[' || char === '{' || char === '(') {
            stack.push(char); // Push opening brackets to the stack
        } else if (char === ']' || char === '}' || char === ')') {
            if (stack.pop() !== pairs[char]) {
                return false; // Mismatch found
            }
        }
    }
    
    // If stack is empty, all brackets are matched
    return stack.length === 0;
};