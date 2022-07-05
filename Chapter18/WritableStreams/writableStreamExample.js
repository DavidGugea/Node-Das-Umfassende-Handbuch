import { createWriteStream } from 'fs';

const writeStream = createWriteStream('output.txt');

const data = ["Hello", "World"];

data.forEach(
    item => writeStream.write(`${item}\n`)
);

writeStream.end(null);