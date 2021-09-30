TOKEN_KEY = 'user-token';

export default {
    grabToken: function() {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken: function(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken: function() {
        localStorage.removeItem(TOKEN_KEY);
    }
}