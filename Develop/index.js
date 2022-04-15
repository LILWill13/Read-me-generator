
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a discription of your project.',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'How to Install your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How would your project be used',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to your project',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What licenses would you like to your project?',
        choices: ['IBM', 'MIT', 'Mozilla', 'Zlib'],
        name: 'license',
    },

])
}

const generateReadme = (answers) =>
`
# ${answers.title}
## Description
${answers.discription}
## Installation
- ${answers.installation}
## Usage
- ${answers.usage}
## Contributing
- ${answers.contribution}
## Test-Instructions
- ${answers.tests}
## License
[MIT](https://choosealicense.com/licenses/mit/)
## Questions 
- ${answers.username}
- ${answers.email}
## Tabel of contents
-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[Contributing](#Contributing)
-[Test-Instructions](#Test-Instructions)
-[Questions](#Questions)
`;

console.log(generateReadme)
// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
      .then(() => console.log('Successfully wrote a README.md'))
      .catch((err) => console.error(err));
};
// Function call to initialize app
init();
