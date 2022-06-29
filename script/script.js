/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let nombresPlanetas = Array ('Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno');
let distancia = (6, 3, "67");
const tamaño = [];


console.log(nombresPlanetas);
console.log(distancia);
console.log(tamaño);


let i = 0;
while (i <= nombresPlanetas.length - 1) {
  console.log(i);
  console.log(nombresPlanetas[i]);
  i = i + 1;
}

for (let index = 0; index < nombresPlanetas.length; index++) {
  console.log(nombresPlanetas[index]);
}

for (const planeta of nombresPlanetas) {
  console.log(planeta);
}

for (const key in distancia) {
  if(distancia[key] === '5') {
    console.log('Se encontró la distancia')
  } else {
    console.log('No se encontró la distancia')
  }
}

nombresPlanetas.forEach((value, index, array) => {console.log('planeta', index, value)});

let resultadoMap = nombrePlanetas.map((planetas, index) => {return(console.log(`El planeta ${planetas} tiene tamaño de: ${tamaño[index]}`))});

