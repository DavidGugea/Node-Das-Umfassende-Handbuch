const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    console.dir(req);
    console.dir(res);
    next();
}

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

app.use(myLogger);
app.use(requestTime);

app.get(
    '/',
    (req, res) => {
        let responseText = 'Hello World!<br>';
        responseText += `<small>Requested at: ${req.requestTime}</small>`;

        res.send(responseText);
    }
);

app.listen(
    3000,
    () => {
        console.log('The server is listening on PORT 3000');
    }
);