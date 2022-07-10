export default function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('We can only add numbers');
    }

    return a + b;
}