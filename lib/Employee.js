class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getEmployeeName() {
        return this.name
    }

    getEmployeeId() {
        return this.id
    }

    getEmployeeEmail() {
        return this.email
    }

    getTitle() {
        return 'Employee'
    }
};

module.exports = Employee;