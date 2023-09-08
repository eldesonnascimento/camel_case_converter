button.addEventListener('click', function() {
  const inputElement = document.querySelector(".myInput");
  const inputValue = inputElement.value;
  const convertedValue = toCamelCase(inputValue);

  // Crie um novo elemento <p>
  let pElement = document.createElement("p");

  // Defina o conteúdo do elemento <p>
  pElement.textContent = convertedValue;

  // Adicione o elemento <p> como filho do inputElement
  inputElement.parentNode.appendChild(pElement);

  // Limpe o campo de entrada e o elemento <p> após 2 segundos (2000 milissegundos)
  setTimeout(function() {
    inputElement.value = "";
    pElement.remove(); // Remove o elemento <p>
  }, 10000); // 1000 milissegundos = 1 segundo.
});
