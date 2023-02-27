window.addEventListener('load', start)

function start(){
    //window.alert('Iniciou a pagina')
    console.log('chegou aqui')
}

function handleEnviar(){
    event.preventDefault()
    var nome = document.getElementById('nome')
    
    
    var title = document.querySelector("h1")
    title.textContent = nome.value



    var lista = document.getElementById('lista')
    var novoItem = document.createElement('li')

    novoItem.textContent = nome.value
    lista.appendChild(novoItem)
    
    //window.alert(nome.value)
}