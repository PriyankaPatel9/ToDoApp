const mongoDB = "mongodb://127.0.0.1:27017/ToDoList"
const express = require("express");

const mongoose = require("mongoose");
//require("dotenv").config();

const cors = require("cors");

const routes = require("./Route");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));