function select(memory){
    nameArray = memory.split(', ')
    let removedNames =[]
    nameArray.forEach((name, index)=>{
      if (name.includes('!') == true ){
        removedNames.push(nameArray[index].replace("!", ''))
        removedNames.push(nameArray[index])
         removedNames.push(nameArray[index+1])
      }
    })
    removedNames.forEach((e,i,a)=> {
      while(nameArray.indexOf(e)!= -1){
        nameArray.splice(nameArray.indexOf(e),1)
      }
    })
    let output =  nameArray.length>1? nameArray.join(', '): nameArray.toString()
    return output
  }
  // console.log('likednames for nameArray',likeNames,'dislikedName',dislikedName)
  /*prep
  parameter --a string of names, some with a !~ in front
  return-- a string of names w/o the ! name and the next name, or repeats.
  example---------------------
   "Bryan Joubert"), "Bryan Joubert","Should return the string unchanged when no name is marked");
       Test.assertEquals(select("Jesse Cox, !Selena Gomez"), "Jesse Cox", "Should remove a name when it's marked");
       Test.assertEquals(select("!Eleena Daru, Obi-Wan Kenobi, Eleena Daru, Jar-Jar Binks"), "Jar-Jar Binks", "Should remove the name after a name marked as well as duplicates");
       Test.assertEquals(select("Digital Daggers, !Kiny Nimaj, Rack Istley, Digital Daggers, Digital Daggers"), "Digital Daggers, Digital Daggers, Digital Daggers", "Should not remove duplicates of preserved memories");
       Test.assertEquals(select("Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"), "Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary", "The example from the description should work");
       Test.assertEquals(select("!Partha Ashanti, !Mindaugas Burton, Stacy Thompson, Amor Hadrien, !Ahtahkakoop Sothy, Partha Ashanti, Uzi Griffin, Partha Ashanti, !Serhan Eutimio, Amor Hadrien, Noor Konstantin"), "Uzi Griffin, Noor Konstantin", "Consecutive marked names should be handled");
       Test.assertEquals(select("!Code Wars, !Doug Smith, !Cyril Lemaire, !Codin Game"),'', "I hate them all! Marking all names should work");
    });
  psuedocode----------------
  split memory into a array of names, nameArray.
  for each name in nameArray search for names that begin with '!'
  store those names, a version with '!' and the next name in an array of names to be removed, removedNames.
  for each name in removedNames loop through nameArray removing all the instances of each name.
  if there is more that one name left join them into a string
  return the nameArray as a string
  
  ------------------------------------------------------------
  A mad sociopath scientist just came out with a brilliant invention! He extracted his own memories to forget all the people he hates! Now there's a lot of information in there, so he needs your talent as a developer to automatize that task for him.

You are given the memories as a string containing people's surname and name (comma separated). The scientist marked one occurrence of each of the people he hates by putting a '!' right before their name.

Your task is to destroy all the occurrences of the marked people. One more thing ! Hate is contagious, so you also need to erase any memory of the person that comes after any marked name!

Examples
Input:

"Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
Output:

"Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
=> We must remove every memories of Sarah Connor because she's marked, but as a side-effect we must also remove all the memories about Marilyn Monroe that comes right after her! Note that we can't destroy the memories of Manson Marilyn or Monroe Mary, so be careful!*/