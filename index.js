import express from "express";
import { dbconnection } from "./config/db.js";

dbconnection();

const app = express();


const port =  7090;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
