const data = [
    { 
        MES: "ENERO", TITULAR: "Latinoamérica, referente en la legalización de la marihuana medicinal", 
        CATEGORIA: "Política antidrogas", ACTORES: "países latinoamericanos: Chile, Uruguay, México, Colombia", 
        ACCIONES: "Políticas públicas", LUGAR: "Países latinoamericanos", AUTOR: "", AÑO: "2018",
        IMAGENES: ["imagenes/2018/enero/enero2018_1.jpg" ]
    },
    { 
        MES: "ENERO", TITULAR: "Cayó presunto miembro de los pelusos", 
        CATEGORIA: "Acciones militares", ACTORES: "Grupo armado ilegal: disidencias EPL Pelusos; Fuerza pública: ejército", 
        ACCIONES: "captura", LUGAR: "Tibú (Norte de Santander)", AUTOR: "", AÑO: "2018",
        IMAGENES: ["imagenes/2018/enero/enero2018_2.jpg"]
    },
    { 
        MES: "ENERO", TITULAR: "El comienzo de la paz", 
        CATEGORIA: "Resistencias", ACTORES: "Entidad gubernamental: alcaldía; sociedad civil: radio; comunidad; organizaciones sociales", 
        ACCIONES: "acuerdo de paz 2016, radio comunitaria Café estéreo, paz", LUGAR: "San Calixto (Norte de Santander)", AUTOR: "", AÑO: "2018",
        IMAGENES: ["imagenes/2018/enero/enero2018_3.jpg"]
    },
    { 
        MES: "ENERO", TITULAR: "Desde Norte de Santander piden que continúe. Hoy, día clave para decidir prórroga del cese el fuego", 
        CATEGORIA: "Proceso de paz ELN", ACTORES: "Gobierno nacional; líderes sociales de Norte de Santander; grupo armado ilegal: ELN", 
        ACCIONES: "proceso de paz con ELN, cese al fuego", LUGAR: "Norte de Santander", AUTOR: "", AÑO: "2018",
        IMAGENES: ["imagenes/2018/enero/enero2018_4.jpg"]
    },
    { 
        MES: "ENERO", TITULAR: "Tarra, ejemplo piscícola para Catatumbo", 
        CATEGORIA: "Resistencias", ACTORES: "Asociación de piscicultores de El Tarra (Asopistar); campesinos", 
        ACCIONES: "sustitución de cultivos ilegalizados", LUGAR: "El Tarra (Norte de Santander)", AUTOR: "", AÑO: "2018",
        IMAGENES: ["imagenes/2018/enero/enero2018_5.jpg"]
    },
    { 
        MES: "ENERO", TITULAR: "Capturado en flagrancia", 
        CATEGORIA: "Acciones Fuerza Pública", ACTORES: "delincuencia común", 
        ACCIONES: "captura", LUGAR: "Tibú (Norte de Santander)", AUTOR: "", AÑO: "2018",
        IMAGENES: ["imagenes/2018/enero/enero2018_6.jpg"]
    }
];

// Función para cargar datos en la tabla
function loadTableData(filter = "") {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach(item => {
        const itemString = Object.values(item).join(" ").toLowerCase();
        if (itemString.includes(filter.toLowerCase())) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.MES}</td>
                <td>${item.TITULAR}</td>
                <td>${item.CATEGORIA}</td>
                <td>${item.ACTORES}</td>
                <td>${item.ACCIONES}</td>
                <td>${item.LUGAR}</td>
                <td>${item.AUTOR}</td>
                <td>${item.AÑO}</td>
                <td>${formatImageLinks(item.IMAGENES)}</td>
            `;

            tableBody.appendChild(row);
        }
    });
}

// Función para generar los enlaces de las imágenes
function formatImageLinks(images) {
    return images.map(img => `<a href="${img}" target="_blank">Ver imagen</a>`).join(" | ");
}

// Evento para búsqueda en tiempo real
document.getElementById("searchInput").addEventListener("input", (event) => {
    loadTableData(event.target.value);
});

// Cargar la tabla al inicio
document.addEventListener("DOMContentLoaded", () => loadTableData());
