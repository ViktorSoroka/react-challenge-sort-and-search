import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/ActionTypes';

const ServerActionCreators = {
    receiveData: function (data) {
        AppDispatcher.dispatch({
            actionType: AppConstants.RECEIVE_DATA,
            data: data
        });
    },
    receiveAPIError: function (err) {
        AppDispatcher.dispatch({
            actionType: AppConstants.RECEIVE_API_ERROR,
            err: err
        });
    }
};

export default ServerActionCreators;