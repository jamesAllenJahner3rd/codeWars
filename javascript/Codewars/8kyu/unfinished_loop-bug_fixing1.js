// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Debugging
function createArray(number){
    var newArray = [];
    console.log(number)
    for(var counter = 1; counter <= number;counter++){//added counter++
      newArray.push(counter);
    }
    
    return newArray;
  }
  