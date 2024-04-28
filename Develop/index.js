// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");



const generateHTML = ({ title, description, email, github}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <div class="container">
                <h1>The name of my project is ${title} </h1>
                <p>${description}</p>
                <p>Installation</p>
                <p>Usage</p>
                <p>Contributing</p>
                <p>Tests</p>
                <p>Questions</p>
            </div>
        </header>
    </body>
    </html>`;
}

inquirer.prompt([
    {
        message: "What is title?",
        type: "text",
        name: "title",
    },
    {
        message: "What is description?",
        type: "text",
        name: "description",
    },{
        message: "What is title?",
        type: "text",
        name: "title",
    },{
        message: "What is title?",
        type: "text",
        name: "title",
    },{
        message: "What is title?",
        type: "text",
        name: "title",
    },
]).then(responses => {
    console.log(responses);
    fs.writeFile("index.html", generateHTML(responses)), (err)=> {
        err ? console.log('Error: ${err)') : console.log("Readme saved.")
    }
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
