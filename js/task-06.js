const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  const inputLength = event.target.value.length;
  const validLength = Number(event.target.dataset.length);

  if (inputLength === validLength) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
}
