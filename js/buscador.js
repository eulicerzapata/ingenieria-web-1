
const restaurantes = [ 

    {
        imagen: ` <img src="imagenes/R_Pacificomar.jpg"/>`,
        nombre: "Pacifico mar",
        direccion: "Av 85 Nro. 45-85 Barranquilla",
        describcion: "Deliciosa comida de mar"
    }
    ,
    {
        imagen: (`<img src="imagenes/italiano_65_1.jpg"/>`),
        nombre: "Italian 65",
        direccion: "Av 45 Nro. 1-85 Medellin",
        describcion: "Deliciosa comida Italiana"
    },
    {
        imagen: (`<img src="imagenes/R_com_rapida_1.jpg"/>`),
        nombre: "Fritos y mas",
        direccion: "calle 45 Medellin",
        describcion: "Comida Rapida",

    },
    {
        imagen: (`<img src="imagenes/R_pollo_frito_1.jpg"/>`),
        nombre: "Pollo frito",
        direccion: "Cr 32 #56 - 89 ",
        describcion: "lo mejor del pollo "
    }
];

let restauran =  (rest)=>{
    return ` 
            <div class="card">
            ${rest.imagen}
         <h4> ${rest.nombre}</h4>
         <p> ${rest.direccion}</p>
         <p> ${rest.describcion}</p>
         
          </div>
    `;
}



function mifunction() {
    let busca = document.getElementById("buscar").value;
    let volean = false;
  
   for (let i = 0; i < restaurantes.length; i++) {
    a = restaurantes[i].nombre;
    

    if (busca===a) {
         volean=true
       document.getElementById("container").innerHTML =restauran(restaurantes[i]);  
    }
   }
    if (volean==false) {
        document.getElementById("container").innerHTML =" No se encontraron resultados..."; 
    }
 }






    
/* for (var i = 0; i < restaurantes.nombre; i++) {
        if (filter==restaurantes.nombre[i]) {
            document.getElementById("containr").innerHTML = restauran; 
        }
        else{
            document.getElementById("containr").innerHTML =" restauran"; 
        }
        }*/ 


/*
let restauran = restaurantes.map(function (rest) {
    return ` 
            <div class="card">
            ${rest.imagen}
         <h4> ${rest.nombre}</h4>
         <p> ${rest.direccion}</p>
         <p> ${rest.describcion}</p>
         
          </div>
    `;
})
*/

//document.getElementById("containr").innerHTML = restauran;





