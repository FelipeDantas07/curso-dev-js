document.querySelector('.seu-nome').textContent = "Felipe Dantas Guaberto";

const PRECO_POR_PAGINA = 500;
const PRECO_DESING_ADICIONAL = 1000;

const inputPaginas = document.querySelector("#qtd-paginas");
const insputDesconto = document.querySelector("#desconto");
const checkboxDesing = document.querySelector("#inclui-design");
const inputPrazo = document.querySelector("#prazo-entrega");
const resumoSubtotal = document.querySelector("#resumo-subtotal");
const resumoAdicional = document.querySelector("#resumo-adicional");
const resumoUrgenca = document.querySelector("#resumo-urgencia");
const resumoDesconto = document.querySelector("#resumo-desconto");
const resumoTotal = document.querySelector("#resumo-total");

const calcularSubtoral = (quatidade) => quantidade * PRECO_POR_PAGINA;

const calcularValorDesconto = (valor,porcentagem) => valor *(porcentagem/100);

function calcularTaxaDeUrgencia(valor, prazo){

    if(prazo> 0 && prazo < 5)
    {
        return valor * 0.1; //10%
    }
    else if(prazo>=5 && prazo < 15)
    {
        return valor * 0.05;
    }
    else
    {
        return 0;
    }
}

function atualizarOrcamento(){

    const qtdPaginas = Number(inputPaginas.value);
    const porcentagemDesconto = Number(insputDesconto.value);
    const prazo = Number(inputPaginasPrazo.value);
    const desingIncluindo = checkboxDesing.checked; //true e false

    const subtotal = calcularSubtoral(qtdPaginas);
    const adicionalDesing = desingIncluindo ? PRECO_DESING_ADICIONA : 0;


}