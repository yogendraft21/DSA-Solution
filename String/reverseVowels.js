// Given a string consisting of lowercase english alphabets, reverse only the vowels present in it and print the resulting string.

// Example 1:

// Input:
// S = "geeksforgeeks"
// Output: geeksforgeeks
// Explanation: The vowels are: e, e, o, e, e
// Reverse of these is also e, e, o, e, e.

// Example 2:

// Input: 
// S = "practice"
// Output: prectica
// Explanation: The vowels are a, i, e
// Reverse of these is e, i, a.
function reverseVowel(arr){
    let n = arr.length;
    let l=0;
    let r=n-1;
    // let l_index=-1;
    // let r_index=-1;

    while(l<r){
        if(isVowel(arr[l])){
            if(isVowel(arr[r]))
            {
                let temp = arr[l];
                arr[l] = arr[r]
                arr[r]  = temp;
                l++;r--;
            }
            else
            {
                r--;
            }
        }
        else
        {
            l++;
        }
    }
    let str="";
    for(let i=0;i<n;i++){
        str+=arr[i]
    }
    return str;
}
function isVowel(el){
    if(el=='a'||el=='e'||el=='i'||el=='o'||el=='u'){
        return true;
    }
    return false;
}
let arr = [];
for(let i=0;i<str.length;i++){
    arr.push(str[i])
}
let str = "solvingproblemsareeasy";
console.log(reverseVowel(arr))

