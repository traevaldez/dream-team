const Employee = require('./Employee')

const managerQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number"
    }

];

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getTitle() {
        return 'Manager'
    }
};

module.exports = { Manager, managerQuestionsArr };

]