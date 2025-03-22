function addOrChangeUrlParameter (url, param) {
    console.log(`original ${url} and the param to add${param}`)
    console.log(param)
    let urlCopy=url
    let question= urlCopy.indexOf('?')
    let equal = urlCopy.indexOf('=')
    paramKey = param.split('=')
    paramKey[0] +='=' 
    if (param) {
     console.log(paramKey[0])
   console.log(`original ${url} and the param to add${paramKey[0]} vs the new  ${urlCopy}?${param}`)
      if(url.includes(paramKey[0])){
        
        idIndex = url.indexOf(paramKey[0])
        console.log(`Param = is present ${url[idIndex]}`)
        let urlSubstring= url.split(paramKey[0])
         console.log(`urlSubstrings are ${urlSubstring[0]} and ${urlSubstring[1]} ${urlSubstring[1].indexOf('&')== true}`)
        if(urlSubstring[1].includes('&')){
           console.log(`& exist = ${urlSubstring[1].indexOf('&')} ${urlSubstring[1].includes('&')== true}`)
          urlSubstring[2] =urlSubstring[1].indexOf('&')
          console.log(`urlSubstring[2]: ${urlSubstring[2]}`)
          urlSubstring[3]=urlSubstring[1].slice(urlSubstring[2],urlSubstring[1].length-1)
          console.log(`urlSubstring[3]: ${urlSubstring[3]}`)
          console.log(`${urlSubstring[0]}${param}${urlSubstring[3]}${urlSubstring[0]}${param}${urlSubstring[3]}`)
          return `${urlSubstring[0]}${param}${urlSubstring[3]}`
        }else{       
          return `${urlSubstring[0]}${param}`
        }     
      }else{
         if(url.includes('?')){
           return `${urlCopy}&${param}`
         }else{
          return `${urlCopy}?${param}`
      }
      }
      }else{  
     console.log(url);
      return url
    }
  }
  /* check that the param is given, else  return the url
  check if the url already has param's, else return the url and ?param
  find the key of the param
  use the param key to check if it already exist in the url
  replace the original param value with the new value.
  return the new url.
  */
//   You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

//   It should be able to
  
//   add a parameter to an existing URL,
//   but also to
  
//   change a parameter if it already exists.
//   Example:
  
//   addOrChangeUrlParameter("www.example.com", "key=value") 
//   // -> 'www.example.com?key=value' (adds a parameter).
  
//   addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
//   // -> 'www.example.com?key=value&key2=value2' (adds another parameter).
  
//   addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
//   // ->'www.example.com?key=newValue' (changes the parameter).