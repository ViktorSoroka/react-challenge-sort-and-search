import ServerActionCreator from './actions/ServerActionCreator';

const ServerAPI = {
    receiveData() {
        fetch('./data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                ServerActionCreator.receiveData(data);
            })
            .catch(ServerActionCreator.receiveAPIError);
    }
};

export default ServerAPI;