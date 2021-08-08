const express = require("express");
const router = express.Router();

const {
    remove,
    create,
    readList,
    updateProduct,
    readOne
} = require("../controller/product");

const { json } = require("body-parser");

router.post("/products/create", create);
router.post("/products/remove", remove);
router.get("/products/read/list", readList);
router.post("/products/read/one", readOne);
router.post("/products/update/product", updateProduct);

module.exports = router;
