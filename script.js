const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 8 },
  { nome: "Ana", nota: 6 },
  { nome: "Lucas", nota: 4 },
  { nome: "Erro", nota: "9" }, // dado inválido
  { nome: "SemNota" } // dado incompleto
];

function alunosAprovados(lista) {
  if (!Array.isArray(lista)) {
    throw new Error("A entrada deve ser um array");
  }

  return lista
    .map(aluno => {
      // Normalização
      return {
        nome: aluno.nome ?? "Sem nome",
        nota: Number(aluno.nota)
      };
    })
    .filter(aluno => {
      // Validação
      return !isNaN(aluno.nota) && aluno.nota >= 6;
    });
}

const aprovados = alunosAprovados(alunos);

console.log(aprovados);