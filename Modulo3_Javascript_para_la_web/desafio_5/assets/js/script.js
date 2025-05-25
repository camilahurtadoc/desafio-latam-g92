const inputTareas = document.querySelector("#tareaInput");
const btnAgregar = document.querySelector("#btnTarea");

const listaTareas = document.querySelector("#listaTareas")

const cuentaTareas = document.querySelector("#cuentaTareas");
const cuentaTareasRealizadas = document.querySelector("#cuentaTareasRealizadas");
const checkboxRealizada = document.querySelector("#inputCheckbox")


// Arreglo inicial con tareas
const tareas = [{id: 1, descripcion: "Comprar pan", realizada: false}, {id: 2, descripcion: "Bañar al perro", realizada: false}, {id: 3, descripcion: "Terminar desafío 5", realizada: false}];
renderTareas(tareas)


// Agregar nuevas tareas desde usuario y actualizar DOM
btnAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTareas.value;
    tareas.push({id: crearId(tareas), descripcion:nuevaTarea, realizada: false});
    inputTareas.value = "";

    renderTareas(tareas)
})


// Funciones para agregar descripción y id de tarea a las <li>
function agregarItemsALista(arreglo) {
    let htmlGeneral = "";
   
    for (i = 0; i < arreglo.length; i++){
        if (arreglo[i].realizada === true) {
            htmlGeneral += `
            <tr>
                <td style="color: #9f86c0">${arreglo[i].id}</td>
                <td style="color: #9f86c0">${arreglo[i].descripcion}</td>
                <td><input type="checkbox" onchange="tareaRealizada(${arreglo[i].id})" checked></input></td>
                <td><i class="fa-solid fa-trash" onclick="borrarTarea(${arreglo[i].id})"></i></td>
            </tr>
            `
        } else {
            htmlGeneral += `
            <tr>
                <td>${arreglo[i].id}</td>
                <td>${arreglo[i].descripcion}</td>
                <td><input type="checkbox" onchange="tareaRealizada(${arreglo[i].id})"></input></td>
                <td><i class="fa-solid fa-trash" onclick="borrarTarea(${arreglo[i].id})"></i></td>
            </tr>
            `
        }
    }    
    return htmlGeneral;
}


// Función para borrar una tarea y actualizar el DOM
function borrarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id)

    if (index !== -1) {
        tareas.splice(index, 1);
    }
    
    renderTareas(tareas)
}


// Actualizar el DOM
function renderTareas(arreglo) {
    listaTareas.innerHTML = agregarItemsALista(arreglo);
    cuentaTareas.innerHTML = `<p>Total: ${arreglo.length}</p>`
    cuentaTareasRealizadas.innerHTML = `<p>Realizadas: ${contadorRealizadas(arreglo)}</p>`
}


// Función para cambiar el style cuando una tarea fue realizada
function tareaRealizada(id) {
    const index = tareas.findIndex(tarea => tarea.id === id)
    tareas[index].realizada = !tareas[index].realizada

    let htmlGeneral = "";

    for (i = 0; i < tareas.length; i++){
        if (tareas[i].realizada === true) {

            htmlGeneral += `
            <tr>
                <td style="color: #9f86c0">${tareas[i].id}</td>
                <td style="color: #9f86c0">${tareas[i].descripcion}</td>
                <td><input type="checkbox" onchange="tareaRealizada(${tareas[i].id})" checked></input></td>
                <td><i class="fa-solid fa-trash" onclick="borrarTarea(${tareas[i].id})"></i></td>
            </tr>
            `

        } else {
            htmlGeneral += `
            <tr>
                <td>${tareas[i].id}</td>
                <td>${tareas[i].descripcion}</td>
                <td><input type="checkbox" onchange="tareaRealizada(${tareas[i].id})"></input></td>
                <td><i class="fa-solid fa-trash" onclick="borrarTarea(${tareas[i].id})"></i></td>
            </tr>
            `
        }
    }    

    listaTareas.innerHTML = htmlGeneral;
    cuentaTareas.innerHTML = `<p>Total: ${tareas.length}</p>`
    cuentaTareasRealizadas.innerHTML = `<p>Realizadas: ${contadorRealizadas(tareas)}</p>`
}


// Función para contador de tareas realizadas
function contadorRealizadas(arreglo) {
    const contadorRealizadas = arreglo.filter(tarea => tarea.realizada === true);
    return contadorRealizadas.length;
}

// Función para asignar un id a una tarea sin usar Date.now()
// No importa que se reasigne el id de una tarea, si fue previamente eliminada
function crearId(arreglo) {
    const tareasOrdenadasPorId = arreglo.sort(tarea => tarea.id);
    const maxId = tareasOrdenadasPorId[tareasOrdenadasPorId.length -1].id;
    return maxId +1;
}


// Función para resetear los ids (en caso que se salte numeros dp de haberlos
// eliminado, los ordena partiendo de 1 nuevamente)
const btnReset = document.querySelector("#reset");

// function resetearIds(arreglo) {
//     for (i = 0; i < arreglo.length; i++) { 
//         console.log(i)
//         arreglo[i].id = i + 2;
//         console.log(arreglo)
//     }
//     renderTareas(arreglo);
// }


btnReset.addEventListener("click", () => {
    for (i = 0; i < tareas.length; i++) { 
        tareas[i].id = i + 1;
    }
    renderTareas(tareas);
});