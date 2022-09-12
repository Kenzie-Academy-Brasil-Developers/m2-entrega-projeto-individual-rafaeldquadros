import renderHome from "./renderHome.js"
import toast      from "./toast.js"

class RequestHome{
    static async empresasParceiras(filtro){
        await fetch("http://localhost:6278/companies", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((res) => renderHome.renderEmpresas(res, filtro))
    }
    static async cadastro (){

    }
    static async cadastroUser(body){
        await fetch("http://localhost:6278/auth/register/user",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body)    
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.uuid == undefined){
                toast.toastErro("Ops, você digitou alguma informação invalida! Tente novamente.")
            }else{
                toast.toastErro("Cadastro realizado com sucesso.")
            }
        })
    }
    static async login(body){
        await fetch("http://localhost:6278/auth/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.token == undefined){
                toast.toastErro("Loguin ou senha invalidos")
            }else{
                localStorage.setItem("KenzieToken", res.token)
                localStorage.setItem("UserId", res.uuid)
                localStorage.setItem("Admin", res.is_admin)
                window.location.assign("/src/pages/dashboardAdmin.html")
            }
        })
        .catch((res) => console.log(res))
    }
}

export default RequestHome