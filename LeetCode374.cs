/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution : GuessGame {
    public int GuessNumber(int n) {
        int result = 0;
        int min = 0;
        int max = Int32.MaxValue;
        while(true)
        {
            result = guess(n);
            if(result == 0)
            {
                break;
            }
            if(result == -1) //higher
            {
                max = n;
                
            }
            if(result == 1) //lower
            {
                min = n;
            }
            n = min + ((max-min)/2);

        }

        return n;
    }
}