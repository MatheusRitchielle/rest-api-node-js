const express = require("express");
const router = express.Router();

//Retorna todos os produtos
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Lista com todos os produtos."
    });
});

//Cadastra um produto
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Produto cadastrado."
    })
})

//Retorna apenas um produto
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

//Atualiza um produto
router.patch("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Produto atualizado."
    })
})

//Exclui um produto
router.delete("/", (req, res, next) =>{
    res.status(201).send({
        mensagem: "Produto excluído"
    })
})

module.exports = router;