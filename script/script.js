/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let nombresPlanetas = Array ('Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno');
let distancia = (6, 3, "67");
const tamaño = [];


console.log(nombresPlanetas);
console.log(distancia);
console.log(tamaño);


for (let index = 0; index < nombresPlanetas.length; index++) {
  console.log(nombresPlanetas[index]);
}

for (const key in distancia) {
  if(distancia[key] === '5') {
    console.log('Se encontró la distancia')
  } else {
    console.log('No se encontró la distancia')
  }
}
