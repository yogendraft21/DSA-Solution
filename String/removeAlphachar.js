// Remove all characters except the numeric characters from an alphanumeric string.
// Input: S = "AA1d23cBB4"
// Output: 1234
// Explanation: Remove all chacactres 
// other than numbers

class Solution {
    removeCharacters(s) {
      //code here
      let str = ""
      for(let i=0;i<s.length;i++){
          if(s[i]<='9' && s[i]>='0'){
              str+=s[i];
          }
      }
      return str;
    }
  }