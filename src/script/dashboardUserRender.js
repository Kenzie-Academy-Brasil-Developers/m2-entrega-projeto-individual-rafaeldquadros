import requestUser from "./dashboardUserRequest.js"
class RenderUser{
    static usuarioLogado(data){
        const sectionUser = document.getElementById("user")
        const h1          = document.createElement("h1")
        const btnLogout   = document.createElement("button")
        btnLogout.classList = "sair"

        btnLogout.innerText = "Sair"
        h1.innerText        = data.username
        btnLogout.addEventListener("click", (event) => {
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
        sectionUser.append(h1, btnLogout)

    }
    static verificationToken(){
        if(!localStorage.KenzieToken){
            window.location.assign("../../index.html")
        }else{
            
        }
    }
    static btnsMenuUser(){
        const divContainer  = document.getElementById("container")
        const divMenu        = document.getElementById("divMenu")
        const btnMinhaEmpresa       = document.getElementById("btnMinhaEmpresa")
        const btnMeuDepartamento    = document.getElementById("btnMeuDepartamento")
        const btnColaboradores      = document.getElementById("btnColaboradores")
        const btnEditarMeusDados    = document.getElementById("btnEditarMeusDados")
        const btnDadosUsuario       = document.getElementById("btnDadosUsuario")

        btnMinhaEmpresa.addEventListener("click", (event) =>{
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            requestUser.empresaUser()
        })
        btnMeuDepartamento.addEventListener("click", (event) =>{
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            requestUser.empresaUserDepartaments()
        })
        btnColaboradores.addEventListener("click", (event) => {
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            requestUser.colaboradoresUser()
        })
        btnEditarMeusDados.addEventListener("click", (event) =>{
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            requestUser.userEditar()
        })
        btnDadosUsuario.addEventListener("click", (event) =>{
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            requestUser.dadosUsuario()
        })
    }

    static renderEmpresaUser(data){
        
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""

        
        const btnClose     = document.createElement("button")
        const buttonHide   = document.getElementById("button__close")
        btnClose.innerText = "X"
        btnClose.id        = "buttonX"
        btnClose.addEventListener("click", (event) => {
            divContainer.style.display = "none"
            if(buttonHide.id == "button__close"){
                    
                buttonHide.innerText = ""
                buttonHide.innerHTML =`<i class="fa-solid fa-bars"></i>`
                buttonHide.id = "button__show"
                
            }
        })

        const sectionME     = document.createElement("section")
        const h2            = document.createElement("h2")
        const p             = document.createElement("p")
        const span          = document.createElement("span")

        sectionME.classList = "sectionME"
        h2.classList        = "nomeEmp"
        p.classList         = "descEmp"
        span.classList      = "hoursEmp"

        h2.innerText = data.name
        p.innerText  = data.description
        span.innerText = `Abre às:${data.opening_hours}`

        sectionME.append(h2,p,span)
        divContainer.append(sectionME, btnClose)
    }

    static renderDepartUser(data){
        requestUser.userProfile(data)
    }

    static renderUserDepart(data, user){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""
        const title             = document.createElement("h1")
        title.innerText         = "Seu departamento."

        
        const btnClose     = document.createElement("button")
        const buttonHide   = document.getElementById("button__close")
        btnClose.innerText = "X"
        btnClose.id        = "buttonX"
        btnClose.addEventListener("click", (event) => {
            divContainer.style.display = "none"
            if(buttonHide.id == "button__close"){
                    
                buttonHide.innerText = ""
                buttonHide.innerHTML =`<i class="fa-solid fa-bars"></i>`
                buttonHide.id = "button__show"
                
            }
        })

        const sectionDepartUser = document.createElement("section")
        sectionDepartUser.classList = "sectionME"
        data.forEach((element) => {
            if(element.uuid == user.department_uuid){
                console.log(element)
                
                const h2                = document.createElement("h2")
                const p                 = document.createElement("p")

                h2.innerText    = element.name
                p.innerText     = element.description

                sectionDepartUser.append(h2, p)
            }
        })
        divContainer.append(title, sectionDepartUser, btnClose)
    }

    static renderColaboradores(data){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""
        const title             = document.createElement("h1")
        title.innerText         = "Seus colegas de departamento."

        
        const btnClose     = document.createElement("button")
        const buttonHide   = document.getElementById("button__close")
        btnClose.innerText = "X"
        btnClose.id        = "buttonX"
        btnClose.addEventListener("click", (event) => {
            divContainer.style.display = "none"
            if(buttonHide.id == "button__close"){
                    
                buttonHide.innerText = ""
                buttonHide.innerHTML =`<i class="fa-solid fa-bars"></i>`
                buttonHide.id = "button__show"
                
            }
        })

        const ulColaboradores = document.createElement("ul")
        ulColaboradores.classList = "ulColaboradores"
        console.log(data[0].users)
        data[0].users.forEach((element) =>{
            const li        = document.createElement("li")
            const h2        = document.createElement("h2")
            const pEmail    = document.createElement("p")
            const pTpWork   = document.createElement("p")
            const pLevel    = document.createElement("p")

            h2.innerText        = `Nome: ${element.username}`
            pEmail.innerText    = `Email: ${element.email}`
            pTpWork.innerText   = `Tipo de trabalho: ${element.kind_of_work}`
            pLevel.innerText    = `Nivel profissional: ${element.professional_level}`

            li.append(h2, pEmail, pLevel, pTpWork)
            ulColaboradores.append(li)
        })

        divContainer.append(title, ulColaboradores, btnClose)
    }

    static renderInputsEdit(data){
        console.log(data)
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""
        const title             = document.createElement("h1")
        title.innerText         = "Editando informações da conta."

        
        const btnClose     = document.createElement("button")
        const buttonHide   = document.getElementById("button__close")
        btnClose.innerText = "X"
        btnClose.id        = "buttonX"
        btnClose.addEventListener("click", (event) => {
            divContainer.style.display = "none"
            if(buttonHide.id == "button__close"){
                    
                buttonHide.innerText = ""
                buttonHide.innerHTML =`<i class="fa-solid fa-bars"></i>`
                buttonHide.id = "button__show"
                
            }
        })

        const formEditarUser = document.createElement("form")
        formEditarUser.classList = "formEditarUser"

        const labelNome      = document.createElement("label")
        const inputNome      = document.createElement("input")
        const labelEmail     = document.createElement("label")
        const inputEmail     = document.createElement("input")
        const labelSenha     = document.createElement("label")
        const inputSenha     = document.createElement("input")
        const btnEditar      = document.createElement("button")


        inputNome.classList  =  "inputs"
        inputEmail.classList =  "inputs"
        inputSenha.classList =  "inputs"

        labelNome.innerText  = "Edite seu nome:"
        labelEmail.innerText = "Edite seu e-mail:"
        labelSenha.innerText = "Digite a nova senha:"
        btnEditar.innerText  = "Editar"

        inputNome.value         = data.username
        inputEmail.value        = data.email
        inputSenha.placeholder  = "Digite a nova senha!"
        inputSenha.type         = "password"

        btnEditar.addEventListener("click", (event)=>{
            event.preventDefault()
            const body = {
                username: inputNome.value,
                email: inputEmail.value,
                password: inputSenha.value
              }
            
            requestUser.editandoUser(body)
        })

        formEditarUser.append(labelNome , inputNome, labelEmail, inputEmail, labelSenha, inputSenha, btnEditar)
        divContainer.append(title, formEditarUser, btnClose)
    }
    static renderDadosUsuario(data){
        console.log(data)
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""
        const title             = document.createElement("h1")
        title.innerText         = "Seus dados."

        
        const btnClose     = document.createElement("button")
        const buttonHide   = document.getElementById("button__close")
        btnClose.innerText = "X"
        btnClose.id        = "buttonX"
        btnClose.addEventListener("click", (event) => {
            divContainer.style.display = "none"
            if(buttonHide.id == "button__close"){
                    
                buttonHide.innerText = ""
                buttonHide.innerHTML =`<i class="fa-solid fa-bars"></i>`
                buttonHide.id = "button__show"
                
            }
        })

        const sectionDadosUser = document.createElement("section")
        sectionDadosUser.classList = "sectionDadosUser"

        const h2               = document.createElement("h2")
        const pTpWork          = document.createElement("p")
        const pLevel           = document.createElement("p")
        const pEmail           = document.createElement("p")

        h2.innerText        = `Nome: ${data.username}`
        pTpWork.innerText   = `Tipo de trabalho: ${data.kind_of_work}`
        pLevel.innerText    = `Level profissioal: ${data.professional_level}`
        pEmail.innerText    = `E-mail: ${data.email}`

        sectionDadosUser.append(h2, pTpWork, pLevel, pEmail)
        divContainer.append(title, sectionDadosUser, btnClose)
    }
}

export default RenderUser