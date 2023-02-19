
// Ejemplo de una función que muestra un mensaje en consola
function mostrarMensaje() {
  console.log("Aprendiendo HTML, CSS y JavaScript");
}

// Llamada a la función
mostrarMensaje();
// Función que filtra el contenido en base a la selección del usuario
function filtrarContenido() {
  // Obtener la selección del usuario
  var filtro = document.getElementById("filtro").value;
  // Obtener el contenedor de cursos
  var contenidoCursos = document.getElementById("contenido-cursos");
  // Ocultar todos los cursos
  contenidoCursos.style.display = "none";
  // Mostrar solo los cursos que coincidan con la selección del usuario
  if (filtro === "todos") {
    contenidoCursos.style.display = "block";
  } else {
    var cursos = contenidoCursos.getElementsByClassName(filtro);
    for (var i = 0; i < cursos.length; i++) {
      cursos[i].style.display = "block";
    }
  }
}
// Asociar la función al botón de filtro
var botonFiltro = document.getElementById("boton-filtro");
botonFiltro.addEventListener("click", filtrarContenido);

// Función que realiza la búsqueda de términos
function buscarTerminos() {
  // Obtener el término a buscar
  var busqueda = document.getElementById("busqueda").value;
  // Obtener los contenedores de cada sección de contenido
  var contenidoHTML = document.getElementsByClassName("contenido-seccion html");
  var contenidoCSS = document.getElementsByClassName("contenido-seccion css");
  var contenidoJavaScript = document.getElementsByClassName("contenido-seccion javascript");
  // Ocultar todos los elementos de cada sección
  for (var i = 0; i < contenidoHTML.length; i++) {
    contenidoHTML[i].style.display = "none";
  }
  for (var i = 0; i < contenidoCSS.length; i++) {
    contenidoCSS[i].style.display = "none";
  }
  for (var i = 0; i < contenidoJavaScript.length; i++) {
    contenidoJavaScript[i].style.display = "none";
  }
  // Mostrar solamente los elementos que contengan el término buscado
  var terminosHTML = document.getElementsByClassName("termino-html");
  for (var i = 0; i < terminosHTML.length; i++) {
    if (terminosHTML[i].innerHTML.toLowerCase().includes(busqueda.toLowerCase())) {
      terminosHTML[i].parentElement.style.display = "block";
    }
  }
  var terminosCSS = document.getElementsByClassName("termino-css");
  for (var i = 0; i < terminosCSS.length; i++) {
    if (terminosCSS[i].innerHTML.toLowerCase().includes(busqueda.toLowerCase())) {
      terminosCSS[i].parentElement.style.display = "block";
    }
  }
  var terminosJavaScript = document.getElementsByClassName("termino-javascript");
  for (var i = 0; i < terminosJavaScript.length; i++) {
    if (terminosJavaScript[i].innerHTML.toLowerCase().includes(busqueda.toLowerCase())) {
      terminosJavaScript[i].parentElement.style.display = "block";
    }
  }
}

// Función Copy
const copyCodeButton = document.querySelector('.code-header__button');
        copyCodeButton.addEventListener('click', function() {
          const codeElement = document.querySelector('pre code');
          const textToCopy = codeElement.innerText;
      
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          textarea.remove();
        });

// Submit del formulario de búsqueda
document.getElementById("form-busqueda").addEventListener("submit", function (event) {
  event.preventDefault();
  buscarTerminos();
});


