import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from "@testing-library/user-event";
import App from '../App';

describe('App component', () => {
  test('renders App component without crashing', async () => {
    render(<App />);
    expect(screen.getByText('PTT Green Energy Pte. Ltd.')).toBeInTheDocument();;
  });
});