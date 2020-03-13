//"use strict"
console.log("Data types")
var name = 'aa'
var str = `Person is ${name}`;
var sum = `sum of 1 and 2 is ${1 + 2}`
var mul;
mul = `line1
dztenmzsetet
ftyurcyu
ujuj`
var boole = true


//Objects and classes
/*function Person(name, age) {
    this.name = name
    this.age = age
    this.sayName = function () {
        console.log("Hii " + name)
    }
    this.sayAge = function () {
        console.log("age"+this.age);
    }
}
*/
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayName() {
        return this.name;
    }
    sayAge() {
        console.log(`Age is ${this.age}`)
    }
}
var p1 = new Person("madhu", 20);
//var p2 = new Person("sirisha", 21);  
Object.preventExtensions(p1)
Object.seal(p1)
p1.name = "mad"

//delete p1.location
Object.freeze(p1)
//p1.location="Chennai"

