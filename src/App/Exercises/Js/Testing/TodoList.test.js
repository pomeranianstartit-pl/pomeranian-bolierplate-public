import { getRandomInt } from "./TodoList";
import { render, screen, waitFor } from "@testing-library/react";
import { ToDoList } from "./TodoList";

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

describe ('getRandomInt', ()=>{
    //5 => random = 0.999 =>
    beforeAll(() =>{
        jest.spyOn(Math, 'random');
    })
    it('returns (param -1) when random is close to one',() =>{
        Math.random.mockImplementation(()=> 0.999);
        expect (getRandomInt(8)).toBe(7);
    });
    it('returns 0 whne random is close to 0',() =>{
        Math.random.mockImplementation(()=> 0.0001);
        expect (getRandomInt(8)).toBe(0);
    })
    it('returns 0 when random is  0',() =>{
        Math.random.mockImplementation(()=> 0);
        expect (getRandomInt(8)).toBe(0);
    })
    it('returns 0 when random is  0',() =>{
        Math.random.mockImplementation(()=> 0.75);
        expect (getRandomInt(10)).toBe(7);
    })
});


describe('ToDoList', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('has header = todo list', async () => {
    fetch.mockImplementation(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve(testData) })
    );
    render(<ToDoList />);
    await act(async () => {
      const heading = await screen.findByRole('heading', {
        name: /todo list/i,
      });
      expect(heading).toBeInTheDocument();
    });
  });
  it('has refresh button', async () => {
    render(<ToDoList />);
    await act(async () => {
      const refreshButton = screen.getByRole('button', {
        name: /refresh/i,
      });
      expect(refreshButton).toBeInTheDocument();
    });
  });
  it('returns list with elements on load', async () => {
    fetch.mockImplementation(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve(testData) })
    );
    render(<ToDoList />);
    await act(async () => {
      const refreshButton = screen.getByRole('button', {
        name: /refresh/i,
      });
      expect(refreshButton).toBeInTheDocument();
    });
    screen.logTestingPlaygroundURL();
  });
});
