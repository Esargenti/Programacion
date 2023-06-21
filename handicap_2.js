// Obtener referencias a los elementos del DOM
const form = document.getElementById('form');
const submitButton = document.querySelector('button[type="submit"]');
const closeButton = document.querySelector('.popup button');
const popup = document.getElementById('popup');
const apellidoInput = document.getElementById('apellido');
const matriculaInput = document.getElementById('matricula');
const warnings = document.getElementById('warnings');
const handicapN = document.getElementById('handicap_n');

// Ocultar el popup inicialmente
popup.style.display = 'none';

// Función para mostrar el formulario y ocultar el popup
function mostrarFormulario() {
  // Restablecer los campos de entrada a su estado inicial
  apellidoInput.value = '';
  matriculaInput.value = '';

  form.style.display = 'block';
  popup.style.display = 'none';
}

// Función para mostrar el popup y ocultar el formulario
function mostrarPopup() {
  form.style.display = 'none';
  popup.style.display = 'block';
}

// Función para validar el formulario y mostrar los warnings correspondientes
function validarFormulario(event) {
  event.preventDefault(); // Evitar que se envíe el formulario por defecto

  const apellido = apellidoInput.value.trim();
  const matricula = matriculaInput.value.trim();
  let warningMessage = '';

  // Validar el apellido
  if (apellido.length < 3) {
    warningMessage += 'El apellido debe tener al menos 3 letras. ';
  }

  // Validar la matricula
  if (matricula.length !== 5 || isNaN(matricula)) {
    warningMessage += 'La matrícula debe tener 5 números. ';
  }

  // Mostrar los warnings correspondientes
  warnings.textContent = warningMessage;

  // Mostrar el popup o el formulario según la validación
  if (warningMessage === '') {
    mostrarPopup();
    generarHandicap();
  } else {
    mostrarFormulario();
  }
}

// Asociar eventos a los botones
submitButton.addEventListener('click', validarFormulario);
closeButton.addEventListener('click', mostrarFormulario);

// Función para generar un handicap aleatorio entre 0 y 30
function generarHandicap() {
  const randomHandicap = Math.floor(Math.random() * 31);
  handicapN.textContent = randomHandicap;
}

// Inicializar el formulario mostrando el formulario y ocultando el popup
mostrarFormulario();