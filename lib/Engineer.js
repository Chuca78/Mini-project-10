
const Employee=require('./Employee');

// building the engineer object, extending the employee object
class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github=github;
    };
    
// these are the functions for the engineer objects
getGithub(){
    return this.github;
};

getRole(){
    return "Engineer";
};

};

module.exports=Engineer