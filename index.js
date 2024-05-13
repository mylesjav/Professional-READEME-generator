// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");


    inquirer.prompt([
    {
        message: "What is title of project?",
        type: "text",
        name: "title",
    },
    {
        message: "What is the description?",
        type: "text",
        name: "description",
    },{
        message: "What is installation?",
        type: "text",
        name: "installation",
    },{
        message: "What is the license?",
        type: "checkbox",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License"],
        name: "license",
    },{
        message: "What are the contribution guidelines?",
        type: "text",
        name: "contribution_guidelines",
    },{
        message: "What are the test instructions?",
        type: "text",
        name: "test_instruction",
    },{
        message: "What is your GitHub username?",
        type: "text",
        name: "username",
    },{
        message: "What is your email?",
        type: "text",
        name: "email",
    },
]).then(responses => {
    const readmeContent = generateMarkdown(responses);
    fs.writeFile("README.md", readmeContent, (err)=> {
        err ? console.log(`Error: ${err}`) : console.log("Readme saved.");
    });
});
