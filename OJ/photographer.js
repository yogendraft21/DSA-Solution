// this solution in c++ so sorry

// #include <bits/stdc++.h>
// #define ll long long int
// using namespace std;

// void solve()
// {
//     int n, x;
//     cin >> n >> x;

//     std::vector<int> v(2 * n);
//     for (int i = 0; i < 2 * n; i++)
//         cin >> v[i];

//     sort(v.begin(), v.end());

//     int hasTallHeight = true;

//     for (int i = 0; i < n; i++)
//         if (v[n + i] - v[i] < x)
//           hasTallHeight = false;
          
//     if (hasTallHeight)  
//         cout << "YES\n";
//     else
//         cout << "NO\n";
// }

// int main()
// {
//     ll T = 1;
//     cin >> T;
//     while (T--) 
//     {
//         solve();
//     }

// }