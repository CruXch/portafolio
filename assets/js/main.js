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
    menuScroll.classList.add('con-scroll')
  } else{
    menuScroll.classList.remove('con-scroll')
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


// Lógica para que se muestren las Tarjetas por cada objeto de arriba.
const listaProyectos = document.querySelector(".proyectos-lista")

if (listaProyectos) {

  // .map recorre datosProyectos y devuelve una LISTA con un texto HTML por proyecto
  const tarjetas = datosProyectos.map((proyecto) => {
    const tecnologias = proyecto.tecnologias

      .slice(0, 3) // .slice(0, 3) -> toma solo las 3 primeras (el arreglo original no cambia)

      .map((tecnologia) => `<li>${tecnologia}</li>`) // Convierte cada tecnología de tecnologias en un texto: 
      // "<li>PHP</li> <li>JavaScript/li> <li>CSS</li>"

      .join("") //pega esa lista en UN solo texto, sin nada entre ellos.
      // Sin el join, JavaScript pondría comas entre los <li>

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

  listaProyectos.innerHTML = tarjetas.join("") //.join("") los pega en UN solo texto, sin separadores.
}


//LÓGICA: GENERAR MODALES DE TARJETAS
const dialogoModal = document.querySelector(".proyectos-modal")

if(dialogoModal && listaProyectos) {

  const portadaModal = dialogoModal.querySelector(".proyectos-modal-portada")
  const tituloModal = dialogoModal.querySelector(".proyectos-modal-titulo")
  const tecnologiasModal = dialogoModal.querySelector(".proyectos-modal-lista-tecnologias")
  const parrafoModal = dialogoModal.querySelector(".proyectos-modal-parrafo")
  const caracteristicasModal = dialogoModal.querySelector(".proyectos-modal-lista")
  const galeriaModal = dialogoModal.querySelector(".proyectos-modal-galeria")

  const enlaceRepoModal = dialogoModal.querySelector('[data-enlace="repo"]')
  const enlaceDemoModal = dialogoModal.querySelector('[data-enlace="demo"]')
  const linkRepoModal = enlaceRepoModal.querySelector("a")
  const linkDemoModal = enlaceDemoModal.querySelector("a")

  const bloqueTecnologias = dialogoModal.querySelector('[data-bloque="tecnologias"]')
  const bloqueDescripcion = dialogoModal.querySelector('[data-bloque="descripcion"]')
  const bloqueCaracteristicas = dialogoModal.querySelector('[data-bloque="caracteristicas"]')
  const bloqueCapturas = dialogoModal.querySelector('[data-bloque="capturas"]')
  const bloqueEnlaces = dialogoModal.querySelector('[data-bloque="enlaces"]')

  let botonQueAbrio = null

  listaProyectos.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".proyecto-boton")
    if(!boton) return
    
    const proyecto = datosProyectos.find((p) => p.id === boton.dataset.proyecto)
    if(!proyecto) return

    botonQueAbrio = boton

    portadaModal.src = proyecto.imagen
    portadaModal.alt = proyecto.imagenAlt
    tituloModal.textContent = proyecto.nombre
    parrafoModal.textContent = proyecto.descripcion
    
    tecnologiasModal.innerHTML = proyecto.tecnologias
      .map((tecnologia) => `<li>${tecnologia}</li>`)
      .join("")
    caracteristicasModal.innerHTML = proyecto.caracteristicas
      .map((caracteristica) => `<li>${caracteristica}</li>`)
      .join("")
    


    dialogoModal.showModal()
    document.body.classList.add('modal-abierto')

  


  })
}

