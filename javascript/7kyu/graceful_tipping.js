/**Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:

10 - 99.99... ---> Round to number divisible by 5

100 - 999.99... ---> Round to number divisible by 50

1000 - 9999.99... ---> Round to number divisible by 500

And so on...

Good luck!

Examples
 1  -->    2
 7  -->    9
12  -->   15
86  -->  100 */
function gracefulTipping(bill) {
    let billPlusTip = Math.ceil(bill*1.15);
    let exp=1;
    let payment =0;
    while(billPlusTip > 10**exp) {exp++}
    while(billPlusTip > payment){
        payment +=(5*10**(exp-2))
    }
    return payment;
   
  }
  /**para  always pos, number,int? float, 2 decimal point
   * 15% tip
   * whole number, round to a /5 or /50 or /500
   * return it
   *  1 > 2
   *  15 >18
   *  120 >150
   * multi  by 1.15
   *  a loop to find the closest elegant number 
   * if <10  intparse it
   * If 10<x<100 compare to multi of 5 
   * if 100<x>1000 compare to multi of 50...etc
   * return the total
   * */
