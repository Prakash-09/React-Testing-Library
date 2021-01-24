import React from 'react';
import { render, fireEvent  } from '@testing-library/react';
import TextField from '../../../components/onChange/TextField';

test('renders input element', () => {
    const { container } = render(<TextField />)
    const input = container.firstChild
    expect(input).toHaveValue('')
})

test('change values via the fireEvent.change method', () => {
    const { container } = render(<TextField />)
    const input = container.firstChild
    fireEvent.change(input, { target: { value: 'some value' }})
    expect(input.value).toBe('some value')
})