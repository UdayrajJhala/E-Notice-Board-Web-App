const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jhala@27',
  database: 'noticeboard'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Serve static files (including HTML) from the project directory
app.use(express.static(__dirname));

// Route to handle login requests
app.post('/login', (req, res) => {
  const { email, password, userType } = req.body;
  const signInLink = userType === 'teacher' ? 'home_teacher.html' : 'home.html';

  // Check if user exists and credentials are correct
  const query = 'SELECT * FROM credentials WHERE email = ? AND pass = ?';
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).send('Internal server error');
    }
    
    if (results.length === 0) {
      return res.status(401).send('Invalid email or password');
    }

    // Redirect user to appropriate page
    res.redirect(signInLink);
  });
});

// Route to fetch notices from the database
app.get('/notices', (req, res) => {
  const query = 'SELECT title, notice FROM notices';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).send('Internal server error');
    }
    
    // Send notices data to the client
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
