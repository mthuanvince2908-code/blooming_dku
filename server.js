const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let sensors = {};

app.get('/update', (req, res) => {

  const id = req.query.id;
  const sound = req.query.sound;
  const light = req.query.light;

  if (!id) {
    return res.send("missing id");
  }

  sensors[id] = {
    sound: sound,
    light: light,
    updated: Date.now()
  };

  console.log("Updated:", id, sensors[id]);

  res.send("OK");
});

app.get('/data', (req, res) => {
  res.json(sensors);
});

app.listen(process.env.PORT || 3000);
