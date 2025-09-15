let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    let amigo = amigoInput.value.trim();

    if (amigo) {
        if (amigos.includes(amigo)) {
            alert('This person is already in the list.');
            return;
        }
         // Validaciones para asegurar que el nombre sea válido
    if (amigo === '') {
        alert('Por favor, ingresa tu nombre completo.');
        return;
    }
    if (amigos.includes(amigo)) {
        alert('Este nombre ya ha sido agregado. Por favor, verifica la lista o ingresa un nombre diferente para participar.');
        return;
    }

    let palabras = amigo.split(/\s+/);
    
    if (palabras.length < 2) {
        alert('Por favor, ingresa al menos un nombre y un apellido.');
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(amigo)) {
        alert('Por favor, ingresa solo letras y espacios.');
        return;
    }

        amigos.push(amigo);
        let li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('name-item');
        listaAmigos.appendChild(li);
        amigoInput.value = '';
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Agregue al menos un amigo para poder sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const respuesta = document.getElementById('resultado');
    respuesta.innerHTML = `¡El amigo sorteado es: ${nombreSorteado}!`;
}

function montarResultado() {
    // 1. Oculta la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
    
    // 2. Muestra el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
}
