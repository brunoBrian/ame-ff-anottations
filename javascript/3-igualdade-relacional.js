// Igualdade
const a = 10
const b = 30

a == b

a != b

const c = '38'
const d = 38

// Condicional fraca
a == b // true
a != b // false

// Condicional forte
a === b // false
a !== b // true

console.log(
    d == c, // true
    d != c, // false

    d === c, // false
    d !== c // true
);

const e = 10
const f = 30

// Relacional
console.log(
    e > f,
    e < f,
    e >= f,
    e <= f
);