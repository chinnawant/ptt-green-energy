import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from "@testing-library/user-event";
import App from '../App';
import ReactDOM from 'react-dom';

describe('App component', () => {
  test('renders App component without crashing', async () => {
    render(<App />);
    expect(screen.getByText('PTT Green Energy Pte. Ltd.')).toBeInTheDocument();;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
});