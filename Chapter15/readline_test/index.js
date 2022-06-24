import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function promisedQuestion(question) {
    return new Promise(
        resolve => {
            rl.question(question, answer => resolve(answer))
        }
    );
}

const user = {
    name: '',
    city: ''
};

user.name = await promisedQuestion("What's your name? ");
user.city = await promisedQuestion("Where do you live? ");

console.log(`Hello ${user.name} from ${user.city}`);

rl.close();