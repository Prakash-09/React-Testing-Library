import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckBox from '../../../components/onChange/CheckBox';

test('change values via the fireEvent.click method', () => {
    const { container } = render(<CheckBox />)
    const checkbox = container.firstChild
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
})