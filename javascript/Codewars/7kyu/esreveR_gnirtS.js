/*Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"*/
 String.prototype.reverse = function(){
    let theString = this 
    theBackwardString = ''
     for(let i = theString.length -1; i>=0; i--){
       theBackwardString += theString[i]
     }
     return theBackwardString
   }
   /*
   prep
   parameter a string
   return the string printed backwards
   string => gnirts
   kindness => ssendnik
   hoper => repoh
   create a prototupe for the object String called reverse
     reverse will be a function 
     the string will be added letter by letter to theBackwardString starting from the end
     return theBackwardString
     
   */