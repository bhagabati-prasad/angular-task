require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

// import routes
const { UserRoutes } = require('./routes');

// database connection --
const connectDB = require('./config/db_conn');
connectDB();

// -- apply middlewares --
app.use(cors({ origin: ['http://localhost:4200'] }));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
// morgan for logging every request status on console
app.use(morgan('dev'));

// ROUTES --
app.get('/', (req, res) => {
  res.send('Hello from server!');
});

// API Routes
app.use('/api/user', UserRoutes);

app.listen(4000, () => console.log('server at post 4000'));
