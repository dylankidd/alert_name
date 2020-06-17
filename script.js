const inputName = document.querySelector("#inputName");
const button = document.querySelector("#heyButton");


const alertName = () =>{
  alert(inputName.value);
}

button.addEventListener("click", alertName);

