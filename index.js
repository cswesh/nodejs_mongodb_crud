const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./app');

const PORT = process.env.PORT || 5000;

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

app.use('/',router);

app.listen(PORT,() => {console.log("server is running in port: "+PORT )});
