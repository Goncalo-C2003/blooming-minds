const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

router.post('/signup', async (req, res) =>
{
  try
  {
    const {email, password} = req.body || {};
    if(!email || !password) return res.status(400).json({ message: 'Email and password required' });
    if(typeof password !== 'string' || password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters'});

    const normalized = email.toLowerCase().trim();

    const existing = await db.query('SELECT id FROM users WHERE email = $1', [normalized]);
    if(existing.rows.length) return res.status(409).json({ message: 'Email already registered' });

    const hash = await bcrypt.hash(password, 10);
    await db.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2)',
      [normalized, hash]
    );

    return res.status(201).json({ message: 'User created' });
  }
  catch (err)
  {
    console.error('Signup error', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;