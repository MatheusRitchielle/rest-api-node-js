const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Lista com todos os produtos."
    });
});

router.post("/", (req, res, next) => {
    const   produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: "Produto cadastrado.",
        produtoCriado: produto
    })
})

router.get("/:id_produto", (req, res, next) => {
    const id = req.params.id_produto

    if (id === "especial") {
        res.status(200).send({
            mensagem: "Detalhes do produto",
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: "Produto não encontrado"
        })
    }
})

router.patch("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Produto atualizado."
    })
})

router.delete("/", (req, res, next) =>{
    res.status(201).send({
        mensagem: "Produto excluído"
    })
})

module.exports = router;