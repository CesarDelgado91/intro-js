
    const boxsalas = document.querySelector("#box-salas");
    const formBusqueda = document.querySelector("#form-busqueda");
    const inputName = document.querySelector("#inputName");


    const datosBusqueda = {
        nombre: ""
    }


    document.addEventListener("DOMContentLoaded", () => {
        mostarHTML(salas);
    })



function mostarHTML(salas){
    
    salas.forEach(sala => {
        const {nombre, modelo, precio, imagen, } = sala;

        const cardsala = document.createElement("div");
        cardsala.classList.add("col","mb-3");
        cardsala.innerHTML = `
        <div class="card  flex-column text-center">
            <div >
                <img src="${imagen}" class="img-fluid abject-fit" alt="">
            </div>
            <div class="card-body>
                <h2 class="card-title">${nombre}</h2>
             <p>${modelo}</p>
                <p>Precio</p>
                <p>${precio}</p>

            </div>
         </div>
         `;
        
        boxsalas.appendChild(cardsala);

        
    });
}


formBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
     
    datosBusqueda.nombre = inputName.value;
   
    
    formBusqueda.reset();
    
});

function filtrarSalas(){
    const resultado = salas.filter(filtrarName)

    
}


function filtrarName (sala) {
    const {nombre} = datosBusqueda;

    if(nombre){
        return sala.nombre == nombre;
    }
    
    return salas; 
}