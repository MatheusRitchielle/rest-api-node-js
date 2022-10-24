const express = require("express");
const app = express();
const morgam = require("morgan");
 
const rotaDeProdutos =  require("./routes/produtos");
const rotaDePedidos =  require("./routes/pedidos");

app.use(morgam("dev"));

app.use("/produtos", rotaDeProdutos);
app.use("/pedidos", rotaDePedidos);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: "erro.message"
        }
    })
})

module.exports = app;