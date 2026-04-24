const express = require('express');
const app = express();

let latest = { s1: 0, s2: 0 };

app.get('/update', (req, res) => {
  latest.s1 = req.query.s1;
  latest.s2 = req.query.s2;

  console.log("Received:", latest);
  res.send("OK");
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Blooming DKU</h1>
    <p>Noise: ${latest.s1}</p >
    <p>Light: ${latest.s2}</p >
    <script>
      setTimeout(() => location.reload(), 2000);
    </script>
  `);
});

app.get('/data', (req, res) => {
  res.json(latest);
});

app.listen(process.env.PORT || 3000);
