const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'FirstApp')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/form', (req, res) => {
  console.log(req.body);
  const { firstName, lastName } = req.body;
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  res.send('Form data received successfully!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
