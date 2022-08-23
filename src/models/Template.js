export default class Template {

    static headerBtnLogin() {
        const header = document.querySelector("header")
        const ancoraLogin = document.createElement("a")
        ancoraLogin.innerHTML = "Logar"
        ancoraLogin.href = "./src/views/logar.views.html"
        ancoraLogin.className = "ancoraLogin"
        header.append(ancoraLogin)
    }

    static async headerBtnDropdown() {

        const resposta = await JSON.parse(localStorage.getItem("response"))

        const dropdown = document.createElement("div")
        dropdown.className = "dropdown"
        dropdown.style.position = "relative"
        dropdown.style.display = "inline-block"

        const btnImg = document.createElement("button")
        btnImg.className = "btnImg";
        btnImg.style.backgroundImage = `url(${resposta.usr_image})`;
        btnImg.addEventListener("click", () => {
           
            conteudoDropdown.style.display = "flex"
            
            
        })
 

        const conteudoDropdown = document.createElement("div")
        conteudoDropdown.id = "conteudoDropdown"
        conteudoDropdown.style.display = "none"
        conteudoDropdown.style.position = "absolute"

        const btnEditarPerfil = document.createElement("button")
        const iconePerfil = document.createElement('img')
        iconePerfil.setAttribute('class', 'icons')
        iconePerfil.src = "./src/assets/img/user-gear-solid.svg"
        const divEditar = document.getElementById("containerModalEditarPerfil");
        btnEditarPerfil.append(iconePerfil, ' Editar')
        btnEditarPerfil.className = "btnEditarPerfil"
        btnEditarPerfil.addEventListener("click", () => {
            divEditar.style.display = "block"; 
        })

        const btnLogout = document.createElement("button")
        const iconeLogout = document.createElement('img')
        iconeLogout.src =  "./src/assets/img/power-off-solid.svg"
        iconeLogout.setAttribute('class', 'icons')
        btnLogout.append(iconeLogout, ' Logout')
        btnLogout.className = "btnLogout"
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("token")
            localStorage.removeItem("response")
            location.replace("./src/views/logar.views.html")
        })


        window.addEventListener("click", (event) => {
         if(event.target.className !== "btnImg") 
            conteudoDropdown.style.display = "none"
        })

        const header = document.querySelector("header")
        header.append(dropdown)
        
        dropdown.append(btnImg, conteudoDropdown)
        conteudoDropdown.append(btnEditarPerfil, btnLogout)
    }


    static async bodySemLogin() {
        const container = document.querySelector(".container")
        const divSemLogin = document.createElement("div")
        divSemLogin.className = "divSemLogin"
        const h3SemLogin = document.createElement("h3")
        h3SemLogin.className = "h3SemLogin"
        h3SemLogin.innerText = "Realize seu login para acessar a KenzieHabit!"
        container.append(divSemLogin)
        divSemLogin.append(h3SemLogin)
    }

}