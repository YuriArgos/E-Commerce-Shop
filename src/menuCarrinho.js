function abrirCarrinho() {
    document.getElementById('carrinho').classList.add('right-[0px]')
    document.getElementById('carrinho').classList.remove('right-[-360px]')
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[0px]')
    document.getElementById('carrinho').classList.add('right-[-360px]')
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}

function AdicionarAoCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho")
    const CartaoProdutoCarrinho = 

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}

for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar${produtoCatalogo.id}`).addEventListener('click', AdicionarAoCarrinho)
}

const removeProductButtons = document.getElementByClassName("remove-button")

for (var i = 0; i < removeProductButtons; I++) {
    removeProductButtons[i].addEventListener("click", function() {

    console.log("clicou")
    })
}


/* SAVES:
.logo {
    
    background-color: rgb(72, 20, 121);
    box-shadow: inset;
    
}

#carrinho {
    background-color: rgb(69, 7, 128);
*/