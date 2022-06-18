const axios = require("axios");

exports.getTestData = async (req, res) => {
  const data = await axios.post("http://localhost:3001/getTest");
  console.log(data.data);
  res.send({
    name: "test",
    desc: "这是main返回的数据",
    ...data.data,
  });
};
