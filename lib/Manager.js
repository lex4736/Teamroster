// Here I required the parent class "Employee" so that the child class "Manager" inherits from it 
const Employee = require("./Employee");

// Over here i used the constructor method to define and export the Manager class 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;