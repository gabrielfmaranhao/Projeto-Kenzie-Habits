import Api from "../database/Api.models.js";

let dados = await Api.lerTodos()

if(dados) { 
dados = dados.map((dado) => {
     return {
        id: dado.habit_id,
        titulo: dado.habit_title[0].toUpperCase() + dado.habit_title.substring(1),
        descricao: dado.habit_description[0].toUpperCase() + dado.habit_description.substring(1),
        categoria: dado.habit_category[0].toUpperCase() + dado.habit_category.substring(1),
        status: dado.habit_status
    }
})

}

export default dados