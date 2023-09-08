const button = document.querySelector(".button");

let symbols = ["-", "_"];

function toCamelCase(str) {
  const haveSymbol = symbols.some(symbol => str.includes(symbol));
  if (haveSymbol) {
    str = str.replace(/[-_][a-z]/g, match => match.toUpperCase());
    str = str.replace(/-|_/g, "");
    return str;
  } else {
    return str;
  }
}

button.addEventListener('click', function() {
  const inputElement = document.querySelector(".myInput");
  const inputValue = inputElement.value;
  const convertedValue = toCamelCase(inputValue);

  // Crie um novo elemento <p>
  let pElement = document.createElement("p");

  // Defina o conteúdo do elemento <p>
  pElement.textContent = convertedValue;

  // Adicione o elemento <p> como filho do inputElement
  inputElement.parentNode.appendChild(pElement)
   setTimeOut(pElement.textContent = "" ,10000);
});
