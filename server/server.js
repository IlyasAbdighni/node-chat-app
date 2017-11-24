const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

let app = express();

app.use(express.static(publicPath));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server is running on port ', PORT);
});


