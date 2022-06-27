import { execFile } from "child_process";

execFile(
    './input.js',
    (err, stdout, stderr) => {
        console.log(stdout);
    }
);