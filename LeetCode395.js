/*Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

My solution can be improved.*/ 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //two pointers - one to go through s the second goes through t and compairs first letter of s to t
    //if it finds it then tpointer starts the next letter check at the last found letter index 
    //if it does not find the letter at any time it returns false
 
    let p1 = 0;
    let p2 = 0;
    let match = false;

    if (s.length === 0) {
        return match = true;
    }

    while (p2 <= t.length - 1) {
        if (s[p1] !== t[p2]) {
            p2++;
            match = false;
        }
        else if (p2 === t.length - 1 && p1 < s.length - 1) {
            match = false;
            break;
        }
        else if (s[p1] === t[p2]) {
            if (s.length === 1) {
                match = true; 
                break;
            }
            if (p1 === s.length -1) {
                match = true;
                break;
            }
            p1++;
            p2++
            match = true;
        }
        
    }
    return match;
};