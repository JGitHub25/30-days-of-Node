const { writeFileSync } = require("fs");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.post("/form-info", (req, res) => {
  const data = JSON.stringify(req.body);
  writeFileSync("data.txt", data, { flag: "a" }, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("The file has been saved!");
    }
  });
  res.send(
    "<h1>Thank you for submitting! Your feedback will be carefully considered.</h1>"
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
