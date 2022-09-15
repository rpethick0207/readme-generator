const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// Create an array of questions for user input

const questions = [

        {
            type: "input",
            name: "author",
            message: "What is your name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },

        {
            type: "input",
            name: "title",
            message: "What is the project's name? (Required)",
            validate: projnameInput => {
                if (projnameInput) {
                  return true;
                } else {
                  console.log('Please enter the project name!');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of the project. (Required)",
            validate: descInput => {
                if (descInput) {
                  return true;
                } else {
                  console.log('Please enter project description!');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "usage",
            message: "What should the user know about using this project?"
        },

        {
            type: "list",
            name: "license",
            message: "What license does your project have?",
            choices: ["agpl-3.0", "apache-2.0", "bsl-1.0", "gpl-3.0", "lgpl-3.0", "mit", "mpl-2.0", "unlicense", "no license" ]
        },

        {
            type: "input",
            name: "languages",
            message: "Which coding languages/libraries are used in this project?"
        },

        {
            type: "input",
            name: "installation",
            message: "What commands should be used to install dependencies?"
        },

        {
            type: "input",
            name: "tests",
            message: "What commands should be used to test the project?"
        },

        {
            type: "input",
            name: "contribution",
            message: "What do other developers need to know about contributing to this project?"
        },
];

// Create a function to write README file

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// Create a function to initialize app

const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
};

// Function call to initialize app

init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})