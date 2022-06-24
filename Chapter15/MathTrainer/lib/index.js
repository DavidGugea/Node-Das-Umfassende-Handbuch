import createTask from "./task.js";
import { createInterface } from 'readline';
import promisedQuestion from './promisedQuestion.js';
import getOptions from "./getOptions.js";
import chalk from 'chalk';

const { amount, level } = getOptions();

const operations = ['+', '-', '*', '/'];
const tasks = [];

operations.forEach(
    operation => {
        for(let i = 0 ; i < amount ; i++) {
            tasks.push(createTask(operation, level));
        }
    }
);

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function question(index) {
    const result = await promisedQuestion(`${tasks[index].task} = `, rl);
    tasks[index].input = parseInt(result);

    if(tasks[index].input === tasks[index].result) {
        console.log(chalk.bold.green('Right'));
    } else {
        console.log(chalk.bold.red('Wrong'));
    }

    if(++index < tasks.length) {
        question(index);
    } else {
        rl.close();
    }
}

question(0);