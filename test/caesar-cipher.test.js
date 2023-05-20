const caesarCipher = require('../src/caesar-cipher');

test('it returns the same string when shift is 0', () => {
  expect(caesarCipher('hello', 0)).toBe('hello');
});

test('it returns a shifted word if shift more than 0', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('it wraps from z to a', () => {
  expect(caesarCipher('world', 4)).toBe('asvph');
});

test('it returns words in the same case', () => {
  expect(caesarCipher('HELLO', 1)).toBe('IFMMP');
});

test('it ignores characters that are not letters', () => {
  expect(caesarCipher('hello world!', 1)).toBe('ifmmp xpsme!');
});
