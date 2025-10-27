/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 10;
let b = 5;

console.log("Suma: " + (a + b)); // Suma
console.log("Resta: " + (a - b)); // Resta
console.log("Multiplicación: " + (a * b)); // Multiplicación
console.log("División: " + (a / b)); // División
console.log("Módulo: " + (a % b)); // Módulo
console.log("Exponente: " + (a ** b)); // Exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable = 10;
myVariable += 5; // Suma con asignación
mayVariable -= 5; // Resta con asignación
myVariable *= 5; // Multiplicación con asignación
myVariable /= 5; // División con asignación
myVariable %= 5; // Módulo con asignación
myVariable **= 5; // Exponente con asignación

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log( a > b); // Mayor que
console.log( a < b); // Menor que
console.log( a >= b); // Mayor o igual que
console.log( a <= b); // Menor o igual que
console.log( a == b); // Igualdad por valor 

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log( a < b); // Menor que
console.log( a > b); // Mayor que
console.log( a <= b); // Menor o igual que
console.log( a >= b); // Mayor o igual que
console.log( a != b); // Desigualdad por valor

// 5. Utiliza el operador lógico and

console.log( a > b && b > 0); // Mayor que y mayor que 0
console.log( a < b && b < 10); // Menor que y menor que 10
console.log( a >= b && b <= 5); // Mayor o igual que y menor o igual que 5
console.log( a <= b && b == 5); // Menor o igual que y igual a 5
console.log( a != b && b != 0); // Desigualdad por valor y diferente de 0

// 6. Utiliza el operador lógico or

console.log( a > b || b > 0); // Mayor que o mayor que 0
console.log( a < b || b < 10); // Menor que o menor que 10
console.log( a >= b || b <= 5); // Mayor o igual que o menor o igual que 5
console.log( a <= b || b == 5); // Menor o igual que o igual a 5
console.log( a != b || b != 0); // Desigualdad por valor o diferente de 0   

// 7. Combina ambos operadores lógicos

console.log( (a > b && b > 0) || (a < b)); // Combinación 1
console.log( (a < b || b < 10) && (a > 0)); // Combinación 2
console.log( (a >= b && b <= 5) || (a == 10)); // Combinación 3
console.log( (a <= b || b == 5) && (b > 0)); // Combinación 4
console.log( (a != b && b != 0) || (a == 10)); // Combinación 5

// 8. Añade alguna negación

console.log( !(a < b)); // Negación 1
console.log( !(a > b)); // Negación 2           
console.log( !(a == b)); // Negación 3
console.log( !(a != b)); // Negación 4
console.log( !(b <= 0)); // Negación 5

// 9. Utiliza el operador ternario
console.log( a > b ? "a es mayor que b" : "a no es mayor que b"); // Ternario 1
console.log( a < b ? "a es menor que b" : "a no es menor que b"); // Ternario 2
console.log( a == b ? "a es igual a b" : "a no es igual a b"); // Ternario 3
console.log( a != b ? "a es diferente de b" : "a no es diferente de b"); // Ternario 4
console.log( b > 0 ? "b es mayor que 0" : "b no es mayor que 0"); // Ternario 5     

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log( (a + b) > 10 && (a - b) < 10); // Combinación 1
console.log( (a * b) == 50 || (a / b) == 2); // Combinación 2
console.log( (a % b) == 0 && (a ** b) > 1000); // Combinación 3
console.log( ((a + b) / 3) >= 5 || ((a - b) * 2) <= 10); // Combinación 4
console.log( !( (a * b) < 100) && ( (a / b) == 2) ); // Combinación 5   
