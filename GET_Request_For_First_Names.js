const express = require('express');
const app = express();

app.get('/firstname/:first_name', (req, res) => {
  res.send('getting employees...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});