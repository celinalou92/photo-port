import React from 'react';
// functions from react testing library
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import the component we are testing
import Nav from '..';

// prevents leftover memory
afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
    describe('emoji is visible', () => {
        it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
      
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        });
    })  
});


