const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output"); //creates foldername
const outputPath = path.join(OUTPUT_DIR, "team.html"); //creates filename

const render = require("./lib/htmlRenderer");   // just call render() at the end!!!
const questions = [
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
        type: "list",
        message: "What is your role?",
        name: "employeeRole",
        choices: ["Intern", "Engineer", "Manager"],
    },
];
const internQuestion = [
    {
        type: "input",
        message: "What is the name of your school?",
        name: "internSchool",
    },
];
const engineerQuestion = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "engineerGithub",
    },
];
const managerQuestion = [
    {
        type: "input",
        message: "What is your office number?",
        name: "managerOfficeNumber",
    },
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function promptIntern() {
    return inquirer
        .prompt(internQuestion)
            .then(function(internResponse) {
                console.log("Intern Response: ", internResponse);
                return internResponse;
            })
};
async function promptEngineer() {
    return inquirer
        .prompt(engineerQuestion)
            .then(function(engineerResponse) {
                console.log("Engineer Response: ", engineerResponse);
                return engineerResponse;
            })
};
async function promptManager() {
    return inquirer
        .prompt(managerQuestion)
            .then(function(managerResponse) {
                console.log("Manager Response: ", managerResponse);
                return managerResponse;
            })
};

inquirer
    .prompt(questions)
        .then(async function(response) {
            console.log("Employee Information: ", response);
            if (response.employeeRole === "Intern") {
                // promptIntern().then((internData) => {
                //     console.log("Intern Information :", internData);
                // });
                let internData = await promptIntern();
                console.log("Recently accessed Intern Information: ", internData);

                let intern = new Intern (response.employeeName, response.employeeId, response.employeeEmail, internData.internSchool);
                console.log(intern);
            } 
            if (response.employeeRole === "Engineer") {
                let engineerData = await promptEngineer();
                console.log("Recently accessed Engineer Information: ", engineerData);

                let engineer = new Engineer (response.employeeName, response.employeeId, response.employeeEmail, engineerData.engineerGithub);
                console.log(engineer);
            } 
            if (response.employeeRole === "Manager") {
                let managerData = await promptManager();
                console.log("Recently accessed Manager Information: ", managerData);

                let manager = new Manager (response.employeeName, response.employeeId, response.employeeEmail, managerData.managerOfficeNumber);
                console.log(manager);
            } 
        })

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

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
