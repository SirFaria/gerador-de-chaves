import { excelToJSON, excelDateToJsDate } from "./excel.js";
import {
  abaixoCinco,
  deSeisANove,
  deDezATreze,
  deCatorzeADezessete,
  acimaDezoito,
} from "./idades.js";

let selectedFile;
document.getElementById("input").addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
});

document.getElementById("button").addEventListener("click", async () => {
  const participantes = await excelToJSON(selectedFile);

  const abaixo5 = abaixoCinco(participantes);
  const de6a9 = deSeisANove(participantes);
  const de10a13 = deDezATreze(participantes);
  const de14a17 = deCatorzeADezessete(participantes);
  const acima18 = acimaDezoito(participantes);

  console.log(abaixo5);
  console.log(de6a9);
  console.log(de10a13);
  console.log(de14a17);
  console.log(acima18);
  // const participantesM = participantes.filter(
  //   (pessoa) => pessoa.Sexo === "MASCULINO"
  // );
  // const participantesF = participantes.filter(
  //   (pessoa) => pessoa.Sexo === "FEMININO"
  // );
});
