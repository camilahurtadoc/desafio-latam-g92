const inputTareas = document.querySelector("#tareaInput");
const btnAgregar = document.querySelector("#btnTarea");
const listaTareas = document.querySelector("#listaTareas");
const listaId = document.querySelector("#listaId");
const cuentaTareas = document.querySelector("#cuentaTareas");

const tareas = [{id: 1, descripcion: "Comprar pan"}, {id: 2, descripcion: "Bañar al perro"}, {id: 3, descripcion: "Terminar desafío 5"}];
renderTareas(tareas)


btnAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTareas.value;
    tareas.push({id: Date.now(), descripcion:nuevaTarea});
    inputTareas.value = "";

    renderTareas(tareas)
})


function agregarItemsALista(arreglo) {
    let htmlGeneral = "";
    for (let item of arreglo){
        htmlGeneral += `
        <li>${item.descripcion} <button onclick="borrarTarea(${item.id})">Eliminar</button></li>
        `
    }
    return htmlGeneral;
}

function agregarIdALista(arreglo) {
    let htmlListaId = "";
    for (let item of arreglo){
        htmlListaId += `
        <li>${item.id}</li>
        `
    }
    return htmlListaId;
}

function borrarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id)

    if (index !== -1) {
        tareas.splice(index, 1);
    }
    
    renderTareas(tareas)
}

function renderTareas(arreglo) {
    listaTareas.innerHTML = agregarItemsALista(arreglo);
    listaId.innerHTML = agregarIdALista(arreglo);
    cuentaTareas.innerHTML = `<p>Cantidad de tareas: ${arreglo.length}</p>`
}

const buscarInput = document.querySelector("#buscarInput");
const btnBuscar = document.querySelector("#btnBuscar");

btnBuscar.addEventListener("click", () => {
    const frase = buscarInput.value;
    console.log(frase)
    const tareasFiltradas = tareas.filter( 
        tarea => tarea.descripcion.includes(frase)
    
     );

    renderTareas(tareasFiltradas)
})