require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");

app.use([express.json(), cors(), express.static("uploads"), Routes]);

const io = (module.exports.io = require("socket.io")(server));
const socketManager = require("./app/socketManager/socketManager.js");

io.on("connection", socketManager);
server.listen(PORT, () => {
  console.log(`Server started at PORT-${PORT}`);
});
