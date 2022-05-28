import { createServer } from 'https';
import { readFile, readFileSync, rename } from 'fs';

const options = {
    key: readFileSync('./localhost.key'),
    cert: readFileSync('./locahost.cert'),
};

createServer(
    options,
    (request, response) => {
        response.writeHead(
            200,
            {
                'content-type': 'text/html'
            }
        );
        response.write(
            `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Adressbuch</title>
                    <meta charset='utf8'/>
                </head>
                <body>
                    <h1>Adressbuch</h1> 
                </body>
            </html> 
            `
        );
        response.end("Hello World");
    }
).listen(
    8080,
    () => console.log('Adressbuch erreichbar unter https://localhost:8080')
);