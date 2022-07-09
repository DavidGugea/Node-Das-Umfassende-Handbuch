const constants = require("fs").constants;
const stat = require("fs/promises").stat;
const access = require("fs/promises").access;

(
    async () => {
        try {
            const fileStat = await stat('./input.txt');
            console.log(fileStat);
        } catch (err) {
            console.error(err);
        }

        try {
            await access('./input.txt', constants.R_OK);
            console.log("File is readable");
        } catch (err) {
            console.log("File is not readable");
        }
    }
)();