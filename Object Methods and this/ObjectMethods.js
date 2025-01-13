// Define an object 'Person' with properties and a method to greet.
const Person = {
  name: "Ebenezer",
  age: 20,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  },
};

// Create another object 'anotherPerson' with different properties.
const anotherPerson = {
  name: "Antwi",
  age: 25,
};

// Use the 'call' method to call 'Person.greet' with 'anotherPerson' as the context.
Person.greet.call(anotherPerson);

// Use the 'apply' method to call 'Person.greet' with 'anotherPerson' as the context.
Person.greet.apply(anotherPerson);

// Use 'bind' to create a new function with 'anotherPerson' bound as the context.
const greetAnotherPerson = Person.greet.bind(anotherPerson);

// Call the newly bound function.
greetAnotherPerson();
