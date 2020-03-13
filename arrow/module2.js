var Shapes;
(function (Shapes) {
    var Rectangle = /** @class */ (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var Main;
(function (Main) {
    function run() {
        var rect = new Shapes.Rectangle(10, 20);
        var area = rect.getArea();
        console.log(area);
    }
    run();
})(Main || (Main = {}));
