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
    <h1>Sensor Dashboard</h1>
    <p>Sensor 1: ${latest.s1}</p >
    <p>Sensor 2: ${latest.s2}</p >
    <script>
      setTimeout(() => location.reload(), 2000);
    </script>
  `);
});

app.listen(process.env.PORT || 3000);
