// Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto.

class Pessoa {
    // O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    constructor(nome, sobrenome, idade) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }

    // Adicionando metodo ao construtor
    jutarNomes() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Bruno', 'Brian', 20)

console.log(pessoa);

pessoa.idade = 21

console.log(pessoa);

console.log(pessoa.jutarNomes());

