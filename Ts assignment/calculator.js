window.onload = function () {
    var obj = new Arithmetics.Calculator();
    obj.init('X', 'Y', 'Output');
};
var Arithmetics;
(function (Arithmetics) {
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.init = function (x, y, output) {
            this.x = document.getElementById(x);
            this.y = document.getElementById(y);
            this.output = document.getElementById(output);
            this.wireEvents();
        };
        Calculator.prototype.wireEvents = function () {
            var _this = this;
            document.getElementById('Add').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
            });
            document.getElementById('Subtract').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
            });
            document.getElementById('Multiply').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.multiply(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
            });
            document.getElementById('Division').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.division(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
            });
            document.getElementById('Modulus').addEventListener('click', function (event) {
                _this.output.innerHTML = _this.modulus(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
            });
        };
        Calculator.prototype.add = function (x, y) {
            return x + y;
        };
        Calculator.prototype.subtract = function (x, y) {
            return x - y;
        };
        Calculator.prototype.multiply = function (x, y) {
            return x * y;
        };
        Calculator.prototype.division = function (x, y) {
            return x / y;
        };
        Calculator.prototype.modulus = function (x, y) {
            return x % y;
        };
        return Calculator;
    }()); //class
    Arithmetics.Calculator = Calculator;
})(Arithmetics || (Arithmetics = {}));
