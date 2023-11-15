import { render, screen, fireEvent } from '@testing-library/react';
import { RTLTesting } from './index';

describe('Testing RTLTesting component:', () => {
  test('should render RTLTesting heading element', () => {
    render(<RTLTesting />);
    const headingElement = screen.getByText('RTL Testing');

    expect(headingElement).toBeInTheDocument();
  });

  test('should render RTLTesting button element', () => {
    render(<RTLTesting />);
    const buttonElement = screen.getByText('Wyświetl!');

    expect(buttonElement).toBeInTheDocument();
  });

  test('RTLTesting button should display/hide text element', () => {
    render(<RTLTesting />);

    const buttonElement = screen.getByTestId('visible-button');
    const textElement = screen.getByTestId('visible-element');

    expect(textElement).toBeVisible();

    fireEvent.click(buttonElement);

    const showElement = screen.getByTestId('show-element');
    expect(showElement).toBeVisible();
  });

  test('RTLTesting button should display/hide div element', () => {
    render(<RTLTesting />);

    const buttonElement = screen.getByTestId('visible-button');

    fireEvent.click(buttonElement);
    const divElement = screen.queryByText('Test!');

    expect(divElement).toBeInTheDocument();
    expect(divElement).toBeVisible();
  });
});
