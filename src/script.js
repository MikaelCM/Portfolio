function enviarWhatsapp() {
    document.querySelector(".botao-form").addEventListener("click", (event) => {
        event.preventDefault()

        const nome = document.querySelector("#nome").value
        const mensagem = document.querySelector("#mensagem").value
        const telefone = "5561999540723"

        const texto = `Olá! Me chamo ${nome}, ${mensagem}`
        const msgFormatada = encodeURIComponent(texto)

        if (nome.length < 1 || mensagem.length < 1) {
            return alert("Há campos não preenchidos!")

        } else {
            const url = `https://wa.me/${telefone}?text=${msgFormatada}`

            window.open(url, "_blank")
        }
    })
}

enviarWhatsapp()