import requestHome from "./requestHome.js"

class Cadastro {
    static showCadastro(){
        const btnCadastro = document.getElementById("btnCadastro")
        const divCadastro = document.getElementById("divCadastroHide")
        const divLogin = document.getElementById("divLoginHide")

        btnCadastro.addEventListener("click", (event) => {
            event.preventDefault()
            if(divCadastro.id == "divCadastroHide"){
                divLogin.id    = "divLoginHide"
                divCadastro.id = "divCadastroShow"
            }else{
                divCadastro.style.display = "flex"
                divCadastro.id = "divCadastroHide"
            }
        })
    }
    static cadastroInputs(){
        const inputNome     = document.getElementById("inputNome")
        const inputEmail    = document.getElementById("inputEmail")
        const inputSenha    = document.getElementById("inputSenha")
        const inputProf     = document.getElementById("inputProf")
        const btnRegister   = document.getElementById("btnRegister")

        

        btnRegister.addEventListener("click", (event) =>{
            event.preventDefault()
            const body = {
                password: inputSenha.value,
                email: inputEmail.value,
                professional_level: inputProf.value,
                username: inputNome.value,
              }

              requestHome.cadastroUser(body)
        })
    }   
}
export default Cadastro