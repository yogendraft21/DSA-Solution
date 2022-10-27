// Count all distinct pairs with difference equal to k

// Examples: 

// Input: arr[] = {1, 5, 3, 4, 2}, k = 3
// Output: 2
// There are 2 pairs with difference 3, the pairs are {1, 4} and {5, 2} 

// Input: arr[] = {8, 12, 16, 4, 0, 20}, k = 4
// Output: 5
// There are 5 pairs with difference 4, the pairs are {0, 4}, {4, 8}, 
// {8, 12}, {12, 16} and {16, 20} 

function pairs(k, nums) {
    var i=0,j=1,count=0;
    var n = nums.length; 
    nums.sort((a,b)=>a-b);
    while(j < n) {
        var diff = nums[j] - nums[i];
        
        if (diff == k) {
            count++;
            j++;
        } else if (diff > k) {
            i++;
        } else {
            j++;
        }
    }
    return count;

}