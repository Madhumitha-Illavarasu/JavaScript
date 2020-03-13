// class Person {
//     constructor(private name: string, private age: number) { }
//     sayName() {
//         console.log(`I'm ${this.name}`)
//     }
//     sayAge() {
//         console.log(`I'm ${this.age} years old`)
//     }
// }
// // let obj1 = new Person("Madhu", 20)
// // obj1.sayName()
// // obj1.sayAge()

// class Employee extends Person {
//     salary :number;
//     constructor(name: string, age: number, salary: number) {
//         super(name, age)
//         this.salary = salary
//     }
//     saySalary() {
//         console.log("SAlary is.........")
//     }
//     getSalary(){
//         return this.salary
//     }
//     askBonus(){
//         return console.log("salary after bonus"+this.salary*0.2)
//     }

// }
// // const emp = new Employee("Madhu", 20, 10000);
// // emp.askBonus();


// class Boss extends Employee{
//     constructor(name:string,age:number,salary:number){
//         super(name,age,salary)
//     }
//    askBonus(){
//        console.log("salary after bonus"+this.getSalary()*0.5+super.askBonus())
//    }


// }

// // const boss=new Boss("Madhumitha",21,20000)
// // boss.askBonus();







class Intern{
    name:string
    age:number
    trainerName:string 
    company:string
    
}