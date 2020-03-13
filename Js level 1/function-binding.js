function doTeach(sub) {
    console.log(`${this.name} teaching ${sub}`)
    let notes = `${sub}-notes`
    let self = this;
    let learn = function () {
        console.log(`${this.name} leaning with ${notes} from ${self.name1}`)
    }
    console.log("teaching ends")
    return learn;
}

function Employee(name) {
    this.name = name
}
function Trainer(name) {
    this.name = name
    this.name1="sirisha"
}
let e1 = new Employee('suja')
let e2 = new Employee('dhivya')
let tnr = new Trainer('Nag')
let learn = doTeach.call(tnr,'javascript')
learn.call(e1)
learn.call(e2)


