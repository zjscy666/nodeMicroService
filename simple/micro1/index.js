const express = require("express");
const app = express();
// express使用路由
const { getTestData } = require("./api/test.js");

app.post("/getTest", getTestData);

app.listen(3001, () => console.log("Server port 3001 at start ...."));
