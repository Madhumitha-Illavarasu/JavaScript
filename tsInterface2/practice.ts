interface Engine {
    startEngine: () => void
}

class engine_1 implements Engine {

    startEngine() {
        console.log("Engine 1 started")
    }
}


class engine_2 implements Engine {
    startEngine() {
        console.log("Engine 2 started")

    }
}




class Bike {
    constructor( private engine:Engine){}
    setEngine(engine: Engine) {
        this.engine = engine;
        this.engine.startEngine();
    }
}

let engine1 = new engine_1();
let bike = new Bike(engine1);

bike.setEngine(engine1);