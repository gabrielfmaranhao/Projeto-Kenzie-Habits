import Api from "../database/Api.models.js";

export default class ModalEditarPerfil {
    static modalEditar() {

        const dadosUsario = JSON.parse(localStorage.getItem("response"));
        const main = document.querySelector("main");
        const divContainerModal = document.createElement("div");
        divContainerModal.id = "containerModalEditarPerfil";
        const blocoModal = document.createElement("div");
        blocoModal.id = "blocoModal";
        const modalInner = document.createElement("div");
        modalInner.id = "modalInner";
        const divEditar = document.createElement("div");
        divEditar.id = "editarEfechar";
        const buttonX = document.createElement("button");
        buttonX.innerText = "x";
        buttonX.id = "fecharModal";
        buttonX.addEventListener("click", (event) => {
            divContainerModal.style.display = "none";
        })
        const h3Perfil = document.createElement("h3");
        h3Perfil.innerText = "Editar perfil";
        const form = document.createElement("form");
        form.id = "blocoForm"
        const nome = document.createElement("p");
        nome.innerText = "Nome";
        const inputNome = document.createElement("input");
        inputNome.type = "text";
        inputNome.value = dadosUsario.usr_name
        inputNome.id = "mudarNome";
        const urlImagem = document.createElement("p");
        urlImagem.innerText = "Url da imagem do perfil"
        urlImagem.id = "mudarImagem";
        const inputImagem = document.createElement("input");
        inputImagem.type = "url";
        inputImagem.placeholder = dadosUsario.usr_image;
        inputImagem.id = "mudarImagem";
        const button = document.createElement("button");
        button.innerText = "salvar alterações";
        button.addEventListener("click", async (event) => {
            event.preventDefault();
            const dados = {
                usr_name: inputNome.value,
                usr_image: inputImagem.value
            };

            if (dados.usr_image) {
                await Api.atualizarPerfil(dados);


                Swal.fire({
                    title: 'Boa!',
                    text: 'Deu tudo certo!',
                    icon: 'success',
                    confirmButtonColor: '#56CF8E'
                }).then(async (result) => {
                    if (result.value) {

                        location.reload()
                    }
                })
            } else {
                Swal.fire('Oh no...', 'Essa imagem não é valida', 'error')
            }

            console.log(inputNome.value)
        });
        form.append(nome, inputNome, urlImagem, inputImagem, button);
        divEditar.append(buttonX, h3Perfil);
        modalInner.append(divEditar, form);
        blocoModal.appendChild(modalInner);
        divContainerModal.appendChild(blocoModal);
        main.appendChild(divContainerModal);
        divContainerModal.style.display = "none";
    }
}