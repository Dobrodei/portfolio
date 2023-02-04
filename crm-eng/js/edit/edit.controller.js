import model from "./../model.js";
import view from "./edit.view.js";

function startFormEdit() {
  const currentObj = getCurrentObj();
  // console.log(currentObj);
  if (currentObj !== 'undefined') {
    view.formEL.numID.innerText = currentObj.id;
    view.formEL.date.innerText = currentObj.date.fullDate;
    view.formEL.selectProduct.value = currentObj.productValue;
    view.formEL.inputName.value = currentObj.nameValue;
    view.formEL.inputMail.value = currentObj.emailValue;
    view.formEL.inputPhone.value = currentObj.phoneValue;
    view.formEL.selectStatus.value = currentObj.status;
  }
}
startFormEdit()

function getCurrentObj() {
  const arrid = window.location.hash.split('')
  const currentId = +arrid[1];
  console.log(arrid);

  const currentObj = model.arrRequest.find(item => item.id == currentId);
  return currentObj
}

view.formEL.form.addEventListener('submit', function (e) {
  e.preventDefault();
  const {
    productValue,
    nameValue,
    phoneValue,
    emailValue,
    productStatus
  } = {
    nameValue: view.formEL.inputName.value,
    phoneValue: view.formEL.inputPhone.value,
    emailValue: view.formEL.inputMail.value,
    productValue: view.formEL.selectProduct.value,
    productStatus: view.formEL.selectStatus.value,
  }

  if (nameValue !== '' && phoneValue !== '' && emailValue !== '') {
    const currentObj = getCurrentObj();

    currentObj.nameValue = nameValue;
    currentObj.phoneValue = phoneValue;
    currentObj.emailValue = emailValue;
    currentObj.productValue = productValue;
    currentObj.status = productStatus;

    model.updateLS(model.arrRequest)
  } else {
    return alert('Заполните все поля!')
  }
})