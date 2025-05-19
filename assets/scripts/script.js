function classificarHeroi() {
  const nome = document.getElementById("nome").value;
  const xp = parseInt(document.getElementById("xp").value);
  const resultado = document.getElementById("resultado");
  const brasao = document.getElementById("brasao");

  let nivel = "Desconhecido";
  let imagem = "assets/img/brazoes/desconhecido.svg";

  if (xp < 1000) {
    nivel = "Ferro";
    imagem = "assets/img/brazoes/ferro.svg";
  } else if (xp <= 2000) {
    nivel = "Bronze";
    imagem = "assets/img/brazoes/bronze.svg";
  } else if (xp <= 5000) {
    nivel = "Prata";
    imagem = "assets/img/brazoes/prata.svg";
  } else if (xp <= 7000) {
    nivel = "Ouro";
    imagem = "assets/img/brazoes/ouro.svg";
  } else if (xp <= 8000) {
    nivel = "Platina";
    imagem = "assets/img/brazoes/platina.svg";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
    imagem = "assets/img/brazoes/ascendente.svg";
  } else if (xp <= 10000) {
    nivel = "Imortal";
    imagem = "assets/img/brazoes/imortal.svg";
  } else if (xp >= 10001) {
    nivel = "Radiante";
    imagem = "assets/img/brazoes/radiante.svg";
  }

  resultado.innerText = `O Herói '${nome}' está no nível ${nivel}!`;
  brasao.src = imagem; 
}
