
const Employee=require('./Employee')

// building the manager object, extending the employee object
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber=officeNumber
    };

// these are the functions for the manager object
getOfficeNumber (){
    return this.officeNumber
};

getRole(){
    return 'Manager'
};

};

module.exports=Manager