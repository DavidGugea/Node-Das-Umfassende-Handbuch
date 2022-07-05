import { createReadStream, createWriteStream } from "fs";
import { Transform } from 'stream';

const read = createReadStream('input.txt');
const write = createWriteStream('output.txt');

class ToUpperCase extends Transform { 
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
};

const toUpperCase = new ToUpperCase();
read.pipe(toUpperCase).pipe(write);