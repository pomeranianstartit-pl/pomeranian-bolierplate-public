import { render, screen } from '@testing-library/react';
import {
  TODO_NAMES,
  TestedComponent,
  getNumberOfTasks,
  getRandomInt,
  getRandomTaskName,
} from './TestedComponent';

describe('getNumberOfTasks', () => {
  test('returns 0 for an empty array', () => {
    expect(getNumberOfTasks([])).toBe(0);
    expect(getNumberOfTasks(1)).toBeUndefined();
    expect(() => getNumberOfTasks()).toThrow();
  });
});

describe('getRandomTaskName', () => {
  test('returns first element from test data', () => {
    const getRandomMock = jest.fn().mockReturnValue(0);
    expect(getRandomTaskName(getRandomMock)).toEqual(TODO_NAMES.at(0));
  });
  test('returns last element from test data', () => {
    const lastIndex = TODO_NAMES.length - 1;
    const getRandomMock = jest.fn().mockReturnValue(lastIndex);
    expect(getRandomTaskName(getRandomMock)).toEqual(TODO_NAMES.at(lastIndex));
  });
});

describe('getRandomInt', () => {
  beforeAll(() => {
    jest.spyOn(Math, 'random');
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  test('returns 0 when random is zero', () => {
    Math.random.mockReturnValue(0);
    expect(getRandomInt(88)).toBe(0);
  });
  test('returns (param - 1) when random is close to 1', () => {
    Math.random.mockReturnValue(0.99999);
    expect(getRandomInt(3)).toBe(2);
  });
});

const testData = [
  {
    id: 105,
    title: 'Research Topic',
    note: 'Research Topic',
    author: 'Anonymous',
    isDone: false,
    createdAt: '2023-08-25T10:36:22.070Z',
  },
  {
    id: 106,
    title: 'Grocery Shopping',
    note: 'Grocery Shopping',
    author: 'Anonymous',
    isDone: false,
    createdAt: '2023-08-25T10:36:34.700Z',
  },
];

const successfulFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(testData),
      });
    });
  });
};

describe('Tested Component', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });
  beforeEach(() => {
    fetch.mockImplementation(successfulFetch);
  });
  afterAll(() => {
    fetch.mockRestore();
  });
  it('has proper header', () => {
    render(<TestedComponent />);
    const heading = screen.getByRole('heading', {
      name: /testing header/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders list of tasks', async () => {
    render(<TestedComponent />);
    const listItem = await screen.findByRole('cell', {
      name: /research topic/i,
    });
    // screen.logTestingPlaygroundURL();
    expect(listItem).toBeInTheDocument();
  });
});
