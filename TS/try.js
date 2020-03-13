var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log("I'm " + this.name);
    };
    Person.prototype.sayAge = function () {
        console.log("I'm " + this.age + " years old");
    };
    return Person;
}());
// let obj1 = new Person("Madhu", 20)
// obj1.sayName()
// obj1.sayAge()
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.saySalary = function () {
        console.log("SAlary is.........");
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.askBonus = function () {
        return console.log("salary after bonus" + this.salary * 0.2);
    };
    return Employee;
}(Person));
// const emp = new Employee("Madhu", 20, 10000);
// emp.askBonus();
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Boss.prototype.askBonus = function () {
        console.log("salary after bonus" + this.getSalary() * 0.5 + _super.prototype.askBonus.call(this));
    };
    return Boss;
}(Employee));
var boss = new Boss("Madhumitha", 21, 20000);
boss.askBonus();
