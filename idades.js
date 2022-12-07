import { listarConfrontos, retornarIdade } from "./utils.js";

function carregarCategoria(lista, validador) {
  const participantes = lista.filter(({ Nasc }) =>
    validador(retornarIdade(Nasc))
  );

  return listarConfrontos(participantes);
}

function abaixoCinco(lista) {
  const participantes = lista.filter(({ Nasc }) => retornarIdade(Nasc) < 6);

  const confrontos = listarConfrontos(participantes);

  return confrontos;
}

function deSeisANove(lista) {
  const participantes = lista.filter(({ Nasc }) => {
    const idade = retornarIdade(Nasc);
    return idade >= 6 && idade < 10;
  });

  const confrontos = listarConfrontos(participantes);

  return confrontos;
}

function deDezATreze(lista) {
  const participantes = lista.filter(({ Nasc }) => {
    const idade = retornarIdade(Nasc);
    return idade >= 10 && idade < 14;
  });

  const confrontos = listarConfrontos(participantes);

  return confrontos;
}

function deCatorzeADezessete(lista) {
  const participantes = lista.filter(({ Nasc }) => {
    const idade = retornarIdade(Nasc);
    return idade >= 14 && idade < 17;
  });

  const confrontos = listarConfrontos(participantes);

  return confrontos;
}

function acimaDezoito(lista) {
  const participantes = lista.filter(({ Nasc }) => retornarIdade(Nasc) >= 18);

  const confrontos = listarConfrontos(participantes);

  return confrontos;
}

export {
  abaixoCinco,
  deSeisANove,
  deDezATreze,
  deCatorzeADezessete,
  acimaDezoito,
};
