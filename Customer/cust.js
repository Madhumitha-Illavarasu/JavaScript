window.onload = function () {
    var obj = new Customer();
    obj.init('Name', 'output');
};
var arr = [];
var pos;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.init = function (name, output) {
        this.name = document.getElementById(name);
        this.output = document.getElementById(output);
        this.wireEvent();
    };
    Customer.prototype.wireEvent = function () {
        var _this = this;
        document.getElementById('add').addEventListener('click', function (event) { _this.output.innerHTML = _this.add(_this.name.value); });
        document.getElementById('delete').addEventListener('click', function (event) { _this.output.innerHTML = _this["delete"](_this.name.value); });
    };
    Customer.prototype.add = function (x) {
        arr.push(x);
        for (var i = 0; i < arr.length; i++) {
            console.log("Array has ");
            console.log(arr[i]);
        }
        return x;
    };
    Customer.prototype["delete"] = function (x) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                pos = i;
                break;
            }
        }
        arr.splice(pos, 1);
        for (var i = 0; i < arr.length; i++) {
            console.log("Array items after deleting");
            console.log(arr[i]);
        }
        return x;
    };
    Customer.prototype.addElement = function (name) {
        arr.push(name);
        console.log(arr);
    };
    return Customer;
}());
