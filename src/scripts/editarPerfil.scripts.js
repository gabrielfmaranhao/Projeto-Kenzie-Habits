import ModalEditarPerfil from "../models/modalEditar.models.js";

ModalEditarPerfil.modalEditar();
body.appendChild(button);
function modalEditar() {
    const divModal = document.getElementById("containerModalEditarPerfil")
    button.addEventListener("click",(event)=>{
        divModal.style.display = "block";
    })
}
modalEditar();