function getDrinkByProfession(param){
    const aTable={
      "jabroni" :	"Patron Tequila",
      "school counselor" :	"Anything with Alcohol",
      "programmer" :	"Hipster Craft Beer",
      "bike gang member" :	"Moonshine",
      "politician" :	"Your tax dollars",
      "rapper" :	"Cristal"
    }
   
    return aTable[param.toLowerCase()]||'Beer'
  
  }