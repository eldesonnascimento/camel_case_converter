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

const button = document.querySelector(".button");

button.addEventListener('click', function() {
  const inputElement = document.querySelector(".myInput");
  const inputValue = inputElement.value;

  // Verifique se o campo de entrada não está vazio antes de prosseguir
  if (inputValue.trim() === "") {
    alert("Por favor, insira uma palavra antes de clicar em 'Enviar'.");
    return;
  }

  const convertedValue = toCamelCase(inputValue);

  // Crie um novo elemento <p>
  let pElement = document.createElement("p");

  // Defina o conteúdo do elemento <p>
  pElement.textContent = convertedValue;

  // Adicione o elemento <p> como filho do inputElement
  inputElement.parentNode.appendChild(pElement);

  // Limpe o campo de entrada e o elemento <p> após 10 segundos (10 000 milissegundos)
  setTimeout(function() {
    inputElement.value = "";
    pElement.remove(); // Remove o elemento <p>
  }, 10000); // 10000 milissegundos = 10 segundos.
});
