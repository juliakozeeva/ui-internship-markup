const form = document.getElementsByClassName("form")[0];
const formText = document.getElementsByClassName("form_input")[0];
const formMail = document.getElementsByClassName("form_input")[1];
const formPassword = document.getElementsByClassName("form_input")[2];
const submit = document.getElementsByClassName("form_submit")[0];

form.addEventListener('keyup', function (event) {
  isValidName = formText.checkValidity();
  isValidEmail = formMail.checkValidity();
  isValidPassword = formPassword.checkValidity();
  
  if ( isValidName && isValidEmail && isValidPassword ) {
    submit.classList.remove( 'form_submit-disabled' )
  } 
});


const formSubscribeMail = document.getElementsByClassName("form-subscribe_input")[0];
const submitSubscribe = document.getElementsByClassName("form-subscribe_submit")[0];

formSubscribeMail.addEventListener('keyup', function (event) {
  isValidName = formSubscribeMail.checkValidity();
  
  if ( isValidName ) {
    submitSubscribe.classList.remove( 'form-subscribe_submit-disabled' )
  } 
});