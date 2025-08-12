/**
 * @param {number} n
 * @return {string[]}
 1 ()
 2 ()(), (())
 3 ()()(), ((())), (())(),()(()),(()())
 so this is a fibinocci sequences
 ( -> ( or )
 ) -> ( or )
 () -> ) or(
  )( _> ) not ---- )(()   (((())(
  )() -> ( OR ) 
  (( -> ( or )

  must have even length
  must have n of "(" and ")" 
  size = fib of n
  can't start with ) or end with (


    
    (1(1(1 ((1(11 (((111 (1((11 ((11(1
    012345 012345 012345 012345 012345
     1 3 5   2 45    345  1  45   23 5
     1,4
     2,4
     3,4     
     1,3
     2,3

 */
var generateParenthesis = function (n) {
    if (n === 1) return ["()"]
    let count = 0
    let output = []
    let parethArray = []
    let map = new Map([["0", "("], ["1", ")"]])
    // console.log(map)
    let fib = [0, 1, 2, 3, 5, 8, 13, 21, 34]// n is 1 to 8 so that is how mmany arrays there are.
    binaryDigits = 2 * n
    //the length will be double of the n
    let iterate = parseInt(`0${'1'.repeat(binaryDigits - 1)}`, 2)
    // console.log("iterate", iterate)
    for (j = 0; j < iterate; j++) {
        let pareth = ""
        // console.log("j", j,)
        let binary = j.toString(2)
        while (binary.length < binaryDigits) {
            binary = "0" + binary
        }
        // console.log("b binary", binary)
        let thirdNum = (binary.split("0").join("").length !== n)
        let exlusion = (binary[binaryDigits - 1] === '0' || binary[0] === '1')///* && binary[j - 1] === '0'*/&& binary[j - 2] === "1"
        // console.log("thirdNum", thirdNum, "exlusion", exlusion, "binary", binary, binary[0] === '1')
        if (thirdNum || exlusion) {
            pareth = ""
            // console.log("skip ", binary)
            continue
        } else {
            // console.log("include ", binary)
            for (let i = 0; i < binary.length; i++) {

                count += (binary[i] === "0") ? 1 : -1;
                console.log(binary[i], count, count < 0);
                if (count < 0) {
                    count = 0;
                    pareth = ""
                    break;
                };
                // console.log("pareth ", pareth, "map[binary[i]]", i, binary[i], map.get(binary[i]))
                pareth += map.get(binary[i])
            }
            count = 0;
            // console.log(j, binary, pareth)
        }
        if (pareth) {
            parethArray.push(pareth)
        }
    }
    // console.log("parethArray", parethArray)
    return parethArray

};
