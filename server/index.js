const express = require("express");
const app = express();
cookieParser = require("cookie-parser");
require("dotenv").config();
const dbConfig = require("./dbConfig");
const route = require("./routes");
const { generateResetToken } = require("./utils/helpers");
const cloudinaryConfig = require("./utils/cloudinaryConfig");
const { webhook } = require("./controllers/orderController");
const port = 8000;


app.post('/webhook', express.raw({type: 'application/json'}), webhook);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

dbConfig();
cloudinaryConfig()
app.use(route);





app.listen(port, () => {
  console.log(`server is running`);
});
