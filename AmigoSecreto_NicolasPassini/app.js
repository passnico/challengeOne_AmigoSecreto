// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos al array
function agregarAmigo() {
    // Obtener el nombre ingresado desde el campo de texto
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresá un nombre válido.");
        return; // Detener la ejecución si está vacío
    }

    // Agregar el nombre válido al array amigos
    amigos.push(nombre);

    // Limpiar el campo de texto después de añadir
    inputAmigo.value = "";

    // Actualizar la lista de amigos en pantalla
    actualizarListaAmigos();
}

// Función para mostrar la lista de amigos en pantalla
function actualizarListaAmigos() {
    // Obtener el elemento HTML donde se mostrarán los amigos
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el array amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear aleatoriamente un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles para sortear
    if (amigos.length === 0) {
        alert("Debés agregar al menos un amigo para sortear.");
        return; // Detener la ejecución si no hay amigos
    }

    // Generar un índice aleatorio para seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo correspondiente al índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar en pantalla el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}
