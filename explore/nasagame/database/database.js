const sqlite3 = require('sqlite3').verbose();

// Function to fetch planets with coordinates
export async function fetchPlanetsWithCoordinates() {
    return new Promise((resolve, reject) => {
        // Open the SQLite database C:\Users\zhani\DataGripProjects\datauni\identifier.sqlite
        // C:\Users\zhani\OneDrive\Рабочий стол\nasagame\database\database.js
        let db = new sqlite3.Database('../../datauni/identifier.sqlite', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error('Error opening database', err);
                reject(err);
            }
        });

        // Query to select planet name, radius, latitude, and longitude
        const query = `
            SELECT DISTINCT(pl_name), pl_rade, glat, glon
            FROM datatableplanets
            WHERE pl_rade IS NOT NULL AND pl_rade < 50 AND pl_name IS NOT NULL
            GROUP BY pl_name
            LIMIT 5000;
        `;

        db.all(query, [], (err, rows) => {
            if (err) {
                console.error('Error executing query', err);
                reject(err);
            } else {
                const planets = rows.map(row => ({
                    name: String(row.pl_name),
                    pl_rade: row.pl_rade,
                    glon: row.glon,
                    glat: row.glat
                }));
                resolve(planets); // Return the array of planets
            }
        });

        db.close((err) => {
            if (err) {
                console.error('Error closing database', err);
            }
        });
    });
}
