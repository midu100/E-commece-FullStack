const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const dbConfig = require("./dbConfig");
const route = require("./routes");
const { generateResetToken } = require("./utils/helpers");
const cloudinaryConfig = require("./utils/cloudinaryConfig");
const { webhook } = require("./controllers/orderController");
const port = 8000;
const dns = require("dns");


app.post('/webhook', express.raw({type: 'application/json'}), webhook);
app.use(express.json());
dns.setServers(["8.8.8.8", "8.8.4.4"]);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

dbConfig();
cloudinaryConfig()
app.use(route);





app.listen(port, () => {
  console.log(`server is running`);
});
