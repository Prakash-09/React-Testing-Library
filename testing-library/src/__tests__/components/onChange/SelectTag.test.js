import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SelectTag from '../../../components/onChange/SelectTag';

test('Renders the select tag', () => {
    const { container } = render(<SelectTag />)
    const input = container.firstChild
    expect(input).toHaveValue('')
})

test('change values of select tag via the fireEvent.change method', () => {
    const { container } = render(<SelectTag />)
    const select = container.firstChild
    const option1 = container.getElementsByTagName('option').item(0)
    const option2 = container.getElementsByTagName('option').item(1)
    fireEvent.change( select, { target: { value: 'Sai' } } )
    expect(option1.selected).toBe(false)
    expect(option2.selected).toBe(true)
})