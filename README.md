# Template-Engine---Empolyee-Summary

![GitHub license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green.svg) ![GitHub license](https://img.shields.io/badge/license-MIT%20License-green.svg) 

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. In this Node CLI application, the program takes in information about a work team (managers, employees, and interns) and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.
## Table of Contents
[Deployed Application](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#deployed-application)

[Installation](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#installation)

[Usage](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#usage)

[Screenshots](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#screenshots)

[Videos](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#videos)

[Testing](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#testing)

[Future Updates](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#future-updates)

[Questions](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#questions)

[Credits](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#credits)

[License](https://github.com/Rogers-Development-Services/Template-Engine---Empolyee-Summary#license)

## Deployed Application

Here is an example of our app in action: 

![Good README.md Generator](./Assets/TeamGeneratorGif.gif)

## Installation

Download this package, open your command line interface and run npm install. This should install the following dependencies aswell: fs, inquirer, and path. If for some reason, you need to install the dependencies individually run npm install "dependency_name".

Next run the following command to start the app: "node index.js"

```bash
npm install 
```

```bash
npm install fs
```

## Usage 

The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

Make sure when you know how many team members you'd like to add to your team before hand and have their information ready. When the application prompts you to add another employee and the user selects "no", the application will end.

Note: Currently, only one manager can be added to the team. Additoinally, The folder generated will be called "output" and your html file will be named "team.html".

### Screenshots

![Deployed Application](https://user-images.githubusercontent.com/38272211/93007037-a8e7b880-f518-11ea-8658-9003e33030b9.JPG)

### Videos

[![Video Tutorial](https://img.youtube.com/vi/mvv6AWdpoyw/0.jpg)](https://www.youtube.com/watch?v=mvv6AWdpoyw)

## Testing

Testing Instructions: To test the JS libirary objects install jest and then run "npm test" in your CLI. If you'd like to write additional tests, change the scripts property in package json file.

```bash
npm install jest
```

```bash
npm test
```

## Future Updates
This application is a work in progress, future updates will include: 
1. Add a catch for inncorrect data types being passed in inquirer prompts.
2. Additional Styling for templates.
3. Options for adding additional managers to the team.

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: [Rogers-Development-Services](https://www.github.com/Rogers-Development-Services)

Email: [matthew.shane.rogers@gmail.com](matthew.shane.rogers@gmail.com)

## Credits

Code template provided by Trilogy Education 
Thanks to [Clyde Baron Rapinan](https://github.com/clydebaron2000) for providing guidance.

Grateful for [Alex Lui]() for debugging assistance and greater understanding of async await.

Thankful for [Dan Shahin](https://www.youtube.com/watch?v=nvPOUdz5PL4) for providing a workaround for uploading images to github for your README.md. 

## Licenses
Licensed under the GNU General Public License v3.0,MIT License lincense(s).