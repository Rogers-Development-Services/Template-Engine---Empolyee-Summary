// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {
        this.name = name; ///these are what super calls
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        // return new Employee; this returns {"email": undefined, "id": undefined, "name": undefined}
        return "Employee";
    }
}

module.exports = Employee;