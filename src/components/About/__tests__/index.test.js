import React from "react";

// importing the React testing library
import { render, cleanup } from '@testing-library/react';

// import jest
import '@testing-library/jest-dom/extend-expect';

// import component you want to test 'About' in this case
import About from "..";

// clears memory afer every test
afterEach(cleanup);

describe('About component', () => {
    // renders About test

    // first test
    it('renders', () => {
        render(<About />);
    });
    // second test
    it('matches snapshot DOM node structure',()=> {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})