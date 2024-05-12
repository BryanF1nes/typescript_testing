function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Brendan", new Date());
function printCharacter(char) {
    console.log(`Characters name is ${char.name}`);
    console.log(`Characters age is ${char.age}`);
}
printCharacter({ name: "Bryan", age: 30 });
export {};
