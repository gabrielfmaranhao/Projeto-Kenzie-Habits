export default class Componente{

       static modalCriarHabito(){

         const body = document.querySelector('body')

         const div0 = document.createElement('div')
         div0.classList.add('modalEditarHabito')
         
         const div = document.createElement('div')
         div.classList.add('recipienteModalEditarHabito')

        

         const div1 =  document.createElement('div')
         div1.classList.add('nomeDaModal')

         const p = document.createElement('p')
         p.classList.add('paragrafoEditarHabito')
         p.innerText = 'Editar hábito'

         const button = document.createElement('button')
         button.classList.add('botaoFechar')
         button.innerText = 'x'

         button.addEventListener('click',(e)=>{
              div0.style.display = 'none'
              
              
         })

         const div2 = document.createElement('div')
         div2.classList.add('corpoDaModal')

         const form = document.createElement('form')
         form.className = "formEditarHabitos"

         
         const label = document.createElement('label')
         label.innerText = 'Titulo'
         
         const input = document.createElement('input')
         input.name = 'habit_title'
         input.placeholder = "Digitar título"
         input.setAttribute('class', 'input-modificar-habito descricao')
         
         const label1 = document.createElement('label')
         label1.innerText = 'Descrição'
         
         const input1 = document.createElement('input')
        
         input1.name = 'habit_description'
         input1.placeholder = 'Digitar descrição'
         input1.setAttribute('class', 'input-modificar-habito descricao')
         
         const label2 = document.createElement('label')
         label2.innerText = 'Categoria'
         
         const select = document.createElement('select')
         select.name = 'Categoria'
         select.id = 'Categoria'
         select.setAttribute('class', 'input-modificar-habito')
         
         const option = document.createElement('option')
         option.value = 'saude'
         option.innerText='Saúde'
         
         const option1 = document.createElement('option')
         option1.value = 'estudos'
         option1.innerText='Estudos'
         
         const option2 = document.createElement('option')
         option2.value = 'casa'
         option2.innerText='Casa'
         
         const option3 = document.createElement('option')   
         option3.value = 'trabalho'
         option3.innerText='Trabalho'

         const option4 = document.createElement('option')
         option4.value = 'lazer'
          option4.innerText='Lazer'
          
          const div3 = document.createElement('div')
          div3.classList.add('status')
          
          const p1 = document.createElement('p')
          p1.classList.add('paragrafoStatus')
          p1.innerText = 'Status'
          
          const check = document.createElement('input')
          check.type = 'checkbox'
          check.setAttribute('class', 'input-modificar-habito descricao checkbox')

          
          const div4 = document.createElement('div')
          div4.classList.add('blocoBotoes')
          
          const button2 = document.createElement('button')
          button2.classList.add('botaoExcluir')
          button2.innerText = 'Excluir'
          
          const button3 = document.createElement('button')
          button3.classList.add('botao-Editar')
          button3.innerText = 'Salvar alterações'
          
          body.appendChild(div0)
          div0.appendChild(div)
          div.append(div1,div2)
          div1.append(p, button)
          div2.appendChild(form)
          form.append(label, input, label1, input1, label2, select, div3, div4)
          select.append(option, option1, option2, option3, option4)
          div3.append(p1, check)
          div4.append(button2, button3)        
          
          
       }
}




