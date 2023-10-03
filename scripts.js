/**
 * 
 *@author Laura López Alonso
 *GitHub: 
 *
 */
const numero = prompt('Inserta un número');

if (numero > 0){
    alert('El número ingresado es positivo');
    console.log('Positivo');
}

else if (numero  < 0){
    alert('El número ingresado es negativo');
    console.log('Negativo');
}

else if (numero  == 0){
    alert('El número ingresado es igual a cero');
    console.log('Igual a 0');
}
else{
    alert('El valor no es válido');
    console.log('ERROR');
}

