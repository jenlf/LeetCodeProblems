/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let number = [];
    let diff1 = [];
    let diff2 = [];
    for(let i = 0; i < nums1.length; i++){
        var duplicateFound = false;
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] === nums2[j]){
                duplicateFound = true;
                break;
            }  
        }
        if(duplicateFound === false){
            diff1.push(nums1[i]);
        }
    }
    for(let i = 0; i < nums2.length; i++){
        var duplicateFound = false;
        for(let j = 0; j < nums1.length; j++){
            if(nums2[i] === nums1[j]){
                duplicateFound = true;
                break;
            }
        }
        if(duplicateFound === false){
            diff2.push(nums2[i]);
        }
    }
    number.push(Array.from(new Set(diff1)), Array.from(new Set(diff2))); //should convert diffs to sets first instead of arrays
    return number;
};