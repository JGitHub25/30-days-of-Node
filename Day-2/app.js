//!ESTA VUELTA -EL EVENTO- NO ME FUNCIONA COMO QUISIERA.

const events = require("events");
const http = require("http");

//
let people = [
  "Johnatan",
  "Gary",
  "Melinda",
  "Peter",
  "Elsa",
  "Ryan",
  "Paul",
  "Susan",
  "Elizabeth",
  "Gloria",
];
let users = ["Johnatan", "Gary", "Melinda", "Peter", "Elsa"];

const randomUser = people[Math.floor(Math.random() * 11)];
console.log(randomUser);

//Event.
const myEmitter = new events.EventEmitter();
function giveAccess(user) {
  let message = `Welcome ${user}`;
  console.log(message);
  return message;
}
function blockAccess(user) {
  let message = `Sorry ${user}, your account doesn't seem to exist.`;
  console.log(message);
  return message;
}

if (users.includes(randomUser)) {
  myEmitter.on("known user", giveAccess);
  myEmitter.emit("known user", randomUser);
} else {
  myEmitter.on("failed attempt", blockAccess);
  myEmitter.emit("failed attempt", "stranger");
}

//Create server.
const server = http.createServer((req, res) => {
  res.end();
});

//Start server.
server.listen(8081, () => {
  console.log("Server listening on port 8081...");
});
