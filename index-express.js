import express from "express";

const app = express();

app.use(express.static("."))

app.use(function (req, res) {
  res.status(404).sendFile(process.cwd() + "/404.html")
})

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/index.html")
})

app.get("/about", function (req, res) {
  res.sendFile(process.cwd() + "/about.html")
})

app.get("/contact-me", function (req, res) {
  res.sendFile(process.cwd() + "/contact-me.html")
})

const PORT = 3000;
app.listen(PORT, function() {
  console.log("App started!")
})