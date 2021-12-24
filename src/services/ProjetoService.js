let projetos = [
  {
    id: 1,
    codigo:
      "const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj) const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res) const unfold = (f, seed) => { const go = (f, seed, acc) => { const res = f(seed) return res ? go(f, res[1], acc.concat([res[0]])) : acc } return go(f, seed, []) }",
    titulo: "Título teste",
    cor: "green",
    linguagem: "JavaScript",
    descricao: "Projeto de teste",
    nome: "Jonathan",
    countComentarios: 9,
    countLikes: 3,
  },
  {
    id: 2,
    codigo: `console.log("teste2")`,
    titulo: "Título teste 2",
    cor: "red",
    linguagem: "JavaScript",
    descricao: "Projeto de teste 2",
    nome: "Jonathan",
    countComentarios: 4,
    countLikes: 7,
  },
  {
    id: 3,
    codigo: `console.log("teste3")`,
    titulo: "Título teste 3",
    cor: "blue",
    linguagem: "CSS",
    descricao: "Projeto de teste 3",
    nome: "Jonathan",
    countComentarios: 13,
    countLikes: 9,
  },
];

const ProjetoService = {
  recuperarProjetos: function () {
    return projetos;
  },
  recuperarProjeto: function (id) {
    return projetos.filter((p) => p.id === id);
  },
  adicionarProjeto: function (projeto) {
    projeto.id = projetos.length + 1;
    projetos.push(projeto);
  },
};

export default ProjetoService;
