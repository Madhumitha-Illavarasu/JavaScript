var Bike = /** @class */ (function () {
    function Bike(bike) {
        this.bike = bike;
    }
    Bike.prototype.start = function () {
        alert("Bike started: " + this.bike);
    };
    Bike.prototype.stop = function () {
        alert("Bike stopped: " + this.bike);
    };
    return Bike;
}());
window.onload = function () {
    var bike = new Bike('Pulsar');
    bike.start();
    bike.stop();
};
//# sourceMappingURL=Bike.js.map