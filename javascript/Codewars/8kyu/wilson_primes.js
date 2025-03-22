function amIWilson(p) {
  
    let wholeNumber = (factorial(BigInt(p - 1)) + 1n) % (BigInt(p) * BigInt(p))
    return wholeNumber==0n? true:false;
     //Number.isInteger(wholeNumber)
   }
   function factorial(n){
     
     let prime=n
     if (prime ==0n )prime=1n;
     while (n >1n){
       prime *=(n-1n);
       n--
     }
     
     return prime;
   }
//    Wilson primes satisfy the following condition. Let 
// P
// P represent a prime number.

// Then,

// (P−1)!+1/P∗P
// should give a whole number, where 
// P! is the factorial of P.

// Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

// MathematicsFundamentals