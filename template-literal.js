const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}
const { name, size, skill } = horse;

function horseAge(str, age) {
    console.log(str)

    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} year`;
}

// back ticks to call a function
const bio2 = horseAge`this horse is ${horse.age}`;

console.log(bio2)