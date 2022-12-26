const Arreglo = [];
const result = [];
const result2 = [];
const result3 = [];
const result4 = [];
let Suma = 0;

for (let i = 1; i <= 20; i++) {
  Arreglo.push(i);
}
console.log(`Numeros ${Arreglo} `);

for (let numbers of Arreglo) {
  if (numbers % 2 === 0) {
    result.push(numbers);
  } else {
    result2.push(numbers);
  }
}

for (let j = 0; j <= Arreglo.length - 1; j++) {
  result3.push(Arreglo[j] * 2);
}

for (let i = 1; i <= 20; i++) {
  result4.push(i);
}

result4.push(21, 22);

for (let i of Arreglo) {
  Suma += i;
}

console.log(`numeros pares ${result} `);
console.log(`numeros impares ${result2}`);
console.log(`multiplicacion ${result3}`);
console.log(`agregar dos numeros ${result4}`);
console.log("La suma es: " + Suma);
