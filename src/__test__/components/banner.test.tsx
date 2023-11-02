import { render } from '@testing-library/react';
import BannerContainer from '../../components/banner';

describe('BannerContainer', () => {
  it('renders correctly with props', () => {
    const image = 'testImage.jpg';
    const { container }  = render(<BannerContainer image={image} />);
    const divs = container.querySelectorAll('div');
    expect(divs.length).toBe(2);


    const banner = container.querySelector('div');
    expect(banner).toHaveStyle(`background-image: url(${image})`);
    divs.forEach((div) => { expect(div).toBeInTheDocument(); });
  });
  
  
  
});