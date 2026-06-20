// Array de objetos basado en la tabla histórica de los mundiales requerida por la guía
const datosMundiales = [
    { conf: "CONMEBOL", pais: "Brasil", pj: 114, ga: 237, gr: 108, titulos: 5 },
    { conf: "UEFA", pais: "Alemania", pj: 114, ga: 237, gr: 134, titulos: 4 },
    { conf: "UEFA", pais: "Paises Bajos", pj: 55, ga: 96, gr: 52, titulos: 0 },
    { conf: "CONMEBOL", pais: "Argentina", pj: 93, ga: 177, gr: 109, titulos: 3 },
    { conf: "UEFA", pais: "Francia", pj: 76, ga: 147, gr: 94, titulos: 2 },
    { conf: "UEFA", pais: "Inglaterra", pj: 74, ga: 104, gr: 68, titulos: 1 },
    { conf: "CONMEBOL", pais: "Uruguay", pj: 69, ga: 121, gr: 83, titulos: 2 },
    { conf: "UEFA", pais: "España", pj: 71, ga: 117, gr: 85, titulos: 1 },
    { conf: "CONCACAF", pais: "México", pj: 60, ga: 62, gr: 101, titulos: 0 },
    { conf: "CONCACAF", pais: "Estados Unidos", pj: 37, ga: 41, gr: 66, titulos: 0 },
    { conf: "CONCACAF", pais: "Corea del Sur", pj: 40, ga: 39, gr: 78, titulos: 0 },
    { conf: "CAF", pais: "Marruecos", pj: 23, ga: 20, gr: 25, titulos: 0 },
    { conf: "CAF", pais: "Camerún", pj: 26, ga: 24, gr: 47, titulos: 0 },
    { conf: "CAF", pais: "Senegal", pj: 12, ga: 16, gr: 17, titulos: 0 },
    { conf: "AFC", pais: "Japón", pj: 25, ga: 25, gr: 33, titulos: 0 },
    { conf: "OFC", pais: "Nueva Zelanda", pj: 6, ga: 4, gr: 14, titulos: 0 }
];

// Función propia para renderizar las filas en el DOM de forma dinámica
function construirTabla() {
    const tablaBody = document.getElementById("tabla-body");

    if (!tablaBody) return;

    tablaBody.innerHTML = "";

    for (let i = 0; i < datosMundiales.length; i++) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td><span class="badge-confederacion">${datosMundiales[i].conf}</span></td>
            <td><strong>⚽ ${datosMundiales[i].pais}</strong></td>
            <td class="texto-centro">${datosMundiales[i].pj}</td>
            <td class="texto-centro goles-favor">${datosMundiales[i].ga}</td>
            <td class="texto-centro goles-contra">${datosMundiales[i].gr}</td>
            <td class="texto-centro" style="color: #eab308; font-weight: bold;">
                ${datosMundiales[i].titulos > 0 ? '🏆 '.repeat(datosMundiales[i].titulos) + ` (${datosMundiales[i].titulos})` : '0'}
            </td>
        `;

        tablaBody.appendChild(fila);
    }
}

document.addEventListener("DOMContentLoaded", construirTabla);

// ==============================
// FILTRO + BUSCADOR (CORREGIDO)
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("buscador");
    const filtro = document.getElementById("filtro");

    function filtrarTabla() {

        const texto = buscador.value.toLowerCase().trim();
        const conf = filtro.value.toLowerCase();

        const filas = document.querySelectorAll("#tabla-body tr");

        filas.forEach(fila => {

            const pais = fila.children[1].textContent.toLowerCase();

            // 🔥 FIX IMPORTANTE: lectura exacta de confederación
            const confederacion = fila.children[0]
                .textContent
                .toLowerCase()
                .trim();

            const coincideTexto = pais.includes(texto);

            // 🔥 FIX: comparación EXACTA (evita CAF vs CONCACAF)
            const coincideConf =
                conf === "todos" || confederacion === conf;

            if (coincideTexto && coincideConf) {
                fila.style.display = "";
            } else {
                fila.style.display = "none";
            }
        });
    }

    buscador.addEventListener("input", filtrarTabla);
    filtro.addEventListener("change", filtrarTabla);

});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-navegacion");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});