import express from 'express';
import {
    router as movieRouter
} from './movie/index.js';
import morgan from 'morgan';
import {
    dirname
} from 'path';
import {
    fileURLToPath
} from 'url';

const app = express();

app.set('view engine', 'pug');

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));
app.use(morgan('common', {
    immediate: true
}));
app.use(express.urlencoded({
    extended: false
}));
app.use('/movie', movieRouter);
app.get(
    '/',
    (request, response) => response.redirect('/movie')
);

app.listen(
    8080,
    () => {
        console.log('Server is listening to http://localhost:8080');
    }
);