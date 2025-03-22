function capitalize(s){
    result = new AlternateCapitalization(s);
    
    return result.run();
  };

  class AlternateCapitalization{
    constructor(s){
      this.string = s;
     this.output=['','']; 
      
    }
////method to capitalize-------------
    cap(letter){
     return letter.toUpperCase()
    }
////    method to loop alternately-----
    loopAlt(parity){ 
      for(const [index,letter] of [...this.string].entries()){//<<<<<make note of this. 
        const map={
            '0' : index%2 ==0,
            '1' : index%2 !=0
        }
        this.output[Math.sign(map[parity])] += this.cap(letter)
        this.output[Math.sign(map[parity])^1] += letter
      }
       
    }
        /*
    loopAlt(){
          for(const [index,letter] of [...this.string].entries()){
            this.output[Math.sign(index%2 !=0)] += this.cap(letter)
            this.output[Math.sign(index%2 ==0)] += letter
         }
       
    }
        */

    
    run(){
//'1' isn't nessecary if i don't use the parameter.
        this.loopAlt('1')
        return this.output
    }
  }



/*prep
parameter string
return an array of  a string with even indexs cap's, and then a string with odd indexs cap's
("abcdef"), ['AbCdEf', 'aBcDeF']);
  });

("codewars"), ['CoDeWaRs', 'cOdEwArS']

("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']
codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
  });
  
  a method to cap
  a method the loops through the string skipping n indexes
    which runs twice once even and once odd 
  a return
  
  
  
*/