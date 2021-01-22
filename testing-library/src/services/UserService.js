import axios from 'axios';

export const UserService = {
    getUsersFromApi,
}

function getUsersFromApi() {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data)
}