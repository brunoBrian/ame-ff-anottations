interface PessoaObjType<T> {
    name: string;
    idade: number;
    sexo?: 'masculino' | 'feminino';
    nascimento: T;
}

// Objetos
let pessoa: PessoaObjType<string | number> = {
    idade: 90,
    name: 'bruno',
    sexo: 'masculino',
    nascimento: 'Bruno'
} 

let pessoa2: PessoaObjType<boolean> = {
    idade: 90,
    name: 'bruno',
    sexo: 'masculino',
    nascimento: true
} 


// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma2);


let myName: string = 'Luiz';
let age: number = 0b1010;
let adulto: boolean = true;

// // Arrays
let arrayNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];