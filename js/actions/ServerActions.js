import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/ActionTypes';
import AppAPI from '../AppAPI';

const ServerActionCreators = {
    getUsersData: function () {
        // handle loading
        AppDispatcher.dispatch({
            actionType: AppConstants.USERS_INFO_RECIEVE_BEFORE
        });

        AppAPI.receiveData()
            .then(function (data) {
                // handle fetch success
                AppDispatcher.dispatch({
                    actionType: AppConstants.USERS_INFO_RECIEVE,
                    data: data
                });
            })
            .catch(function (errMsg) {
                // handle fetch error
                AppDispatcher.dispatch({
                    actionType: AppConstants.USERS_INFO_RECIEVE_ERROR,
                    data: errMsg
                });
            });
    }
};

export default ServerActionCreators;