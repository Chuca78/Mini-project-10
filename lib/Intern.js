
const Employee=require("./Employee");

// building the intern object, extending the employee object
class Intern extends Employee {
    constructor (name, id, email, school){
    super (name, id, email);
    this.school=school;
    };
    
// these are the functions for the intern objects
getSchool(){
    return this.school;
};

getRole(){
    return "Intern";
};

};

module.exports=Intern
