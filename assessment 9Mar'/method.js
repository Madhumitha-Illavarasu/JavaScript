var MethodChaining = /** @class */ (function () {
    function MethodChaining(value) {
        this.num = value;
    }
    MethodChaining.prototype.add = function (index) {
        if (index === void 0) { index = 1; }
        this.num = index + this.num;
        return this;
    };
    MethodChaining.prototype.subtract = function (index1) {
        if (index1 === void 0) { index1 = 10; }
        this.num = index1 - this.num;
        return this;
    };
    MethodChaining.prototype.print = function () {
        console.log(this.num);
        return this;
    };
    return MethodChaining;
}());
new MethodChaining(10)
    .add()
    .print()
    .subtract()
    .print();
