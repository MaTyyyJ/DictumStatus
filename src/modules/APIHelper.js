var helpers = {
    fetchFood: function(category) {
        var url = 'https://jsonplaceholder.typicode.com/posts';

        return fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                return json
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }
}

module.exports = helpers;