var Product = /** @class */ (function () {
    function Product() {
        this.contents = [];
    }
    Product.prototype.add = function (object) {
        this.contents.push(object);
        console.log(object);
    };
    Product.prototype.remove = function () {
        return this.contents.pop();
    };
    return Product;
}());
var shoeObj = new Product();
shoeObj.add({ size: "s", make: "Bata" });
console.log(shoeObj);
var chairObj = new Product();
chairObj.add({ size: "l", manufacturer: "ABC" });
console.log(chairObj);
