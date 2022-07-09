import { readFile } from 'fs/promises';

try {
    const data = await readFile('./input.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error(err);
}