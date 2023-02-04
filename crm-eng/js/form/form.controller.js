import model from "./../model.js";
import testData from "./form.test-data.js";
import view from "./form.view.js";


view.formEL.form.addEventListener('submit', function (e) {
  e.preventDefault();

  const {
    nameValue,
    phoneValue,
    emailValue,
    productValue
  } = {
    nameValue: view.formEL.inputName.value,
    phoneValue: view.formEL.inputPhone.value,
    emailValue: view.formEL.inputMail.value,
    productValue: view.formEL.select.value,
  }

  if (nameValue !== '' && phoneValue !== '' && emailValue !== '') {
    model.addItem(nameValue, phoneValue, emailValue, productValue);
  } else {
    return alert('Заполните все поля')
  }


  testData.init();
})