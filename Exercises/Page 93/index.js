// Ejercicio de la pagina 93 del libro para optimizar codigo y evaluar su eficiencia en terminos de la notacion Big O
function containsX(string) {

    // Mi solucion - Mas rapida
    return string.includes('X');
    // Solucion del libro
    /* foundX = false;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'X') {
            return true
        }
    }

    return false; */


}

var startTime = performance.now()

containsX('SEÑOR X');

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
containsX('QUE ROLLO');
containsX('EXITO');

