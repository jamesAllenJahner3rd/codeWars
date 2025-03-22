function whatCentury(year)
  let firstNums = year.slice(-4,-2);
 if(!year.endsWith('00') ){
   firstNums = (+firstNums +1).toString()
 }
  let map={
    '1' : 'st',
    '2' : 'nd',
    '3' : 'rd'
  }
  if(+firstNums <= 13 && +firstNums >= 11)return firstNums+'th'
 let century= map[`${firstNums.at(-1)}`]? firstNums+map[`${firstNums.at(-1)}`]:firstNums+"th"
return century
}

/*Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
prep
parameter a string of numbers, a year, no month no -, no day
return a string the century hundreth's  and is th,st,rd
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"

take the hundreds and thousands digit and add one, unless its the 0th year.
end it in th, unless the number ends in 2,nd, 1 st, 3rd

*/