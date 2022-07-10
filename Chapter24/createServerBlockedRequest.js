import {
    createServer
} from 'http';
import {
    parse
} from 'url';

createServer((req, res) => {
    const number = parse(req.url, true).query.number;
    let result = 1;

    const start = new Date().getTime();

    if (number !== undefined) {
        for (let i = 1; i <= number; i++) {
            result += i * i;
        };
    };

    const end = new Date().getTime();

    res.end(`Time: ${end - start} Result: ${result}`);
}).listen(8080);