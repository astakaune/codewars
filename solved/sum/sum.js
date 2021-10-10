function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        // a === Infinity ||
        // a === -Infinity ||
        // isNaN(a) ||
        !isFinite(a) ||
        !isFinite(b)) {
        return 'Error';
    }
    return a + b;
};

module.exports = sum;

