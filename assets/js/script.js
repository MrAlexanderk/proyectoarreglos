const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Edificios mirador del cajón',
        src: 'https://edifica.com.pe/blog/wp-content/uploads/edificio-residencial-.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '345 West Street, Anytown, CA 91234',
        habitaciones: 4,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominios Salvatore',
        src: 'https://www.easydom.com/image/data/header/residenziale.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '76 Helm Street, Seaside Town, CA 56789',
        habitaciones: 2,
        banos: 5,
        costo: 1700,
        smoke: false,
        pets: true
    }
        
]

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },    
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://www.arquimaster.com.ar/web/wp-content/uploads/2021/01/edificio_residencial_n07_slide.jpg',
        descripcion: 'Este apartamento está bueno, ojala lo compres.',
        ubicacion: '1055 Edward Lane, Prestige Suburb, CA 45678',
        habitaciones: 2,
        banos: 0,
        costo: 2000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://www.inversurpropiedades.cl/wp-content/uploads/2023/06/Vivir-en-un-condominio-cerrado-o-edificio-residencial.jpg.webp',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '055 satanic Road, Summit Peaks, CA 666',
        habitaciones: 1,
        banos: 2,
        costo: 2200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://st4.depositphotos.com/5722792/19804/i/450/depositphotos_198041616-stock-photo-row-white-residential-buildings-balconies.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 skynet Avenue, Skyview City, CA 56789',
        habitaciones: 2,
        banos: 3,
        costo: 1700,
        smoke: false,
        pets: true
    }
]

// Función para crear un objeto "card"
function createCard(
    imageUrl,
    title,
    description,
    location,
    bedrooms,
    bathrooms,
    price,
    smokingAllowed,
    petsAllowed,
    parentSection
  ) 
  {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');
  
    const cardContent = `
      <div class="card">
        <img src="${imageUrl}" class="card-img-top" alt="Imagen del departamento">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${location}</p>
          <p><i class="fas fa-bed"></i> ${bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${bathrooms} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${price}</p>
          <p class="${smokingAllowed ? 'text-success' : 'text-danger'}"><i class="${smokingAllowed ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${smokingAllowed ? 'Permitido fumar' : 'No se permite fumar'}</p>
          <p class="${petsAllowed ? 'text-success' : 'text-danger'}"><i class="${petsAllowed ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${petsAllowed ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
        </div>
      </div>
    `;
  
    card.innerHTML = cardContent;
    parentSection.appendChild(card);
  }

const currentSection = document.getElementById('gallery')
const propiedades_mostrar = document.body.dataset.page === 'alquiler' ? propiedades_alquiler : propiedades_venta

if(propiedades_mostrar.length < 1){
    let nuevaAlerta = '<p>No hay propiedades disponibles en este momento.\nIntente más tarde. </p>'
    currentSection.appendChild(nuevaAlerta)
} 
else{
    for(let p of propiedades_mostrar){
        createCard(p.src, p.nombre, p.descripcion, p.ubicacion, p.habitaciones, p.banos, p.costo, p.smoke, p.pets, currentSection)
    }
}


