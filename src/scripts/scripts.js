import Api from "../database/Api.models.js";
import Card from "../models/card.models.js";
import dados from "../models/tratarDados.js";
import Template from "../models/Template.js"
import ModalEditarPerfil from "../models/modalEditar.models.js"
import { Perfil } from "../models/perfil.models.js";
import Componente from "../models/modal.editar.habitos.js";
import Componente1 from "../models/modal.criar.habito.js";

const usuario = JSON.parse(localStorage.getItem("response"));

if (usuario) {

    const novoPerfil = new Perfil(usuario.usr_name, usuario.usr_image)
    novoPerfil.exibir()
}


if (!JSON.parse(localStorage.getItem("token"))) {

    location.replace("../src/views/logar.views.html")
}
else {

    Template.headerBtnDropdown()
    Card.criarCard(dados)


    const table = document.querySelector('table')

    table.addEventListener('click', async (event) => {
        if (event.target.className === 'checkbox') {
            const status = document.querySelectorAll('.checkbox')

            dados.forEach(async (dado, index) => {
                if (event.target.id === dado.id.toString()) {

                    Api.completarHabito(dado.id)

                    const checked = document.getElementById(`${index}`)
                    checked.style.textDecoration = 'line-through'

                    status[index].checked = true


                }
            })
        }
    })

    const concluidos = document.querySelector('.tarefas-concluidas')

    function filtrarStatus(status) {
        return dados.filter((dado) => dado.status === status)
    }


    concluidos.addEventListener('click', () => {
        const dadosFiltrados = filtrarStatus(true)

        Card.criarCard(dadosFiltrados)
    })

    const todasTarefas = document.querySelector('.todas-tarefas')

    todasTarefas.addEventListener('click', () => {
        Card.criarCard(dados)
    })

    ModalEditarPerfil.modalEditar()
    Componente.modalCriarHabito()
    const btnTable = document.querySelector("table")
    const divModalEditarHabito = document.querySelector(".modalEditarHabito")
    const btnEditarHabito = document.querySelector(".imgBtn")


    btnTable.addEventListener('click', (e) => {

        if (e.target.className === btnEditarHabito.className) {
            divModalEditarHabito.style.display = "flex"
            dados.forEach((dado) => {
                function apenasNumeros(string) {
                    var numsStr = string.replace(/[^0-9]/g, '');
                    return parseInt(numsStr);
                }
                const newId = apenasNumeros(e.target.id)

                if (newId === dado.id) {
                    const buttonSalvar = document.querySelector('.botao-Editar')
                    const input = document.querySelectorAll('.input-modificar-habito')
                    const status = document.querySelector('.status')


                    input[0].value = dado.titulo
                    input[1].value = dado.descricao
                    input[2].value = dado.categoria
                    status.lastChild.checked = dado.status
                    buttonSalvar.id = newId


                }
            })
        }

    })

    const form = document.querySelector('.formEditarHabitos')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const buttonSalvar = document.querySelector('.botao-Editar')


        const data = {
            habit_title: form.childNodes[1].value,
            habit_description: form.childNodes[3].value,
            habit_category: form.childNodes[5].value,
        }

        await Api.atualizarHabito(buttonSalvar.id, data)

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


    })


    const divEditar = document.getElementById("containerModalEditarPerfil");


    const buttonExcluir = document.querySelector('.botaoExcluir')

    buttonExcluir.addEventListener('click', async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Você está certo disso?',
            text: "Esta pergunta vale um milhão de reais!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, tenho certeza!',
            cancelButtonText: 'Melhor eu parar...'
        }).then(async (result) => {
            if (result.value) {
                const buttonSalvar = document.querySelector('.botao-Editar')
                await Api.deletarHabito(buttonSalvar.id)
                location.reload()
            } else {
                location.reload()
            }
        })

    })

    const botaoCriar = document.querySelector(".btn-criar-habito")
    botaoCriar.addEventListener("click", Componente1.inserirModal)

    const btnCarregarMais = document.querySelector('.btn-carregar-mais')

    btnCarregarMais.addEventListener('click', () => {
        const table = document.querySelector('.table')
        if (btnCarregarMais.className === 'btn-carregar-mais incial') {
            table.style.overflow = 'none'
            table.style.height = '100%'
            btnCarregarMais.removeAttribute('class')
            btnCarregarMais.setAttribute('class', 'btn-carregar-mais carregado')
        } else {
            table.style.overflow = 'hiden'
            table.style.height = '23.36rem'
            btnCarregarMais.removeAttribute('class')
            btnCarregarMais.setAttribute('class', 'btn-carregar-mais incial')
        }



    })


}
