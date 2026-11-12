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
