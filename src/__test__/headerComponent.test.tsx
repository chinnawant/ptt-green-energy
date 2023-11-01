import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';

describe('Header', () => {
  it('renders with correct props', () => {
    const mockImage = 'test-image.jpg';
    const mockCompanyName = 'PTT Green Energy';
    const { container } = render(<Header image={mockImage} companyName={mockCompanyName} />);

    expect(screen.getByText(mockCompanyName)).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', mockImage);
  });

  it('renders with default props', () => {
    const { container } = render(<Header />);

    expect(screen.queryByText('PTT Green Energy')).not.toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', '');
  });



  it('renders with custom width and height', () => {
    const mockImage = 'test-image.jpg';
    const mockCompanyName = 'PTT Green Energy';
    const mockWidth = 100;
    const mockHeight = 100;
    const { container } = render(<Header image={mockImage} companyName={mockCompanyName} width={mockWidth} height={mockHeight} />);

    expect(screen.getByText(mockCompanyName)).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', mockImage);
    expect(container.querySelector('img')).toHaveAttribute('width', mockWidth.toString());
    expect(container.querySelector('img')).toHaveAttribute('height', mockHeight.toString());
  });
});