const express = require("express");
require("dotenv").config();
require("express-async-errors");

const axios = require("axios");
async function getMovie() {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?APIKEY=${process.env.OMDB_API_KEY}&t=BLADE+RUNNER`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const app = express();

app.use(express.static("./public"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`-------App in ${process.env.NODE_ENV} stage.-------`);
  console.log(`Server is listening on port ${port}...`);
  getMovie();
});
