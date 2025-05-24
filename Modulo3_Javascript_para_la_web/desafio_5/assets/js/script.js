const inputTareas = document.querySelector("#tareaInput");
const btnAgregar = document.querySelector("#btnTarea");
const listaTareas = document.querySelector("#listaTareas");
const listaId = document.querySelector("#listaId");
const cuentaTareas = document.querySelector("#cuentaTareas");
const cuentaTareasRealizadas = document.querySelector("#cuentaTareasRealizadas");
const checkboxRealizada = document.querySelector("#inputCheckbox")

const tareas = [{id: 1, descripcion: "Comprar pan", realizada: false}, {id: 2, descripcion: "Bañar al perro", realizada: false}, {id: 3, descripcion: "Terminar desafío 5", realizada: false}];
renderTareas(tareas)


btnAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTareas.value;
    tareas.push({id: Date.now(), descripcion:nuevaTarea, realizada: false});
    inputTareas.value = "";

    renderTareas(tareas)
})



function agregarItemsALista(arreglo) {
    let htmlGeneral = "";
   
    for (i = 0; i < arreglo.length; i++){
        if (arreglo[i].realizada === true) {
            htmlGeneral += `
            <li style="color: blue">${arreglo[i].descripcion} <input type="checkbox" onchange="tareaRealizada(${arreglo[i].id})" checked></input><button onclick="borrarTarea(${arreglo[i].id})">Eliminar</button></li>
            `
        } else {
            htmlGeneral += `
            <li>${arreglo[i].descripcion} <input type="checkbox" onchange="tareaRealizada(${arreglo[i].id})"></input><button onclick="borrarTarea(${arreglo[i].id})">Eliminar</button></li>
            `
        }
    }    
    return htmlGeneral;
}



function agregarIdALista(arreglo) {
    let htmlListaId = "";

    for (i = 0; i < arreglo.length; i++){
        if (arreglo[i].realizada === true) {
            
            htmlListaId += `
            <li style="color: blue">${arreglo[i].id}</li>
            `
        } else {
            
            htmlListaId += `
            <li>${arreglo[i].id}</li>
            `
        }
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
    cuentaTareas.innerHTML = `<p>Total: ${arreglo.length}</p>`
    cuentaTareasRealizadas.innerHTML = `<p>Realizadas: ${contadorRealizadas(arreglo)}</p>`
}


function tareaRealizada(id) {
    const index = tareas.findIndex(tarea => tarea.id === id)
    tareas[index].realizada = !tareas[index].realizada

    let htmlGeneral = "";
    let htmlListaId = "";

    for (i = 0; i < tareas.length; i++){
        if (tareas[i].realizada === true) {
            htmlGeneral += `
            <li style="color: blue">${tareas[i].descripcion} <input type="checkbox" onchange="tareaRealizada(${tareas[i].id})" checked></input><button onclick="borrarTarea(${tareas[i].id})">Eliminar</button></li>
            `
            htmlListaId += `
            <li style="color: blue">${tareas[i].id}</li>
            `
        } else {
            htmlGeneral += `
            <li>${tareas[i].descripcion} <input type="checkbox" onchange="tareaRealizada(${tareas[i].id})"></input><button onclick="borrarTarea(${tareas[i].id})">Eliminar</button></li>
            `
            htmlListaId += `
            <li>${tareas[i].id}</li>
            `
        }
    }    

    listaTareas.innerHTML = htmlGeneral;
    listaId.innerHTML = htmlListaId;
    cuentaTareas.innerHTML = `<p>Total: ${tareas.length}</p>`
    cuentaTareasRealizadas.innerHTML = `<p>Realizadas: ${contadorRealizadas(tareas)}</p>`

}


function contadorRealizadas(arreglo) {
    const contadorRealizadas = arreglo.filter(tarea => tarea.realizada === true);
    return contadorRealizadas.length;
    
}

