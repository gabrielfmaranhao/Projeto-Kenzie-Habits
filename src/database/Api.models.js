export default class Api {

    static token = JSON.parse(localStorage.getItem("token"));
    static url = "https://habits-kenzie.herokuapp.com/api"


    static async logar(dado) {
        const response = await fetch(
            `${this.url}/userLogin`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dado),
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .then(res => {
                localStorage.setItem("response", JSON.stringify(res.response))
                localStorage.setItem("token", JSON.stringify(res.token))


                return { status: "success" }

            })
            .catch(error => {
                return {
                    status: "error",
                    error: error
                }
            });

        return response;
    }


    static async atualizarPerfil(dado) {
        const response = await fetch(
            `${this.url}/user/profile`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Api.token}`
                },
                body: JSON.stringify(dado),
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
              
                return res.json()
            })
            .then(res => {
                localStorage.setItem("response", JSON.stringify(res))
                console.log(localStorage.setItem("response", JSON.stringify(res)))
            })
            .catch((error) => {
                console.log(error)
            });

        return response;
    }


    static async criarHabito(dado) {
        const response = await fetch(
            `${this.url}/habits`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Api.token}`
                },
                body: JSON.stringify(dado),
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .catch((error) => {
                console.log(error)
            });

        return response;
    }


    static async lerTodos() {
        const response = await fetch(
            `${this.url}/habits`,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${Api.token}`
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .catch((error) => {
                console.log(error)
            });

        return response;
    }


    static async lerPorCategoria(categoriaHabito) {
        const response = await fetch(
            `${this.url}/habits/category/${categoriaHabito}`,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${Api.token}`
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .catch((error) => {
                console.log(error)
            });

        return response;
    }


    static async atualizarHabito(idHabito, dado) {
        const response = await fetch(
            `${this.url}/habits/${idHabito}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Api.token}`
                },
                body: JSON.stringify(dado),
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .catch((error) => {
                console.log(error)
            });

        return response;
    }


    static async completarHabito(idHabito) {
        const response = await fetch(
            `${this.url}/habits/complete/${idHabito}`,
            {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${Api.token}`
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .catch((error) => {
                console.log(error)
            });

        return response;
    }


    static async deletarHabito(idHabito) {
        const response = await fetch(
            `${this.url}/habits/${idHabito}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Api.token}`
                },
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .catch((error) => {
                console.log(error)
            });
    }

}

