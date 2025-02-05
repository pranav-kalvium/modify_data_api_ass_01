const express = require('express');
const { resolve } = require('path');
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./database')
const route = require('./routes/menuRoutes')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8000;
dotenv.config()
app.use(express.static('static'));
app.use(cors())
app.use(bodyParser.json())

app.use('/menu',route)
connectDB()
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
