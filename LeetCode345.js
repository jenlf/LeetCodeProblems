/*Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let wordArray = s.split(""); //strings are immutable so copy s into an array 
    let start = 0;
    let end = s.length;
    let tempStart = '';
    let tempEnd = '';
    //iterate through on both ends moving to middle
    //if start vowel & end vowel swap & move
    //if start not vowel move
    //if end not vowel move
    while (start < end) {
        //set bools to make this more readable
        //check happy condition first then move
        let isStartVowel = s[start] === 'a' || s[start] === 'e' || s[start] === 'i' || s[start] === 'o' || s[start] === 'u' || s[start] === 'A' || s[start] === 'E' || s[start] === 'I' || s[start] === 'O' || s[start] === 'U';
        let isEndVowel = s[end] === 'a' || s[end] === 'e' || s[end] === 'i' || s[end] === 'o' || s[end] === 'u' || s[end] === 'A' ||
        s[end] === 'E' || s[end] === 'I' || s[end] === 'O' || s[end] === 'U';

        if (isStartVowel && isEndVowel) {
            tempStart = s[start];
            tempEnd = s[end];
            wordArray[start] = tempEnd;
            wordArray[end] = tempStart;
            start++;
            end--; 
            continue;
        }
        if (!isStartVowel) {
            start++;
        }
        if (!isEndVowel) {
            end--;
        }
    }
    
    return wordArray.join(""); //join at end to return string again

};