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



test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
    expect(sum(3, 5)).toBe(8);
});

test('adds 1 + "labas" to equal ERROR', () => {
    expect(sum(1, 'labas')).toBe('Error');
});

test('adds "labas" + 4 to equal ERROR', () => {
    expect(sum('labas', 4)).toBe('Error');
});

test('adds Infinity + 4 to equal ERROR', () => {
    expect(sum(Infinity, 4)).toBe('Error');
});

test('adds -Infinity + 4 to equal ERROR', () => {
    expect(sum(-Infinity, 4)).toBe('Error');
});

test('adds NaN + 4 to equal ERROR', () => {
    expect(sum(NaN, 4)).toBe('Error');
});

test('adds NaN + 4 to equal ERROR', () => {
    expect(sum(NaN, 4)).toBe('Error');
});

test('adds 4 + NaN to equal ERROR', () => {
    expect(sum(4, NaN)).toBe('Error');
});

test('adds 4 + Infinity to equal ERROR', () => {
    expect(sum(4, Infinity)).toBe('Error');
});

test('adds 4 + -Infinity to equal ERROR', () => {
    expect(sum(4, -Infinity)).toBe('Error');
});

test('adds 5 + 4 to equal 9', () => {
    expect(sum(5, 4)).toBe(9);
});