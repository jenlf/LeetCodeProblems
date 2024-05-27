/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    //add to map
    var map = new Map();
    for(let j = 0; j < arr.length; j++){
        map.set(arr[j], (map.get(arr[j]) || 0) + 1); //counting the values in arr & using arr value as key in map
    }
    
    //find distinct values
    let counts = new Set(); //use Set to extract the map values
    for(let count of map.values()){
        if (counts.has(count)){ //if it is found in Set then it's a duplicate
            return false;
        }
        counts.add(count);
    }
    return true;
};