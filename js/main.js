//Variáveis para controle da troca da imagem da tela do celular
var indiceTela = 0;
const tempoTransicao = 3000;
const imagens = document.querySelectorAll("#tela-celular img");
const indiceTelaMaximo = imagens.length;

//Função para trocar a tela do celular
function trocarTelaCelular(){
    //Retira a classe da imagem selecionada
    imagens[indiceTela].classList.remove("selecionada");

    //Incrementa o índice da tela
    indiceTela++;

    //Verifica se o índice superou o valor máximo
    if(indiceTela >= indiceTelaMaximo){
        indiceTela = 0;
    }

    //Aciona classe na imagem
    imagens[indiceTela].classList.add("selecionada");
}

//Função para iniciar a transição da troca das imagens
function iniciar(){
    //Executa a troca da imagem a cada tempo
    setInterval(() => {
        //Função para trocar a imagem na tela do celular
        trocarTelaCelular();
    }, tempoTransicao);
}

//Adiciona evento ao  carregar a página
window.addEventListener("load", iniciar);