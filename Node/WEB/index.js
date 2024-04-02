const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use('/', express.static('frontend/build'));

app.get('/api', (req, res) => {
  const secretValue = process.env.myAppSetting;  
  const response= `Hello, world! ${secretValue || 'No secret found'}`;
  res.send(response);
});

app.listen(port, () => {
  console.log('Server listening on port '+ port);
});
