const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/blooming';
const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : false
});

async function init()
{
  const sqlPath = path.join(__dirname, 'create_tables.sql');
  if (fs.existsSync(sqlPath)) {
    const sql = fs.readFileSync(sqlPath, 'utf8');
    await pool.query(sql);
  }
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
  init
};
