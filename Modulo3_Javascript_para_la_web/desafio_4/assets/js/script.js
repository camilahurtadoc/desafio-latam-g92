// Section Venta

const propiedades_venta = [
{
nombre: 'Mágica casa al borde del lago',
id: '157', //se utiliza para obtener el src de la img
descripcion: 'Hermosa casa con vista y ambiente inigualable al borde del lago',
ubicacion: 'Camino del lago 12, Distrito 4',
habitaciones: 20,
costo: 15000000000 ,
smoke: false,
pets: true
},
{
nombre: 'Casa en el cerro',
id: '9528',
descripcion: 'Casa en sector privado, tranquilo y seguro. Excelente ambiente familiar',
ubicacion: 'Calle del cerro 453, Distrito 6',
habitaciones: 5,
costo: 800000000 , 
smoke: true,
pets: true
},
{
nombre: 'Home studio en barrio universitario',
id: '12288',
descripcion: 'Ideal para estudiantes, home studio con cocina equipada',
ubicacion: 'Avenida del universitario 6575, Distrito 2',
habitaciones: 1,
costo: 120000000,
smoke: false,
pets: false
},
{
nombre: 'Casa con amplio jardín',
id: '12900',
descripcion: 'Pintoresca casa en sector tranquilo, cercano a la playa con amplio jardín',
ubicacion: 'Sendero a la playa 3278, Distrito 8',
habitaciones: 3,
costo: 200000000,
smoke: true,
pets: false
},
{
nombre: 'Departamento nuevo en icónico barrio',
id: '14696',
descripcion: 'Amplio departamento con terraza en sector familiar y seguro',
ubicacion: 'Av. La familia 5689, Distrito 9',
habitaciones: 4,
costo: 500000000,
smoke: false,
pets: true
},
]


const ventaRow = document.querySelector(".row-venta");
let html_venta = "";
let fumar = "";
let mascotas = "";
let contador_ventas = 0;

for (let venta of propiedades_venta) {
    if (contador_ventas == 3) {
        break;
    }

    if (venta.smoke) {
        fumar = `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                 </p>`
    } else {
        fumar = `<p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>`
    }

    if (venta.pets) {
        mascotas = `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
    } else {
        mascotas = `<p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
    }

    html_venta += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="assets/img/Venta/${venta.id}.jpg"
                class="card-img-top"
                alt="Imagen de ${venta.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${venta.ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo.toLocaleString()}</p>
                ${fumar}
                ${mascotas}
              </div>
            </div>
        </div>
    `
    contador_ventas += 1;
}

ventaRow.innerHTML = html_venta;



// Section Alquiler

const propiedades_alquiler = [
{
nombre: 'Lujoso departamento en rascacielos',
id: '7289', //se utiliza para obtener el src de la img
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
descripcion: 'Amplia casa en sector tranquilo con amplio terreno rodeado de naturaleza',
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
descripcion: 'Casa en condominio privado, recién remodelada y full quipada',
ubicacion: 'Avenida apartada 782, casa 12, Distrito 13',
habitaciones: 4,
costo: 4000000,
smoke: true,
pets: true
},
]


const alquilerRow = document.querySelector(".row-alquiler");
let html_alquiler = "";
let fumar_alquiler = "";
let mascotas_alquiler = "";
let contador_alquiler = 0;

for (let alquiler of propiedades_alquiler) {
    if (contador_alquiler == 3) {
        break;
    }

    if (alquiler.smoke) {
        fumar_alquiler = `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                 </p>`
    } else {
        fumar_alquiler = `<p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>`
    }

    if (alquiler.pets) {
        mascotas_alquiler = `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
    } else {
        mascotas_alquiler = `<p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
    }

    html_alquiler += `
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
                ${fumar_alquiler}
                ${mascotas_alquiler}
              </div>
            </div>
        </div>
    
    `
    contador_alquiler += 1;
}

alquilerRow.innerHTML = html_alquiler;