/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   console.log(string);
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   console.log( x + y );
   return x + y;
}

function resta(x, y) {
   console.log( x - y );
   return x - y;
}

function divide(x, y) {
   console.log( x / y );
   return x / y;
}

function multiplica(x, y) {
   console.log( x * y );
   return x * y;
}

function obtenerResto(x, y) {
   console.log( x % y );
   return x % y;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
