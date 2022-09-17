let c = 3;
let f = 1;

console.log(c);
console.log(f);

if(c === 3) {
    f = 3
}

console.log(c);
console.log(f);

if(c === f) {
    c = 99
} else {
    c = 100
}

console.log(c);
console.log(f);


const time = 22;
let greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


// Conndicional ternario
const maiorIdade = 9 > 18 ? true : false;

console.log(maiorIdade);
