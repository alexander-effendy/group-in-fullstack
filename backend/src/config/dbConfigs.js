import mysql from 'mysql';
import 'dotenv/config';

// Database connection configuration
const dbConfig = {
  host: '192.46.224.11',
  user: 'temp',
  password: process.env.DB_PASSWORD,
  database: 'GroupedIn',
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Refactored queryDatabase function to use Promises
export function queryDatabase(query, params = []) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting database connection:', err);
        reject(err);
        return;
      }
      connection.query(query, params, (error, results) => {
        connection.release();
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  });
}
