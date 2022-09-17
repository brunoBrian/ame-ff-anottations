// string
const evento = 'Fast Forward';
let empresa = 'Ame Digital';
var data = '16/09/2022';

// number
const idade = 10; 
const ano = 2022;
const valor = 1.5;

// boolean
const esta_frio = true;
const esta_calor = false;

// Objetos
var pessoa = {
    idade: 30,
    nome: 'Luiz'
};

pessoa.idade
pessoa.nome

pessoa.idade = 31

pessoa.idade
pessoa['idade']

// Arrays - chaveado por indices
var arrayDeNumeros = [1, 2, 3];
var arrayDeStrings = ['a', 'b', 'c'];
var arrayDeObjetos = [{
    nome: 'Bruno',
    idade: 'x'
}, {
    nome: 'Geovanna',
    idade: '?'
}];

arrayDeNumeros[0]
arrayDeStrings[2]
arrayDeObjetos[1].idade

// Funções
function somando(x, y) {
    return x + y;
}

// null
const nulo = null;

// undefined
let indefinido;