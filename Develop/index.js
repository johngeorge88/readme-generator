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
            message: 'Provide a description of the project: (Required)',
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
            message: 'Please add installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of the Project:'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list any third parties:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add the instructions for testing:'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Add guidelines to tell people how to contribute to this project:'
        },
        {
            type: 'input',
            name: 'gitName',
            message: 'Please provide a link to your github profile:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license from the list below',
            choices: ['MIT', 'Apache 2.0', 'ISC', 'Mozilla Public license', 'IBM Public license', 'Artistic license 2.0']
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
        console.log("Readme is successfully created")
})
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
