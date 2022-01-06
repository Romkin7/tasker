const express = require('express');
require('dotenv').config();
require('./db/mongoose');

const cors = require('cors'); //used to handle cross origin http requests

/** NodeJs own internal packages */
const path = require('path');
/** Routes */
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const authRouter = require('./routers/auth');

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

//Serve react app in production to the browser
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile('index.html');
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
