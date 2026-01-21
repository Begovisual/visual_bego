/* HEADER. Cuando estoy en versión móvil y tablet: clicko boton de + y se isActive 1. para header lista enlaces la clase "Active". Esta clase muestra los enlaces y el menu ocupa todo el height view. 2. Toggle permite "encender y apagar" esta clase y por tanto el usuario puede volver al home de nuevo si lo desea. La clase "no-scoll" aplicada a body evita que el usuario haga scroll por la página cuando está desplegado el menu.  
3. Después en la condicional, seguimos con header para cambiar el ICONO. If: está la clase de Header-enlaces "isActive" -> el boton cambia a close (x) / else: si está desisActiveda el boton es add (+) */

const btnHeader = document.getElementById("Header-boton"); //Boton del menu
const linksHeader = document.getElementById("Header-listaEnlaces"); // La lista de enlaces de Nav
const iconHeader = btnHeader.querySelector(".material-symbols-outlined"); // Icono a modificar + / x
const links = document.querySelectorAll(".Header-link"); // Todos los link a recorrer (Proyectos / About / Contact)
const actualUrl = window.location.href; // La página actual
const logo = document.getElementById("Logotipo");

btnHeader.addEventListener("click", () => {
  linksHeader.classList.toggle("isActive"); //1
  document.body.classList.toggle("No-scroll"); //2

  if (linksHeader.classList.contains("isActive")) {
    //3
    iconHeader.textContent = "close";
  } else {
    iconHeader.textContent = "add";
  }
});

 /* HEADER. pt2
  0. Vamos a recorrer cada enlace de la nav bar
 Definimos dos constantes: href para localizar una link href, pues en la condicional preguntaremos por el
 isHomePage: para que las diferentes formas que tiene index.html de mostrarse en su url (si acaba con este / si incluye su link etc) sean preguntadas 
 
  1. Método que me ayuda a filtrar en qué página estamos gracias a include. 
  1.1. Primera condición para averiguar si estamos en el enlace home o en su sección proyectos
  1.2. Pero si no, si no estamos en home, el enlace de la actualUrl se pone en u-acento
  1.3. Si no se cumple, entonces no agrega la clase u-acento 
 2. Utility da color negro a la sección de la página que está activada actualmente, el resto las deja en gris */

links.forEach((link) => { //0
  const href = link.getAttribute("href");
  const isHomePage =  
  actualUrl.endsWith("/") ||  
  actualUrl.includes("index.html") || 
  actualUrl === window.location.origin;  


  if ( isHomePage && href === "index.html#SeccionProyectos") {
    //1.1
    link.classList.add("u-acento"); //2
  } else if (actualUrl.includes(href)) {
    //1.2
    link.classList.add("u-acento");
  } else {
    //1.3
    link.classList.remove("u-acento");
  }

  /* HEADER. Este evento sirve cuando hemos clickado en alguno de los enlaces y ya estamos en una nueva página. 
  1. El menu se pliega y se desactiva la clase isActive
  2. Se desactiva "No-scroll" para poder seguir navegando
  3. El icono vuelve a su estado normal [+] */

  link.addEventListener("click", () => {
    linksHeader.classList.remove("isActive"); //1
    document.body.classList.remove("No-scroll"); //2
    iconHeader.textContent = "add"; //3
  });
});

 /* LOGO. Si el usuario clicka en mi logo, le lleva a home, para que el usuario sepa que es un elemento con el que interactuar, cambia su imagen a el color acento cuando se le hace mouseover :) 
  */

 logo.addEventListener('mouseover', () => {
  logo.src = 'img/logo-violeta.webp';
 }); 

 logo.addEventListener('mouseout', () => {
  logo.src = 'img/logo.webp';
 }); 
