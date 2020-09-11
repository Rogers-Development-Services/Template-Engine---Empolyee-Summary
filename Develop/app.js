const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");   //creates foldername
const outputPath = path.join(OUTPUT_DIR, "team.html");  //creates filename

const render = require("./lib/htmlRenderer");

const team = [];
const roleQuestion = [
    {
        type: "list",
        message: "What is your role?",
        name: "employeeRole",
        choices: ["Intern", "Engineer", "Manager"],
    },
];
const internQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is the name of your school?",
        name: "internSchool",
    },
    {
        type: "confirm",
        message: "Is there another employee you'd like to add to your team?",
        name: "employeeAddition",
    },
];
const engineerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "engineerGithub",
    },
    {
        type: "confirm",
        message: "Is there another employee you'd like to add to your team?",
        name: "employeeAddition",
    },
];
const managerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "managerOfficeNumber",
    },
    {
        type: "confirm",
        message: "Is there another employee you'd like to add to your team?",
        name: "employeeAddition",
    },
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function promptQuestions(response) {
    if (response.employeeRole === "Intern") {
        let internData = await promptIntern();
        console.log("Recently accessed Intern Information: ", internData);

        let intern = new Intern(response.employeeName, response.employeeId, response.employeeEmail, internData.internSchool);
        console.log(intern);

        team.push(intern);
        console.log("The team consists of: ", team);
    } else if (response.employeeRole === "Engineer") {
        let engineerData = await promptEngineer();
        console.log("Recently accessed Engineer Information: ", engineerData);

        let engineer = new Engineer(response.employeeName, response.employeeId, response.employeeEmail, engineerData.engineerGithub);
        console.log(engineer);

        team.push(engineer);
        console.log("The team consists of: ", team);
    } else {
        let managerData = await promptManager();
        console.log("Recently accessed Manager Information: ", managerData);

        let manager = new Manager(response.employeeName, response.employeeId, response.employeeEmail, managerData.managerOfficeNumber);
        console.log(manager);

        team.push(manager);
        console.log("The team consists of: ", team);
    }
};
 function promptIntern() {
     inquirer
        .prompt(internQuestions)
        .then(function (internResponse) {
            console.log("Intern Response: ", internResponse);
            // console.log("Intern Object:", internRole);
            // let newIntern = Object.assign(internRole, internResponse) <-- This concatinates objects
            let intern = new Intern(internResponse.employeeName, internResponse.employeeId, internResponse.employeeEmail, internResponse.internSchool);
            team.push(intern);
            console.log("Intern added to team: ", team);
            if(internResponse.employeeAddition) {
                promptUser();
            }
        })
};
function promptEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(function (engineerResponse) {
            console.log("Engineer Response: ", engineerResponse);
            // let newEngineer = Object.assign(engineerRole, engineerResponse)
            let engineer = new Engineer(engineerResponse.employeeName, engineerResponse.employeeId, engineerResponse.employeeEmail, engineerResponse.engineerGithub);
            team.push(engineer);
            console.log("Engineer added to team: ", team);
            if (engineerResponse.employeeAddition) {
                promptUser();
            }
        })
};
function promptManager() {
    inquirer
        .prompt(managerQuestions)
        .then(function (managerResponse) {
            console.log("Manager Response: ", managerResponse);
            // let newManager = Object.assign(managerRole, managerResponse);
            let manager = new Manager(managerResponse.employeeName, managerResponse.employeeId, managerResponse.employeeEmail, managerResponse.managerOfficeNumber);
            team.push(manager);
            console.log("Manager added to team: ", team);
            if (managerResponse.employeeAddition) {
                promptUser();
            }
        })
};
function promptUser() {
    inquirer
        .prompt(roleQuestion)
        .then(function (roleOutput) {
            console.log("Employee Role: ", roleOutput);
            if (roleOutput.employeeRole === "Intern") {
                promptIntern(roleOutput);
            } else if (roleOutput.employeeRole === "Manager") {
                promptManager();
            } else {
                promptEngineer();
            }
        });
}

promptUser();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render(team);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// const employeeRenderHtml = render(employees)
// fs.writefile('team.html', employeeRenderHtml) 
// look up fs documentation on how to write a file, line above is 99.999% wrong


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
