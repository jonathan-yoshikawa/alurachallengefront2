let projetos = [
  {
    id: 1,
    codigo:
      "const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj) const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res) const unfold = (f, seed) => { const go = (f, seed, acc) => { const res = f(seed) return res ? go(f, res[1], acc.concat([res[0]])) : acc } return go(f, seed, []) }",
    titulo: "Alura",
    cor: "green",
    descricao: "Projeto da Alura",
    nome: "Jonathan",
    countComentarios: 9,
    countLikes: 3,
  },
  {
    id: 2,
    codigo: `function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) { 
            if(items[j] > items[j+1]) {
                var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }
    }
}
    
var arr = [5, 4, 3, 2, 1]; 
bubbleSort(arr);
    
console.log(arr);
`,
    titulo: "Bubble sort",
    cor: "red",
    descricao: "Algoritmo para ordenar uma lista",
    nome: "Jonathan",
    countComentarios: 4,
    countLikes: 7,
  },
  {
    id: 3,
    codigo: `console.log("funcionou")`,
    titulo: "Debug",
    cor: "blue",
    descricao: "Projeto debug",
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
    projetos.unshift(projeto);
  },
};

export default ProjetoService;
