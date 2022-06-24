export default (rl, tasks) => {
    rl.on(
        'SIGINT',
        () => {
            const solvedCount = tasks.reduce(
                (solvedCount, task) => {
                    if (task.input !== '') {
                        solvedCount++;
                    }

                    return solvedCount;
                },
                0
            );

            console.log(`${solvedCount} -- ${tasks.length}`);
        }
    );

    rl.close();
}