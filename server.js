console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing code
app.post("/create-item", (req, res) => { /* post is used to bring some information with itself and write the information to the database  */
  // console.log(req);
  // res.json({ test: "success" });
  // TODO: code with db here
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
})

app.get("/", function (req, res) {  /*get is used to take the information and read them or receive the information from the database*/
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});