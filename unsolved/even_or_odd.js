function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
    // arba trumpiau number % 2 ? 'Odd' : 'Even';
}



test('2 is even', () => {
    expect(even_or_odd(2)).toBe('Even');
});

test('3 is odd', () => {
    expect(even_or_odd(3)).toBe('Odd');
});