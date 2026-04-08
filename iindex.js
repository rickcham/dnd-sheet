function calcularMod(valor) {
  valor = parseInt(valor);
  if (isNaN(valor)) return 0;
  return Math.floor((valor - 10) / 2);
}

function calcMod() {
  const atributos = ["forca","destreza","constituicao","inteligencia","sabedoria","carisma"];
  atributos.forEach(attr => {
    let val = document.getElementById(attr).value;
    let mod = calcularMod(val);
    document.getElementById("mod_"+attr).innerText = "Mod: " + (mod >= 0 ? "+"+mod : mod);
  });
}

function gerarFicha() {
  let pericias = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(el => el.value).join(', ');

  let texto = `FICHA DE PERSONAGEM D&D 5E\n\n` +
  `Nome do Personagem: ${nome.value}\n` +
  `Raça: ${raca.value}\n` +
  `Classe: ${classe.value}\n` +
  `Nível: ${nivel.value}\n` +
  `Antecedente: ${antecedente.value}\n` +
  `Tendência: ${tendencia.value}\n` +

  `--- ATRIBUTOS ---\n` +
  `Força: ${forca.value} Mod:${calcularMod(forca.value)}\n` +
  `Destreza: ${destreza.value} Mod:${calcularMod(destreza.value)}\n` +
  `Constituição: ${constituicao.value} Mod:${calcularMod(constituicao.value)}\n` +
  `Inteligência: ${inteligencia.value} Mod:${calcularMod(inteligencia.value)}\n` +
  `Sabedoria: ${sabedoria.value} Mod:${calcularMod(sabedoria.value)}\n` +
  `Carisma: ${carisma.value} Mod:${calcularMod(carisma.value)}\n\n` +

  `--- LINGUAGENS ---\n` +
  `${linguas.value}\n\n` +
 

  `--- PERÍCIAS ---\n` +
  `${pericias}\n\n` +

  `--- TRAÇOS E HABILIDADES ---\n` +
  `${tracos.value}`; 

  document.getElementById("output").innerText = texto;
}

function copiar() {
  navigator.clipboard.writeText(document.getElementById("output").innerText);
  alert("Copiado!");
}