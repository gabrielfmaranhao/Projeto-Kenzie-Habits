import Api from "../database/Api.models.js";
const form = document.querySelector("form")
const formElementos = [...form.elements]
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const resultadosInput = []
    formElementos.forEach(el => {
        resultadosInput.push(el.value)
    })
    const dados = { email: resultadosInput[0], password: resultadosInput[1] }
    const response = await Api.logar(dados)
    if (response.status === "error") {
        return alert("Usuário ou senha incorretos!")
    } else {
        const main = document.querySelector('main')
        const container = document.querySelector('#container')
        const preLoad = document.createElement('div')
        preLoad.setAttribute('class', 'pre-load')

        container.style.display = 'none'
        main.append(preLoad)



        setTimeout(() => {
            location.replace("../../index.html") 
        }, 2500);
       
        
        
    }
})