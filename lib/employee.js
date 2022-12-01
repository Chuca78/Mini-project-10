// this builds the employee object 
class Employee {

    constructor (name, id, email) {
        this.name=name;
        this.id=id;
        this.email=email;
    };

// these are the basic functions for every employee
getName(){
    return this.name;
};

getId(){
    return this.id;
};

getEmail(){
    return this.email;
};

getRole(){
    return "Employee";
};

};

module.exports=Employee;