export default function promisedQuestion(question, rl) {
    return new Promise(
        resolve => rl.question(question, answer => resolve(answer))
    );
}