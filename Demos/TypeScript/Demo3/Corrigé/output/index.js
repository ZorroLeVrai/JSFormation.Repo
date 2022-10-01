"use strict";
const employee = {
    id: 7,
    name: "James",
    email: "james@bond.com",
    phone: "0602030405"
};
const customer = {
    name: "Joyce",
    credit: 888,
    email: "customer@gmail.com",
    phone: "06123456"
};
function isEmployee(user) {
    return 'id' in user;
}
function displayUser(user) {
    //if ('id' in user)
    if (isEmployee(user)) { //user est un employee
        const { id, name } = user;
        console.log({ id, name });
    }
    else { //user est un customer
        const { name, credit } = user;
        console.log({ name, credit });
    }
}
displayUser(employee);
displayUser(customer);
//# sourceMappingURL=index.js.map