import { excelToJSON } from "./excel.js";
import {
  abaixoCinco,
  deSeisANove,
  deDezATreze,
  deCatorzeADezessete,
  acimaDezoito,
} from "./idades.js";

import { embaralha } from "./utils.js";

const coluna1 = document.getElementById("abaixo-cinco");

let selectedFile;
document
  .getElementById("entrada-arquivo")
  .addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
  });

document.getElementById("sorteador").addEventListener("click", async () => {
  const participantes = await excelToJSON(selectedFile);

  embaralha(participantes);

  const abaixo5 = abaixoCinco(participantes);
  const de6a9 = deSeisANove(participantes);
  const de10a13 = deDezATreze(participantes);
  const de14a17 = deCatorzeADezessete(participantes);
  const acima18 = acimaDezoito(participantes);

  coluna1.innerHTML = de14a17;

  // console.log(abaixo5);
  // console.log(de6a9);
  // console.log(de10a13);
  // console.log(de14a17);
  // console.log(acima18);
  // const participantesM = participantes.filter(
  //   (pessoa) => pessoa.Sexo === "MASCULINO"
  // );
  // const participantesF = participantes.filter(
  //   (pessoa) => pessoa.Sexo === "FEMININO"
  // );
});
