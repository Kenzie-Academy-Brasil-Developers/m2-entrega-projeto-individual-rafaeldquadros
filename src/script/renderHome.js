import requestHome from "./requestHome.js";
class RenderHome {
    static renderEmpresas(data, filtro){
        const ulEmpresas = document.getElementById("ulEmpresas")
        
        ulEmpresas.innerHTML = ""

        data.forEach((element) => {
            
            const li    = document.createElement("li")
            const img   = document.createElement("img")
            const h2    = document.createElement("h2")
            const p     = document.createElement("p")
            const h3    = document.createElement("h3")
            const span  = document.createElement("span")
            
            h2.innerText = element.name
            p.innerText  = element.description
            span.innerText = `Aberto a partir das: ${element.opening_hours} h`
            h3.innerText = element.sectors.description
            

            if(h2.innerText == "Skina Lanches"){
                img.src = "src/assets/imgEmpresas/SkinaLanches.jpg"
            }else if(h2.innerText == "Gela Guela"){
                img.src = "src/assets/imgEmpresas/gelaGuela.jfif"
            }else if(h2.innerText == "Boacharria"){
                img.src = "src/assets/imgEmpresas/borracharia.jpg"
            }else if(h2.innerText == "Offcina"){
                img.src = "src/assets/imgEmpresas/Officina.png"
            }else if(h2.innerText == "Nerd lab"){
                img.src = "src/assets/imgEmpresas/NerdLab.jpg"
            }else if(h2.innerText == "Chipset manutenções"){
                img.src = "src/assets/imgEmpresas/chipeset.jfif"
            }

            if(filtro){
                if(filtro == h3.innerText){
                    li.append(img, h2, h3, p, span)
                    ulEmpresas.append(li)
                }
            }else{
                li.append(img, h2, h3, p, span)
                ulEmpresas.append(li)
            }


            
        });
    }
    static navMenu(){
        
        const btnTodos          = document.getElementById("btnTodos")
        const btnAlimenticio    = document.getElementById("btnAlimenticio")
        const btnAutomotivo     = document.getElementById("btnAutomotivo")
        const btnTi             = document.getElementById("btnTi")

        btnTodos.addEventListener("click", (event) =>{
            event.preventDefault()
            requestHome.empresasParceiras()
        })
        btnAlimenticio.addEventListener("click", (event) =>{
            event.preventDefault()
            requestHome.empresasParceiras("Alimenticio")
        })
        btnAutomotivo.addEventListener("click", (event) =>{
            event.preventDefault()
            requestHome.empresasParceiras("Automotiva")
        })
        btnTi.addEventListener("click", (event) =>{
            event.preventDefault()
            requestHome.empresasParceiras("TI")
        })
    }

}
export default RenderHome