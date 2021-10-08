console.log("Prueba superada");

const express = require("express");
const app = express();
const { storeProducts, randomPeople } = require("./data");

function dateRequest() {
  const date = new Date().toDateString();
  console.log(date);
}

app.use(express.static("./public"));

app.get("/products", (req, res) => {
  dateRequest();
  const selectedProductInfo = storeProducts.map((product) => {
    const {
      id,
      title,
      rating: { rate },
    } = product;
    return { id, title, rate };
  });

  res.json(selectedProductInfo);
});

app.get("/people", (req, res) => {
  const selectedPeopleInfo = randomPeople.results.map((person) => {
    const {
      name: { first, last },
      location: { country, city },
      dob: { age },
      picture: { large: image },
    } = person;
    return {
      name: `${first} ${last}`,
      origin: `${city}, ${country}`,
      age,
      image,
    };
  });
  res.json(selectedPeopleInfo);
});

app.get("/user/country/name/:id", (req, res) => {
  console.log(req.path);
  console.log(req.query);
  console.log(req.route);
  console.log(req.originalUrl);
  console.log(req.baseUrl);
  console.log(req.params);
  console.log(req.url);

  res.send("Hi there");
});

function showMiddleware(req, res, next) {
  console.log(req.method);
  console.log("I work.");
  next();
}

app.use("/middleware", showMiddleware);

app.get("/middleware", (req, res) => {
  res.send("Hi");
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080...`);
});
