const express = require("express");
const app = express();
const { getTestData } = require("./api/test.js");
app.use(express.static("htmlRes"));
app.use(express.json());
app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" }); //html方式输出
  res.end();
});
app.post("/test", getTestData);
app.listen(3000, () => console.log("Example app listening on port 3000!"));
