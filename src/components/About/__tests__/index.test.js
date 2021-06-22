import React from 'react';
// functions from react testing library
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import the component we are testing
import About from '..';

// prevents leftover memory
afterEach(cleanup);

describe('About component', () => {
    // verify the component is rerndering
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About snapshot
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})