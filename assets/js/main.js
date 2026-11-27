//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//~~~SECCION MENÚ
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

//Agregar el .scrolled a las clases de nav para modificar el menu
//Cuando se hace scrollconst menuScroll = document.getElementById("navbar");
const menuScroll = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    menuScroll.classList.add('con-scroll');
  } else{
    menuScroll.classList.remove('con-scroll');
  }
});

//-----------------------------------------------------------------------------------------------------------

// Lógica para el Menú Hamburguesa en Móvil
const menuBarra = document.getElementById('menu-barra')
const navLinks = document.getElementById('nav-links')

menuBarra.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    menuBarra.classList.toggle('active')
})
// Cerrar el menú automáticamente al hacer clic en un enlace del menú
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active')
        menuBarra.classList.remove('active')
    })
})
// Cerrar el menú automáticamente al hacer clic fuera del menú
document.addEventListener('click', (evento) =>{
  const ruta = evento.composedPath()

  if(navLinks.classList.contains('active') && !ruta.includes(navLinks) && !ruta.includes(menuBarra)) {
    navLinks.classList.remove('active')
    menuBarra.classList.remove('active')
  }
})


//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//~~~PROYECTOS
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//


//LÓGICA: GENERAR TARJETAS

//Información de cada tarjeta/modal. Cada objeto del arreglo es una tarjeta/modal
const datosProyectos = [
  {
    id: "invenpro",
    nombre: "InvenPro",
    descripcionCorta: "Aplicación web que permite crear tomas de inventario ciclicas.",
    imagen: "assets/img/proyectos/invenpro.webp",
    imagenAlt: "Portada InvenPro",
    tecnologias: ["PHP", "JavaScript", "CSS", "HTML", "MySQL"],
    descripcion: "Aplicación web que permite crear tomas de inventario cíclicas. Enfocada a una empresa del sector harinero (Luego le pongo mas texto)",
    caracteristicas: ["Varios tipos de usuarios", "Importación de archivos .csv", "Generación de reportes en PDF"],
    capturas: [
      { src: "assets/img/proyectos/captura-1.webp", alt: "Foto de prueba" },
      { src: "assets/img/proyectos/captura-1.webp", alt: "Foto de prueba" }
    ],
    repo: "https://github.com/"
  },


  {
    id: "invenpro2",
    nombre: "InvenPro2",
    descripcionCorta: "Aplicación web que permite crear tomas de inventario ciclicas.",
    imagen: "assets/img/proyectos/invenpro.webp",
    imagenAlt: "Portada InvenPro",
    tecnologias: ["PHP", "JavaScript", "CSS", "HTML", "MySQL"],
    descripcion: "Aplicación web que permite crear tomas de inventario cíclicas. Enfocada a una empresa del sector harinero (Luego le pongo mas texto)",
    caracteristicas: ["Varios tipos de usuarios", "Importación de archivos .csv", "Generación de reportes en PDF"],
    capturas: [
      { src: "assets/img/proyectos/captura-1.webp", alt: "Foto de prueba" },
      { src: "assets/img/proyectos/captura-1.webp", alt: "Foto de prueba" }
    ],
    repo: "https://github.com/"
  },

]


const listaProyectos = document.querySelector(".proyectos-lista")

if (listaProyectos) {
  const tarjetas = datosProyectos.map((proyecto) => {
    const tecnologias = proyecto.tecnologias
      .slice(0, 3)
      .map((tecnologia) => `<li>${tecnologia}</li>`)
      .join("")

    return `
      <li class="proyecto">
        <img class="proyecto-imagen" src="${proyecto.imagen}" alt="${proyecto.imagenAlt}" width="1280" height="720">

        <div class="proyecto-texto">
          <h3 class="proyecto-nombre">
            <button class="proyecto-boton" type="button" aria-haspopup="dialog" data-proyecto="${proyecto.id}">
              ${proyecto.nombre}
            </button>
          </h3>
          <p class="proyecto-descripcion">${proyecto.descripcionCorta}</p>
          <ul class="proyecto-tecnologias">
            ${tecnologias}
          </ul>
          <span class="proyecto-indicacion" aria-hidden="true">Ver detalles</span>
        </div>
      </li>
    `
  })

  listaProyectos.innerHTML = tarjetas.join("")
}