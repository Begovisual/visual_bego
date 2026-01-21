/* ACORDEON. Funcionamiento: Tenemos los padres 'Acordeon-bloque' los seleccionamos todos. 
1. Vamos a recorrer cada bloque para poder detectar si el usario le hace click.
1.1. Declaramos las constantes aquí y así para poder seleccionar específicamente los elemerntos de bloque, por eso bloque.querySelector. Si no solo se seleccionaría el primer acordeón.
2. Si le hacen click a un bloque: se activa el estado isOpen (se despliega el acordeon), el toggle es clave porque permite replegarlo si es incomodo para el usuario
3. Se ejecuta una condicional para cambiar los iconos si la clase es isOpen, el icono es - y si esta el acordeon visible el icono es + */

const bloques = document.querySelectorAll(".Acordeon-bloque");
 //1
bloques.forEach((bloque) => {
 
  const btnBloque = bloque.querySelector("#Acordeon-btn");
  const iconBloque = bloque.querySelector("#Acordeon-icono");
  const content = bloque.querySelector("#Acordeon-contenido");
 
  //2
  btnBloque.addEventListener("click", () => {
    content.classList.toggle("isOpen");
    //3
    if (content.classList.contains("isOpen")) {
      iconBloque.textContent = "remove";
    } else {
      iconBloque.textContent = "add";
    }
  });
});
