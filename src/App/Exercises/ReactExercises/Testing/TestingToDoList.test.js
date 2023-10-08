import { render, screen, waitFor, within } from '@testing-library/react';
import {
  getNumberOfTasks,
  getRandomTaskName,
  getRandomInt,
  ToDoList,
} from './ToDoList';

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

const DELAY = 100;

const successfulFetch = () =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(testData),
      });
    }, DELAY); //  setTimeout even with 0 is important!
  });

describe('getNumberOfTasks', () => {
  test('returns 0 for an empty array', () => {
    expect(getNumberOfTasks([])).toBe(0);
  });
  test('throws and Error if parameter is undefined', () => {
    expect(() => getNumberOfTasks()).toThrow(/missing/);
  });
});

describe('getRandomTaskName', () => {
  it('returns first element from test data', () => {
    const randomMock = jest.fn().mockReturnValue(0);
    expect(getRandomTaskName(randomMock)).toBe('Grocery Shopping');
  });
});

describe('getRandomInt', () => {
  beforeAll(() => {
    jest.spyOn(Math, 'random');
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('returns 0 when random is close to zero', () => {
    // Math.random.mockImplementation(() => 0.999)
    Math.random.mockReturnValue(0.00001);
    expect(getRandomInt(8)).toBe(0);
  });
  it('returns 0 when random is zero', () => {
    // Math.random.mockImplementation(() => 0.999)
    Math.random.mockReturnValue(0);
    expect(getRandomInt(8)).toBe(0);
  });
});

describe('Todo List', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });
  afterAll(() => {
    fetch.mockRestore();
  });
  beforeEach(() => {
    fetch.mockImplementation(successfulFetch);
  });

  it('renders with header', () => {
    render(<ToDoList />);
    const heading = screen.getByRole('heading', {
      name: /todo list/i,
    });
    expect(heading).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  it('returns list with elements', async () => {
    render(<ToDoList />);
    await waitFor(() => {
      screen.getAllByRole('button', {
        name: /delete/i,
      });
    });

    // expect(heading).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
