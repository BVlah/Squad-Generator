const fs = require('fs'); 
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const generateHTML = require('./lib/generateHTML');

const teamArr = [];

const addManager = () => {
    console.log(`
    ======================
    Add your team Members!
    ======================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's Name!")
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID:",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the Team Manager's ID!")
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email:",
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the Team Manager's email!");
                    return false; 
                };
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the team manager's office number:",
            validate: officeInput => {
                if (isNaN(officeInput)) {
                    console.log("Please enter the Team Manager's office number!")
                    return false;
                } else {
                    return true;
                };
            }
        },
    ])
    .then(managerResponse => {
        const manager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.office);
        teamArr.push(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another member to your team?',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            when: (answers) => answers.addMember !== 'Finish Building Team',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's Name!")
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID:",
            when: (answers) => answers.addMember !== 'Finish Building Team',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the Employee's Name!")
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email:",
            when: (answers) => answers.addMember !== 'Finish Building Team',
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the Employee's email!");
                    return false; 
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github?",
            when: (answers) => answers.addMember === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's Github!")
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the employee's school?",
            when: (answers) => answers.addMember === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's school!")
                    return false;
                };
            }
        },
    ])
    .then(employeeResponse => {
        if (employeeResponse.addMember === 'Engineer') {
            employee = new Engineer(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.github);
            teamArr.push(employee);
            return addEmployee(teamArr);
        } else if (employeeResponse.addMember === 'Intern') {
            employee = new Intern(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.github);
            teamArr.push(employee);
            return addEmployee(teamArr);
        } else {
            return teamArr;
        };
    });
};

const writeToFile = teamData => {
    fs.writeFile('./dist/index.html', teamData, err => {
        if (err) throw err;
        console.log('Your Team Profile has been created!')
    });
};

addManager()
.then(addEmployee)
// .then(teamArr => {
//     return generateHTML(teamArr);
// })
// .then(pageHTML => {
//     return writeToFile(pageHTML);
// })
// .catch(err => {
//     console.log(err);
// });