console.log("cargado");

let formulario = document.querySelector("form");
let camposFaltantes = document.querySelector("#missing");

function validarEmail(valor) {
    return !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor);
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = "";
    let todoOk = 0;
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;


    if (nombre === "") {
        document.querySelector("#nombre").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo nombre vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#nombre").style.background = "white";
        todoOk++;
    }



    if (email === "") {
        document.querySelector("#email").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo email vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
    }
    else if(validarEmail(email)){
        document.querySelector("#email").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo email invalido, favor completar con un email valido. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#email").style.background = "white";
        todoOk++;
    }

    if (mensaje === "") {
        document.querySelector("#mensaje").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo mensaje vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#mensaje").style.background = "white";
        todoOk++;
    }


    if(todoOk ===3){
        formulario.submit();
        alert("Enviado con exito");
    }







});