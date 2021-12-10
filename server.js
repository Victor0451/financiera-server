const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/database");
require('dotenv').config();

// settings

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.set("port", process.env.PORT || 5002);

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "./clubwerchow.com.key")),

  cert: fs.readFileSync(path.resolve(__dirname, "./clubwerchow.com.crt")),
};
console.log(options),
  //middlewares
  app.use(bodyparser.json());
app.use("*", cors());

//Routes


//SGI
app.use("/api/sgi/operador", require("./routes/sgi/operador"));
app.use("/api/sgi/auth", require("./routes/sgi/auth"));


// UPLOADS
app.use(
  "/api/archivos/legajovirtual",
  require("./routes/archivos/LegajoVirtual")
);


//Conecting DB

db.sgiSequelize
  .authenticate()
  .then(() => console.log("Database SGI conected..."))
  .catch((err) => console.log("error" + err));



// server escuchando

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

https.createServer(options, app).listen("4001");
