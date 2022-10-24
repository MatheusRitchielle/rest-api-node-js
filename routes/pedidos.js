const express = require("express");
const router = express.Router();

//Retorna todos os pedidos
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Lista com todos os pedidos.",
    });
});

//Cadastra um pedido
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Pedido cadastrado",
    });
});

//Retorna apenas um pedido
router.get("/:id_pedido", (req, res, next) => {
    res.status(200).send({
        mensagem: "Detalhes do pedido",
        id_pedido: id
    });
});

//Exclui um pedido
router.delete("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Pedido excluido.",
    });
});

module.exports = router;