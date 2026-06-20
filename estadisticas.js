let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function(event) {


    event.preventDefault();


    let nombre =
    document.getElementById("nombre").value;


    let correo =
    document.getElementById("correo").value;


    let seleccion =
    document.getElementById("seleccion").value;


    let comentario =
    document.getElementById("comentario").value;


    let mensaje =
    document.getElementById("mensaje");



    if(nombre == "" || correo == "" ||
    seleccion == "" || comentario == "") {


        mensaje.innerHTML =
        "Complete todos los campos.";

    }


    else if(correo.includes("@") == false) {


        mensaje.innerHTML =
        "Ingrese un correo válido.";

    }


    else {


        mensaje.innerHTML =
        "Formulario enviado correctamente.";

    }

});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-navegacion");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});