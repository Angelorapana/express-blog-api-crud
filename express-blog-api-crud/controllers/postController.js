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
  const id = parseInt(req.params.id);

  const index = posts.findIndex(post => post.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Post non trovato"
    });
  }

  posts.splice(index, 1);

  console.log(posts);

  res.sendStatus(204);
}



module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
