function getCount(str) {
    let total=0
    for (letter of str){
      let vowel = 'aeiou'.includes(letter);
      total +=vowel };
    return total;
}
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// StringsFundamentals