import { sum } from './Testing.jsx';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 2 to equal 7', () => {
  expect(sum(5, 2)).toBe(7);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('the data is peanut butter', async () => {
  const data = await Promise.resolve('peanut butter');
  expect(data).toBe('peanut butter');
});
