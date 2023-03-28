import { render, screen } from '@testing-library/react'
import HomeMenu from '../components/HomeMenu/HomeMenu'
import * as ReactDOM from 'react-dom';
import React from 'react'

test('render HomeMenu component test', () => {
    const component = render(<HomeMenu/>)
    expect(component.container).toHaveTextContent('Home')
})