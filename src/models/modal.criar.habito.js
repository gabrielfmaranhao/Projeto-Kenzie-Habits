import Api from "../database/Api.models.js"

export default class Componente1 {
    static inserirModal() {
      const modal = document.querySelector(".recipienteModalCriarHabito")
      if (modal) {
        modal.remove()
      }  {
        Componente1.modalCriarHabito()
      }
    }
    static fecharModal() {
      const modal = document.querySelector(".modalCriarHabito")
      if (modal) {
        modal.remove()
      }  
    }
    static modalCriarHabito() {
        const body = document.querySelector("body")
        
        const div = document.createElement("div")
        div.classList.add("recipienteModalCriarHabito")

       const divModal = document.createElement("div")
       divModal.classList.add("modalCriarHabito")
        

        const div1 = document.createElement("div")
        div1.classList.add("nomeDaModalCriar")

        const p = document.createElement("p")
        p.classList.add("paragrafoCriarHabito")
        p.innerText = "Criar Hábito"

        const button = document.createElement("button")
        button.classList.add("botaoFecharCriar")
        button.innerText = "x"
        button.addEventListener("click", Componente1.fecharModal)

        const div2 = document.createElement("div")
        div2.classList.add("corpoDaModalCriar")

        const form = document.createElement("form")
        form.classList.add("form")

        const label = document.createElement("label")
        label.innerText = "Título"

        const input = document.createElement("input")
        input.name = "habit_title"
        input.placeholder = "Digitar Título"
        input.ariaRequired = true

        const label1 = document.createElement("label")
        label1.innerText = "Descrição"

        const input1 = document.createElement("input")
        input1.name = "habit_description"
        input1.placeholder = "Digitar Descrição"

        const label2 = document.createElement("label")
        label2.innerText = "Categoria"

        const select = document.createElement("select")
        select.name = "habit_category"
        select.id = "Categoria"

        const option0 = document.createElement("option")
        option0.value= ""
        option0.innerText = "Selecionar Categoria"

        const option = document.createElement("option")
        option.value = "saude"
        option.innerText = "Saúde"

        const option1 = document.createElement("option")
        option1.value = "estudos"
        option1.innerText = "Estudos"

        const option2 = document.createElement("option")
        option2.value = "casa"
        option2.innerText = "Casa"

        const option3 = document.createElement("option")
        option3.value = "trabalho"
        option3.innerText = "Trabalho"

        const option4 = document.createElement("option")
        option4.value = "lazer"
        option4.innerText = "Lazer"

        const div3 = document.createElement("div")
        div3.classList.add("blocoBotoes")

        const button2 = document.createElement("button")
        button2.classList.add("botaoInserir")
        button2.innerText = "Inserir"
        button2.addEventListener("click", async () => {
         await Api.criarHabito({        
          "habit_title": input.value,
          "habit_description": input1.value,
          "habit_category": select.value,})
           
          Swal.fire({
            title: 'Boa!',
            text: 'Deu tudo certo!',
            icon: 'success',
            confirmButtonColor: '#56CF8E'
        }).then( async (result) => {
      if (result.value) {
         location.reload()
      }
    })
        })

        body.appendChild(divModal)
        divModal.appendChild(div)
        div.append(div1, div2, div3)
        div1.append(p, button)
        div2.append(form)
        form.append(label, input, label1, input1, label2, select)
        select.append(option0, option, option1, option2, option3, option4)
        div3.append(button2)
    }
}
 