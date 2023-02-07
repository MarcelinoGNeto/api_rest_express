import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "Senhor dos Aneis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

//Tras todos os livros
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

//Pesquisa por um livro específico (id)
app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

//Cria novo livro
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro foi cadastrado com sucesso");
});

//Atualiza um livro
app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

//Deleta um livro
app.delete("/livros/:id", (req, res) => {
  let { id } = req.params; //desestruturando o id
  let index = buscaLivro(id); //passando o id desestruturado
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
