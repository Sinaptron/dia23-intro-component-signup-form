/* validacion de formulario */ 

var exclamation = document.getElementsByClassName("error");
var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var formError = document.getElementsByClassName("form_error");
var input = document.getElementsByTagName("input");

/* validacion*/
function formValidation(event) {
  /* bucle for para todos los campos de entrada excepto enviar entrada, que es 4 */
  for (i = 0; i < 4; i++) {
    /* limpia el form */
    input[i].classList.remove("error");
    formError[i].style.display = "none";

    /* validacion de correo */
    if (!email.validity.valid) {
      formError[2].style.display = "block";
      email.classList.add("error");
      event.preventDefault();
    }

    /* validacion de otros campos  */
    if (
      (input.type != "email" || input.type != "submit") &&
      input[i].value == ""
    ) {
      formError[i].style.display = "block";
      input[i].classList.add("error");
      event.preventDefault();
    }
  }
}

/* detector de eventos en el botón, llame a la función formValidation */
form.addEventListener("submit", formValidation, false);
