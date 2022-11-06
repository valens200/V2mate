const http = require("http");
const express = require("express");
const app = express();
const routes = require("./routes/urlRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(
  cors({
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    origin: "http://localhost:3000",
  })
);
app.use("/app", routes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
