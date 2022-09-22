const Employee = require('./Employee')

const engineerQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's GitHub username?"
    }

];

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }

    getTitle() {
        return 'Engineer'
    }
};

module.exports = { Engineer, engineerQuestionsArr };