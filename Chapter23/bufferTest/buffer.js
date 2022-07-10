import {
    strictEqual
} from 'assert';


const myBuffer = Buffer.from('Hello World');

const result = myBuffer.toString();

strictEqual(result, 'Hello Error');