function isEven(number) {
    var n = Math.abs(number);
    if (n == 0)
        return true;
    else if (n == 1)
        return false;
    else
        return isEven(n - 2);
}

module.exports = isEven;