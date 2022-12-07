import { excelToJSON } from "./excel.js";
import {
  abaixoCinco,
  deSeisANove,
  deDezATreze,
  deCatorzeADezessete,
  acimaDezoito,
} from "./idades.js";

import { embaralha } from "./utils.js";

const coluna1M = document.getElementById("abaixo-cinco-M");
const coluna1F = document.getElementById("abaixo-cinco-F");

const coluna2M = document.getElementById("seis-a-nove-M");
const coluna2F = document.getElementById("seis-a-nove-F");

const coluna3M = document.getElementById("dez-a-treze-M");
const coluna3F = document.getElementById("dez-a-treze-F");

const coluna4M = document.getElementById("catorze-a-dezessete-M");
const coluna4F = document.getElementById("catorze-a-dezessete-F");

const coluna5M = document.getElementById("acima-dezoito-M");
const coluna5F = document.getElementById("acima-dezoito-F");

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

  coluna1M.innerHTML = abaixo5.confrontosM;
  coluna1F.innerHTML = abaixo5.confrontosF;

  coluna2M.innerHTML = de6a9.confrontosM;
  coluna2F.innerHTML = de6a9.confrontosF;

  coluna3M.innerHTML = de10a13.confrontosM;
  coluna3F.innerHTML = de10a13.confrontosF;

  coluna4M.innerHTML = de14a17.confrontosM;
  coluna4F.innerHTML = de14a17.confrontosF;

  coluna5M.innerHTML = acima18.confrontosM;
  coluna5F.innerHTML = acima18.confrontosF;
});
