class Duck{
  quack = () => console.log("Le canard cancane");
}
class Dog{  
  bark = () => console.log("Le chien aboie");
}
const animaux = [new Duck(), new Dog(), { quack: () => console.log("Un intrus cancane")}];
for (const animal of animaux) {
  if (animal.quack)
    animal.quack();
}
//Le canard cancane
//Un intrus cancane
