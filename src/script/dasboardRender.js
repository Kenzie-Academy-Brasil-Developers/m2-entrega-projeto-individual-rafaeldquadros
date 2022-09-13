import request from "./dashboardRequest.js";
import toast from "./toast.js"
class Render{
    static sair(){
        const deslogar = document.getElementById("sair")
        
        deslogar.addEventListener("click", (event) => {
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }
    static verificacaoAdmin(){
        if(localStorage.Admin == "false" || localStorage.Admin == undefined){
            window.location.assign("/src/pages/dashboardUsuario.html")
        }else{
            toast.toastErro("Loguin realizado com sucesso!")
        }
        
    }
    static btnRender(){
        const divContainer = document.getElementById("container")
        const divMenu      = document.getElementById("divMenu")

        const btnSetores        = document.getElementById("btnSetores")
        const btnEmpresas       = document.getElementById("btnEmpresas")
        const btnDepartamentos  = document.getElementById("btnDepartamentos")

        btnSetores.addEventListener("click", (event) => {
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            request.setores()
        })
        btnEmpresas.addEventListener("click", (event) =>{
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            Render.menuEmpresas()

        })
        btnDepartamentos.addEventListener("click", (event) =>{
            event.preventDefault()
            divMenu.classList = "container__hide"
            divContainer.style.display = "flex"
            request.requesteEmpresasDepart()
        })
    }
    static renderSetores(data){
        const divContainer = document.getElementById("container")
        const ulSetores = document.createElement("ul")
        const btnClose  = document.createElement("button")
        const buttonHide = document.getElementById("button__close")

        const h1 = document.createElement("h1")
        
        ulSetores.classList.add("ulSetores")
        btnClose.innerText = "X"
        btnClose.id        = "buttonX"
        h1.innerText       = "Lista de Setores"

        divContainer.innerHTML = ""

        btnClose.addEventListener("click", (event) => {
            divContainer.style.display = "none"
            if(buttonHide.id == "button__close"){
                    
                buttonHide.innerText = ""
                buttonHide.innerHTML =`<i class="fa-solid fa-bars"></i>`
                buttonHide.id = "button__show"
                
            }
        })
        data.forEach((element) => {
            const li = document.createElement("li")
            const h2 = document.createElement("h2")
            

            
            h2.innerText = element.description
            li.id        = element.uuid

            li.append(h2)
            ulSetores.append(li)
        });
        
        divContainer.append(ulSetores, h1,btnClose, )
    }
    static menuEmpresas (){
        const divContainer      = document.getElementById("container")
        const buttonHide        = document.getElementById("button__close")
        divContainer.innerHTML  = ""

        const criarEmpresa      = document.createElement("button")
        const listarEmpresas    = document.createElement("button")
        const pCriarEmpresa     = document.createElement("p")
        const pListarEmpresas   = document.createElement("p")
        const btnClose  = document.createElement("button")

        
        criarEmpresa.innerText   = "Criar nova empresa"
        criarEmpresa.classList   = "buttonsMenu"
        criarEmpresa.addEventListener("click", (event) => {
            event.preventDefault()
            Render.cadastroEmpresa()
        })

        listarEmpresas.innerText = "Minhas empresas"
        listarEmpresas.classList = "buttonsMenu"
        listarEmpresas.addEventListener("click", (event) => {
            event.preventDefault()
            request.requestMyEmpresas()
        })

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

        pCriarEmpresa.innerText  = "Para registrar uma nova empresa na nossa aplicação, click no botão criar empresa"
        pListarEmpresas.innerText= "Para listar todas as empresas que você cadastrou click no botão Minhas empresas"
        
        pCriarEmpresa.classList     = "empresasMenu"
        pListarEmpresas.classList   = "empresasMenu"
        divContainer.append( pCriarEmpresa ,criarEmpresa, pListarEmpresas ,listarEmpresas, btnClose)

        
    }
    static cadastroEmpresa(){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""

        const h1   = document.createElement("h1")
        const form = document.createElement("form")

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

        const input         = document.createElement("input")
        const labelInput    = document.createElement("label")
        const hours         = document.createElement("input")
        const labelHours    = document.createElement("label")
        const inputDesc     = document.createElement("input")
        const labelDesc     = document.createElement("label")
        const btnCadastrar  = document.createElement("button")

        const select        = document.createElement("select")
        const labelSelect   = document.createElement("label")
        const option1       = document.createElement("option")
        const option2       = document.createElement("option")
        const option3       = document.createElement("option")
        const option4       = document.createElement("option")
        const option5       = document.createElement("option")
        const option6       = document.createElement("option")
        const option7       = document.createElement("option")
        const option8       = document.createElement("option")
        
        option1.id = "23cb7f50-bbbd-455b-8075-d71d6f43b6df"
        option1.innerText = "Alimenticio"
        
        option2.id = "0e1b111b-411b-4fee-ad6e-cf295c741008"
        option2.innerText = "Varejo"
        
        option3.id = "6064e4c9-ffe9-4d05-bac9-fa6b768571d6"
        option3.innerText = "Textil"
        
        option4.id = "11ac3bbf-e629-4e96-9bfe-de7e7443c610"
        option4.innerText = "Manufatura"
        
        option5.id = "e71ef252-a8b4-4b8b-b45c-a5a4a65701ba"
        option5.innerText = "Aeroespacial"
        
        option6.id = "dc77987c-a626-4ea6-bef8-a06b907e7e4d"
        option6.innerText = "Automotiva"
        
        option7.id = "85b3bb8a-a5e3-4a9a-b827-85880f63441e"
        option7.innerText = "TI"
        
        option8.id = "ccf61e05-9743-41b4-851b-176e355b3ca0"
        option8.innerText = "Atacado"
        
        select.append(option1,option2,option3,option4,option5,option6,option7,option8)
        
        labelHours.innerText    = "Horario de funcionamento"
        labelInput.innerText    = "Nome da empresa"
        labelDesc.innerText     = "Descrição da empresa"
        labelSelect.innerText   = "Selecione seu ramo"

        h1.innerText            = "Cadastro de empresa"
        
        input.placeholder       = "Nome da empresa"
        input.classList         = "inputs"
        
        hours.placeholder       = "Horario de abertura"
        hours.classList         = "inputs"

        inputDesc.placeholder   = "Descrição da empresa"
        inputDesc.classList     = "inputs"
        
        btnCadastrar.innerText  = "Cadastrar empresa"
        btnCadastrar.classList  = "buttonsMenu"

        btnCadastrar.addEventListener("click", (event) =>{
            event.preventDefault()
            let index               = select.selectedIndex
            let optionSelecionado   = select.children[index]
            const body = {               
                    name: input.value,
                    opening_hours: hours.value,
                    description: inputDesc.value,
                    sector_uuid: optionSelecionado.id,
            }
            console.log(body)
            request.cadastroEmpresa(body)
        })
        
        form.append(labelInput , input, labelDesc, inputDesc, labelHours, hours, labelSelect, select, btnCadastrar)
        
        divContainer.append(h1, form, btnClose)
    }
    static async minhasEmpresas(data, filter){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""

        const ulMinhasEmpresas  = document.createElement("ul")
        ulMinhasEmpresas.classList = "minhasEmpresas"

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

        let arrayBtns = []
        let arraySelect = []

        data.forEach((element) => {
            arrayBtns.push(element.sectors.description)

            const li            = document.createElement("li")
            const nomeH2        = document.createElement("h2")
            const descP         = document.createElement("p")
            const span          = document.createElement("span")
            const h3            = document.createElement("h3")

            li.id            = element.uuid
            nomeH2.innerText = element.name
            descP.innerText  = element.description
            span.innerText   = element.opening_hours
            h3.innerText     = element.sectors.description

            nomeH2.classList = "h2MinhasEmpresas"
            descP.classList  = "pMinhasEmpresas"
            span.classList   = "spanMinhasEmpresas"

            if(filter){
                if(filter == h3.innerText){
                    let objPush = {
                        name: element.name,
                        id: element.uuid
                    }
                    arraySelect.push(objPush)
                    li.append(nomeH2, descP, span, h3)
                    ulMinhasEmpresas.append(li)
                }
            }else{
                let objPush = {
                    name: element.name,
                    id: element.uuid
                }
                arraySelect.push(objPush)
                li.append(nomeH2, descP, span, h3)
                ulMinhasEmpresas.append(li)
            }

            
           
        })

        // LOGICA BTNS FILTER

        const btns = arrayBtns.map(item => item)
        const btnsSemDuplicata = arrayBtns.filter((item, indece) => btns.indexOf(item) == indece)

        const sectionFilter = document.createElement("section")
        sectionFilter.classList = "sectionFilter"

        const btnTodos = document.createElement("button")
        btnTodos.innerText = "Todos"
        btnTodos.addEventListener("click", (event) =>{
            event.preventDefault()
            request.requestMyEmpresas()
        })
        sectionFilter.append(btnTodos)

        btnsSemDuplicata.forEach((element) => {
            
            let tagBtn = document.createElement("button")

            tagBtn.innerText = element

            tagBtn.addEventListener("click", (event) =>{
                event.preventDefault()
                request.requestMyEmpresas(tagBtn.innerText)
            })


            sectionFilter.append(tagBtn)
        })

        // LOGICA SELECT
        const selectFilter = document.createElement("select")
        selectFilter.classList = "selectFilter"

        const btnSelect    = document.createElement("button")
        btnSelect.innerText = "Buscar"
        btnSelect.classList = "btnSelect"

        btnSelect.addEventListener("click", (event) =>{
            event.preventDefault()
            let index               = selectFilter.selectedIndex
            let optionSelecionado   = selectFilter.children[index]
            for(let i = 0; i < ulMinhasEmpresas.children.length; i++){
                if(ulMinhasEmpresas.children[i].id !== optionSelecionado.id){
                    ulMinhasEmpresas.children[i].style.display = "none"
                }else if(ulMinhasEmpresas.children[i].id == optionSelecionado.id){
                    ulMinhasEmpresas.children[i].style.display = "flex"
                }
            }
            
        })

        arraySelect.forEach((element) =>{
            
            const option = document.createElement("option")

            option.innerText = element.name
            option.id        = element.id
            selectFilter.appendChild(option)
        })

        divContainer.append( selectFilter, btnSelect, sectionFilter, ulMinhasEmpresas, btnClose)
    }
    static async renderMenuDepartamentos(data){
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

        const ulEmpresasDep     = document.createElement("ul")
        ulEmpresasDep.classList = "ulEmpresasDep"
        const title             = document.createElement("h1")
        title.innerText         = "Selecione a empresa que quer editar"

        data.forEach((element) => {
            const li    = document.createElement("li")
            const h2    = document.createElement("h2")
            const btn   = document.createElement("button")

            li.id       = element.uuid


            h2.innerText = element.name
            btn.innerText = "+"
            li.append(h2,btn)

            btn.addEventListener("click", (event) => {
                event.preventDefault()
                request.requestDepEmpresaEspecifica(li.id)
            })

            ulEmpresasDep.append(li)
        })

        divContainer.append(title, ulEmpresasDep, btnClose)
    }
    static renderDepartamentosDaEmpresa(data, idEmpresa){
        
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

        const ulEmpresasDep     = document.createElement("ul")
        ulEmpresasDep.classList = "ulEmpresasDep"
        const title             = document.createElement("h1")
        title.innerText         = "Selecione o departamento que quer editar"

        const btnCriarDepartamento = document.createElement("button")
        btnCriarDepartamento.innerText = "Criar novo departamento"
        btnCriarDepartamento.classList = "btnCriarDepartamento"

        btnCriarDepartamento.addEventListener("click", (event) => {
            event.preventDefault()
            Render.criarDepartamento(idEmpresa)
        })

        data.forEach((element) => {
            const li    = document.createElement("li")
            const h2    = document.createElement("h2")
            const btn   = document.createElement("button")

            li.id       = element.uuid


            h2.innerText = element.name
            btn.innerText = "+"
            li.append(h2,btn)

            btn.addEventListener("click", (event) => {
                event.preventDefault()
                request.requestUsers(li.id)
            }) 
        

            ulEmpresasDep.append(li)
        })

        divContainer.append(title, ulEmpresasDep, btnCriarDepartamento, btnClose)
    }
    static criarDepartamento(idEmpresa){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""
        const title             = document.createElement("h1")
        title.innerText         = "Preencha os campos para criar um departamento"

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

        const formCriarDepartamento = document.createElement("form")
        const inputName = document.createElement("input")
        const inputDesc = document.createElement("input")
        const btnCriar  = document.createElement("button")

        const h2        = document.createElement("h2")
        const h2Desc    = document.createElement("h2")



        h2.innerText          = "Nome do departamento"
        inputName.placeholder = "Digite o nome"
        h2Desc.innerText      = "Descrição do departamento"
        inputDesc.placeholder = "Digite a descrição"
        btnCriar.innerText    = "Criar"

        formCriarDepartamento.classList = "formCriarDepartamento"
        inputName.classList             = "inputs"
        inputDesc.classList             = "inputs"
        btnCriar.classList              = "btnCriarDep"

        btnCriar.addEventListener("click", (event) => {
            event.preventDefault()
            const body = {
                name: inputName.value,
                description: inputDesc.value,
                company_uuid: idEmpresa
              }
              request.requestCriarDepartamento(body)
        })


        formCriarDepartamento.append(h2, inputName, h2Desc, inputDesc, btnCriar)

        divContainer.append(title, formCriarDepartamento, btnClose)

    }
    static usuariosDoDepartamento(data, id){
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

        const ulFuncionarios    = document.createElement("ul")
        ulFuncionarios.classList = "ulFuncionariosDep"

        const title             = document.createElement("h1")
        title.innerText         = "Lista de funcionarios do departamento"

        const btnContratar      = document.createElement("button")
        btnContratar.innerText  = "Contratar um novo funcionario"
        btnContratar.classList  = "btnContratar"

        data.forEach((element) => {
            if(element.department_uuid == id ){
                const li            = document.createElement("li")
                const h2            = document.createElement("h2")
                const pDesc         = document.createElement("p")
                const pTipo         = document.createElement("p")
                const btnEditar     = document.createElement("button")
                const btnDemitir    = document.createElement("button")
    
                li.id       = element.uuid
                
                li.classList            = "liUsuarioDep"
                h2.classList            = "h2UsuarioDep"
                pDesc.classList         = "pUsuarioNivel"
                pTipo.classList         = "pUsuarioTipo"
                btnDemitir.classList    = "btnDemitir"
    
                h2.innerText            =`Nome: ${element.username}` 
                pDesc.innerText         =`Nivel do profissional: ${element.professional_level}` 
                pTipo.innerText         = `Tipo de trabalho: ${element.kind_of_work}`
                btnEditar.innerHTML     = `<i class="fa-solid fa-user-pen"></i>`
                btnDemitir.innerText    = "Demitir"
                
    
                btnEditar.addEventListener("click", (event) => {
                    event.preventDefault()
                    Render.editarFuncionario(li.id)
                })
                btnDemitir.addEventListener("click", (event) =>{
                    event.preventDefault()
                    request.demitir(li.id)
                })

                li.append(h2,pDesc,pTipo,btnEditar,btnDemitir)
                ulFuncionarios.append(li)
            }
        })

        btnContratar.addEventListener("click", (event) =>{
            event.preventDefault()
            request.usuariosSemDepartamento(id)
        })

        divContainer.append(title, ulFuncionarios, btnContratar, btnClose)
    }
    static async listaDeUsuariosSD(data, idDepartamento){
        
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

        const ulUserSemDepart    = document.createElement("ul")
        ulUserSemDepart.classList = "ulUserSemDepart"

        const title             = document.createElement("h1")
        title.innerText         = "Lista de funcionarios sem departamento"

        data.forEach((element) => {
            const li = document.createElement("li")
            const h2 = document.createElement("h2")
            const p  = document.createElement("p")
            const h4 = document.createElement("h4")
            const btn= document.createElement("button")
            
            h2.innerText =`Nome: ${element.username}`
            p.innerText  =`Email: ${element.email}` 
            h4.innerText =`Tipo de serviço: ${element.kind_of_work}` 
            btn.innerText= "Contratar"

            li.id       = element.uuid

            btn.addEventListener("click", (event) => {
                event.preventDefault()
                
                const body = {
                        user_uuid: li.id,
                        department_uuid: idDepartamento, 
                }
                request.contratarFuncionario(body)
            })

            li.append(h2, p , h4, btn)
            ulUserSemDepart.append(li)
        })
        divContainer.append(title, ulUserSemDepart, btnClose)
    }
    static editarFuncionario(id){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""
        const title             = document.createElement("h1")
        title.innerText         = "Editar funcionario"

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

        const formEditarInfo     = document.createElement("form")
        formEditarInfo.classList = "formEditarInfo"

        const labelTipo      = document.createElement("label")
        const selectTipo     = document.createElement("select")
        const labelNivel     = document.createElement("label")
        const selectNivel    = document.createElement("select")
        const btnEditar      = document.createElement("button")

       
        const option1       = document.createElement("option")
        const option2       = document.createElement("option")
        const option3       = document.createElement("option")
        const option4       = document.createElement("option")
        const option5       = document.createElement("option")
        const option6       = document.createElement("option")
        const option7       = document.createElement("option")

        btnEditar.innerText = "Editar"

        labelTipo.innerText = "Selecione o novo tipo de trabalho do funcionario"
        option1.innerText   = "Home office"
        option2.innerText   = "Presencial"
        option3.innerText   = "Hibrido"

        option1.id          = "home office"
        option2.id          = "presencial"
        option3.id          = "hibrido" 

        labelNivel.innerText= "Selecione o novo nivel do funcionario"
        option4.innerText   = "Estagiario"
        option5.innerText   = "Junior"
        option6.innerText   = "Pleno"
        option7.innerText   = "Sênior"

        option4.id          = "estágio"
        option5.id          = "júnior"
        option6.id          = "pleno"
        option7.id          = "sênior"  
        
        selectTipo.append(option1, option2, option3)
        selectNivel.append(option4, option5, option6, option7)

        btnEditar.addEventListener("click", (event) => {
            event.preventDefault()
            let index               = selectTipo.selectedIndex
            let optionSelecionado   = selectTipo.children[index]
            let index2              = selectNivel.selectedIndex
            let optionSelecionado2  = selectNivel.children[index2]

            const body = {
                kind_of_work: optionSelecionado.id,
                professional_level: optionSelecionado2.id
              }
              request.atualizarFuncionario (body, id)
        })

        formEditarInfo.append(labelTipo, selectTipo, labelNivel, selectNivel, btnEditar)
        divContainer.append(title,formEditarInfo, btnClose)
    }
}

export default Render