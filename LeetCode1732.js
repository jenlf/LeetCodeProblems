// /**
//  * @param {number[]} gain
//  * @return {number}
//  */
// var largestAltitude = function(gain) {
//    let currentAltitude = 0; 

//    let altitudes = [];
//    altitudes.push(currentAltitude);
 

//    for (let i = 0; i < gain.length; i++) {
//        currentAltitude = currentAltitude + gain[i];
//        altitudes.push(currentAltitude);
//    }
//    return Math.max(...altitudes);
// };
//there are two loops in my first solution - for & math.max so it is O(2n) 
//to improve it remove the math.max to make solution O(n)


/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
   let currentAltitude = 0; 
   let highestAltitude = currentAltitude;
 

   for (let i = 0; i < gain.length; i++) {
       currentAltitude = currentAltitude + gain[i];
       
       if(currentAltitude > highestAltitude) {
           highestAltitude = currentAltitude;
       }
   }
   return highestAltitude;
};