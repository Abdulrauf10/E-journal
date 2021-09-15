const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const {PORT = 8000} = process.env;
const router = require ("./router");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})