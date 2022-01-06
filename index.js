const express = require('express');
require('dotenv').config();
require('./src/db/mongoose');

const cors = require('cors'); //used to handle cross origin http requests

/** NodeJs own internal packages */
const path = require('path');
/** Routes */
const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');
const authRouter = require('./src/routers/auth');

const app = express();

//use cors
app.use(cors());
/** Setup proxy pass and define port,
 *  that node server will listen to incoming requests */
app.set('trust proxy', true);

/** Set port */
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);
app.use(authRouter);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
