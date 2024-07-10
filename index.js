import express from "express";
import { collegeRouter } from "./routes/college-routes.js";
import { dbconnection } from "./config/db.js";


dbconnection();

const app = express();
app.use(express.json());
app.use (collegeRouter);

const port =  7090;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
