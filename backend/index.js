const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express()

//specify routers
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const marketRouter = require('./routes/markets');



// initialize middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true,useUnifiedTopology:true}, () =>{
        console.log('connection to database established succesfully');
    }
)
app.listen(3000,() =>
{
    console.log('server running on port 3000');
});


app.use('/markets',marketRouter);
app.use('/users',userRouter);
app.use('/auth',authRouter);


app.get('/', (req,res) => {
    res.send('this is the home page');

}


);

