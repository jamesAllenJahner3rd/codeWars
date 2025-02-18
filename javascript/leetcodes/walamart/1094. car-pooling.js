/*1094. Car Pooling
Medium
Topics
Companies
Hint
There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

 

Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
 

Constraints:

1 <= trips.length <= 1000
trips[i].length == 3
1 <= numPassengersi <= 100
0 <= fromi < toi <= 1000
1 <= capacity <= 105*/
/**
 * par and array of arrays, and an integer
 * return a boolean
 * 
 * [[2,1,5],[3,3,7]], 4 >>> false
 * [2,1,5],[3,3,7]], 5 >>> true
 * [1,0,5],[2,1,2],[3,3,7]], 4 >>> true
 * 
 * add the people to the car  and subtract the people
 * if capacity is greater than 4 at any given mile.
 * use recurive to check each mile.
 * memo to keep track of the people in the car.
 * then return the boolen
 */
var carPooling = function(trips, capacity) {
let car = new Array(1).fill(0)
let summedCapacity = true
function traveling(mile){
    if (mile >= car.length){
        return
    }
    trips.forEach((e,i,a) => {
        if(e[2]> car.length){
            car.length =e[2]
            
        }
       // console.log(car[mile])
        if(car[mile] === undefined){
                car[mile] =0;
            }
        
        if(( e[1] <= mile)&&(e[2] > mile)){
            let num =e[0];
            car [mile]+=e[0];
        } ;
        if (car[mile] >capacity){
            summedCapacity =false
             
        }
    })
    traveling(mile+1)
}
traveling(0)
return summedCapacity
}
carPooling([[2,1,5],[3,3,7]],3)