class Card {
    static criarCard(dados) {
        const table = document.querySelector('table')

        table.innerHTML = `
            <tr class="tr-cabecalho">
                 <td>Status</td>
                 <td>Titulo</td>
                 <td class='td-descricao'>Descrição</td>
                 <td class='td-categoria-mobile'>Categoria</td>
                 <td>Editar</td>
            </tr>
        `


        dados.forEach((dado, index) => {
            const tr = document.createElement('tr')
            const status = document.createElement('td')
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.setAttribute('class', 'checkbox')
            checkbox.setAttribute('id', dado.id)
            status.append(checkbox)

            const titulo = document.createElement('td')
            titulo.setAttribute('id', `${index}`)
            titulo.innerText = dado.titulo


            if (dado.status) {
                checkbox.checked = true
                titulo.style.textDecoration = 'line-through'
            }
            
            
            const descricao = document.createElement('td')
            descricao.setAttribute('class', 'td-descricao')
            descricao.innerText = dado.descricao
            const categoria = document.createElement('td')
            categoria.setAttribute('class', 'td-categoria td-categoria-mobile')
            categoria.innerText = dado.categoria
            const editar = document.createElement('td')
            const botao = document.createElement('div')
            const imgBtn = document.createElement("img")
            imgBtn.id = `btn${dado.id}`
            imgBtn.className = "imgBtn"
            imgBtn.src = "./src/assets/img/pontos.png"
            botao.setAttribute('class', 'btn-editar-tarefa')

            botao.append(imgBtn)
            editar.append(botao)


            tr.append(status, titulo, descricao, categoria, editar)

            table.append(tr)

        })
    }

    static verificarStatus() {

    }
}
export default Card

