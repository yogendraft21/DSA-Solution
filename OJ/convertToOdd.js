// Solution in c++

// #include <bits/stdc++.h>
// using namespace std;

// int minOperations(long long int arr[], long long int n)
// {
//    int i=0;
//    int move=0;
//    for(int i=0;i<n;i++){
//        if(arr[i]%2==0){
//            while(arr[i]%2==0){
//                arr[i] = arr[i]/2;
//                move++;
//            }
//        }
//    }return move;
// }
 

// int main()
// {
//     long long int n;
//     cin>>n;
    
//     long long int arr[n];
//     for(long long int i=0;i<n;i++){
//         cin>>arr[i];
//     }
 
//     cout << minOperations(arr, n);
 
//     return 0;
// }