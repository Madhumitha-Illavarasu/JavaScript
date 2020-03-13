window.onload = function () {
    var obj: ICalculator = new Arithmetics.Calculator();
    obj.init('X', 'Y', 'Output');
};


interface ICalculator {
    add(x: number, y: number): number;
    subtract(x: number, y: number): number;
    multiply(x: number, y: number): number;
    division(x: number, y: number): number;
    modulus(x: number, y: number): number;
    init(X: string, Y: string, Output: string)

}

module Arithmetics {
    export class Calculator implements ICalculator {
        private x: HTMLInputElement;
        private y: HTMLInputElement;
        private output: HTMLSpanElement;

        init(x: string, y: string, output: string) {
            this.x = <HTMLInputElement>document.getElementById(x);
            this.y = <HTMLInputElement>document.getElementById(y);
            this.output = <HTMLSpanElement>document.getElementById(output);
            this.wireEvents();
        }
        wireEvents() {
            document.getElementById('Add').addEventListener('click',
                event => {
                    this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString()
                });
            document.getElementById('Subtract').addEventListener('click',
                event => {
                    this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString()
                });
            document.getElementById('Multiply').addEventListener('click',
                event => {
                    this.output.innerHTML = this.multiply(parseInt(this.x.value), parseInt(this.y.value)).toString()
                });
            document.getElementById('Division').addEventListener('click',
                event => {
                    this.output.innerHTML = this.division(parseInt(this.x.value), parseInt(this.y.value)).toString()
                });
            document.getElementById('Modulus').addEventListener('click',
                event => {
                    this.output.innerHTML = this.modulus(parseInt(this.x.value), parseInt(this.y.value)).toString()
                });
        }
        add(x: number, y: number) {
            return x + y;
        }
        subtract(x: number, y: number) {
            return x - y;
        }
        multiply(x: number, y: number) {
            return x * y;
        }
        division(x: number, y: number) {
            return x / y;
        }
        modulus(x: number, y: number) {
            return x % y;
        }


    }//class
}

