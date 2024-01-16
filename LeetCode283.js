/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p1 = 0;
    let p2 = p1 + 1;
    let temp = 0;

    while (p2 <= nums.length - 1) {
        //if p1 does not move it
        if (nums[p1] !== 0) {
            p1++;
        }
        else {
            //p1 = 0 and p2 != 0 swap them, move p1
            if (nums[p2] !== 0) {
                temp = nums[p1];
                nums[p1] = nums[p2];
                nums[p2] = temp;
                p1++;
            }
        }
        //move p2 to next
        p2++;
    }
};

/*
Personal note on other solutions:
My original thought (using splice) was similar to this solution I found by someone else. My mistake was increasing i when I needed to decrease it.
var moveZeroes = function(nums) {
    for(let i=nums.length;i>=0;i--)
    { 
         if(nums[i]==0)
        {
        nums.splice(i,1)
        nums.push(0)
        }
    } 
    
    return nums
};
*/