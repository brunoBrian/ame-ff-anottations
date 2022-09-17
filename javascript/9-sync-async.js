
// exemplo de sync (nao libera a thread)

for(var i=0; i <= 10; i++) {
  console.log(i);
}

console.log(11);


//  Async
console.log('inicio')
setTimeout(() => {
  console.log('executou timeout')
}, 1000);

console.log('fim')


console.log('inicio')

document.addEventListener('click', function() {
  console.log('clicou no documeto')
}, false)

console.log('fim')
