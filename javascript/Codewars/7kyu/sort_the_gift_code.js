function sortGiftCode(code){
    codeArray = [...code]
    return codeArray.sort().join('')
  }
  /*prep
  code is a string of letters
  return a string of letters in alpha order
  "abcdef"                      -- => "abcdef"
  "pqksuvy"                     -- => "kpqsuvy"
  "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
  an array can be sorted, so convert code to an codeArray
  sort codeArray
  join codeArray back into a string code
  return code*/