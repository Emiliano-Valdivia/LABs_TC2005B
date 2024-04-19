const filesystem = require('fs');

function promedio(arreglo){
    let suma=0;
    for(let i=0;i<arreglo.length;i++){
        suma=suma+arreglo[i];
    }
    const promedio = suma/arreglo.length;
    console.log(promedio);
};

function escribir(cadena){
    filesystem.writeFileSync('prueba.txt',cadena);
};

function resolverHanoi(discos, ini, med, fin){
    if (discos <= 0) {
        console.log("No hay discos que mover");
        return;
    }
    if (discos == 1) {
        console.log("Se mueve el disco " + discos + " del palo " + ini + " al " + fin);
    }
    else {
        resolverHanoi(discos - 1, ini, fin, med);
        console.log("Se mueve el disco " + discos + " del palo " + ini + " al " + fin);
        resolverHanoi(discos - 1, med, ini, fin);
    }
}

promedio([1, 2, 3, 4, 5, 6, 7, 8, 9]);
escribir("Hola buenas me llamo mosca");
resolverHanoi(5, 1, 2, 3);