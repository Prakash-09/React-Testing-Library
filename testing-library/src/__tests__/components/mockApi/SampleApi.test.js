import React from 'react';
import SampleApi from '../../../components/mockApi/SampleApi';
import { render } from '@testing-library/react';
import { UserService } from '../../../services/UserService';

jest.mock('../../../services/UserService')

beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => { })
})

test('Rendering api data', async () => {
    UserService.getUsersFromApi.mockResolvedValueOnce([{ name: 'xyz', email: 'xyz@gmail.com' }])
    render(<SampleApi />)
})

test('Rendering api data using spyOn', async () =>{
    jest.spyOn(UserService, 'getUsersFromApi').mockImplementation(() => {
        return Promise.resolve([{ name: 'wxyz', email: 'wxyz@gmail.com' }])
    });
    render(<SampleApi />)
    jest.clearAllMocks()
})