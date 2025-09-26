const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Call me is Ravi");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
