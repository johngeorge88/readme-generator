const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')

// array of questions for user
const Questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of the Project'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list any third party assets, etc.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add the instructions for testing'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add guidelines to tell people how to contribute to this project'
        },
        {
            type: 'input',
            name: 'gitName',
            message: 'Please provide a link to your github profile'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select a license from the list below.",
            choices: [
                {
                    message: "Apache 2.0",
                    key: "Apache 2.0",
                    value:
                        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                },
                {
                    message: "MIT",
                    key: "MIT",
                    value:
                        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                },
                {
                    message: "ISC",
                    key: "ISC",
                    value:
                        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
                },
                {
                    message: "IBM Public license",
                    key: "IBM Public license",
                    value:
                        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                },
                {
                    message: "Mozilla Public license",
                    key: "Mozilla Public license",
                    value:
                        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
                },
                {
                    message: "Artistic license 2.0",
                    key: "Artistic license 2.0",
                    value:
                        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
                },
            ],
        },
    ]);
}
Questions()
    .then(projectData => {
        const pageMD = generatePage(projectData);
        writeToFile('Readme.md', pageMD);
    });

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err)
            throw new Error(err);
    }
        console.log("Readme is successfully created")
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
