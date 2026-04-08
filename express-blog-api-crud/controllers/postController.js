const posts = require("../data/posts");

function index(req, res) {
  res.json(posts);
}

function show(req, res) {
  const id = parseInt(req.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post non trovato"
    });
  }

  res.json(post);
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
