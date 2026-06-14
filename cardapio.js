const itens = [
  { nome: 'X-Burguer', preco: 'R$ 18,90', descricao: 'Hambúrguer clássico com queijo, alface e tomate.' },
  { nome: 'X-Bacon', preco: 'R$ 21,90', descricao: 'Hambúrguer com bacon crocante e molho especial.' },
  { nome: 'Combo Família', preco: 'R$ 45,90', descricao: '2 sanduíches + batata média + refrigerante 1L.' },
];

const cardapioList = document.querySelector('#cardapio-list');

function renderCardapio() {
  if (!cardapioList) return;
  cardapioList.innerHTML = itens
    .map(
      item => `
      <article class="cardapio-item">
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
        <span class="price">${item.preco}</span>
        <button type="button">Pedir</button>
      </article>
    `
    )
    .join('');
}

renderCardapio();
