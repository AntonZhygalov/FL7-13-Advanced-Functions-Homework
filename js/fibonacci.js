function fibonacci(n) {
    var memo = {};

    return function f(num = n) {
        if (memo[num]) {
            return memo[num];
        } else if (num <= 1) {
            return num;
        } else return memo[num] = f(num - 1) + f(num - 2);
    }();
}

module.exports = fibonacci;