const Employee = require('./Employee');

const internQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's ID Number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's Email Address?"
    },
    {
        type: 'input',
        name: 'college',
        message: 'What school/college does the Intern attend?'
    }

];

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getTitle() {
        return 'Intern'
    }
};

module.exports = { Intern, internQuestionsArr };