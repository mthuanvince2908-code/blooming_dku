const express = require('express');
const app = express();

let latestValue = 0;

app.get('/update', (req, res) => {
  latestValue = req.query.value;
  res.send("OK");
});

app.get('/', (req, res) => {
  res.send(`<h1>Sensor: ${latestValue}</h1>`);
});

app.listen(process.env.PORT || 3000);
