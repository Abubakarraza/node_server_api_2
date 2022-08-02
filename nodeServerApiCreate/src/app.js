const express = require("express");
const app = express();
const student = require('../models/studentApi');
require('../db/conn');
const StudentRouter=require('./router/router');
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(StudentRouter);
app.listen(port, () => {
    console.log(`connection is successfull at ${port}`);
});