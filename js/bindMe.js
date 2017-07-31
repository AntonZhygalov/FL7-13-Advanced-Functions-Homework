Function.prototype.bindMe = function(arg) {
    var fn = this;
    return function bound() {
        return fn.apply(arg, arguments);
    }
}