function compose() {
    return Array.prototype.reduceRight.call(arguments, function(fn1, fn2) {
        return function() {
            return fn2(fn1.apply(null, arguments));
        };
    });
}

module.exports = compose;