
// todo: check variable names
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const questionList=[

{prompt:      
    {
    type: 'input',
    name: 'name',
    message: "Please type the {{Position}}'s name",
    },
    for:'all'
},

{prompt:
    {
    type: 'input',
    name: 'email', 
    message: "Please type the {{Position}}'s email address",
    },
    for:'all'
},

{prompt:     
    {
    type: 'input',
    name: 'officeNumber', 
    message: 'Please enter the manager\'s office number',
    default:'123',
    },
    for:'manager'
},

{prompt:         
    {
    type: 'input',
    name: 'github', 
    message: 'Please enter the engineer\'s GitHub username',
    default:'SuperEngineer',
    },
    for:'engineer'
},

{prompt:
    {
    type: 'input',
    name: 'school', 
    message: 'Please enter the intern\'s school',
    default:'UT Austin',
    },
    for:'intern'
}, 

{prompt:
    {
    type: "list", 
    message: 'Which type of team member would you like to add?',
    name: "position", 
    choices: [
    {name: "Engineer", value: "engineer"},
    {name: "Intern", value: "intern"},
    {name: "Done Building Team", value: "done"}
    ]
    },               
    for:'all'
},
]; 


// todo: clean up this section
function pull_Qs_by(employee_type){
    const question_shortlist=questionList.filter(function(question_object){
        return (question_object.for==='all' || question_object.for===employee_type);
    });
    
    const modified_Qs=question_shortlist.map(function(question_object){
        const x={...question_object.prompt};
        x.message=x.message.replace ("{{Position}}", employee_type);
        return x;
    });
    return modified_Qs;
};

generate_team_profile()
async function generate_team_profile(){
    const employee_list=[];
    let id=1;
    let employee_type='manager';
    
    while (employee_type !=='done') {
        const typed_answer =await inquirer.prompt(pull_Qs_by(employee_type));

        switch(employee_type){
            case 'manager':
                employee_list.push(new Manager(typed_answer.name, id, typed_answer.email, typed_answer.officeNumber));
                break;

             case 'engineer':
                employee_list.push(new Engineer(typed_answer.name, id, typed_answer.email, typed_answer.github));
                break; 

             case 'intern':
                 employee_list.push(new Intern(typed_answer.name, id, typed_answer.email, typed_answer.school));
                // Note that it is not necessary to break out of the block case
                break;
        };
        id++;
        employee_type=typed_answer.position;
    };

const renderHTML=render(employee_list);

fs.access (OUTPUT_DIR, function(err){

    if (err){
        fs.mkdirSync(OUTPUT_DIR);
    };

    fs.writeFile(outputPath, renderHTML, function(err){
        if (err) throw err;
        console.log("Your new team profile has been generated and stored in the output folder as team.html")
    })
})
};





