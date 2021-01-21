import React from 'react';
import { render, screen } from '@testing-library/react';
import SmallForm from '../../../components/smallForm/SmallForm';

test('has the correct welcome text', () => {
    render(<SmallForm firstName="sai" lastName="prakash" />)
    expect(screen.getByRole('heading')).toHaveTextContent('Hello sai')
})
test('has correct input values', () => {
    render(<SmallForm firstName="sai" lastName="prakash" />)
    expect(screen.getByRole('form')).toHaveFormValues({
        firstName: 'sai',
        lastName: 'prakash',
    })
})