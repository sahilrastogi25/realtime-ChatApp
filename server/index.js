require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Routes = require("./app/routes");
app.use(express.json(), cors(), express.static("uploads"), Routes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started at PORT-${PORT}`);
});
