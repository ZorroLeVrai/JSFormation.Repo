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
type Employee = unknown;

//définir un type Employee qui possède les propriétés de `BusinessPartner` et de `Contact`
type Customer = unknown;

//définir un type qui est soit un customer soit un employee
type User = unknown;

const employee: Employee = {
  id: 7,
  name: "James",
  email: "james@bond.com",
  phone: "0602030405"
};

const customer: Customer = {
  name: 11,
  credit: 888,
  email: "customer@gmail.com",
  phone: "06123456"
}

function displayUser(user: User)
{
  if (true)
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
