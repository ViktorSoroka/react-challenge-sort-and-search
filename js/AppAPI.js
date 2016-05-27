const ServerAPI = {
    receiveData() {
        return fetch('./data.json')
            .then(function (response) {
                return response.json();
            })
    }
};

export default ServerAPI;