const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function() {

    let texto = buscador.value.toLowerCase();

    let jugadores = document.querySelectorAll(".jugador");

    jugadores.forEach(function(jugador) {

        let contenido = jugador.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            jugador.style.display = "block";
        } else {
            jugador.style.display = "none";
        }

    });

});
const filtro = document.getElementById("filtro");

filtro.addEventListener("change", function() {

    let confederacion = filtro.value;

    let jugadores = document.querySelectorAll(".jugador");

    jugadores.forEach(function(jugador) {

        if (confederacion === "todos") {
            jugador.style.display = "block";
        }

        else if (jugador.classList.contains(confederacion)) {
            jugador.style.display = "block";
        }

        else {
            jugador.style.display = "none";
        }

    });

});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-navegacion");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});