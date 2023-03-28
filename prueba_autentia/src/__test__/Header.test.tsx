import { render, screen } from '@testing-library/react'
import HomeMenu from '../components/HomeMenu/HomeMenu'
import * as ReactDOM from 'react-dom';
import React from 'react'
import Header from '../components/Header/Header';

test("render Header component test", () =>  {
    const component = render(<Header/>);
    expect(component.container).toHaveTextContent("Friends");
})