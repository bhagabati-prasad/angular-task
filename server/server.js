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
const corsOptions = {
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
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
