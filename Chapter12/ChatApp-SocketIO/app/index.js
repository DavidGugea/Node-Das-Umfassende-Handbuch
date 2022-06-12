import {
    Router
} from 'express';
import checkAuth from './check-auth.js.js';

export default function init(logoutWebSocket) {
    const router = Router();

    router.get(
        '/',
        (request, response) => {
            response.render('login');
        }
    );

    router.post(
        '/login',
        (request, response) => {
            const username = request.body.username;
            const password = request.body.password;

            if (username === 'username1' && password === 'password') {
                request.session.user = 'user1';
            } else if (username === 'username2' && password === 'password') {
                request.session.user = 'user2';
            }

            response.redirect('/chat');
        }
    );

    router.get(
        '/chat',
        checkAuth,
        (request, response) => {
            response.render('chat', {
                user: request.session.user
            })
        }
    );

    router.get(
        '/logout',
        (request, response) => {
            logoutWebSocket(request.session.user);
            delete request.session.user;
            response.redirect('/');
        }
    );

    return router;
}