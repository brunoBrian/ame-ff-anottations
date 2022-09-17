// Bloco de código que pode ser invocado

function hello() {
    console.log('hello world!');
}

function comParametro(valor) {
    console.log(valor);
}

function nomeCompleto(valor1, valor2) {
    console.log(valor1 + ' ' + valor2)
    console.log(`${valor1} ${valor2}`) //Template literals (Template strings)

    return `${valor1} ${valor2}`;
}

console.log(nomeCompleto); // nao invocou a funcao

const meuNome = nomeCompleto('Bruno', 'Sousa')

console.log(meuNome);

// escopo de funcao

function nome() {
    const meuNomeNaFuncao = 'Bruno';
}

// Maneiras de declarar funçao
function fun2() {
    console.log('oie');
}

// atribuindo funcao a uma variavel
const souUmDado = function() {
    console.log('oie');
}
souUmDado()

// Arrow function
const fun1 = () => {
    console.log('oie');
}