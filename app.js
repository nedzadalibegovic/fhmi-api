const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cityRoutes = require('./api/routes/cities');

const app = express();

// mongoose settings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// establish db connection
mongoose.connect(process.env.MONGO);

// middlewares
app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use('/cities', cityRoutes);

app.listen(process.env.PORT || 3000);