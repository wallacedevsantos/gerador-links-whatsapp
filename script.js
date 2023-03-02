const numerosInput = document.getElementById("numeros");
const mensagemInput = document.getElementById("mensagem");
const gerarLinksBtn = document.getElementById("gerar-links");
const listaLinks = document.getElementById("lista-links");

gerarLinksBtn.onclick = function (event) {
  event.preventDefault();
  const numeros = numerosInput.value.split(",");
  const mensagem = encodeURIComponent(mensagemInput.value);

  listaLinks.innerHTML = "";

  numeros.forEach((numero, index) => {
    const link = `https://wa.me/55${numero.trim()}?text=${mensagem}`;
    const nomeLink = `Número ${index + 1}`;
    const itemLista = document.createElement("li");
    const linkLista = document.createElement("a");
    linkLista.href = link;
    linkLista.textContent = nomeLink;
    linkLista.target = "_blank";
    itemLista.appendChild(linkLista);
    listaLinks.appendChild(itemLista);
  });
};
