const nameInput = document.querySelector("[data-name]")
const nameLabel = document.querySelector("[data-label-name]")

const mailInput = document.querySelector("[data-mail]")
const mailLabel = document.querySelector("[data-label-mail]")

const hostInput = document.querySelector("[data-host]")
const hostLabel = document.querySelector("[data-label-host]")

const btnEnviar = document.querySelector("[data-btn-submit]")


nameInput.addEventListener("blur", ()=>{
    if(nameInput.vale !== "") {
        nameLabel.classList.add("input-labell")
        nameInput.classList.add("input-fieldd")
    }
})

mailInput.addEventListener("blur", () => {
    if (mailInput.vale !== "") {
        mailLabel.classList.add("input-labell")
        mailInput.classList.add("input-fieldd")
    }
})

hostInput.addEventListener("blur", () => {
    if (hostInput.vale !== "") {
        hostLabel.classList.add("input-labell")
        hostInput.classList.add("input-fieldd")
    }
})

const mostrarAlerta = (event) => {
    console.log(event)
    nameLabel.classList.add("input-labell")
    nameInput.classList.add("input-fieldd")
}

btnEnviar.addEventListener("click", () => {
    {
        nameInput !== "" ? mostrarAlerta() : mostrarAlerta()
    }
    // if (nameInput === "") {document.getElementById("miFormulario").submit()
    //     console.log("Enviado")
    //     document.getElementById("miFormulario").submit();
    // } else {
    //     console.log("vacio")


    // }
})

