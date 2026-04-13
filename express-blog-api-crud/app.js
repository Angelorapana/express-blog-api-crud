const express = require("express");
const app = express();


app.use(express.json());


const postsRouter = require("./routes/posts");


app.use("/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "Errore 404",
    message: "Non è stata trovata la risorsa richiesta"
  });
});

app.listen(3000, () => {
  console.log("Prova");
});