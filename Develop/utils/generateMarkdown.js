// function to generate markdown for README
function generateMarkdown(data) {
  return `![](https://img.shields.io/github/license/${data.name}/${data.title}?style=plastic&logo=appveyor);
  # ${data.title};

  ### Description ${data.description};

  ## Table of Contents 

 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

 ## Installation

To install necessary independencie, use the following command:
${data.install}

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
