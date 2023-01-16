//Mapeando a imagem e o circulo 
let imagem = document.querySelector(".starbucks")
    let circulo = document.querySelector(".circulo")
    
    //Troca a imagem 
    function trocaImagem(endereco) {
        imagem.src = endereco
    }
    //Troca a cor de fundo do copo.
    function trocaCor(cor) {
        circulo.style.background = cor
    }
