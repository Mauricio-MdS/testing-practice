const analyzeArray = require('../src/analyze-array');

const array = [1, 8, 3, 4, 2, 6];

test('it returns the average of the numbers', () => {
  expect(analyzeArray(array).average).toBe(4);
});

test('it returns the minimum value', () => {
  expect(analyzeArray(array).min).toBe(1);
});

test('it returns the maximum value', () => {
  expect(analyzeArray(array).max).toBe(8);
});

test('it returns the length', () => {
  expect(analyzeArray(array).length).toBe(6);
});
