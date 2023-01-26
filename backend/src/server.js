import express from "express";
const app = express();

app.get("/products", (request, response) => {
  return response.json([
    { id: 1, name: "Produto 1" },
    { id: 2, name: "Produto 2" },
    { id: 3, name: "Produto 3" },
  ]);
});

app.listen(3333);
