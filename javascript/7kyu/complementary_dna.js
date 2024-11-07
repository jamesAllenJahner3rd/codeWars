// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// StringsFundamentals
function dnaStrand(dna){
    secondHalf = new DnaCorrisponder(dna)
    return secondHalf.run()
  }
  
  class DnaCorrisponder{
    constructor(DnaInput){
     this._dna = DnaInput ;
    };
    run(){
      let complementaryBase = "";
      let map = {
        "A" : "T",
        "C" : "G",
        "T" : "A",
        "G" : "C"
      };
      for(let nucleotides of  this._dna){
        complementaryBase += map[nucleotides]
      };
      return complementaryBase
    };
  };
  /*
  prep
  parameter: a string of cap's
  return, a fixed response per Intput letter
  "ATTGC" --> "TAACG"
  "GTAT" --> "CATA"
  AAAA ---> "TTTT
  a hash map of the coorisponding letters
  then either turn into an array, map, join
  of create a new ouput string with the coorisponding letters.
  */
  