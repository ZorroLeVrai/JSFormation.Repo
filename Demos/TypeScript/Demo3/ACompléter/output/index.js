"use strict";
const employee = {
    id: 7,
    name: "James",
    email: "james@bond.com",
    phone: "0602030405"
};
const customer = {
    name: 11,
    credit: 888,
    email: "customer@gmail.com",
    phone: "06123456"
};
function displayUser(user) {
    if ('id' in user) {
        const { id, name } = user;
        console.log({ id, name });
    }
    else {
        const { name, credit } = user;
        console.log({ name, credit });
    }
}
//# sourceMappingURL=index.js.map