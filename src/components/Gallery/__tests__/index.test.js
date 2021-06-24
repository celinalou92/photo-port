import React from 'react';
// functions from react testing library 
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import the component we are testing
import Gallery from '..';

// insert a mock prop instead of importing the one from App
const portrait = { name: "portraits", description: "Portraits of people in my life" };

// prevents leftover memory 
afterEach(cleanup)

describe('Gallery is rendering', () => {
  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });
  //this will still be able to see the images from the PhotoList child element
  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  });
//   making sure the title of h1 is Portraits
  it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  })
})