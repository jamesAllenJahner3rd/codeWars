funtion diamond(n){
      //define the art
      const twinkle = '*'
      //check for valid n
      if (n%2 === 0 || Math.abs(n)!==n)
        return null;
      //create the middle line
      let twinkleArray =[`${twinkle.repeat(n)}\n`]
      n -= 2;
   let i=0
   //work outward with shorter lines.
   while (n>0){
     i++
     const space =' '
     twinkleArray.push(`${space.repeat(i)}${twinkle.repeat(n)}\n`);
     twinkleArray.unshift(`${space.repeat(i)}${twinkle.repeat(n)}\n`);
     n -= 2;
   }
   //combine the array into the output
   return twinkleArray.join('')
   }
   /*

   parameter a number
    return a string if odd?
      else null
    diamond(1), "*\n")
    diamond(3), " *\n***\n *\n")
    diamond(5), "  *\n ***\n*****\n ***\n  *\n")
    diamond(2), null)
    diamond(-3), null)
    diamond(0), null) 
    check if n is odd and positive.
    push n*'s +/n
    loop till n=1
      then push n-2 *'s +/n
      then unshift n-2 *+/n
     compare the answers
      if 1,3,5
        output a string
      else return null
    */
   /**
    * Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
    */