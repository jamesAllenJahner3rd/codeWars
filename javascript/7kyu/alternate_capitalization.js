function capitalize(s){
    return [];
  };
  
  class AlternateCapitalization{
    constructor(s){ 
      this.string = s
     this.output=[] 
    }
    
    cap(letter){
      letter.toUpperCase()
    }
      
    loopAlt(parity){
      const map={
        '0' = %2 ==0,
        '1'  = %2 !=0
      } 
      const caseOf={
        '0' = this.cap(letter),
        '1'  = letter
      }
      for([letter,index] of this.string.entries()){
        (index parity)&& this.cap(letter)
        this.ouput[Math.sign(map[index parity])] += this.cap(letter)
        this.ouput[Math.sign(map[index parity])] += letter
      }
    }
    run(){
      this.loopAlt('0')
      this.loopAlt('1')  
    }
    return this.output
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