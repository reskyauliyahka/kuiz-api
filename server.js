const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const quizzes = require('./quizzes.json');

app.get('/', (req, res) => {
  res.send('Selamat datang di Kuiz API!');
});

app.get('/api/quizzes', (req, res) => {
  res.json(quizzes);
});

app.listen(port, () => {
  console.log(`API berjalan di port ${port}`);
});
