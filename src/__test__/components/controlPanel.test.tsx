import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from "@testing-library/user-event";
import ControlPanel from '../../components/controlPanel';

describe('ControlPanel', () => {
  const mockStorePdf = [
    { name: 'PDF 1', pdf: 'pdf-url-1' },
    { name: 'PDF 2', pdf: 'pdf-url-2' },
  ];

  it('renders correctly with props input1', async () => {
    render(
      <ControlPanel
        image="your-image-url.png"
        storePdf={mockStorePdf}
      />
    );


    const tags = screen.getAllByRole('link');
    expect(tags.length).toBe(2);

    expect(tags[0]).toHaveAttribute('href', 'pdf-url-1');
    expect(tags[1]).toHaveAttribute('href', 'pdf-url-2');
  });

  it('renders correctly with props input2', async () => {
    render(
      <ControlPanel
        image="your-image-url.png"
        storePdf={mockStorePdf}
      />
    );


    const tags = screen.getAllByRole('link');
    expect(tags.length).toBe(2);

    expect(tags[0]).toHaveAttribute('href', 'pdf-url-1');
    expect(tags[1]).toHaveAttribute('href', 'pdf-url-2');
  });

});