// add values to object

const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defence: 45 };

// Bad code

// pikachu['hp'] = stats.hp;
// pikachu['attack'] = stats.attack;
// pikachu['defence'] = stats.defence;

// OR

// const lv10 = Object.assign(pikachu, stats);
// const lv11 = Object.assign(pikachu, stats);
// console.log(lv10, lv11)

// Good Code

const lv12 = { ...pikachu, ...stats };
const lv13 = { ...pikachu, hp: 40 };
console.log(lv12, lv13)

// ---------------------------------------------------------------
// add element to array

let pokemon = ['Bob', 'Jon', 'Tom'];

// Bad Array Code

pokemon.push('Robert');
pokemon.push('Smith');

// Good Array Code

pokemon = [...pokemon, 'King', 'Britey', 'Micheal'];
pokemon = ['King', 'Britey', 'Micheal', ...pokemon];

console.log(pokemon)





