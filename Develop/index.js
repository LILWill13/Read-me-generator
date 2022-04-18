
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
  
`# ${answers.title}
## Description
${answers.discription}\n
## Installation\n
- ${answers.installation}\n
## Usage\n
- ${answers.usage}\n
## Contributing\n
- ${answers.contribution}\n
## Test-Instructions\n
- ${answers.tests}\n
## License\n
- ${answers.license}\n
## Questions \n
- Github: ${answers.username}\n
- ${answers.email}\n
## Tabel of contents\n
- [Description](#description)\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contributing](#contributing)\n
- [License](#license)\n
- [Test-Instructions](#test-instructions)\n
- [Questions](#questions)` ;

const init = () => {

    questions()
      .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
      .then(() => console.log('Successfully wrote a README.md'))
      .catch((err) => console.error(err));
};

init();
