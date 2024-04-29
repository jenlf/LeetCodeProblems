/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;

    if (nums.lenght === 1) //nums only 1
    {
        return 0;
    }
    //get right sum 
    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }
    
    for (let j = 0; j < nums.length; j++) {
        rightSum = rightSum - nums[j];
        
        if(leftSum === rightSum) {
            return j;
        }
        leftSum = leftSum + nums[j];
    }

    return -1;
    
};