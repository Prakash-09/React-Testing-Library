import React from 'react';
import SampleForm from '../../../components/sampleForm/SampleForm';
import { render, screen } from '@testing-library/react';

test('Renders without error', () => {
    render(<SampleForm />)
    expect(screen.getByText('First Name')).toBeInTheDocument()
})

describe('Renders input fields', () => {

    beforeAll(() => {
        render(<SampleForm />)
    })
    
    test('Renders the firstName input field', () => {
        const input = document.querySelector(`input[name="firstName"]`)
        expect(input).toHaveValue('')
    })
    // test('Renders the lastName input field', () => {

    // })
    // test('Renders the phNumber input field', () => {

    // })
    // test('Renders the dob input field', () => {

    // })
    // test('Renders the male input field', () => {

    // })
    // test('Renders the female input field', () => {

    // })
    // test('Renders the interested input field', () => {

    // })
})