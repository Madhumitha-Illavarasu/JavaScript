namespace Shapes {
    export interface IRectangle {
        height: number;
        width: number;
        getArea(): number;
    }
    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) { }
        getArea() {
            return this.height * this.width;
        }
    }
}

    namespace Main {
        function run() {
            var rect: Shapes.IRectangle = new Shapes.Rectangle(10,20);
            var area = rect.getArea();
            console.log(area);
        }
        run();
    }
    