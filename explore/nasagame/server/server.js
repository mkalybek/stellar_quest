const cors = require('cors');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Enable CORS for the specific origin (your front-end origin)
app.use(cors({
    origin: 'http://127.0.0.1:5500'  // Allow requests only from this origin
}));

// Middleware to parse JSON requests
app.use(express.json());

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the NASA Planets API! Use /api/planets to get planet data.');
});

// Endpoint to get planets
app.get('/api/planets', (req, res) => {
    const db = new sqlite3.Database('../../datauni/identifier.sqlite', sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error('Error opening database', err);
            res.status(500).send('Internal Server Error');
            return;
        }
    });

    const query = `
        SELECT DISTINCT pl_name, pl_rade, glat, glon 
        FROM datatableplanets 
        WHERE pl_rade IS NOT NULL AND pl_rade < 50 AND pl_name IS NOT NULL 
        LIMIT 5000;
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });

    db.close((err) => {
        if (err) {
            console.error('Error closing the database:', err);
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
