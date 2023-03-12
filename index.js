// Write your solution in this file!

var employee = {
    name :"Enock",
    streetAddress:"21. Parkhill 400 LA"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
   const newemployee = {...employee}
   newemployee[key]= value;

   return  newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee};
    delete newemployee[key];
    return newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}