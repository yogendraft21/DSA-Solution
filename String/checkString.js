
// Given a string, check if all its characters are same or not.
// s = "geeks"
// Output: NO
// Explanation: The string contains different
// character 'g', 'e', 'k' and 's'.

class Solution {
    check(s){
    for (let i = 0; i < s.length-1; i++) {
         if (s[0] !== s[i]) {

             return false;
                
             }
     }
         return true;
    }
}