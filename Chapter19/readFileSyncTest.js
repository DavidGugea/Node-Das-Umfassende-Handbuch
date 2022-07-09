import { readFileSync } from 'fs';

try {
    const data = readFileSync('./input.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error(err);
}