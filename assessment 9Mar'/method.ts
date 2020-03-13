class MethodChaining {
    private num: number
    constructor(value: number) {
        this.num = value
    }
    add(index = 1) {
        this.num = index + this.num
        return this


    }
    subtract(index1 = 10) {
        this.num = index1 - this.num
        return this
    }
    print() {
        console.log(this.num)
        return this
    }
}

new MethodChaining(10)
    .add()
    .print()
    .subtract()
    .print()



