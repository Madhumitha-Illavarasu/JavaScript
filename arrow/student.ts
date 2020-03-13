namespace StudMod {
    export interface IStudent {
        addStudent(): void
        deleteStudent(): void
    }

    

    let arrName = [];
    export class Student implements IStudent {
        id: number
        firstName: string
        lastName: string
        constructor(id: number, firstName: string, lastName: string) {
            this.id = id
            this.firstName = firstName;
            this.lastName = lastName;
        }
        addStudent() {
            arrName.push(this);
            console.log(this);
            console.log("added")
        }
        deleteStudent() {
            arrName.pop();
            console.log("Deleted")
        }
    }
}



namespace Program {
    function run() {
        var obj1: StudMod.IStudent = new StudMod.Student(1, "Madhu", "Mitha");
        var obj2: StudMod.IStudent = new StudMod.Student(2, "Sirisha", "jinka");
        obj1.addStudent();
        obj2.addStudent();
        //obj2.deleteStudent();

    }
    run();
}