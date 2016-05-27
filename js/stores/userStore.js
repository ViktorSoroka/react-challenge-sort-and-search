import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import EventEmitter from 'events';
import AppAPI from '../AppAPI';

let _users = [];
let _activeSearchInput = '';
let _activeUser = {};
let _sort = {
    currentSort: {},
    types: {
        name: {field: 'name', order: false, active: false},
        age: {field: 'age', order: false, active: false}
    }
};

const UserStore = Object.assign(new EventEmitter, {
    setCurrentSort(name) {
        _sort.currentSort.active = false;
        _sort.currentSort = _sort.types[name];
        _sort.currentSort.active = true;
        _sort.currentSort.order = !_sort.currentSort.order;
    },

    getSortData() {
        return _sort;
    },

    getActiveUser() {
        return _activeUser;
    },

    setActiveUser(user) {
        _activeUser = user;
    },

    addChangeListener(callback) {
        this.on(ActionTypes.CHANGE, callback);
    },

    getSearchValue() {
        return _activeSearchInput;
    },

    setSearchValue(value) {
        _activeSearchInput = value;
    },

    removeChangeListener(callback) {
        this.removeListener(ActionTypes.CHANGE, callback);
    },

    emitChange() {
        this.emit(ActionTypes.CHANGE);
    },

    getAllUsers() {
        return _users;
    }

});

Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.USERS_FETCH:
            // initialization goes here - to add some loading image
            break;
        case ActionTypes.USERS_INFO_RECIEVE_BEFORE:
            // error handling goes here
            break;
        case ActionTypes.USERS_INFO_RECIEVE_ERROR:
            // error handling goes here
            break;
        case ActionTypes.USERS_INFO_RECIEVE:
            _users = _users.concat(action.data);
            UserStore.setActiveUser(_users[0]);
            UserStore.emitChange();
            break;
        case ActionTypes.SET_ACTIVE_SORT:
            UserStore.setCurrentSort(action.newSortFieldName);
            UserStore.emitChange();
            break;
        case ActionTypes.SET_USER_INPUT:
            UserStore.setSearchValue(action.newSearchValue);
            UserStore.emitChange();
            break;
        case ActionTypes.SET_ACTIVE_USER:
            UserStore.setActiveUser(action.newCurrentUser);
            UserStore.emitChange();
            break;
    }
});

export default UserStore;