import render from "./dasboardRender.js"
import toast  from "./toast.js"
class Request {
    static async setores(){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/sectors", {
            method: "GET",
            headers: {
                Authorization : `Baerer ${token}`
            }
            
        })
        .then((res) => res.json())
        .then((res) => render.renderSetores(res))
    }
    static async cadastroEmpresa(body){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/companies",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Baerer ${token}`
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
    static async requestMyEmpresas(){
        await fetch("http://localhost:6278/companies", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((res) => render.minhasEmpresas(res))
    }
}

export default Request