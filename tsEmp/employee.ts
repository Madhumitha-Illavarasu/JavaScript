class Employee{
    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFirstName(){
        console.log("Firstname : "+this.firstName);
    }
    getLAstName(){
        console.log("Lastname : "+this.lastName);
    }
    getFullName(){
        console.log(this.firstName+this.lastName);
    }
}

window.onload=function(){
    var emp=new Employee("Madhu","mitha");
    emp.getFirstName();
    emp.getLAstName();
    emp.getFullName();
}