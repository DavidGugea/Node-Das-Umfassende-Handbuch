import {
    request
} from 'http';

const options = new URL("https://jsonplaceholder.typicode.com/posts");

request(
    options,
    response => {
        let body = '';
        response.on(
            'data',
            chunk => body += chunk
        );

        response.on(
            'end',
            () => console.log(body)
        );
    }
)