// Here I required the parent class "Employee" so that the child class "Intern" inherits from it 
const Employee = require("./Employee");

// Over here i used the constructor method to define and export the intern class 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }

}
module.exports = Intern;