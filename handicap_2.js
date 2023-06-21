const form = document.getElementById('form');
const enviar = document.querySelector('button[type="submit"]');
const cerrar = document.querySelector('.popup button');
const popup = document.getElementById('popup');
const apellido = document.getElementById('apellido');
const matricula = document.getElementById('matricula');
const warnings = document.getElementById('warnings');
const handicapN = document.getElementById('handicap_n');

// Desaparece el popup al inicio
popup.style.display = 'none';

// Muestro el formulario y oculto el popup
function mostrarFormulario() {
  // Cada vez que vuelvo al formulario, los campos vuelven a 0
  apellido.value = '';
  matricula.value = '';

  form.style.display = 'block';
  popup.style.display = 'none';
}

//Cierro el formulario y abre el popup
function mostrarPopup() {
  form.style.display = 'none';
  popup.style.display = 'block';
}

// Valido el formulario
function validarFormulario(event) {
  event.preventDefault(); 
  const apellido_c = apellido.value.trim();
  const matricula_c = matricula.value.trim();
  let warning_m = '';

  // Valido el apellido
  if (apellido_c.length < 3) {
    warning_m += 'El apellido debe tener al menos 3 letras. ';
  }

  // Valido la matricula
  if (matricula_c.length !== 5 || isNaN(matricula_c)) {
    warning_m += 'La matrícula debe tener 5 números. ';
  }

  // Si hay error, muestro que falta
  warnings.textContent = warning_m;

  // Muestro el popup o el formulario a partir de la validación
  if (warning_m === '') {
    mostrarPopup();
    generarHandicap();
  } else {
    mostrarFormulario();
  }
}

enviar.addEventListener('click', validarFormulario);
cerrar.addEventListener('click', mostrarFormulario);

// Genero el handicap random entre 0 y 30
function generarHandicap() {
  const randomHandicap = Math.floor(Math.random() * 31);
  handicapN.textContent = randomHandicap;
}

// Vuelvo al formulario y oculto el popup
mostrarFormulario();