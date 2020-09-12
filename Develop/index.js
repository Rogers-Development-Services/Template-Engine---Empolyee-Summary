const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

async function getManager() {
    const managerResponse = await inquirer.prompt(
        [{
            type: "input",
            message: "What is your name of your manager?",
            name: "employeeName",
        }, {
            type: "input",
            message: "What is your ID number?",
            name: "employeeId",
        }, {
            type: "input",
            message: "What is your email address?",
            name: "employeeEmail",
        }, {
            type: "input",
            message: "What is your office number?",
            name: "managerOfficeNumber",
        }]);
    // console.log("Manager Response: ", managerResponse);
    let manager = new Manager(managerResponse.employeeName, managerResponse.employeeId, managerResponse.employeeEmail, managerResponse.managerOfficeNumber);
    // console.log(manager);
    return manager;
};
async function addingAnotherMember() {
    const additionResponse = await inquirer.prompt(
        [{
            type: "confirm",
            message: "Is there another employee you'd like to add to your team?",
            name: "employeeAddition",
        }, ]);
    return additionResponse.employeeAddition;
};
async function employeeToAdd() {
    const roleAddition = await inquirer.prompt(
        [{
            type: "list",
            message: "What is your role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"],
        }, ]);
    return roleAddition.employeeRole;
};
async function getInetern() {
    const internAddition = await inquirer.prompt(
        [{
            type: "input",
            message: "What is your name?",
            name: "employeeName",
        }, {
            type: "input",
            message: "What is your ID number?",
            name: "employeeId",
        }, {
            type: "input",
            message: "What is your email address?",
            name: "employeeEmail",
        }, {
            type: "input",
            message: "What is the name of your school?",
            name: "internSchool",
        }, ]);
    // console.log("Intern Object: ", internAddition);
    let intern = new Intern(internAddition.employeeName, internAddition.employeeId, internAddition.employeeEmail, internAddition.internSchool);
    // console.log(intern);
    return intern;
};
async function getEngineer() {
    const engineerAddition = await inquirer.prompt(
        [{
            type: "input",
            message: "What is your name?",
            name: "employeeName",
        }, {
            type: "input",
            message: "What is your ID number?",
            name: "employeeId",
        }, {
            type: "input",
            message: "What is your email address?",
            name: "employeeEmail",
        }, {
            type: "input",
            message: "What is your GitHub username?",
            name: "engineerGithub",
        }, ]);
    // console.log("Intern Object: ", engineerAddition);
    let engineer = new Engineer(engineerAddition.employeeName, engineerAddition.employeeId, engineerAddition.employeeEmail, engineerAddition.engineerGithub);
    // console.log(engineer);
    return engineer;
};
//call this block right away
(async() => {
    try {
        let team = [];
        //get manager() would output a Manager object
        team.push(await getManager());
        // console.log(team); //team with only manager
        // do you wat to add 
        while (await addingAnotherMember()) { // do you want to add another memeber (y/n)
            // two choices intern or engineer
            const choice = await employeeToAdd();
            if (choice === "Intern") {
                team.push(await getInetern());
            }
            if (choice === "Engineer") {
                team.push(await getEngineer());
            }
            // console.log("Team Object: ", team); //team + new member
        }
        //write code 
        // console.log(`after quesitoning:${JSON.stringify(team,null,4)}`);
        if (!fs.existsSync("output")) {
            fs.mkdirSync("output");
        }
        const OUTPUT_DIR = path.resolve(__dirname, "output"); //creates foldername
        const outputPath = path.join(OUTPUT_DIR, "team.html"); //creates filename
        fs.writeFileSync(outputPath, render(team)); //takes path as a string and html render html file, writeFileSync makes sure the write file is syncronus preventing the console.log from running.
        console.log("Success! Your team.html file has been created in the output folder.");
    } catch (err) {
        throw err;
    }
})();