//let numero1=null;
//let numero2=10;

//const persona={nombre:'andres', edad:30}
//console.log(persona);
//console.log("mi primer js");
//console.log(persona.edad);

//let primos=[2,3,5,7,11,13,17,19];
//const cursos=["ingles", " matematicas","ingenieria web"];
//console.log(primos);
//console.log(cursos);
//console.log(`la cantidad de numeros primos es: ${primos.length}`);

/*const personas=[
   {nombre:"pablo", edad:43},
   {nombre:"sandra", edad:21},
   {nombre:"pedro", edad:34},
   {nombre:"laura", edad:18}
];
//for (let i = 0; i < personas.length; i++) {
  //  console.log(`persona en la pocision: ${i}: ${personas[i].nombre} edad ${personas[i].edad}`);
    
//}

//function getpersonas() {
   // return {nombre:"pedro", edad:34};
//}
//console.log(getpersonas());

//const getpersonas=()=>({nombre:"laura", edad:18});
// console.log(getpersonas());
/*let existen= false;
for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad===21) {
        existen=true
    }
   
}
existen===true?console.log(`existen personas`):console.log(`no existen`);
*/
/*const productos=[
    {nombre:"azucar",
cantidad: 3,
precio:2000
},
{nombre:"sal",
cantidad: 4,
precio:1000
},
{nombre:"limon",
cantidad: 5,
precio:5000
},
{nombre:"arepas",
cantidad: 5,
precio:2500
},
{nombre:"panela",
cantidad: 1,
precio:4000
},
]
suma=0;
for (let i = 0; i < productos.length; i++) {
    console.log(`el precio de ${productos[i].nombre} ${productos[i].precio*productos[i].cantidad}`);
    suma=suma+(productos[i].cantidad*productos[i].precio);
   
}
console.log(`el precio total es: ${suma}`);
*/


const restaurantes=[
    
    {
        
        imagenes:'./imagenes/italiano_65_1.jpg',
     nombre:"Pacifico mar",
direccion: "Av 85 Nro. 45-85 Barranquilla",
describcion:"Deliciosa comida de mar"
}
    ,


{
    imagenes:document.getElementById("italiano"),
    nombre:"Italiano 65",
direccion: "Av 45 Nro. 1-85 Medellin",
describcion:"Deliciosa comida Italiana"
},


{
    nombre:"Fritos y mas ",
direccion: "calle 45 Medellin",
describcion:"Comida Rapida",

},

{
    
    nombre:"Pollo frito",
direccion: "Cr 32 #56 - 89 ",
describcion:"lo mejor del pollo"
}
];
 


let restauran = restaurantes.map(function(rest) {
    return ` 
            <div class="card">
               img src= ${rest.imagenes}
         <h4> ${rest.nombre}</h4>
         <p> ${rest.direccion}</p>
         <p> ${rest.describcion}</p>
          </div>
    `;
})
document.getElementById ("container").innerHTML=restauran;



/*busc=document.getElementById("buscar");
if (busc==rest.nombre) {
    return ` 
    <div class="card">
        
 <h4> ${rest.nombre}</h4>
 <p> ${rest.direccion}</p>
 <p> ${rest.describcion}</p>
  </div>
`;
} else {
    return `no se encontraron restaurantes`;
}
document.getElementById("contain").innerHTML=restauran;*/