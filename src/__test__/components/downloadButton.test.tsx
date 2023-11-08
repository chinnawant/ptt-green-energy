import { render, screen ,fireEvent } from '@testing-library/react';
import DownloadButton from '../../components/downloadButton';

describe('DownloadButton', () => {
  const defaultProps1 = {
    href: 'https://example.com',
    imageDownload: 'https://example.com/image.png',
    id: 'xxx',
  };


  it('renders correctly with props input1', () => {
    const { getByText, container } = render(<DownloadButton {...defaultProps1} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps1.imageDownload);

    
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container.querySelector(`#${defaultProps1.id}`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', defaultProps1.href);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');

    expect(getByText('ดาวโหลด PDF')).toBeInTheDocument();
  });
  

  it('renders correctly with props input2', () => {
      const defaultProps2 = {
    href: 'https://google.com',
    imageDownload: 'https://google.com/image.png',
    id: 'yyy',
  };
    const { getByText, container } = render(<DownloadButton {...defaultProps2} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps2.imageDownload);


    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('ดาวโหลด PDF');
    expect(container.querySelector(`#${defaultProps2.id}`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', defaultProps2.href);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');

    expect(getByText('ดาวโหลด PDF')).toBeInTheDocument();
  });

it('handles click event', () => {
   const handleClick = jest.fn()

  const buttonHref = 'https://example.com';
  const { getByRole } = render(<DownloadButton href={buttonHref}  id="pdfPresentYear" imageDownload={defaultProps1.imageDownload}  onClick={handleClick} />);
  const button = getByRole('link');
  fireEvent.click(button);

  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveTextContent('ดาวโหลด PDF');
  expect(screen.getByRole('link')).toHaveAttribute('href', defaultProps1.href);
  expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');


  expect(handleClick).toHaveBeenCalled();
});
});