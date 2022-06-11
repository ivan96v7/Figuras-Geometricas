//Codigo del cuadrado
console.group("cuadrados");


function perimetroCuadrado(lado){
    return lado * 4;
} 

function areacuadrado(lado){

    return lado * lado;
}

console.groupEnd();



// --------------------------------------------------->
//codigo del triangulo 
console.group("trinagulo");

function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areatriangulo(base,altura){
    return (base / altura) / 2;
}

// -------------------------------------------------------->
//codigo del criculo

console.group("circulo");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * 2) * Math.PI;
}

console.groupEnd();

