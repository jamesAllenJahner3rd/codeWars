function createArrayOfTiers(num) {
    let arrayOfStrings = `${num}`.split('');
    console.log(arrayOfStrings)
    arrayOfStrings.forEach((e,i,a) =>{
      for(let index=1; index <= i; index++){
       arrayOfStrings[i]=(a[i-1]+e)
        }
    })
    console.log(arrayOfStrings)
      return arrayOfStrings;
  }
  /*split num up into a array
  except for array[0], make array[i] =  array[i-1]+array[i]
  return array
  
  
  Description:
Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
PS: The input is guaranteed to be an integer in the range [0, 1000000]

StringsFundamentals*/