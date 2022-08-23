export class Perfil {
    constructor(nome, img) {
        this.nome = nome
        this.img = img
    }

    exibir() {
        const nomePerfil = document.querySelector('.nome-perfil')
        const fotoPerfil = document.querySelector('.foto-perfil')

        nomePerfil.innerText = this.nome
        fotoPerfil.src = this.img
    }
}









