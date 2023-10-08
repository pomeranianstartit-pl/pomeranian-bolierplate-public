import { sum } from './sum';

beforeEach(() => {
  console.log('Im before All');
});

afterEach(() => {
  console.log('cleanup After');
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
