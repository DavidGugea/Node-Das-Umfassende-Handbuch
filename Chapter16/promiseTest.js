import {
    readFile
} from 'fs';

function promisedReadFile(filename) {
    return new Promise(
        (resolve, reject) => {
            readFile(filename, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        }
    );
}

promisedReadFile('input.txt')
    .then(
        data => {
            console.log(`Content of the file: ${data}`);
        }
    )
    .catch(
        error => {
            console.error(error);
        }
    );