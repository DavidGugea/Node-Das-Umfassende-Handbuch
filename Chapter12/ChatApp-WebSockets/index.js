import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieSession from 'cookie-session';
import router from './app/index.js';
import initWebSocket from './app/websocket.js';

const app = express();

app.use(
    cookieSession({
        name: 'session',
        keys: ['key1', 'key2']
    })
);
app.use(express.urlencoded({ extended: false }));

app.set('views', `${dirname(fileURLToPath(import.meta.url))}/views`);
app.set('view engine', 'pug');

app.get(
    '/login',
    (request, response) => {
        response.render('login');
    }
);

app.use(router(logoutWebSocket));

app.listen(
    8080,
    () => {
        console.log('Server is listening to http://localhost:8080');
    }
);

initWebSocket();