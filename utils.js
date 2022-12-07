function embaralha(array) {
  let currentIndex = array.length;
  let randomIndex;

  // Enquanto ainda houver elementos para embaralhar
  while (currentIndex != 0) {
    // Pega um elemento que sobrou
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E troca com o elemento atual
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function listarConfrontos(participantes) {
  let elementosParaRenderizar = "";
  for (let i = 0; i < participantes.length; i += 2) {
    const pessoa1 = participantes[i];
    const pessoa2 = participantes[i + 1];
    elementosParaRenderizar += `<p><span>${pessoa1.Nome.toLowerCase()}</span> X <span>${
      pessoa2?.Nome.toLowerCase() ?? "Sem oponente"
    }</span></p>`;
  }
  return elementosParaRenderizar;
}

function retornarIdade(nascimento) {
  const nascimentoFormatado = new Date(
    (nascimento - (25567 + 1)) * 86400 * 1000
  );

  const hoje = new Date();

  const tempo = hoje - nascimentoFormatado;

  return tempo / (1000 * 60 * 60 * 24 * 365);
}

function retornaMasculino(lista) {
  return lista.filter((pessoa) => pessoa.Sexo === "MASCULINO");
}

function retornaFeminino(lista) {
  return lista.filter((pessoa) => pessoa.Sexo === "FEMININO");
}

export {
  embaralha,
  listarConfrontos,
  retornarIdade,
  retornaMasculino,
  retornaFeminino,
};
