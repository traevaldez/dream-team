const inquirer = require('inquirer');
const pageTemplate = require('./src/pageTemplate');
const createFile = require('./src/createFile');

// questions and classes for each employee
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

const employeesArr = []

const init = () => { managerQuestions() }

// manager questions
const managerQuestions = () => {
    inquirer.createPromptModule(managerQuestionsArr)
    .then (( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
};

// engineer questions
const engineerQuestions = () => {
    inquirer.createPromptModule(engineerQuestionsArr)
    .then (( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
};

const internQuestions = () => {
    inquirer.createPromptModule(internQuestionsArr)
    .then (( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArr.push(answers);
        return employeePrompt();
    })
};

const employeePrompt = () => {
    inquirer.createPromptModule([{
        type: 'list',
        name: 'employeeTitle',
        message: 'What kind of team member would you like to add?',
        choices: [
            {
                name: 'Engineer',
                value: "addEngineer"
            },
            {
                name: 'Intern',
                value: "addIntern"
            },
            {
                name: 'Done',
                value: "done"
            }
        ]
    }])
    .then( answer => {
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            let html = pageTemplate(employeesArr)
            console.log('Just one second...')
            createFile(html)
        }
    })
};

init();