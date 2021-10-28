const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

import TokenUtilities from './token';

export default {
    makeRequest: async function(path, method, data) {
        const token = TokenUtilities.getToken();
        const defaultHeaders = {
            'Content-Type': 'application/json'
        }
        if (token) {
            defaultHeaders['authorization'] = `Bearer ${token}`;
        }
        const options = {
            method,
            headers: defaultHeaders
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        console.log(BASE_URL + path);
        console.log(options);
        const response = await fetch(BASE_URL + path, options);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
}