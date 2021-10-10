const express = require("express");
const app = express();

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false }));

app.post("/booking", (req, res) => {
  console.log(req.body);
  let bookingInfo = "";
  for (let key in req.body) {
    bookingInfo += ` ${key}: ${req.body[key]}`;
  }
  res.status(200).send(bookingInfo);
});

app.listen(8080, () => {
  const newLocal = "Server running on port 8080...";
  console.log(newLocal);
});
