import {
  listarConfrontos,
  retornaFeminino,
  retornaMasculino,
  retornarIdade,
} from "./utils.js";

function abaixoCinco(lista) {
  const participantes = lista.filter(({ Nasc }) => retornarIdade(Nasc) < 6);

  const masculino = retornaMasculino(participantes);
  const feminino = retornaFeminino(participantes);

  const confrontosM = listarConfrontos(masculino);
  const confrontosF = listarConfrontos(feminino);

  return { confrontosM, confrontosF };
}

function deSeisANove(lista) {
  const participantes = lista.filter(({ Nasc }) => {
    const idade = retornarIdade(Nasc);
    return idade >= 6 && idade < 10;
  });

  const masculino = retornaMasculino(participantes);
  const feminino = retornaFeminino(participantes);

  const confrontosM = listarConfrontos(masculino);
  const confrontosF = listarConfrontos(feminino);

  return { confrontosM, confrontosF };
}

function deDezATreze(lista) {
  const participantes = lista.filter(({ Nasc }) => {
    const idade = retornarIdade(Nasc);
    return idade >= 10 && idade < 14;
  });

  const masculino = retornaMasculino(participantes);
  const feminino = retornaFeminino(participantes);

  const confrontosM = listarConfrontos(masculino);
  const confrontosF = listarConfrontos(feminino);

  return { confrontosM, confrontosF };
}

function deCatorzeADezessete(lista) {
  const participantes = lista.filter(({ Nasc }) => {
    const idade = retornarIdade(Nasc);
    return idade >= 14 && idade < 17;
  });

  const masculino = retornaMasculino(participantes);
  const feminino = retornaFeminino(participantes);

  const confrontosM = listarConfrontos(masculino);
  const confrontosF = listarConfrontos(feminino);

  return { confrontosM, confrontosF };
}

function acimaDezoito(lista) {
  const participantes = lista.filter(({ Nasc }) => retornarIdade(Nasc) >= 18);

  const masculino = retornaMasculino(participantes);
  const feminino = retornaFeminino(participantes);

  const confrontosM = listarConfrontos(masculino);
  const confrontosF = listarConfrontos(feminino);

  return { confrontosM, confrontosF };
}

export {
  abaixoCinco,
  deSeisANove,
  deDezATreze,
  deCatorzeADezessete,
  acimaDezoito,
};
