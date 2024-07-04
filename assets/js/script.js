// PROPIEDADES EN ALQUILER
const propiedades_alquiler = [
    {
        nombre: 'Casa Acogedora en Barrio Tranquilo en La Serena',
        src: './assets/img/prop_alquiler1.jpg',
        descripcion: 'Esta encantadora casa ofrece un espacio acogedor con un diseño rústico-moderno. Rodeada de vegetación, cuenta con un pequeño jardín ideal para disfrutar de la naturaleza. Perfecta para familias que buscan tranquilidad y seguridad.',
        ubicacion: 'Calle Tranquila 123, Barrio Sereno',
        habitaciones: 5,
        baños: 3,
        costo: 1600,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento con Piscina y Vista al Mar',
        src: './assets/img/prop_alquiler2.jpg',
        descripcion: 'Este departamento moderno cuenta con acceso a una gran piscina y vistas impresionantes al mar. Ideal para quienes buscan un estilo de vida relajado cerca de la playa.',
        ubicacion: 'Av. Costanera 456, Playa Dorada',
        habitaciones: 4,
        baños: 1,
        costo: 1800,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento de lujo Frente a la Playa',
        src: './assets/img/prop_alquiler3.jpg',
        descripcion: 'Apartamento con una ubicación privilegiada frente a la playa. Ofrece acceso a dos piscinas y un ambiente perfecto para disfrutar del mar y el sol.',
        ubicacion: 'Paseo Marítimo 789, Playa Central',
        habitaciones: 3,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento de Lujo con vistas espectaculares',
        src: './assets/img/prop_alquiler4.jpg',
        descripcion: 'Este departamento de lujo ofrece vistas espectaculares al océano y acceso a una piscina infinita. Ideal para quienes buscan exclusividad y confort en una ubicación inmejorable.',
        ubicacion: 'Av. Panorama 101, Costa Bella',
        habitaciones: 4,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: false
    }
];

// PROPIEDADES EN VENTA
const propiedades_venta = [
    {
        nombre: 'Increible Penthouse en lujoso sector cerca de la playa',
        src: './assets/img/prop_venta1.jpg',
        descripcion: 'Exclusivo penthouse en el corazón de un exclusivo sector con vistas panorámicas y acabados de lujo. Cuenta con un amplio balcón y acceso a servicios premium en el edificio.',
        ubicacion: 'Av. Central 234, Ciudad Capital',
        habitaciones: 3,
        baños: 2,
        costo: 5000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento tranquilo frente a la costa',
        src: './assets/img/prop_venta2.jpg',
        descripcion: 'Ofrece una increíble vista al mar, permitiéndote disfrutar de espectaculares amaneceres y atardeceres desde la comodidad de tu hogar. Este apartamento es ideal para quienes buscan un refugio tranquilo con el sonido relajante de las olas y el aire fresco del mar.',
        ubicacion: 'Calle Marítima 123, Playa Tranquila',
        habitaciones: 2,
        baños: 1,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominio Moderno con Vistas al Mar',
        src: './assets/img/prop_venta3.jpg',
        descripcion: 'Condominio moderno con una preciosa vista al mar, ubicado en un complejo residencial con seguridad 24/7. Cuenta con áreas comunes, piscina,gimnasio, estacionamiento y salón de eventos.',
        ubicacion: 'Calle Nueva 345, Zona Residencial',
        habitaciones: 3,
        baños: 2,
        costo: 4000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Villa de Lujo en la Montaña',
        src: './assets/img/prop_venta4.jpg',
        descripcion: 'Impresionante villa en la montaña con vistas espectaculares al mar. Incluye un amplio jardín, piscina y áreas de entretenimiento. Perfecta para los amantes de la naturaleza y la tranquilidad.',
        ubicacion: 'Camino a la Montaña 567, Sierra Alta',
        habitaciones: 4,
        baños: 3,
        costo: 6000,
        smoke: false,
        pets: false
    }
];

// SECCION VENTAS
const seccionVentas = document.querySelector("#seccion_ventas");
if (seccionVentas) {
    let ventasHTML = "";
    for (let deptosVentas of propiedades_venta) {
        const templateVentas = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${deptosVentas.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${deptosVentas.nombre}
                    </h5>
                    <p class="card-text">
                        ${deptosVentas.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${deptosVentas.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${deptosVentas.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${deptosVentas.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${deptosVentas.costo}</p>
                    ${
                        deptosVentas.smoke
                            ? ` <p class="text-success">
                                    <i class="fas fa-smoking"></i> Permitido fumar
                                </p>`
                            : ` <p class="text-danger">
                                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                                </p>`
                    }
                    ${
                        deptosVentas.pets
                            ? ` <p class="text-success">
                                    <i class="fas fa-paw"></i> Mascotas permitidas
                                </p>`
                            : ` <p class="text-danger">
                                    <i class="fas fa-ban"></i> No se permiten mascotas
                                </p>`
                    }
                </div>
            </div>
        </div>
        `;
        ventasHTML += templateVentas;
    }
    seccionVentas.innerHTML += ventasHTML;
}

// SECCION ALQUILER
const seccionAlquiler = document.querySelector("#seccion_alquiler");
if (seccionAlquiler) {
    let alquilerHTML = "";
    for (let deptosAlquiler of propiedades_alquiler) {
        const templateAlquiler = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${deptosAlquiler.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${deptosAlquiler.nombre}
                    </h5>
                    <p class="card-text">
                        ${deptosAlquiler.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${deptosAlquiler.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${deptosAlquiler.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${deptosAlquiler.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${deptosAlquiler.costo}</p>
                    ${
                        deptosAlquiler.smoke
                            ? ` <p class="text-success">
                                    <i class="fas fa-smoking"></i> Permitido fumar
                                </p>`
                            : ` <p class="text-danger">
                                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                                </p>`
                    }
                    ${
                        deptosAlquiler.pets
                            ? ` <p class="text-success">
                                    <i class="fas fa-paw"></i> Mascotas permitidas
                                </p>`
                            : ` <p class="text-danger">
                                    <i class="fas fa-ban"></i> No se permiten mascotas
                                </p>`
                    }
                </div>
            </div>
        </div>
        `;
        alquilerHTML += templateAlquiler;
    }
    seccionAlquiler.innerHTML += alquilerHTML;
}
