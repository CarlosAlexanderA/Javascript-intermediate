console.log('hello');
const numeroInput = document.querySelector(
  `.square-form > form > label > input[type=${'number'}]`
);
let valueBefore = '';

numeroInput.addEventListener('input', (event) => {
  const valor = numeroInput.value;
  if (/[^0-9]/.test(valor)) {
    numeroInput.value = valueBefore;
  } else {
    valueBefore = valor;
  }
  console.log(/[^0-9]/.test(valor));
});
