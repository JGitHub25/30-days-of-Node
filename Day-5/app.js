const express = require("express");
const app = express();
const bp = require("body-parser");
const products = require("../Day-5/routes/products");
const auth = require("../Day-5/routes/auth");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/products", products);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
