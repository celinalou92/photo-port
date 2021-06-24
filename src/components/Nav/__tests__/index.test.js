import React from 'react';
// functions from react testing library
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import the component we are testing
import Nav from '..';

// insert a mock prop instead of importing the one from App
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
];

// prevents leftover memory
afterEach(cleanup);

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {
    // baseline test
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
    describe('emoji is visible', () => {
        it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
      
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        });
    })  
});


