import request from "./dashboardRequest.js";

class Render{
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
        console.log(select.selectedIndex)
        form.append(labelInput , input, labelDesc, inputDesc, labelHours, hours, labelSelect, select, btnCadastrar)
        
        divContainer.append(h1, form)
    }
    static async minhasEmpresas(data){
        const divContainer      = document.getElementById("container")
        divContainer.innerHTML  = ""

        const ulMinhasEmpresas  = document.createElement("ul")
        ulMinhasEmpresas.classList = "minhasEmpresas"

        data.forEach((element) => {
            const li            = document.createElement("li")
            const nomeH2        = document.createElement("h2")
            const descP         = document.createElement("p")
            const span          = document.createElement("span")
            const setorSelect   = document.createElement("select")

            nomeH2.innerText = element.name
            descP.innerText  = element.description
            span.innerText   = element.opening_hours

            nomeH2.classList = "h2MinhasEmpresas"
            descP.classList  = "pMinhasEmpresas"
            span.classList   = "spanMinhasEmpresas"

            const setorOpt  = element.sectors.description

            // setorOpt.forEach((setores) => {
            //     const option = document.createElement("option")

            //     option.innerText = setores.description
            //     option.id        = setores.uuid
            //     setorSelect.append(option)
            // })
            setorSelect.append(setorOpt)
            li.append(nomeH2, descP, span, setorOpt)
            ulMinhasEmpresas.append(li)
            divContainer.append(ulMinhasEmpresas)
        })
    }
}

export default Render