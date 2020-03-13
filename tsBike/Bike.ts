class Bike {
    bike: string;
    constructor(bike:string) {
       this.bike =bike;
    }
    start() {
        alert("Bike started: " + this.bike);
    }
    stop() {
        alert("Bike stopped: " + this.bike);
    }

}
window.onload = function () {
    var bike = new Bike('Pulsar');
      bike.start();
      bike.stop();

};


