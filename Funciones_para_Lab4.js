//Funciones para Laboratorio 

function tabla(){
    let numero = prompt("Ingresa el número para desplegar la tabla: ")
    numero = Number(numero)
    for(let i=1;i<=numero;i++){
        document.write(i,'|',i**2,'|',i**3,'<br>');
    }
}

function azar(){
     n1=Math.floor(Math.random());
     n2=Math.floor(Math.random()*100);
     const t1 = new Date().getTime();
     let respuesta = prompt("¿Cual es el resultado de sumar " + n1 + " y " + n2 + "? ")
     const t2 = new Date().getTime();
     const fin = t2-t1;
     respuesta = Number(respuesta);
     if (respuesta===n1+n2){
        alert("¡Resultado correcto! Tiempo para responder: " + fin + "ms");
     }
     else{
        alert("¡Resultado incorrecto! Tiempo para responder: " + fin + "ms");
     }
}

function contador(arreglo){
    let negativos=0
    let positivos=0
    let ceros=0
    for(let i=0;i<arreglo.length+1;i++){
        if(arreglo[i]<0){
            negativos++;
        }
        else if(arreglo[i]>0){
            positivos++;
        }
        else if(arreglo[i]===0){
            ceros++;
        }
    }
    alert("Cantidad de negativos: "+ negativos);
    alert("Cantidad de positivos: " + positivos);
    alert("Cantidad de ceros: "+ ceros);
}

function promedios(matriz){
    let promedio=[];
    let suma=0;
    for(let i=0; i<matriz.length;i++){
        suma=0;
        for(let j=0;j<matriz[i].length;j++){
            suma=suma+matriz[i][j];
        }
        promedio.push(suma/matriz[i].length);
    }
    alert("Promedio de los renglones de la matriz:");
    for(let i=0; i<promedio.length;i++){
        alert("Renglon " + (i + 1) + ": "+promedio[i]);
    }
}

function inverso(numero){
    numtxt=numero.toString();
    alert(numtxt.split('').reverse().join(''));
}

class hanoi{
    constructor(discos){
        this.discos = discos;
    }
    resolver(num,ini,med,fin){
        if (num <= 0) {
            alert("No hay discos que mover");
            return;
        }
        contador++;
        if (num == 1) {
            alert("Se mueve el disco " + num + " del palo " + ini + " al " + fin);
        }
        else {
            this.resolver(num - 1, ini, fin, med);
            alert("Se mueve el disco " + num + " del palo " + ini + " al " + fin);
            this.resolver(num - 1, med, ini, fin);
        }
    }
    cambiar_discos(){
        let cant = prompt("Ingresa la cantidad de discos que quieres:");
        cant = Number(cant);
        this.discos=cant;
    }
}

let torre = new hanoi(3);

/*

*/