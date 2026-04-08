const posts = require("../data/posts");

function index(req, res) {
  res.json(posts);
}

function show(req, res) {
  res.send("Dettaglio post");
}

function store(req, res) {
  res.send("Creazione post");
}

function update(req, res) {
  res.send("Modifica post");
}

function destroy(req, res) {
  res.send("Eliminazione post");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
