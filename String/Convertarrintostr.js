// Given a list of characters, merge all of them into a string.
// Input:
// N = 13
// Char array = g e e k s f o r g e e k s
// Output: geeksforgeeks 
// Explanation: combined all the characters
// to form a single string.

class Solution{
    chartostr(arr,n){
        //code here
        let str=""
        for(let i=0;i<n;i++){
            str+=arr[i]
        }
       return str;
    }
}