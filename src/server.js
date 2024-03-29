import express from "express";
import bodyParser from "body-parser";

import initAppRoutes from "./routes/index";
import db from "./config/db";
import { configCors } from "./config/cors";

require("dotenv").config();

const app = express();

const hostname = process.env.HOST_NAME;
const PORT = process.env.PORT || 8080;

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configCors(app);
initAppRoutes(app);

app.use((req, res) => {
    return res.status(404).send("nham api roi :(");
});

app.listen(PORT, () => {
    console.log(`Server is running on site ${hostname}:${PORT}`);
});
