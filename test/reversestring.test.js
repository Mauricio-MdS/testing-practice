const reverseString = require('../src/reversestring');

test('does nothing to a palindrome', () => {
  expect(reverseString('wow')).toBe('wow');
});

test('reverses a string', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});
