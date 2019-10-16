document.addEventListener("DOMContentLoaded", () => {
  const formList = [
    document.querySelector('.form'),
    document.querySelector('.form-subscribe'),
  ];
  const disabledFormSend = 'form_submit-disabled';
  for (const form of formList) {
    if (form) {
      form.oninput = () => {
        let submitButton = form.querySelector('button');
        if (form.checkValidity()) {
          submitButton.classList.remove(disabledFormSend);
          submitButton.removeAttribute("disabled");
        } 
      };
    }
  }
 });

