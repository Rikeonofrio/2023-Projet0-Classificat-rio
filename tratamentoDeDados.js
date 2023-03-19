const dados = require("../dataBase/broken_database_1.json");

for (let i = 0; i < dados.length; i++) {
  let veiculo = dados[i].nome;
  veiculo = veiculo.replace(/æ/g, "a").replace(/ø/g, "o");
  dados[i].nome = veiculo;
}

dados.forEach((obj) => {
  if (typeof obj.vendas === "string") {
    obj.vendas = parseFloat(obj.vendas);
  }
});

const jsonString = JSON.stringify(dados, null, 2);

const fs = require("fs");

fs.writeFile("broken_database_1.json", jsonString, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Arquivo salvo com sucesso!");
});

const dados_um = require("../dataBase/broken_database_2.json");

for (let i = 0; i < dados_um.length; i++) {
  let marca = dados_um[i].marca;
  marca = marca.replace(/æ/g, "a").replace(/ø/g, "o");
  dados_um[i].marca = marca;
}
fs.writeFile("broken_database_2.json", JSON.stringify(dados_um, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Arquivo 2 salvo com sucesso!");
  });
