import React from 'react';
// functions from react testing library 
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import the component we are testing
import PhotoList from '..';

// prevents leftover memory 
afterEach(cleanup)

describe('PhotoList is rendering', () => {
    // make sure it renders
    it('renders', () => {
        render(<PhotoList/>);
    })

    // make sure what is rendered matches the expected snapshot
    it('matched snapshot', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});