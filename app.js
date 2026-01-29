const express = require('express');
const app = express();
const db = require('./db'); // Import the database connection

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      return res.status(500).send('Database query failed');
    }
    res.send(`Database time: ${results[0].now}`);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
