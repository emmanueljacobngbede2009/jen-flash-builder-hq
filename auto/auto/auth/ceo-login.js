 // JEN FLASH BUILDER HQ - CEO LOGIN
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("CEO Login is working. No password. Only Face ID + Email");
});

app.listen(3000, () => console.log("Server running on 3000"));
