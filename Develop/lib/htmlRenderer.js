const path = require("path");
const fs = require("fs");
// const Manager = require("./Manager");

const templatesDir = path.resolve(__dirname, "../templates"); // this creates the folder name

// employees = [
//   Manager {
//     name: 'Matt',
//     id: '1',
//     email: 'matt@matt.com',
//     officeNumber: '101'
//   }
// ];

const render = employees => {  // this declares the render function passing employees (team[])
  const html = [];  

  html.push(...employees  // takes any number of arrays and pushes them into the html array
    .filter(employee => employee.getRole() === "Manager")   //filters all the arrays into only manager arrays
    .map(manager => renderManager(manager))   //transforms all the manager arrays into new arrays which 
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  // console.log(html);

  return renderMain(html.join(""));   // returns html array as a string

};

const renderManager = manager => {    // decleration of renderManager passing it all the manager arrays
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");   // use file system to read the directory produced by templatesDir and the template file "manager.html", then make it human readable in utf8.
  template = replacePlaceholders(template, "name", manager.getName()); 
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {   // declares replacePlaceholders and passes it the template file, placeholder (i.e. name,role, id, email, officenumber), and value provided from the newly mapped employee role array
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm"); //global match and multi line flags for adding 
  return template.replace(pattern, value); //replaces specific value of the placeholder value (i.e {{ role }})) with the new html string ?
};

module.exports = render;
