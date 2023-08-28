/*Função para executar o efeito maquina de escrever
 */

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";
  textArray.forEach((letras, i) => {
    setTimeout(() => {
      el.innerHTML += letras;
    }, 60 * i);
  });
}

const apresentacao = document.querySelector("p");
typeWriter(apresentacao);

/*Inicializando e alterando as propriedades do AOS - Animate on scroll library */
AOS.init({
  delay: 500,
  duration: 1000,
});
