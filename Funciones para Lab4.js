//Funciones para Laboratorio 

function tabla(){
    let numero = prompt(-"Ingresa el número para desplegar la tabla: ")
    numero = Number(numero)
    for(let i=1;i===numero+1;i++){
        document.write(i,'|',i**2,'|',i**3,'\n');
    }
}

function azar(){
     n1=Math.random()*100;
     n2=Math.random()*100;
     const t1 = new Date();
     let respuesta = prompt("¿Cual es el resultado de sumar ", n1, " y ", n2, "? ")
     respuesta = Number(respuesta);
     if (respuesta===n1+n2){
        alert("¡Resultado correcto!");
     }
     else{
        alert("¡Resultado incorrecto!")
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
    document.write("Cantidad de negativos: ",negativos);
    document.write("Cantidad de positivos: ",positivos);
    document.write("Cantidad de ceros: ",ceros);
}

function promedios(matriz){

}

function inverso(numero){
    numtxt=numero.toString();
    return numtxt.split('').reverse().join('');
}


/*

*/