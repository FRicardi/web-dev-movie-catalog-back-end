const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to an amazing movie catalog');
});

app.listen(port, () => {
  console.log(`WebDev movie catalog running on http://localhost:${port}`);
});
