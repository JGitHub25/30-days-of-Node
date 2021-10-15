const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/dbConnection");
const songRoutes = require("./routes/routes");

app.use(express.static("./public"));
app.use(express.json());

app.use("/songs", songRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB");

    app.listen(process.env.PORT, () => {
      if (process.env.NODE_ENV === "development") {
        console.log(`App in development stage.`);
      }
      console.log(`Server listening on port ${process.env.PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
