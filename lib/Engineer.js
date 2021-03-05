// Here I required the parent class "Employee" so that the child class "Engineer" inherits from it 
const Employee = require("./Employee");

// Over here i once again used the constructor method to define and export the engineer class 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;