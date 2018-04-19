const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, '../client/public')));

app.post('/login', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.send('This is the server');
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
