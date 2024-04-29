/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.lenght === 1) //nums only 1
        {
            return 0;
        }
        if(i === 0) { //if i 0 only check left sum
            for (let j = 1; j < nums.length; j++) {
                leftSum += nums[j];
            }
        }
        
        if (i > 0){
            rightSum = 0;
            leftSum = 0;
            for(let k = i-1; k >= 0; k--) {
                rightSum += nums[k];
            }
            for(let l = i+1; l < nums.length; l++) {
                leftSum += nums[l];
            }
        }
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};