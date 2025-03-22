/**
 * Description:
You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

chickenwings: 5 points

Hamburgers: 3 points

Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
Happy judging!

Object-oriented ProgrammingFundamentals
 * 
 */
/**
 * prep
 * parameter an array of objects containing name, and foods
 * return an object containing a name and score.
 * examples
 * [
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
  [
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
[
  {name: "jay", chickenwings: 1 , hamburgers: 1, hotdogs: 1},
  {name: "john" , chickenwings: 2, hamburgers: 2, hotdogs:2}
]
  [
  {name: "jay", score: 10},
  {name: "john", score: 20}
]
[
  {name: "james", chickenwings: 0 , hamburgers: 1, hotdogs: 0},
  {name: "lily" , chickenwings: 0, hamburgers: 0, hotdogs:2}
]
  [
  {name: "james", score: 3},
  {name: "lily", score: 4}
]


 * 
 * 
 * 
 * 
 * pues
 * 
 * need a method to sum up the points for each food
 * need to  compare the scores
 * need to  return the object with the score and name
 */
function scoreboard(whoAteWhat){
    let competition = new FoodieCompetition(whoAteWhat);
    let test = competition.tallyScores()
    return test
   }
 class FoodieCompetition{
     constructor(eatingResults){
         this._eatingResults = eatingResults
         let points =  new Map( [["ChickenWings", 5], ["Hamburgers", 3] ,["Hotdogs", 2]] )
         this._points = function (){
             return points
         };
         this._result =[]
     };
     get points(){
         return this._points;
         };
     tallyScores(){
         this.sumScores()
         let winner = this.compareScores();
         return winner;
     };
     sumScores(){
         this._result =  this._eatingResults.map((e,i,a)=>{
           let chickScore = e.chickenwings* this.points().get("ChickenWings")
           let hamScore = e.hamburgers*this.points().get("Hamburgers")
           let hotDogScore = e.hotdogs*this.points().get("Hotdogs")
           return {
                 "name" : e.name,
                 "score": (chickScore + hamScore + hotDogScore)
           }
         })
        
     };
     compareScores(){
        return this._result.sort((a,b)=>{
          return a.score-b.score == 0?   a.name.localeCompare(b.name): b.score - a.score
        })
     };
 }


  let whoAteWhat = [
    {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
    {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
    {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
    {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
  ];
 console.log(scoreboard(whoAteWhat))
