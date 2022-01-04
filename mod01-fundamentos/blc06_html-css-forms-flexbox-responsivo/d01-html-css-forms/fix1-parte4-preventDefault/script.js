// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


/** ======= Função que "bloqueia" o padrão de abrir o link automáticamente ======= */

  function blockHref (event) {
    event.preventDefault();
  }
  HREF_LINK.addEventListener("click", blockHref);
/** ======= Função que "bloqueia" o padrão de de marcação do CheckBox ======= */

function blockCheckBox (event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", blockCheckBox);
