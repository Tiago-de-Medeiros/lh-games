//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'    
        }
    )
}

//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == 'admin' && senha == '123456') {
        window.location = "index.html";
        logado = 1;
    }
    if (logado == 0) {
        alert("Acesso negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html"
}


// Ativar Modal na Galeria
document.addEventListener("DOMContentLoaded", function () {
    const imagensGaleria = document.querySelectorAll("#section-galeria .card");
    
    // Seleciona os elementos do Modal que adicionamos no HTML
    const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    const modalImg = document.querySelector('.modal-img-preview');
    const modalTitle = document.getElementById('galleryModalLabel');

    imagensGaleria.forEach(card => {
        // Muda o cursor para indicar que é clicável
        card.style.cursor = "pointer";

        card.addEventListener("click", function () {
            // 1. Pega os dados do card clicado (imagem e texto)
            const srcImagem = this.querySelector("img").getAttribute("src");
            const tituloImagem = this.querySelector(".card-text").innerText;

            // 2. Preenche o Modal com esses dados
            modalImg.setAttribute("src", srcImagem);
            modalImg.setAttribute("alt", tituloImagem);
            modalTitle.innerText = tituloImagem;

            // 3. Abre o Modal do Bootstrap
            galleryModal.show();
        });
    });
});