

function swapUsingArithmetic(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return [x, y];
}



//using XOR

let x = 10, y = 5;


x = x ^ y;
y = x ^ y;
x = x ^ y;