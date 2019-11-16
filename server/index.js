const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));
app.listen(PORT, () =>
  console.log(`Server can hear everything at port: ${PORT}`)
);
