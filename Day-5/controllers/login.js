const login = (req, res) => {
  const { name, member } = req.body;
  if (!(name && member)) {
    console.log("Not allowed");
    res.status(401).send("Not allowed");
  } else {
    res.status(200).send(`${name}, welcome back to our site!`);
  }
};

module.exports = login;
