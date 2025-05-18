const propiedades_alquiler = [
{
nombre: 'Lujoso departamento en rascacielos',
id: '7289',
descripcion: 'Amplio y moderno departamento con doble techo y vista incomparable',
ubicacion: 'Camino al cielo 9823, Distrito 0',
habitaciones: 3,
costo: 3400000,
smoke: false,
pets: false
},
{
nombre: 'Departamento en barrio artístico',
id: '14735',
descripcion: 'Bello departamento en pintoresco edificio ubicado en el centro del barrio artístico',
ubicacion: 'Avenida del arquitecto 6699, Distrito 5',
habitaciones: 2,
costo: 600000,
smoke: true,
pets: false
},
{
nombre: 'Casa a las afueras de la ciudad',
id: '16157',
descripcion: 'Amplia casa en sector tranquilo con amplio terreno',
ubicacion: 'Camino escondido 3256, Distrito 7',
habitaciones: 7,
costo: 5500000,
smoke: true,
pets: true
},
{
nombre: 'Casita en la playa',
id: '19410',
descripcion: 'Pequeña casita en la playa, perfecta para vacaciones en pareja',
ubicacion: 'Calle en la arena 23, casa 5, Distrito 3',
habitaciones: 1,
costo: 450000,
smoke: false,
pets: false
},
{
nombre: 'Espectacular casa remodelada',
id: '23773',
descripcion: 'Casa en condominio privado, recién remodelada',
ubicacion: 'Avenida apartada 782, casa 12, Distrito 13',
habitaciones: 4,
costo: 4000000,
smoke: true,
pets: true
},
]


const row = document.querySelector(".row");
let html = "";
let fumar = "";
let mascotas = "";

for (let alquiler of propiedades_alquiler) {
    if (alquiler.smoke) {
        fumar = `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                 </p>`
    } else {
        fumar = `<p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>`
    }

    if (alquiler.pets) {
        mascotas = `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
    } else {
        mascotas = `<p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
    }

    html += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="assets/img/Alquiler/${alquiler.id}.jpg"
                class="card-img-top"
                alt="Imagen de ${alquiler.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${alquiler.ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo.toLocaleString()}</p>
                ${fumar}
                ${mascotas}
              </div>
            </div>
        </div>
    
    `
}

row.innerHTML = html;