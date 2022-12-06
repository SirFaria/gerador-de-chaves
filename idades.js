import { excelDateToJsDate } from "./excel.js";

function abaixoCinco(lista) {
  const participantes = lista.filter((pessoa) => {
    const idadeEmSegundos =
      new Date().getTime() - new Date(excelDateToJsDate(pessoa.Nasc)).getTime();
    // Retorna as pessoas cujo a idade é menor que 6 anos
    // Pessoas com 5 anos e alguns dias entram nesse retorno
    return idadeEmSegundos < 6 * 365 * 86400 * 1000;
  });

  return participantes;
}

function deSeisANove(lista) {
  const participantes = lista.filter((pessoa) => {
    const idadeEmSegundos =
      new Date().getTime() - new Date(excelDateToJsDate(pessoa.Nasc)).getTime();
    // Retorna as pessoas cujo a idade é menor que 10 anos e maior ou igual a 6 anos
    // Pessoas com 9 anos e alguns dias entram nesse retorno
    return (
      idadeEmSegundos >= 6 * 365 * 86400 * 1000 &&
      idadeEmSegundos < 10 * 365 * 86400 * 1000
    );
  });

  return participantes;
}

function deDezATreze(lista) {
  const participantes = lista.filter((pessoa) => {
    const idadeEmSegundos =
      new Date().getTime() - new Date(excelDateToJsDate(pessoa.Nasc)).getTime();
    // Retorna as pessoas cujo a idade é menor que 14 anos e maior ou igual a 10 anos
    // Pessoas com 13 anos e alguns dias entram nesse retorno
    return (
      idadeEmSegundos >= 10 * 365 * 86400 * 1000 &&
      idadeEmSegundos < 14 * 365 * 86400 * 1000
    );
  });

  return participantes;
}

function deCatorzeADezessete(lista) {
  const participantes = lista.filter((pessoa) => {
    const idadeEmSegundos =
      new Date().getTime() - new Date(excelDateToJsDate(pessoa.Nasc)).getTime();
    // Retorna as pessoas cujo a idade é menor que 18 anos e maior ou igual a 14 anos
    // Pessoas com 17 anos e alguns dias entram nesse retorno
    return (
      idadeEmSegundos >= 14 * 365 * 86400 * 1000 &&
      idadeEmSegundos < 18 * 365 * 86400 * 1000
    );
  });

  return participantes;
}

function acimaDezoito(lista) {
  const participantes = lista.filter((pessoa) => {
    const idadeEmSegundos =
      new Date().getTime() - new Date(excelDateToJsDate(pessoa.Nasc)).getTime();
    // Retorna as pessoas cujo a idade é maior ou igual a 18 anos
    return idadeEmSegundos >= 18 * 365 * 86400 * 1000;
  });

  return participantes;
}

export {
  abaixoCinco,
  deSeisANove,
  deDezATreze,
  deCatorzeADezessete,
  acimaDezoito,
};
