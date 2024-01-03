require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.Port || 3000;

app.get("/",(req,res) => {
    res.send("Hello Adithep");
});

app.listen(port, () => {
    console.log(`Example app lustenung at http://localhost:${port}`);
});
