import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

const UserActions = {
    setActiveUser(index) {
        Dispatcher.dispatch({
            actionType: ActionTypes.SET_ACTIVE_USER,
            newCurrentUser: index
        });
    },
    setSearchInput(input) {
        Dispatcher.dispatch({
            actionType: ActionTypes.SET_USER_INPUT,
            newSearchValue: input
        });
    },
    setCurrentSort(sortFieldName) {
        Dispatcher.dispatch({
            actionType: ActionTypes.SET_ACTIVE_SORT,
            newSortFieldName: sortFieldName
        });
    }
};

export default UserActions;