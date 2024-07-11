const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/db');
const UserRoutes = require('./routes/user')
const restaurantRoutes = require('./routes/restaurant')

const app = express();
connectDatabase(); //to connect mongodb

//middlewares
app.use(bodyParser.json());
app.use(cors()); //to avoid api blocking


//routes
app.use('/api', UserRoutes);
app.use('/api',restaurantRoutes );

app.listen(3005, ()=>{
    console.log('server is running at localhost:3005');
})
