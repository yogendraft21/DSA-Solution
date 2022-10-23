// Given a string. Count the number of Camel Case characters in it.

// Input:
// S = "ckjkUUYII"
// Output: 5
// Explanation: Camel Case characters present:
// U, U, Y, I and I.


class Solution{
    countCamelCase(s){
        let count=0;
       for(let i=0;i<s.length;i++){
           if(s.charAt(i)===s[i].toUpperCase()){
               count++;
           }
       }return count;
    }
}