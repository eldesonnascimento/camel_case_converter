let symbols = ["-","_"]
let str= "Para_quedas";
function toCamelCase(str){

const haveSimbol = symbols.some(symbol =>str.includes(symbol))

if(haveSimbol){
   str= str.replace(/[-_][a-z]/g, match => match.toUpperCase())
  str = str.replace(/-|_/g,"")
  return str
}else{
  return str
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
  inputElement.parentNode.appendChild(pElement);

  // Limpe o campo de entrada e o elemento <p> após 10segundos (10 000 milissegundos)
  setTimeout(function() {
    inputElement.value = "";
    pElement.remove(); // Remove o elemento <p>
  }, 10000); // 1000 milissegundos = 1 segundo.
});
