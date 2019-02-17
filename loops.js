const orders = [
    500,
    30,
    99,
    15,
    223
];

// Bad Loop Code

let total = 0;
let withTax = [];
let highValue = [];

for (i = 0; i < orders.length; i++) {

    // reduce
    total += orders[i];

    // map
    withTax.push(orders[i] * 1.1); // add 10 % tax

    // filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}

console.log(total, withTax, highValue);

// Good Loop Code

let total1 = orders.reduce((acc, cur) => acc + cur);//acc- accumulated value, cur- current value

let withTax1 = orders.map((v) => v * 1.1);

let highValue1 = orders.filter((v) => v > 100);

console.log(total1, withTax1, highValue1)