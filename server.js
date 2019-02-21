const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routs/api');
const cors = require('cors')

const PORT = 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, () => {
  console.log('running');
});
