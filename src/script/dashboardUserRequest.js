import renderUser from "./dashboardUserRender.js"
import toast     from "./toast.js"
class RequestUser {
    static async userLogado(){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/profile",{
            method:"GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => renderUser.usuarioLogado(res))
    }
    static async empresaUser (){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/departments", {
            method: "GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
       })
       .then((res) => res.json())
       .then((res) => renderUser.renderEmpresaUser(res))
    }
    static async empresaUserDepartaments (){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/departments", {
            method: "GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
       })
       .then((res) => res.json())
       .then((res) => renderUser.renderDepartUser(res.departments))
    }
    static async userProfile (data){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/profile",{
            method:"GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => renderUser.renderUserDepart(data, res))
    }
    static async colaboradoresUser(){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/departments/coworkers", {
            method: "GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => renderUser.renderColaboradores(res))
    }

    static async userEditar(){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/profile",{
            method:"GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => renderUser.renderInputsEdit(res))
    }

    static async editandoUser(body){
        console.log(body)
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Baerer ${token}`
            },
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.uuid == undefined){
                toast.toastErro("Ops, você digitou alguma informação invalida! Tente novamente.")
            }else{
                toast.toastErro("Informações atualizadas com sucesso.")
                RequestUser.dadosUsuario()
            }
        })
    }

    static async dadosUsuario(){
        const token = localStorage.KenzieToken
        await fetch("http://localhost:6278/users/profile",{
            method:"GET",
            headers: {
                Authorization: `Baerer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => renderUser.renderDadosUsuario(res))
    }
}

export default RequestUser