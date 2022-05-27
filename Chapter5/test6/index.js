import request from 'request';

request(
    'https://jsonplaceholder.typicode.com/posts',
    (err, response, body) => {
        console.log(body);
    }
)