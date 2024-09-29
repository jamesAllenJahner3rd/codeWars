function conjugate(verb){
    const wordLength = verb.length -2
    const baseWord = verb.slice(0,wordLength)
    const suffix = verb.slice(wordLength)  
    let personalSuffix={
      ar:{[`${verb}`]:[
        `${baseWord}o`,
        `${baseWord}as`,
        `${baseWord}a`,
        `${baseWord}amos`,
        `${baseWord}áis`,
        `${baseWord}an`
      ]},
      er:{[`${verb}`]:[
        `${baseWord}o`,
        `${baseWord}es`,
        `${baseWord}e`,
        `${baseWord}emos`,
        `${baseWord}éis`,
        `${baseWord}en`
      ]},
      ir:{[`${verb}`]:[
        `${baseWord}o`,
        `${baseWord}es`,
        `${baseWord}e`,
        `${baseWord}imos`,
        `${baseWord}ís`,
        `${baseWord}en`
        ]}
    }
    return personalSuffix[suffix]
}/*
determine the infinitive suffix
Remove the infinitive suffix
add the base word to the presente indicativo form
return the new form*/