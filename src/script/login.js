import requestHome from "./requestHome.js"
class Login{
    static showLogin(){
        const btnLogin = document.getElementById("btnLogin")
        const divLogin = document.getElementById("divLoginHide")
        const divCadastro = document.getElementById("divCadastroHide")

        btnLogin.addEventListener("click", (event) =>{
            event.preventDefault()
            if(divLogin.id == "divLoginHide"){
                divCadastro.id = "divCadastroHide"
                divLogin.id = "divLoginShow"
            }else{
                divLogin.style.display = "flex"
                divLogin.id = "divLoginHide"
            }
        })
    }
    static loginInputs(){
        const inputEmail = document.getElementById("inputEmailL")
        const inputSenha = document.getElementById("inputSenhaL")
        const btnLogin   = document.getElementById("btnLoginL")

       
        btnLogin.addEventListener("click", (event) =>{
            const body = {
                email: inputEmail.value,
                password: inputSenha.value,
              }
            requestHome.login(body)
        })
    }
}

export default Login