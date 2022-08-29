const employee ={name:'Sam' ,  streetAddress: '11 Broadway'};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee ={...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const updatedemployee = updateEmployeeWithKeyAndValue(employee, streetAddress, 'mfangano');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
const desUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, 'tommboya');

function deleteFromEmployeeByKey(employee, key){
    const newEmployee ={...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }