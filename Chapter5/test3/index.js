import {
    createServer
} from 'http';
import data from './data.js';
import {
    getList
} from './list.js';
import {
    deleteAddress
} from './delete.js';

createServer(
    (request, response) => {
        let responseBody;
        const parts = request.url.split('/');
        if (parts.includes('delete')) {
            data.addresses = deleteAddress(data.addresses, parts[2]);
            redirect(response, '/');
        } else {
            response.writeHead(
                200, {
                    'content-type': 'text/html'
                }
            );

            const responseBody = getList(data.addresses);
            response.end(responseBody);
        }
    }
).listen(
    8080,
    () => console.log("Adressbuch erreichbar unter http://localhost:8080")
);

function redirect(response, to) {
    response.writeHead(
        302, 
        {
            'location': '/',
            'content-type': 'text/plain'
        }
    );
    response.end("302 redirecting to /");
}