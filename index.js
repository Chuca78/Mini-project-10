
const fs = require ('fs');
const inquirer= require('inquirer');

const generate_markdown= require('./utils/generateMarkdown');

function require_input(input_text){
    if(input_text){
      return true
    }
    return 'Please provide an answer, a response is required'
 }

//  creates an array of user questions
const questions = [
    // input
    {
    type: 'input',
    name: 'manager_name',
    message: 'Please enter the manager\'s name',
    default:'Big Boss',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'manager_employee_id',
    message: 'Please enter the manager\'s employee id',
    default:'123456',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'manager_email',
    message: 'Please enter the manager\'s email',
    default:'BigBoss@email.com',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'manager_office_number',
    message: 'Please enter the manager\'s office number',
    default:'123',
    validate: require_input,
    },


    // Todo: add logic for end of team
    // checkbox
    {
    type: 'checkbox',
    name: 'employee',
    message: 'Please select Engineer/Intern',
    choices: 
    ['Engineer','Intern'],
    },

  // todo: add logic for Engineer/Intern
    // if (employee === Engineer) {
    {
    type: 'input',
    name: 'engineer_name',
    message: 'Please enter the engineer\'s name',
    default:'Worker',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'engineer_id',
    message: 'Please enter the engineer\'s employee id',
    default:'123456',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'engineer_email',
    message: 'Please enter the engineer\'s email',
    default:'Engineer@email.com',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'engineer_github',
    message: 'Please enter the engineer\'s GitHub username',
    default:'SuperEngineer',
    validate: require_input,
    },

    // else{}

    // todo: add logic for Engineer/Intern
    {
    type: 'checkbox',
    name: 'employee2',
    message: 'Please select Engineer/Intern',
    choices: 
    ['Engineer','Intern'],
    },

    {
    type: 'input',
    name: 'intern_name',
    message: 'Please enter the intern\'s name',
    default: 'Shithead',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'intern_id',
    message: 'Please enter the intern\'s employee id',
    default:'123456',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'intern_email',
    message: 'Please enter the intern\'s email',
    default:'Intern@email.com',
    validate: require_input,
    },
    {
    type: 'input',
    name: 'intern_school',
    message: 'Please enter the intern\'s school',
    default:'UT Austin',
    validate: require_input,
    },


];



//  function to write HTML file
function write_file(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error){
            return console.log(error)
        } 
    });
    };

//  function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        console.log(response)
        const markdown= generate_markdown(response);
        console.log(markdown);
        write_file('index.html', markdown)
    })
    };
    
// Function call to initialize app
init();
