for (var i = 0; i < 9; i++){
    console.log(i);
}

//Objeto​
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça​
for (var prop in obj){
  console.log("obj." + prop + " = " + obj[prop]);
}

//Array
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
