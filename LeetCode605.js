/*You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    //find number of available spaces & compare it to number
    let spacesCount = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        //when value is 0
        if (flowerbed[i] === 0) {
            //covers if index 0 is 1 OR single value in arrray that is 0 [0]
            if (i === 0 && (flowerbed[i+1] === 0 || i === flowerbed.length-1)) {
                spacesCount++;
                flowerbed[i] = 1; //plant the flower
            }
            //checking for last element and its adjacent element is 0
            if (i === flowerbed.length - 1 && flowerbed[i-1] === 0) {
                spacesCount++;
                flowerbed[i] = 1;
            }
            //checking for 0 on neither side of a 0
            if (i > 0 && i < flowerbed.length && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
                spacesCount++;
                flowerbed[i] = 1;
            }
        }
    }
    if (spacesCount >= n) {
        return true;
    }
    else {
        return false;
    }
};