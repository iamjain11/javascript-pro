const turtle = {
    name: 'bob',
    legs: 4,
    meal: 10,
    shell: true,
    type: 'amphibious',
    diet: 'berries'
}

// Bad Code

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet} `;
}
console.log(feed(turtle));

// Good Code

function feed1({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet} `;
}
console.log(feed1(turtle));

// OR

function feed2(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet} `;
}
console.log(feed2(turtle));