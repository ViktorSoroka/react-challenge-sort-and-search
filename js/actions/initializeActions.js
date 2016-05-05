import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import AppAPI from '../AppAPI';

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                users: AppAPI.receiveData()
            }
        });
    }
};

export default InitializeActions;