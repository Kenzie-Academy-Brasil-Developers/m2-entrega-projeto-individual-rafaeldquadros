class Menu{
    static showMenu (){
        const buttonShow = document.getElementById("button__show")
        const divMenu    = document.getElementById("divMenu")
        
            buttonShow.addEventListener("click", (event) =>{
                event.preventDefault()
                if(buttonShow.id == "button__show"){    
                
                buttonShow.innerText = "X"
                buttonShow.classList.add("button__close__menu")
                buttonShow.id = "button__close"
                divMenu.classList = "container__show"
                divMenu.style.display = "block"

                }else if(buttonShow.id == "button__close"){
                    
                    buttonShow.innerText = ""
                    buttonShow.innerHTML =`<i class="fa-solid fa-bars"></i>`
                    buttonShow.id = "button__show"
                    divMenu.classList = "container__hide"
                }
            })
    }
}

export default Menu
