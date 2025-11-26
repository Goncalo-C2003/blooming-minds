require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const db = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/api', authRoutes);
app.get('/', (req, res) => res.render('index', { title: 'Blooming Minds API' }));

(async function main()
{
  try
  {
    await db.init();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  }
  catch(err)
  {
    console.error('Failed to initialize DB or start server:', err);
    process.exit(1);
  }
})();
