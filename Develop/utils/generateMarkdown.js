// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  switch (license) {
    case "Apache":
      return "https://img.shields.io/github/license/saltstack/salt";
      break;
    case "Gnu":
        return "https://img.shields.io/badge/License-GNU%20GPL-blue";
        break;
    case "MIT":
          return "https://img.shields.io/badge/license-MIT-blue";
          break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      return "https://www.apache.org/licenses/"
      break;
    case "Gnu":
        return "https://www.gnu.org/licenses/gpl-3.0"
        break;
    case "MIT":
          return "https://opensource.org/licenses/MIT"
          break;
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
 const badge = renderLicenseBadge(license);
 const link = renderLicenseLink(license);
 return `## License

 ${badge}

 This project is licensed under the [${license}](${link}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}





## title


## ${data.description} 

  

  ## Table of Contents 

  * ${data.installation}(#installation)

  * [Usage](#usage)
  
  * [Contribution_guidelines](#contribution_guidelines)

  * [Test_instruction](#test_instruction)

  * [Questions](#questions)

  My username is ## username 

  My email is ## email

  `;
}
  
  module.exports = generateMarkdown;