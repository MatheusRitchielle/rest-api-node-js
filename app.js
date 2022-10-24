const express = require("express");
const app = express();
const morgam = require("morgan");
const bodyParser = require("body-parser")
 
const rotaDeProdutos =  require("./routes/produtos");
const rotaDePedidos =  require("./routes/pedidos");

app.use(morgam("dev"));
app.use(bodyParser.urlencoded({ extended: false})); //apenas dados simples
app.use(bodyParser.json()); //json de entrada body

app.use((req, res, next) => {
    res.header("Acces-Control-Allow-origin", "*" );
    res.header(
        "Acces-Control-Allow-Header", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).send({});
    }
    
    next();
})

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