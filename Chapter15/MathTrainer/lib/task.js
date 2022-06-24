import createOperand from './operand.js';

export default function createTask(operation, level) {
    const [operand1, operand2] = getOperands(operation, level);
    const task = `${operand1} ${operation} ${operand2}`;
    const result = eval(task);

    return {
        task,
        result,
        input: '',
    };
}

function getOperands(operation, level) {
    let operands;

    switch(level) {
        case 1:
            operands = [createOperand(1), createOperand(1)];
            break;
        case 2:
            operands = [createOperand(1), createOperand(2)];
            if (createOperand(1) % 2 == 0) {
                operands.reverse();
            }
            break;
        case 3:
            operands = [createOperand(2), createOperand(2)];
            break;
    };

    if (operation === '/') {
        operands[0] = operands[0] * operands[1];
    };

    return operands;
}