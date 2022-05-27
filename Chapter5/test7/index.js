import request from 'request';

const post = {
    "userId": 1,
    "id": 101,
    "title": "Test title",
    "body": "Test body",
}

request.post(
    {
        url: 'https://jsonplaceholder.typicode.com/posts', 
        post
    },
    ( err, response, body ) => {
        if (err) {
            console.error(err);
        } else {
            console.log(body);
        }
    }
)