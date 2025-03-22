function highAndLow(numbers){
    //split the string into elements of an array
    let numList = numbers.split(' ')
    //change the elements into numbers
    let orderedList = numList.forEach((e)=> +e)
     //sort the list
    orderedList =numList.sort((a, b) => a - b);
    // return the list
    return `${orderedList[orderedList.length -1]} ${orderedList[0]}`
  }
  //separate the string into elements.
  // change the elements strings into numbers.
  // sort the numbers.
  //find the max number
  // find the min number
  // return the max and min numbers.
  /*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Input: "1 2 3 4 5"   =>  Output: "5 1"
Input: "1 2 -3 4 5"  =>  Output: "5 -3"
Input: "1 9 3 4 -5"  =>  Output: "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/