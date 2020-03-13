var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getFirstName = function () {
        console.log("Firstname : " + this.firstName);
    };
    Employee.prototype.getLAstName = function () {
        console.log("Lastname : " + this.lastName);
    };
    Employee.prototype.getFullName = function () {
        console.log(this.firstName + this.lastName);
    };
    return Employee;
}());
window.onload = function () {
    var emp = new Employee("Madhu", "mitha");
    emp.getFirstName();
    emp.getLAstName();
    emp.getFullName();
};
//# sourceMappingURL=employee.js.map