const listaServicos = document.querySelector("#lista-servicos");
const numeroServico = document.querySelector("#servico-atual");
const botoesSlide = document.querySelectorAll(".controle-slide");

function atualizarNumeroDoServico() {
  const cartao = listaServicos.querySelector("article");
  const espacamento = 16;
  const indice = Math.round(listaServicos.scrollLeft / (cartao.offsetWidth + espacamento)) + 1;
  const totalServicos = listaServicos.querySelectorAll("article").length;
  numeroServico.textContent = String(Math.min(indice, totalServicos)).padStart(2, "0");
}

botoesSlide.forEach((botao) => {
  botao.addEventListener("click", () => {
    const direcao = botao.dataset.direcao === "proximo" ? 1 : -1;
    listaServicos.scrollBy({ left: listaServicos.clientWidth * direcao, behavior: "smooth" });
  });
});

listaServicos.addEventListener("scroll", atualizarNumeroDoServico);
