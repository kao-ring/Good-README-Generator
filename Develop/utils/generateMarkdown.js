// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  **Description:** ${data.description}

  ![](https://img.shields.io/github/license/${data.name}/${data.title}?style=plastic&logo=appveyor)

  ## Table of Contents 

 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

 ## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license}.

## Contributing

${data.contributing}

## Tests

To run test program, use the following command line.
${data.test}

## Questions

If you have any questions about the repo, contact me at <${data.email}>.

You can find more of my work at [${data.name}](https://github.com/${data.name}).
  
  `;
}

module.exports = generateMarkdown;
