//Packages imports.
const express = require("express");
const dotenv = require("dotenv").config();
require("express-async-errors");
const { StatusCodes } = require("http-status-codes");

//db
const connectDB = require("./db/connect");

//APP
const app = express();

//JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("This works.");
});

//error and notFound middleware.
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(
        `***____________APP in |${process.env.NODE_ENV}| stage____________***`
      );
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

//START THE APP.
start();
