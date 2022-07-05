import { createReadStream } from 'fs';

const options = {
    encoding: 'utf8'
};

const readStream = createReadStream('input.txt', options);

readStream.on(
    'readable',
    () => {
        const data = readStream.read();

        if (data) {
            console.log(data);
        }
    }
);