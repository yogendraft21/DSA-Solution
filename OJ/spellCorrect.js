// sorry This solution in C++


// #include <iostream>
// #include <algorithm>
// #include <string>
// using namespace std;
// #define endl '\n'
// int main() {
//     int tc, sz;
//     string str;
//     cin >> tc;
//     while(tc--){
//     	cin >> sz >> str;
//     	bool check = true;
//     	int cnt[5];
//     	for(int n = 0 ; n < 5 ; n++) 
//     	    cnt[n] = 0;
//     	for(int n = 0 ; n < str.size() ; n++){
//     		if(str[n] != 'T' && str[n] != 'i' && str[n] != 'm' && str[n] != 'u' && str[n] != 'r'){
//     			check = false;
//     			break;
// 			}
// 			else{
// 				if(str[n] == 'T') cnt[0]++;
// 				if(str[n] == 'i') cnt[1]++;
// 				if(str[n] == 'm') cnt[2]++;
// 				if(str[n] == 'u') cnt[3]++;
// 				if(str[n] == 'r') cnt[4]++;
// 			}
// 		}
// 		if(cnt[0] * cnt[1] * cnt[2] * cnt[3] * cnt[4] != 1) 
// 		    check = false;
// 		if(check) 
// 		    cout << "YES" << endl;
// 		else 
// 		    cout << "NO" << endl;
// 	}
//     return 0;
// }
