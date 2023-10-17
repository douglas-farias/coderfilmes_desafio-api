let buscarFilme = document.getElementById("buscarFilme");

buscarFilme.onclick = () => {

    let filmeDigitado = document.getElementById("filmeDigitado");

    let url = 'https://www.omdbapi.com/?apikey=a0537c9b&t=' + filmeDigitado.value;
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(response => exibirFilme(response))
}

function exibirFilme(filme) {

let titulo = document.getElementById("titulo");
let ano = document.getElementById("ano");
let duracao = document.getElementById("duracao");
let classificacaoIndicativa = document.getElementById("classificacaoIndicativa");


titulo.innerText = filme.Title
ano.innerText = filme.Year
duracao.innerText = filme.Runtime
classificacaoIndicativa.innerText = filme.Rated

let divImg = document.getElementById("poster");
divImg.innerText = "";

let poster = document.createElement("img")
poster.src = filme.Poster

divImg.append(poster)
}
