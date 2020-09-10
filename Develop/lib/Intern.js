// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {      
        super(name, id, email); //shorthand for properties in Employee
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;


// "this" = {}

// invoke constructor : 
// let MattR = Intern('matt', 1, 'someemail@something.com', 'cal poly')
// console.log(MattR.getSchool()) // 'cal poly'
// console.log(MattR.getName()) // 'matt'
// console.log(MattR.name) // NO! ;)

// "this" = {
//     name = 'matt',
//     ...
// }