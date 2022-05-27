import {
    Server
} from 'http';

const server = Server();

server.on(
    'request',
    (request, response) => {
        console.log(response);
        response.statusCode = 200;
        response.setHeader('content-type', 'text/html');

        const responseBody = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Adressbuch</title>
            </head> 
            <body>
                <h1>Adressbuch</h1>
            </body>
        </html>
        `;
        response.write(responseBody);
        response.end();
    }
)

server.on('listening', () => {
    console.log("Adressbuch erreichbar unter http://localhost:8080");
});
server.listen(8080);

/*
import { createServer } from 'http';

createServer(
    (request, response) => {
        response.writeHead(200, {
            'content-type': 'text/html'
        });

        const responseBody = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Adressbuch</title>
            </head> 
            <body>
                <h1>Adressbuch</h1>
            </body>
        </html>
        `;
        response.end(responseBody);
    }
).listen(8080, () => {
    console.log("Adressbuch erreichbar unter http://localhost:8080");
});
*/