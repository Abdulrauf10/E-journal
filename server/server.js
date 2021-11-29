const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const {PORT = 8000} = process.env;
const router = require ("./router");
const cors = require ('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use(router);

app.listen(process.env.PORT || PORT, () => {
  console.log(`app is running on port ${PORT}`)
})

module.exports = app;