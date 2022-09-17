

const somaNumeros = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(a + b); }, 2000);
    });
}

console.log('inicio');
console.log(somaNumeros(1,3));
somaNumeros(1,3).then(sum => { console.log(sum) }).catch(err => { console.log(err) })
console.log('fim');

const esperaAi = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', 2000)
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da Base', 1000)
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('exibindo dados')
    })

console.log('Exibido antes das promisses');