const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Listening to request and checking");
});

const users = [
  { id: 1, name: "Katrina", email: "katrina@gmail.com", phone: "0123456789" },
  { id: 2, name: "Priyanka", email: "priyanka@gmail.com", phone: "0123456789" },
  { id: 3, name: "jaquelin", email: "jaquelin@gmail.com", phone: "0123456789" },
  { id: 4, name: "Katrina", email: "katrina@gmail.com", phone: "0123456789" },
  { id: 5, name: "Rakul", email: "rakul@gmail.com", phone: "0123456789" },
  { id: 6, name: "Sunny", email: "sunny@gmail.com", phone: "0123456789" },
];

// filter by search query parameter
app.get("/users", (req, res) => {
  console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["lemon", "orange", "mango"]);
});

app.listen(port, () => {
  console.log("Listening to port");
});
