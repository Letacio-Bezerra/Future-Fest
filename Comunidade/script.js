let comentarios = [];

const form = document.getElementById('formComentario');
const inputComentario = document.getElementById('comentario');
const listaComentarios = document.getElementById('listaComentarios');

// Função pra colocar a lista na tela
function renderizarLista() {
    listaComentarios.innerHTML = comentarios.map((comentario, index) =>
        `<div>
            <span>${comentario}</span>
            <button onclick="editarComentario(${index})">Editar</button>
            <button onclick="removerComentario(${index})">Remover</button>
        </div>`
    ).join('');
}

// Adiciona um novo comentário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const comentario = inputComentario.value.trim();
    if (comentario) {
        comentarios.push(comentario);
        inputComentario.value = '';
        renderizarLista();
    }
});

// Remove um comentário
function removerComentario(index) {
    comentarios.splice(index, 1);
    renderizarLista();
}

// Edita um comentário
function editarComentario(index) {
    const novoComentario = prompt("Editar comentário:", comentarios[index]);
    if (novoComentario) {
        comentarios[index] = novoComentario.trim();
        renderizarLista();
    }
}
