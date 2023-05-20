const calculator = require('../src/calculator');

test('it should add two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('it should subtract two numbers', () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test('it should multiply two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('it should divide two numbers', () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});
