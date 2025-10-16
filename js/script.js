const imagemVisualizacao = document.querySelector("#visualizacao img");
//Queryselector  permite selecionar a partir de queryselector usado no css/html, inclusive seletores combinados
const tituloProduto = document.querySelector("h1");
//Array (listas)
const opcoesTamanho = ["41 mm", "45 mm"];

const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");

const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

const opcoesCores = ["Verde-cipreste","Azul-inverno","Meia-noite","Estelar","Rosa-claro"];



let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionado = 1;

function atualizarCorSelecionada() {

    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);

    numCorSelecionada = opcaoCorSelecionada;

    const nomeCor = opcoesCores[numCorSelecionada];

    tituloProduto.innerText = "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoesTamanho[numTamanhoSelecionado];

    nomeCorSelecionada.innerText = "Cor - " + nomeCor;

    imagemVisualizacao.src =
    "./assets/opcoes-cores/imagens-"+nomeCor.toLowerCase()+"/imagem-" + numImagemSelecionada + ".jpeg";

    imagemMiniatura0.src=
    "./assets/opcoes-cores/imagens-"+nomeCor.toLowerCase()+"/imagem-0.jpeg";
    imagemMiniatura1.src=
    "./assets/opcoes-cores/imagens-"+nomeCor.toLowerCase()+"/imagem-1.jpeg";
    imagemMiniatura2.src=
    "./assets/opcoes-cores/imagens-"+nomeCor.toLowerCase()+"/imagem-2.jpeg";



}

function atualizarTamanho() {

    const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);

    numTamanhoSelecionado = opcaoTamanhoSelecionado;

    const tamanhoCaixa = opcoesTamanho [numTamanhoSelecionado]

    tituloProduto.innerText =
        "Pulseira loop esportiva " + opcoesCores[numCorSelecionado].toLowerCase() + " para caixa de " + tamanhoCaixa;


    if (tamanhoCaixa === '41 mm') {


        imagemVisualizacao.classList.add("caixa-pequena")

    } else {

        imagemVisualizacao.classList.remove("caixa-pequena")

    }




}




function atualizarImagemSelecionada() {

    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0); 
    
    // :checked pseudo-classe representa um estadao do elemento "opcao-imagem"
    // .id no final do elemento > mostra o id do elemento
    // .charAt(0)  >> metodo charAt seleciona o caractere na posição do argumento.

    numImagemSelecionada = opcaoImagemSelecionada;

    // muda o valor da variavel numImagemSelecionada para o valor da variavel opcaoImagemSelecionada determinado na funcao atualizarImagemSelecionada;
     
    imagemVisualizacao.src = "./assets/opcoes-cores/imagens-" + opcoesCores[numCorSelecionada].toLowerCase() + "/imagem-" + numImagemSelecionada +  ".jpeg";

}
