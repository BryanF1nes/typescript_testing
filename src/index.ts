export {};

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());

type Character = {
  name: string;
  age: number;
};

function printCharacter(char: Character) {
  console.log(`Characters name is ${char.name}`);
  console.log(`Characters age is ${char.age}`);
}

printCharacter({ name: "Bryan", age: 30 });
