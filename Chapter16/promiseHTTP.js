import { request } from 'http';

function doRequest(url) {
    return new Promise(
        (resolve, reject) => {
            const options = {
                hostname: url,
                port: 80,
                method: 'GET,'
            };

            const requestObject = request(options, response => {
                response.setEncoding('utf8');
                let data = '';

                response.on('data', chunk => data += chunk);
                response.on('end', () => resolve(data));
                response.on('error', e => reject(e));
            });
            
            requestObject.end();
        }
    );
}

doRequest('www.google.com')
    .then(
        data => {
            console.log(`Data: ${data}`);
        },
        err => {
            console.error(`Error: ${err}`);
        }
    );