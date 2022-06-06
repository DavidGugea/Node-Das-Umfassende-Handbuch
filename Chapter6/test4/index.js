const express = require('express');
const app = express();
const port = 3000;

app.get(
    '/:username/:password/:age',
    (request, response) => {
        console.log(request.params);
        response.send('hello world');
    }
)

app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
});