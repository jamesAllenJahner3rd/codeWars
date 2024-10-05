function domainName(url){
    console.log(url.indexOf('://'))
    if (url.indexOf('://')!= -1){
      url = url.slice((url.indexOf('://')+3))
      console.log(url)
    }
    if (url.indexOf('www.')!= -1){
       url = url.slice(url.indexOf('www.')+4)
       console.log(url)   
    }
    let urlArray = url.split('.')
    return urlArray[0]
  }/*
  PREP
  PARAMETER  A URL AS A STRING 
  RETURN A DOMAIN NAME AS A STRING
  WWW.YAHOO.COM  - YAHOO
  WWW.GOOGLE.COM - GOOGLE
  WWW.LINKEDIN.COM - LINKEDIN
  remove the http:// and https:// and www.
   let urlArray be the split the url by '.'
  then return the 1st element of urlArray
  */