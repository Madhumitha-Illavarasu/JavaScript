var StudMod;
(function (StudMod) {
    var arrName = [];
    var Student = /** @class */ (function () {
        function Student(id, firstName, lastName) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Student.prototype.addStudent = function () {
            arrName.push(this);
            console.log(this);
            console.log("array" + arrName[0]);
            console.log("added");
        };
        Student.prototype.deleteStudent = function () {
            arrName.pop();
            console.log("Deleted");
        };
        return Student;
    }());
    StudMod.Student = Student;
})(StudMod || (StudMod = {}));
var Program;
(function (Program) {
    function run() {
        var obj1 = new StudMod.Student(1, "Madhu", "Mitha");
        var obj2 = new StudMod.Student(2, "Sirisha", "jinka");
        obj1.addStudent();
        obj2.addStudent();
        //obj2.deleteStudent();
    }
    run();
})(Program || (Program = {}));
