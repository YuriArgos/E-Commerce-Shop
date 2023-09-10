/* const nomeProduto = "Casaco Branco";
const marca = "Zara";
const preco = 70;
const nomeArquivoImagem = "product-1.jpg"


const produto1 = {
    id: 1,
    nome: 'Casaco Branco',
    marca: 'Zara',
    preco : 70,
    nomeArquivoImagem : "product-1.jpg",
}

const produto2 = {
    id: 2,
    nome: 'Sobretudo Azul Marinho',
    marca: 'Zara',
    preco : 110,
    nomeArquivoImagem : "product-2.jpg",
}

const catalogo = [produto1, produto2];

for (const produtoCatalogo of catalago) {
    
}

const CartaoProduto = `<div id="${produto1.id}">
<img src="assets/img/${produto1.nomeArquivoImagem}" alt="produto 1" style="height: 300px;">
<p>${produto1.marca}</p>
<p>${produto1.nome}</p>
<p>$${produto1.preco}</p>
<button>Adicionar</button>

</div>`;

document.getElementById("container-produto").innerHTML
*/

//alert("JavaScript funcionando");

function fecharCarrinho() {
    const carrinho = document.getElementById("carrinho")
    carrinho.classList.add('cart-closed')
    carrinho.classList.remove('cart')
}

function abrirCarrinho() {
    const carrinho = document.getElementById("carrinho")
    carrinho.classList.add('cart')
    carrinho.classList.remove('cart-closed')
}

function AddtoCart() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Black Coat with Wool"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: F"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $85"

    document.getElementById('robo').src = "assets/img/product-2.jpg"
    
    
}

function AddtoCart2() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "White Coat"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: M"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $70"

    document.getElementById('robo').src = "assets/img/product-1.jpg"
    
    
}

function AddtoCart3() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Suede Jacket"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: M"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $60"

    document.getElementById('robo').src = "assets/img/product-3.jpg"
    
    
}

function AddtoCart4() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Wool Blend Overcoat"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: M"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $160"

    document.getElementById('robo').src = "assets/img/product-4.jpg"
    
    
}

function AddtoCart5() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Wide Velvet Shirt"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: M"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $110"

    document.getElementById('robo').src = "assets/img/product-5.jpg"
    
    
}

function AddtoCart6() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Wool Coat with Buttons"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: F"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $170"

    document.getElementById('robo').src = "assets/img/product-6.jpg"
    
    
}

function AddtoCart7() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Coat with Buttons"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: F"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $75"

    document.getElementById('robo').src = "assets/img/product-7.jpg"
    
    
}

function AddtoCart8() {
    const amor = document.getElementById("amor")
    amor.innerHTML = "Long Vest with Belt"
    const paixao = document.getElementById("paixao")
    paixao.innerHTML = "Size: F"
    const meteoro = document.getElementById("meteoro")
    meteoro.innerHTML = "Price: $88"

    document.getElementById('robo').src = "assets/img/product-8.jpg"
    
    
}
