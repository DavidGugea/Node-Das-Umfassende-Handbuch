import { spawn } from 'child_process';

const find = spawn(
    'find',
    ['.', '-iname', 'node'],
    {
        cwd: '/usr/local'
    }
);

find.stdout.on(
    'data',
    data => {
        console.log(data.toString());
    }
);