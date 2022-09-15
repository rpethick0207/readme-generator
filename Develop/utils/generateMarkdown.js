// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
  
    `;
  } else {
    return ' ';
  }
 }


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Languages](#languages)
  * [License](#license)
  * [Contributing](#contribution)
  * [Test Instructions](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.description}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ## ${renderLicenseSection(data.license)}
  ## [Contribution](#table-of-contents)
  ${data.contributing}
  
  ## [Tests](#table-of-contents)
  ${data.tests}
  ## [Questions](#table-of-contents)
  Please contact me with any questions:
  [GitHub](https://github.com/${data.username})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;