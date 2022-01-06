const express = require('express');
require('dotenv').config();
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const authRouter = require('./routers/auth');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//Setup morgan production and development logging here
if (app.get('env') === 'Websiteion') {
    app.use(
        morgan('common', {
            skip: function (req, res) {
                return res.statusCode < 400;
            },
            stream: __dirname + '/../morgan.log',
        }),
    );
} else {
    //In development mode incoming request are logged to console with details
    app.use(morgan('dev'));
}

app.use(userRouter);
app.use(taskRouter);
app.use(authRouter);

//Serve react app in production to the browser
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/cloud-client/build')));
    app.get('*', (req, res) => {
        res.sendFile('index.html');
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
