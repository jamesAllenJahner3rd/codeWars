/**#It's show time! Archers have gathered from all around the world to participate in the Arrow Function Faire. But the faire will only start if there are archers signed and if they all have enough arrows in their quivers - at least 5 is the requirement! Are all the archers ready?

#Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

#Argument archers is an array of integers, in which each element corresponds to the number of arrows each archer has.

#Return Your function must return true if the requirements are met or false otherwise.

#Examples archersReady([1, 2, 3, 4, 5, 6, 7, 8]) returns false because there are archers with not enough arrows.

archersReady([5, 6, 7, 8]) returns true.

Fundamentals */
/**
 * prep
 * parameter an array of intergers
 * return boolean all numbers must be >4
 * [23,4,6,4,2] ,false
 * [9,,9,98],true
 * [6,5,5,5,5,5] true
 * check if every element is greater than 5 and return the boolean.
 * return archer.every((e)=>e>4)
 * 
 */
function archersReady(archers){
    if (archers.length ===0) return false;
  return archers.every((e)=>e>4)
  }