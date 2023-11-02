import React , { useState } from 'react';
import { render ,screen, waitFor  } from '@testing-library/react';
import UserEvent from "@testing-library/user-event";
import ControlPanel from '../../components/controlPanel'; // adjust the path according to your project structure

describe('ControlPanel',  () => {
  const mockDropdown = ['2020', '2021', '2022','2029'];
  it('renders correctly with props input1', async () => {
     const { container }=render(
        <ControlPanel
          selectedPDF={'2020'}
          dropdown={mockDropdown}
          image="your-image-url.png"
          handleChange={() => {}}
          defalutValue="2020"
          presentYear= "2021"
        />

        );

        const comboboxDiv = screen.getByRole('combobox');
        expect(comboboxDiv).toBeInTheDocument();
        expect(comboboxDiv).toContainHTML('2020');

        
        const tags = container.querySelectorAll('a');
        expect(tags.length).toBe(2);
        
        expect(tags[0]).toHaveAttribute('href', "2021");
        expect(tags[1]).toHaveAttribute('href', "2020");
        
      });
      
      it('renders correctly with props input2', async () => {
      const { container }= render(
        <ControlPanel
        selectedPDF={'2029'}
        dropdown={mockDropdown}
        image="your-image-url.png"
        handleChange={() =>{}}
        defalutValue="2029"
        presentYear= "2025"
        />
        
        );
        
        const comboboxDiv = screen.getByRole('combobox');
        expect(comboboxDiv).toBeInTheDocument();
        expect(comboboxDiv).toContainHTML('2029');

  

        const tags = container.querySelectorAll('a');
        expect(tags.length).toBe(2);

        expect(tags[0]).toHaveAttribute('href', "2025");
        expect(tags[1]).toHaveAttribute('href', "2029");
        
      
      });



      it('handles interactive select', async () => {
        const fn = jest.fn();
      
         render(
          <ControlPanel
          selectedPDF={'2029'}
          dropdown={mockDropdown}
          image="your-image-url.png"
          handleChange={fn}
          defalutValue="2029"
          presentYear= "2025"
          />
          
          );
        
        const comboboxDiv = screen.getByRole('combobox');
        expect(comboboxDiv).toBeInTheDocument();
        expect(comboboxDiv).toContainHTML('2029');

  


        await waitFor(() => { UserEvent.click(screen.getByText("2029")); })
        await waitFor(() => UserEvent.click(screen.getByText("2021")));
        expect(screen.getByText(/2021/i)).toBeInTheDocument();



        await waitFor(() => { UserEvent.click(screen.getByText("2020")); })
        await waitFor(() => UserEvent.click(screen.getByText("2022")));
        expect(screen.getByText(/2022/i)).toBeInTheDocument();
        
        
        expect(fn).toBeCalled();
 
      });



});