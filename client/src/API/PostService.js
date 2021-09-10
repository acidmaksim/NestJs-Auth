import axios from "axios";

export default class CurrentUserService {
    static async getAll(limit = 10, page = 1) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            // const response = await axios.get('http://localhost:3000/authentication/register', {
            // const response = await axios.get('http://localhost:3000/cuerrent-users', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}