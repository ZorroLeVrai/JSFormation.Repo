interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

//définir un type Employee qui possède les propriétés de `Identity` et de `Contact`
type Employee = Identity & Contact;

//définir un type Employee qui possède les propriétés de `BusinessPartner` et de `Contact`
type Customer = BusinessPartner & Contact;

//définir un type qui est soit un customer soit un employee
type User = Customer | Employee;

const employee: Employee = {
  id: 7,
  name: "James",
  email: "james@bond.com",
  phone: "0602030405"
};

const customer: Customer = {
  name: "Joyce",
  credit: 888,
  email: "customer@gmail.com",
  phone: "06123456"
}

//type predicates
function isEmployee(user: User): user is Employee {
  return 'id' in user;
}

function displayUser(user: User)
{
  //if ('id' in user)
  if (isEmployee(user))
  {//user est un employee
    const { id, name } = user;
    console.log({id, name});
  }
  else
  {//user est un customer
    const { name, credit } = user;
    console.log({name, credit});
  }
}

displayUser(employee);
displayUser(customer);