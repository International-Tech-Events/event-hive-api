import express from "express";

const app = express();


const port =  7090;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
