//Codigo del cuadrado
console.group("cuadrados");
const ladocuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

const areacuadrado = ladocuadrado * 4;

console.log("El area del cuadrado es: " + areacuadrado + "cm^2");

console.groupEnd();

//codigo del triangulo 

console.group("trinagulo");
const ladotrinagulo1 = 10;
const ladotrinagulo2 = 10;
const basetrinagulo3 = 5;

console.log("los lados del triunagulo miden " + ladotrinagulo1 + "cm, " + ladotrinagulo2 + "cm, " + basetrinagulo3 + "cm");

const alturatriangulo = 5.5;

console.log("La altura del triangulo es de:" + alturatriangulo + "cm");

const perimetrotriangulo = ladotrinagulo1 + ladotrinagulo2 + basetrinagulo3;

console.log("El perimetro del triangulo es: " + perimetrotriangulo);

const areatriangulo = (basetrinagulo3 * alturatriangulo) / 2;

console.log("El area del trinagulo es: " + areatriangulo + "cm^2");
console.groupEnd();

//codigo del criculo

console.group("circulo");

const radiocirculo = 4;

console.log("El radio del criculo es: " + radiocirculo);

const diametroCirculo = radiocirculo * 2;

console.log("el diametro del circulo es: " + diametroCirculo);

const pi = Math.PI;

console.log(" el pi es: " + pi);

const  perimetroCirculo = diametroCirculo * pi;
console.log("el perimetro del circulo es: " + perimetroCirculo);

const areaCirculo = (radiocirculo * radiocirculo) * pi;
console.log("El area del circulo es: " + areaCirculo);
document.write("El area del circulo es: " + areaCirculo)

console.groupEnd();

