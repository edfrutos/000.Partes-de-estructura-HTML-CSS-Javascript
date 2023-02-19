// Ejemplo de una función que muestra un mensaje en consola
function mostrarMensaje() {
    console.log("Aprendiendo HTML, CSS y JavaScript");
  }
  // Función que copia el fragmento
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
  // Llamada a la función
  mostrarMensaje();
// Función que filtra el contenido en base a la selección del usuario
function filtrarContenido() {
    // Obtener la selección del usuario
    var filtro = document.getElementById("filtro").value;
    // Obtener los contenedores de cada sección de contenido
    var contenidoHTML = document.getElementById("contenido-html");
    var contenidoCSS = document.getElementById("contenido-css");
    var contenidoJavaScript = document.getElementById("contenido-javascript");
    // Ocultar todas las secciones
    contenidoHTML.style.display = "none";
    contenidoCSS.style.display = "none";
    contenidoJavaScript.style.display = "none";
    // Mostrar solo la sección que coincida con la selección del usuario
    if (filtro === "todos") {
      contenidoHTML.style.display = "block";
      contenidoCSS.style.display = "block";
      contenidoJavaScript.style.display = "block";
    } else {
      var seccion = document.getElementById("contenido-" + filtro);
      seccion.style.display = "block";
    }
  }
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
    
    // Submit del formulario de búsqueda
    document.getElementById("form-busqueda").addEventListener("submit", function(event) {
    event.preventDefault();
    buscarTerminos();
    });
  