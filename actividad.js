function Vacio(inputField) {
    if (inputField.type === "checkbox") {
	      if(inputField.checked)
	          return false;
	      return true;
    }
    if (inputField.value === "" ) {
	      return true;
    }
    return false;
}

function Fondo(inputDiv){
  inputDiv.style.backgroundColor = 'red';
	inputDiv.parentNode.style.backgroundColor = 'red';
	inputDiv.parentNode.style.color = 'white';
}

function Borrar(inputDiv){
	inputDiv.parentNode.style.backgroundColor = 'white';
	inputDiv.parentNode.style.color = 'black';
}


window.onload = function(){
    var form = document.getElementById("form");
    var message = document.getElementById("message");
      form.onsubmit = function(e){
            var requiredInputs = document.querySelectorAll(".required");
            for (var i=0; i < requiredInputs.length; i++){
                if(Vacio(requiredInputs[i]) ){
                  message.innerHTML = "<b>Error</b> Debes proporcionar todos los campos marcados como obligatorios";
                  message.style.backgroundColor = 'rgb(255, 105, 114)';
                  message.style.border = '2px solid rgb(255, 105, 114)';
                  e.preventDefault();
                      Fondo(requiredInputs[i]);
                }
                else{
                      Borrar(requiredInputs[i]);
                }
            }
      }
  }