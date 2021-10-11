const express = require("express");
const router = express.Router();

const {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", getProducts);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
