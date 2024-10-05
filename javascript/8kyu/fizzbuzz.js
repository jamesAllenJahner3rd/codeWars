//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
/* 
prep
paramater number integer 1 -100?

return the integer unless it's divisible by 3, fizz, or 5, buzz, or both fizzbuzz

for every number counting to  num 
    if number modulus to 3 &5 is 0
        return fizzbuzz
    else
        if number modulus to 3 is 0
            return fizz
        if number modulus to 5 is 0
            return buzz
    
*/
function fizzbuzz( num){
    for(let i=0; i<=num; i++){
        if(i %3==0 && i%5 == 0){
            console.log( 'fizzbuzz')
        }else{
            if(i%3 == 0){
                  console.log("fizz")
            }
            if(i%5 == 0){
                console.log( "buzz")
            }
        }
        
    }
}