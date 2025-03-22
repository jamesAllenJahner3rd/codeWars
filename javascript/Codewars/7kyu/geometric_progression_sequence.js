/*In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'

A geometric progression, also known as a geometric sequence, is a mathematical sequence of non-zero numbers where each term after the first is found by multiplying the previous one by a fixed number called the common ratio. 
For example, the sequence 2, 6, 18, 54, ... is a geometric progression with a common ratio of 3. 
Similarly 10, 5, 2.5, 1.25, ... is a geometric sequence with a common ratio of 1/2.
The nth term of a geometric sequence with initial value a = a1 and common ratio r is given by

*/
/**
 * param the first element, the common ratio, and the number of elements to return
 * return a string listing the numbers with a  ', ' between them
 * any floats, neg, any writen numbers,
 * 2,3,3> '2, 6, 18'
 * (2, 3, 5), '2, 6, 18, 54, 162')
 * (2, 2, 10), '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024')
 * loop n times
 * multiply a by r
 * push to and array
 * join to a string with ', ' 
 * return
 * 
 */
function geometricSequenceElements(a, r, n){
    let output=[a];
    for(let i =1;i<n;i++){
        a *=r
        output.push(a)
    }
    return output.join(', ')
  }