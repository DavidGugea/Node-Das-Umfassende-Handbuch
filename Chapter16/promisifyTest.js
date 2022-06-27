import { readFile } from 'fs';
import { promisify } from 'util';

const promisedReadFile = promisify(readFile);

promisedReadFile('input.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.error(error));