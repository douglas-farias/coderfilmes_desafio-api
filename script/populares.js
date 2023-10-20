let buscarFilme = document.getElementById("buscarFilme");

window.onload  = () => {

    let filmeDigitado = document.getElementById("filmeDigitado");

    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=b3c994797c0a342becac5a5924c31a19&language=pt-br'

    fetch(url)
        .then(response => response.json())
        .then(response => exibirFilmes(response))
}



function exibirFilme(filme) {

    let todosFilmes = document.getElementById("infos");
    
    let infoFilme = document.createElement("ul")

    let titulo = document.createElement("h1")
    let sinopse = document.createElement("h2")
    let poster = document.createElement("img")
    let quebraLinha = document.createElement("br")
    let assitir = document.createElement("button")

    let linkFilme = document.createElement("a")

    titulo.innerText = filme.title
    sinopse.innerText = filme.overview
    poster.src = 'https://image.tmdb.org/t/p/w185' + filme.poster_path
    linkFilme.innerText = 'Assistir'
    linkFilme.href = 'https://embedder.net/e/' + filme.id

    assitir.appendChild(linkFilme)

    infoFilme.appendChild(titulo)
    infoFilme.appendChild(sinopse)
    infoFilme.appendChild(poster)
    infoFilme.appendChild(quebraLinha)
    infoFilme.appendChild(assitir)
    
    todosFilmes.append(infoFilme)
}

function exibirFilmes(response) {
    console.log(response)
    response.results.forEach(filme => {
        exibirFilme(filme)
    });
}