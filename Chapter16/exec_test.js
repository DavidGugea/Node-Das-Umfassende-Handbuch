import { exec } from 'child_process';

const cmd = 'find /usr/local -iname "node"';

exec(
    cmd,
    (error, stdout, stderr) => {
        if (error) {
            throw err;
        }

        console.log(stdout);
    }
);