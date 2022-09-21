const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.get('/', (req, res) => res.send('Index'));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started on port ${PORT}`));