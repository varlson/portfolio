const express = require("express");
const cors = require("cors");
const coockieParser = require("cookie-parser");
const helmet = require("helmet");

const { default: mongoose } = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(helmet());
app.use(express.json());
app.use(coockieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    // methods: "GET,PUT,POST,OPTIONS, DELETE",
  })
);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.urlencoded({ extended: false }));
const SafeRoute = require("./Routes/SafeRoute");
app.use("/auth", SafeRoute);

// app.get("/teste", (req, res) => {
//   res.cookie("dados", "Manito Ducure");
//   res.send("logged successfully");
// });

// app.get("/cookie", (req, res) => {
//   res.send({ dados: req.cookies });
// });

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`The server is runnint at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`An error ocurrend ${error}`);
  });
