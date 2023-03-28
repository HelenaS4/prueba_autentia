import FormSignIn from '../components/SignForm/FormSignIn'
import * as ReactDOM from 'react-dom';
import React from 'react'
import { render, screen } from '@testing-library/react'

test('render FormSignIn component test', () => {
    const component = render(<FormSignIn/>);
    expect(component.container).toHaveTextContent("Login");
})