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
                Request.requesteEmpresasDepart()
            }
        })
    }
    static async requestMyEmpresas(filter){
        await fetch("http://localhost:6278/companies", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((res) => render.minhasEmpresas(res, filter))
    }
    static async requesteEmpresasDepart(){
        await fetch("http://localhost:6278/companies", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((res) => render.renderMenuDepartamentos(res))
    }
    static async requestDepEmpresaEspecifica(id){
        const token = localStorage.KenzieToken
        await fetch(`http://localhost:6278/departments/${id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Baerer ${token}`
            },
        })
        .then((res) => res.json())
        .then((res) => render.renderDepartamentosDaEmpresa(res, id))
    }
    static async requestUsers(id){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Baerer ${token}`
            },
        })
        .then((res) => res.json())
        .then((res) => render.usuariosDoDepartamento(res, id))
    }
    static async usuariosSemDepartamento(idDepartamento){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/admin/out_of_work", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Baerer ${token}`
            },
        })
        .then((res) => res.json())
        .then((res) => render.listaDeUsuariosSD(res, idDepartamento))
    }   

    static async contratarFuncionario(body){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/departments/hire/", {
            method: "PATCH",
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
                toast.toastErro("Funcionario contratado com sucesso.")
                Request.requesteEmpresasDepart()
            }
        })
    }

    static async requestCriarDepartamento(body){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/departments",{
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
                toast.toastErro("Departamento criado com sucesso.")
                Request.requesteEmpresasDepart()
            }
        })
    }

    static async demitir(id){
        const token = localStorage.KenzieToken
        await fetch(`http://localhost:6278/departments/dismiss/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Baerer ${token}`
            },
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.uuid == undefined){
                toast.toastErro("Ops, você digitou alguma informação invalida! Tente novamente.")
            }else{
                toast.toastErro("Funcionario demitido com sucesso.")
                Request.requesteEmpresasDepart()
            }
        })
    }
    static async atualizarFuncionario (body, id){
        const token = localStorage.KenzieToken
        await fetch(`http://localhost:6278/admin/update_user/${id}`, {
            method: "PATCH",
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
                toast.toastErro("Funcionario atualizado com sucesso.")
                Request.requesteEmpresasDepart()
            }
        })

    }
}

export default Request