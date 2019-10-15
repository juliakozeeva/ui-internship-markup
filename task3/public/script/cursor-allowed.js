const form = document.getElementsByClassName("form")[0];
const submit = document.getElementsByClassName("form_submit")[0];

form.addEventListener('keyup', function (event) {
  if ( form.checkValidity() ) {
    submit.classList.remove( 'form_submit-disabled' );
    submit.removeAttribute("disabled");
  } 
});


const formSubscribeMail = document.getElementsByClassName("form-subscribe_input")[0];
const submitSubscribe = document.getElementsByClassName("form-subscribe_submit")[0];

formSubscribeMail.addEventListener('keyup', function (event) {
  if ( formSubscribeMail.checkValidity() ) {
    submitSubscribe.classList.remove( 'form-subscribe_submit-disabled' );
    submitSubscribe.removeAttribute("disabled");
  } 
});


