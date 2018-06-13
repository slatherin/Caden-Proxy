const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5438;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT, (err) => {
  if (err) {
    console.log('failed to connect to server', err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});