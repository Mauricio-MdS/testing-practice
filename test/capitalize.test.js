const capitalize = require('../src/capitalize');

test('capitalizes a lowercase string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('does nothing to already capitalized string', () => {
  expect(capitalize('HELLO WORLD')).toBe('HELLO WORLD');
});
