// Given a non-empty sequence of characters str, return true if sequence is Binary, else return false
// Input:
// str = 101
// Output:
// 1
// Explanation:
// Since string contains only 0 and 1, output is 1


function isBinary(str){
    for(let i=0;i<str.length;i++){
        if(str[i]>'1'){
            return false;
        }
        
 }return true;
}