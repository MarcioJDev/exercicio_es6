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
      return {
        nome: aluno.nome ?? "Sem nome",
        // só aceita número válido
        nota: typeof aluno.nota === "number" ? aluno.nota : NaN
      };
    })
    .filter(aluno => {
      return !isNaN(aluno.nota) && aluno.nota >= 6;
    });
}

const aprovados = alunosAprovados(alunos);

// EXIBIR NA TELA
const listaHTML = document.getElementById("lista");

aprovados.forEach(aluno => {
  const li = document.createElement("li");
  li.innerText = `${aluno.nome} - Nota: ${aluno.nota}`;
  listaHTML.appendChild(li);
});