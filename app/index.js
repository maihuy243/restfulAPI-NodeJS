require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const apiRouter = require("./routes/api.router");
const homeRouter = require("./routes/home.router");

// --

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
apiRouter(app);
homeRouter(app);

app.listen(port, () => console.log("app running by port : ", port));
