const storeProducts = require("../data");

const getProducts = (req, res) => {
  res.status(200).json(storeProducts);
};

const postProduct = (req, res) => {
  storeProducts.push(req.body);
  res.status(200).json(storeProducts);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  console.log(id, price);
  const product = storeProducts.find((product) => {
    return product.id === +id;
  });

  if (!product) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id}` });
  }

  const newProducts = storeProducts.map((product) => {
    if (product.id === +id) {
      product.price = price;
    }
    return product;
  });
  console.log(newProducts);
  res.status(200).json(newProducts);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const product = storeProducts.find((product) => {
    return product.id === +id;
  });

  if (!product) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id}` });
  }

  const newProducts = storeProducts.filter((product) => {
    if (product.id !== +id) {
      return product;
    }
  });
  console.log(newProducts);
  res.status(200).json({ success: true, data: newProducts });
};

module.exports = { getProducts, postProduct, updateProduct, deleteProduct };
