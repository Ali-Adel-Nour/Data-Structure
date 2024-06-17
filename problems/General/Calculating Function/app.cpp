#include <iostream>
using namespace std;

int main() {
    long long n;
    cin >> n;
    // For even n, f(n) = n/2. For odd n, f(n) = -(n+1)/2.
    if (n % 2 == 0) {
        cout << n / 2;
    } else {
        cout << -(n + 1) / 2;
    }
    return 0;
}